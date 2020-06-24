import React from 'react'
import { Link } from 'react-router-dom';
import './IndexApp.scss'; 
import logo from '../../Assets/logoPrim.png'
import btnVerde from '../../Assets/btnOrden.png'

import Button from '../Button/Button';



function IndexApp () {
    return (
        <div className="container">
            <div >
                <img src={logo} alt="logo" className="logo"/> 
            </div>       
            <nav>
                <ul>
                    <Link to ='/orden'>
                        <li><Button value ='orden' green pink /></li>
                    </Link>
                    
                    <li><Button value ='cocina'/></li>
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
