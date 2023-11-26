import './index.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import CreatePost from './pages/CreatePost';
import Viewpost from "./pages/Viewpost";

function App() {
  return (
    <div>
      <Router>
          <Link to="/">Home</Link>
          <Link to="/createpost">Create A Post</Link>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/createpost" element={<CreatePost />} />
          <Route path="/post/:id" element={<Viewpost />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
