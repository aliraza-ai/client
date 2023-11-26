import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Viewpost() {
  const { id } = useParams();
  const [post, setPost] = useState({}); // Change to a single post object

  useEffect(() => {
    // Remove the colon (:) in the URL and update the route
    axios.get(`http://localhost:3001/posts/viewpost/${id}`).then((response) => {
      setPost(response.data); // Set the post object
    });
  }, [id]); // Include id in the dependency array to fetch data when it changes

  return (
    <div>
      <div className="container md:grid md:grid-cols-4">
        <div>
          <div>{post.title}</div>
          <div>{post.PostText}</div>
          <div>{post.username}</div>
        </div>
      </div>
    </div>
  );
}

export default Viewpost;
