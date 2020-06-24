import React from 'react'
import { Link } from 'react-router-dom'
import btnRosa from '../../Assets/btnMenu.png'
import btnVerde from '../../Assets/btnOrden.png'

const Button = ({ value, pink = false, green = false }) => {
    let src = btnRosa;
    if (pink === true) {
        src = btnRosa
    }else if(green) {
        src = btnVerde
    }
    const style = { 
        backgroundImage: `url(${src})`, 
        backgroundRepeat: 'no-repeat'
     }
    return(
    // <>
    //     <img src = {src} ></img>
    //     <p>{value} </p>
    // </>

    <button style={style}>{value}</button>
    )
}

export default Button