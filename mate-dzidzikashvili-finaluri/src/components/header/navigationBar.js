import React from 'react';
import './header.css'
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <div className="header">
            <Link className='header-link' to='/'>HOME</Link>
            <Link className='header-link' to='/products'>PRODUCTS</Link>
            <Link className='header-link' to='/about'>ABOUT</Link>
            <Link className='header-link' to='/log-in'>LOG IN</Link>
        </div>
    )
}

export default Header;
