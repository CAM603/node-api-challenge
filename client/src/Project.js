import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Project = (props) => {
    const [project, setProject] = useState({})
    const {id} = useParams()

    useEffect(() => {
        axios.get(`http://localhost:9000/api/projects/${id}`)
            .then(res => {
                setProject(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])
    console.log(project)
    return (
        <div>
            <h1>Project: {project.name}</h1>
            <h2>Description: {project.description}</h2>
            <h3>Status: {project.completed ? "Complete" : "Incomplete"}</h3>
            <hr/>
            <h3>ACTIONS</h3>
            {!project.actions ? '' : project.actions.map(action => (
                <div 
                key={action.id} 
                style={{textAlign: 'left', display: 'flex', justifyContent: 'center'}}>
                    <h3>{action.id}: {action.description}</h3>
                </div>
            ))}
        </div>
    )
}

export default Project;