import React from "react";
import Project from "./Project";
import { Element } from "react-scroll";
import projects from "assets/apis/projects.json";
import "./styles.scss";

export function Projects(){
    return(
        <Element name="projects" className="projects">
            <div className="projects__resize">
                <div className="projects__title">
                    <p className="projects__p">Proyectos</p>
                </div>
                <div className="projects__list">
                    {
                        projects.map( project => {
                            return <Project key={project.title} project={project}/>
                        })
                    }
                </div>
            </div>
        </Element>
    )
}