import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import './style.css'

function Nav() {
    return (
            <nav className='nav'>
                <Link to={''} className='link'>
                    <i>
                        <FontAwesomeIcon icon="house" />
                    </i>
                </Link>
                <Link className='link'>
                    <i>
                        <FontAwesomeIcon icon="user" />
                    </i>
                </Link>
                <Link className='link'>
                    <i>
                        <FontAwesomeIcon icon="calendar-days" />
                    </i>
                </Link>
                <Link className='link'>
                    <i>
                        <FontAwesomeIcon icon="clipboard" />
                    </i>
                </Link>
            </nav>
    );
}

export default Nav;