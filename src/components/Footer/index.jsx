import React from "react";
import { ListSocialNetwork } from "components/Footer/ListSocialNetwork";
import "./styles.scss";

export function Footer(){
    return(
        <footer className="footer">
            <ListSocialNetwork/>
            <div className="footer__copy">
            <p className="footer__p">Página realizada por Jesús Martín</p>
            </div>
        </footer>
    )
}