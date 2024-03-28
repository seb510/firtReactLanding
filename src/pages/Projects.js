import React from 'react';
import Project from "../componets/project/Project";
import {projects} from "../helpers/projectsList";

const Projects = () => {
    return (
        <main className="section">
            <div className="container">
                <h2 className="title-1">Projects</h2>
                <ul className="projects">
                    {
                        projects.map((project, index)=> {
                            return <Project title={project.title} image={project.img} key={project.id} index={index}/>
                        })
                    }

                </ul>
            </div>
        </main>
    );
};

export default Projects;