import React from 'react';
import './Header.css'
import logo from '../../image/logo.svg'

const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt="" />
            <div>
                <a href='#'>Abou</a>
                <a href='#'>Price</a>
                <a href='#'>Login/Register</a>
            </div>
        </div>
    );
};

export default Header;