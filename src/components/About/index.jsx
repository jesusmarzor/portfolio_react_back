import React from "react";
import { Element } from "react-scroll";
import cv from "assets/CV/CV-Jesus-Martin.pdf";
import Button from "components/Features/Button";
import useMenu from "hooks/useMenu";
import "./styles.scss";

export function About(){
    const actionMenu = useMenu();
    return (
        <Element name="about" className="about" onClick={actionMenu}>
            <div className="about__title">
                <p className="about__p">Sobre mí</p>
            </div>
            <div className="about__content content">
                <p className="content__p">Soy <strong>Jesús Martín Zorrilla</strong>, estudiante de <strong>Ingeniería Informática</strong>.</p>
                <p className="content__p">Llevo estudiando desarrollo web más de 1 año. Me encantaría encontrar una empresa donde me sienta cómodo trabajando ya que es una de mis aficiones preferidas.</p>
                <p className="content__p">Soy una persona amable, responsable, implicada y me encanta trabajar en equipo.</p>
                <div className="content__buttons">
                    <Button label="a" to="https://github.com/jesusmarzor">Proyectos</Button>
                    <Button label="download" download="CV-Jesus-Martin" to={cv} inverse={true} >Descargar CV</Button>
                </div>
            </div>
        </Element>
    )
}