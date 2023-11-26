import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate  } from 'react-router-dom';

function Home() {
  const [ListOfPosts, setListOfPosts] = useState([]);
  let navigate  = useNavigate ();

  useEffect(() => {
    axios.get('http://localhost:3001/posts').then((response) => {
      setListOfPosts(response.data);
    });
  }, []);

  return (
    <div className="container md:grid md:grid-cols-4">
      {ListOfPosts.map((post) => (
        <div key={post.id}>
          <div
            onClick={() => {
                navigate (`/post/${post.id}`);
            }}
          >
            <div>{post.title}</div>
            <div>{post.PostText}</div>
            <div>{post.username}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home;
