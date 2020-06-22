import React from 'react';
import Logo from '../logo/index';
import NavHeader from '../navHeader/index';
import './header.scss'

const Header = () => (
    <div className = 'containerHeader'>
        <NavHeader />
        <div>
            <Logo />
        </div>
    </div>
  
)

export default Header;