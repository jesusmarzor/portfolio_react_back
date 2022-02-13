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
                <p className="content__p">Soy <strong>Jesús Martín Zorrilla</strong>, estudiante de <strong>Ingeniería Informática</strong> y vivo en Madrid.</p>
                <p className="content__p">Llevo estudiando desarrollo web más de 1 año y paso gran parte de mi tiempo libre programando ya que es una de mis aficiones preferidas.</p>
                <p className="content__p">Me considero una persona <strong>amable, responsable, organizada, implicada y me encanta trabajar en equipo</strong>.</p>
                <div className="content__buttons">
                    <Button label="a" to="https://github.com/jesusmarzor">Proyectos</Button>
                    <Button label="download" download="CV-Jesus-Martin" to={cv} inverse={true} >Descargar CV</Button>
                </div>
            </div>
        </Element>
    )
}