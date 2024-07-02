import React, { Component } from 'react';
import {Link} from 'react-router-dom'

const Header = () =>{
    <header>
        <nav>
            <ul>
                <li><link to="/">Home</link></li>
                <li><link to="/login">login</link></li>
                <li><link to="/register">register</link></li>
            </ul>
        </nav>
    </header>
}

export default Header;