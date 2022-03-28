import React from "react";
import { NavLink } from "react-router-dom";
import logo from '../Images/logo.jpeg'
import '../Css/ListStyle.css';

const List=()=>{
return(
    <>
    <header className="listClass">
        <div className="container container-flex">
            <div className="logoContainer">
                <img src={logo} alt="logo" className="logo"/>
            </div>
            <div>
                <h2 className="header-title">MAARS INSPECTORATE AND CONSULTANCY SERVICES</h2>
            </div>
            <nav>
                <div className="list">
                    <NavLink exact to="/" className={({ isActive }) => (isActive ? 'listItem' : 'listItemNotActive')}>Home</NavLink>
                    <NavLink exact to="/about" className={({ isActive }) => (isActive ? 'listItem' : 'listItemNotActive')}>About Us</NavLink>
                    <NavLink exact to="/services" className={({ isActive }) => (isActive ? 'listItem' : 'listItemNotActive')}>Services</NavLink>
                    <NavLink exact to="/contact" className={({ isActive }) => (isActive ? 'listItem' : 'listItemNotActive')}>Contact Us</NavLink>
                </div>
            </nav>
        </div>
    </header>
    </>
)
}

export default List;