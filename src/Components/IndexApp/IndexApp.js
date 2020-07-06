import React from 'react'
import { Link } from 'react-router-dom';
import '../IndexApp/IndexApp.scss'; 
import Logo from '../Logo/Logo';
import Button from '../Button/Button';



function IndexApp () {
    return (
        <div className="container">
            <div className = 'logo'>
                <Logo big/> 
            </div>       
            <nav>
                <ul>
                    <Link to ='/orden'>
                        <li><Button value = 'Orden' pink /></li>
                    </Link>
                    <Link to = '/cocina'>
                        <li><Button value = 'Cocina'/></li>
                    </Link>
                </ul>
            </nav>
            <div className='auth'>
                <div>Inicia Sesión</div>
                <div>Cierra Sesión</div>
            </div> 
            
        </div>
      );
}

export default IndexApp
