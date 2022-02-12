import React from "react";
import { Link } from "react-scroll";
import { Spinner } from "components/Features/Spinner";
import "./styles.scss";

function Button({label, to, inverse = false, download, disabled=false, children}){
    switch(label){
        case "a":
            return <a className={ (inverse) ? "button button--inverse" : "button"} href={to} target="_blank" rel='noreferrer' title={children}>{children}</a>
        case "download":
            return <a className={ (inverse) ? "button button--inverse" : "button"} href={to} rel='noreferrer' download={download} title={children}>{children}</a>
        case "link":
            return <Link to={to} spy={true} smooth={true} offset={3} duration={800} className={ (inverse) ? "button button--inverse" : "button"}>{children}</Link>
        case "input":
            return <input type="submit" className={ (inverse) ? "button button--inverse" : "button"} name="send" value={children} />
        default:
            return <button className={ (inverse) ? "button button--inverse" : "button"} disabled={disabled}>{ (children === "Cargando") ? <Spinner min={true}/> : children}</button>
    }
}

export default React.memo(Button);