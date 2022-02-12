import React from "react";
import { SocialNetwork } from "components/Footer/SocialNerwork";
import socialNetworks from "assets/apis/socialNetworks.json";
import "./styles.scss";

export function ListSocialNetwork(){
    return(
        <nav>
            <ul className="listSocialNetwork">
                <li className="listSocialNetwork__li">
                    {
                        socialNetworks.map( socialNetwork => {
                            return <SocialNetwork key={socialNetwork.name} socialNetwork={socialNetwork}/>
                        })
                    }
                </li>
            </ul>
        </nav>
    )
}