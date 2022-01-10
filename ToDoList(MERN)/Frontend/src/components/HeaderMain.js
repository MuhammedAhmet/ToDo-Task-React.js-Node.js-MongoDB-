import React from 'react'

import "../Css/Header.css"
import { Link } from 'react-router-dom'

function HeaderMain(param) {
    return (
        <header>
            <div class="topnav">
            <Link to="#">
            <a class="active" >Hi {param.UserName}</a>
            </Link>
            <div class="topnav-right">
                <Link to="/Login">
                    <a>Log Out</a>
                </Link>
            </div>
            </div>
        </header>
    )
}

export default HeaderMain;