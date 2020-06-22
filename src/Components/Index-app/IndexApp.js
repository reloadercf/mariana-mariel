import React from 'react'
import './IndexApp.css'; 
import logo from '../../Assets/logoPrim.png'
import meseros from '../../Assets/btnEnter.png'

function IndexApp () {
    return (
        <div className="container mt-3 d-flex flex-column bg-light border border-info rounded-lg">
            <div className="mainLogo d-flex justify-content-center m-5">
            <img src={logo} alt="logo" className="logo"/>
            </div>
            <div className="buttons d-flex justify-content-around m-3">
                <input type="image" name="meseros" src={meseros} alt="meseros"/>
                <input type="image" name="cocina" src={meseros} alt="cocina"/>
            </div>
        </div>
      );
}

export default IndexApp
