import React from "react";
import { Menu } from "components/Header/Menu";
import { Mode } from "components/Header/Mode";
import "./styles.scss";

export function Nav({actionMenu, refNav}){
    return(
        <nav ref={refNav} className="nav" onClick={actionMenu}>
            <Menu/>
            <Mode/>
        </nav>
    )
}