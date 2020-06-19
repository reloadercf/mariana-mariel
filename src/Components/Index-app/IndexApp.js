import React from 'react'
import './IndexApp.css'; 
import logo from '../../Assets/logoPrim.png'
import meseros from '../../Assets/btnEnter.png'

function IndexApp () {
    return (
        <div className="index">
            <div className="image">
            <img src={logo} alt="prueba" className="logo"/>
            </div>
            <div className="buttons">
                <input type="image" name="meseros" src={meseros} alt="meseros"/>
                <input type="image" name="cocina" src={meseros} alt="cocina"/>
            </div>

        </div>
      );
}

export default IndexApp
