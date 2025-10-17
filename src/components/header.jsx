import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import MainLogo from '/wuardoDecalBlanco.png'
import Burger from './burgerMenu.js'
import '../pages/shared.css'

class Header extends Component {
    state = { menuOpen: false };

    toggleMenu = () => {
        this.setState({ menuOpen: !this.state.menuOpen });
    };

    render() {
        const { menuOpen } = this.state;
        return (
            <header className="header">
                <nav className="navbar">
                <Link to="/" className="headLogo__a" onClick={this.closeMenu}>
                    <img src={MainLogo} alt="Personal Logo" id="eddLogo__nav" />
                </Link>
                <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
                    <li className="nav__li">
                    <Link to="/" className="nav__a" onClick={this.closeMenu}>Home!</Link>
                    </li>
                    <li className="nav__li">
                    <Link to="/shop" className="nav__a" onClick={this.closeMenu}>Shop!</Link>
                    </li>
                    <li className="nav__li">
                    <Link to="/contact" className="nav__a" onClick={this.closeMenu}>Contact!</Link>
                    </li>
                </ul>
                <div
                    className={`burger ${menuOpen ? 'active' : ''}`}
                    onClick={this.toggleMenu}
                >
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
                </nav>
            </header>
        )
    }
}

export default Header;