import React from 'react';
import {useParams} from "react-router-dom"
import {projects} from "../helpers/projectsList";
import BtnGitHub from "../componets/btnGitHub/BtnGitHub";

const Project = () => {
    const {id} = useParams();
    const project = projects[id];

    return (
        <main className="section">
            <div className="container">
                <div className="project-details">
                    <h1 className="title-1">{project.title}</h1>
                    <img src={project.imgBig} alt={project.title} className="project-details__cover"/>
                    <div className="project-details__desc">
                        <p>{project.skills}</p>
                    </div>
                    {project.gitHubLink && (
                        <BtnGitHub link={project.gitHubLink} title="GitHub Repo"/>
                    )}
                </div>
            </div>
        </main>
    );
};

export default Project;