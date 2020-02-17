import React, { useState, useEffect } from 'react';
import { Route, Link } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Project from './Project';

function App() {
  const [projects, setProjects] = useState([])

  const fetchProjects = () => {
    axios.get(`http://localhost:9000/api/projects`)
      .then(res => {
        setProjects(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }

  useEffect(() => {
    fetchProjects()
  }, [])

  return (
    <div className="App">
      <Route exact path="/">
        <h1>My Projects</h1>
        {projects.map(project => (
          <div key={project.id}>
            <Link to={`/${project.id}`}>
              <h2>{project.name}</h2>
            </Link>
          </div>
        )
        )}
      </Route>
      <Route exact path="/:id" component={Project}/>
    </div>
  );
}

export default App;
