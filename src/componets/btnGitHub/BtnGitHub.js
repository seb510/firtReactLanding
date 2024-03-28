import React from 'react';
import './style.css'
import gitHubIcon from "./gitHub-black.svg";
const BtnGitHub = ({...props}) => {
    return (
        <a href={props.link} className="btn-outline" target="_blank" rel="noreferrer">
            <img src={gitHubIcon} alt="Github"/>
            {props.title}
        </a>
    );
};

export default BtnGitHub;