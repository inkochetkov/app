import { useParams } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";


import './styles.css';


const Project=()=>{

    
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { name } = useParams(); 
    
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
    if (error) return <div>Error: {error.message}</div>;
  
    const project = data.find(obj => {
      return obj.name === name;
    });
  
    if (!project) return <div>Project not found</div>; // Additional check
  

    return (
        <> 
        <Helmet>
            <title>{project.name}</title>
            <meta name="description" content={project.description}/>
        </Helmet>
        <div className="app">
        <div className="main">
        <ul className="grids">
            <li className="grids_item">
            </li> 
            <li className="grids_item">
                <div className="grid">
                <img src={`https://inkochetkov.github.io${project.app.img}`} alt="img" />
                    <div className="grid_content">
                        <br/>
                        <h2 className="grid_title">{project.name}</h2>
                        <br/>
                        <p className="grid_text">Category: {project.app.category}</p>   
                        <p className="grid_text">Title: {project.title}</p>         
                        <p className="grid_text">Description: {project.description}</p>                

                            {project.app.linkAppStore && (
                                <a href={project.app.linkAppStore}   style={{ textDecoration: 'none' }}>                             
                                    <button className="btn grid_btn">App Store</button>                      
                                </a> 
                            )
                             }
                       
                            {project.app.linkRuStore && (
                                <a href={project.app.linkRuStore}   style={{ textDecoration: 'none' }}>                             
                                    <button className="btn grid_btn">RuStore</button>                      
                                </a> 
                            )
                             }
                            {project.app.linkGallery && (
                                <a href={project.app.linkGallery}   style={{ textDecoration: 'none' }}>                             
                                    <button className="btn grid_btn">AppGallery</button>                      
                                </a> 
                            )
                             }
                                                  
                            {project.app.linkNashStore && (
                                <a href={project.app.linkNashStore}   style={{ textDecoration: 'none' }}>                             
                                    <button className="btn grid_btn">NashStore</button>                      
                                </a> 
                            )
                             }
            
                            {project.app.linkGooglePlay && (
                                <a href={project.app.linkGooglePlay}   style={{ textDecoration: 'none' }}>                             
                                    <button className="btn grid_btn">Google Play</button>                      
                                </a> 
                            )
                             }
                        <br/>
                        < a href={`https://inkochetkov.github.io${project.app.linkPrivacyPolicy}`}   style={{ textDecoration: 'none' }}>                             
                                    <button className="btn grid_btn">Privacy Policy</button>                      
                                </a>     
                        <br/>
                            <NavLink to={`/`}   style={{ textDecoration: 'none' }}>                             
                                <button className="btn grid_btn">Back</button>                      
                            </NavLink>   
                         </div>
                </div>
            </li>
            </ul>
            </div>
            </div>
        </>
    );
}
export default Project;