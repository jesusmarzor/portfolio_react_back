import React from "react";
import armazon from "assets/img/armazon.webp";
import toDoList from "assets/img/to-do-list.webp";
import haleyDust from "assets/img/haley-dust.webp";
import Button from "components/Features/Button";
import "./styles.scss";

function Project({project}){
    const img = (project.title === "To do list") ? toDoList : (project.title === "Haley Dust") ? haleyDust : armazon;
    return(
        <div className="project">
            <img className="project__img" src={img} alt={project.title} loading="lazy" width="352" />
            <h2 className="project__title">{project.title}</h2>
            <div className="project__description">
                <p className="project__p">{project.description}</p>
            </div>
            <div className="project__buttons">
                <Button label="a" to={project.url__github}>Ver código</Button>
                <Button label="a" to={project.url__demo} inverse={true}>Ver página</Button>
            </div>
        </div>
    )
}

export default React.memo(Project);