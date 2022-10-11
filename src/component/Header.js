import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='navbar-container'>
            <NavLink className='navlink' to='/home'>Home</NavLink>
            <NavLink className='navlink' to='/orders'>Orders</NavLink>
            <NavLink className='navlink' to='/about'>About</NavLink>
        </div>
    );
};

export default Header;