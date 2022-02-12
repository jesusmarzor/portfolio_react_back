import React from "react";
import { Form } from "./Form";
import { Element } from "react-scroll";
import "./styles.scss";

export function Contact(){
    return(
        <Element name="contact" className="contact">
            <div className="contact__title">
                <p className="contact__p">Contacto</p>
            </div>
            <Form/>
        </Element>
    )
}