import Button from "components/Features/Button";
import React from "react";
import "./styles.scss";

export function Introduce(){
    return (
        <section className="introduce">
            <h1 className="introduce__h1">Jesús Martín</h1>
            <p className="introduce__p">Desarrollador front-end</p>
            <div className="introduce__button">
                <Button label="link" to="contact">Escríbeme</Button>
            </div>
        </section>
    )
}