
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";
import React, { useState, useEffect } from 'react';

import './styles.css';

const Projects =() =>{

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      fetch('https://inkochetkov.github.io/data/projects.json') 
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          setData(data);
          setLoading(false);
        })
        .catch(error => {
          setError(error);
          setLoading(false);
        });
    }, []);
  
    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error.message}</div>;


    const projects = data.filter(item => item.app != null );
  

return (
    <>  
    <Helmet>
        <title>Application mobile by Kochetkov</title>
        <meta name="description" content="Collection mobile application"/>
    </Helmet>
     <div className="main">
        <ul className="grids">
            {projects.map(item => 
            <li className="grids_item">
                <div className="grid">
                    <div className="grid_image">
                       <img src={`https://inkochetkov.github.io${item.app.img}`} alt="img" />
                        <div className="grid_content">  
                            <h2 className="grid_title">{item.name}</h2> 
                            <br/>
                            <p className="grid_text"> Category: {item.category}</p>
                            <p className="grid_text">{item.title}</p> 
                            <NavLink to={`/${item.name}`}   style={{ textDecoration: 'none' }}>                             
                                <button className="btn grid_btn">Read More</button>                      
                            </NavLink>
                        </div> 
                    </div>
                </div>
            </li>)}
        </ul>
        </div>  
       
    </>
    );
}

export default Projects;