import React from "react";
import './styles.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

function Header() {
    return (
        <div>
            <header id="header">
                <i>
                    <FontAwesomeIcon icon="bars" />
                </i>
                <span>Duyen Doan</span>
            </header>
        </div>
    );
}

export default Header;
