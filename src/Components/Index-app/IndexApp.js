import React from 'react'
import { Link } from 'react-router-dom';
import './IndexApp.scss'; 
import logo from '../../Assets/logoPrim.png'
import btn from '../../Assets/btnMenu.png'

function IndexApp () {
    return (
        <div className="container">
            <div >
                <img src={logo} alt="logo" className="logo"/> 
            </div>       
            <nav>
                <ul>
                    <Link to ='/orden'>
                        <li><img src={btn} /></li>
                    </Link>
                    
                    <li><img src={btn} /></li>
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
