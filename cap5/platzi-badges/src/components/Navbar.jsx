import React from "react";
import logo from '../images/logo.webp';
import "./styles/Navbar.css";
import { Link } from 'react-router-dom';

class Navbar extends React.Component{
    render(){
        return <div className="Navbar">
            <div className="container-fluid">
                <Link to="/" className="Navbar__brand">
                    <img className="Navbar__brand-logo" src={logo} width="35px" alt="" />
                    <span className="font-weight-light">Platzi</span>
                    <span className="font-weight-bold">Conf</span>
                </Link>
            </div>
        </div>
    }
}

export default Navbar