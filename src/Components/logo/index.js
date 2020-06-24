import React from 'react';
import { Link } from 'react-router-dom';
import logoSmall from '../../Assets/logoSmall.png'

const Logo = () => (
    <Link to = '/'>
        <img src = {logoSmall} ></img>
    </Link>
    
)

export default Logo;