import React from 'react';
import { Link } from 'react-router-dom'
import Logo from '../Logo/Logo';
import NavHeader from '../Header/NavHeader/NavHeader';
import './Header.scss'

const Header = () => (
    <div className = 'containerHeader'>
        <NavHeader />
        <div className='containerLogo'> 
            <Link to ='/'>
                <Logo className='logo' small />
            </Link>
        </div>
    </div>
  
)

export default Header;