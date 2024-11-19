import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./components/home/Home"; 
import Project from "./components/screen/Project"; 
import Upload from "./components/uploads/Upload"; 
import Edit from "./components/edit/Edit"; 

const App = () => {
  return (
    <Router>
      <div className="app">
        
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/project">Project</Link>
            </li>
            <li>
              <Link to="/upload">Upload</Link>
            </li>
            <li>
              <Link to="/edit">Edit</Link> 
            </li>
          </ul>
        </nav>

        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Project />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/edit" element={<Edit />} /> 
        </Routes>
      </div>
    </Router>
  );
};

export default App;
