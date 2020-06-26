import React from 'react'
import '../Button/Button.scss'
import btnRosa from '../../Assets/btnMenu.png'
import btnVerde from '../../Assets/btnHeader.png'
import btnEnter from '../../Assets/btnEnter.png'

const Button = ({ value, pink = false, green = false, enter= false }) => {
    let src = btnRosa;
    if (pink === true) {
        src = btnRosa
    }else if(green) {
        src = btnVerde
    }else if (enter){
        src = btnEnter
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