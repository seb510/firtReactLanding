import React from 'react';
import {NavLink} from "react-router-dom";
import "./style.css"

const Project = ({...props}) => {
    return (
        <li className="project">
            <NavLink to={`/project/${props.index}`}>
                <img src={props.image} alt="Project img" className="project__img"/>
                <span className="project__title">{props.title}</span>
            </NavLink>
        </li>
    );
};

export default Project;