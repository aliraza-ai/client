import './index.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import CreatePost from './pages/CreatePost';
import Viewpost from "./pages/Viewpost";
import Register from "./pages/Register";
import Login from "./pages/Login";

function App() 
{
  return (
    <div>
      <Router>
          <Link to="/">Home</Link>
          <Link to="/createpost">Create A Post</Link>
          <Link to="/register">Register Now</Link>
          <Link to="/Login">Login</Link>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/createpost" element={<CreatePost />} />
          <Route path="/post/:id" element={<Viewpost />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
