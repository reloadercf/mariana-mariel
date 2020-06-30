import React from 'react';
import logoSmall from '../../Assets/logoSmall.png'
import logo from '../../Assets/logoPrim.png'

const Logo = ({ small = false, big = false}) => {
    let src = logo
    if(big){
        src = logo
    }else if(small){
        src = logoSmall
    }
   
    return(
            <img src= {src} alt='logo'></img>
    )
  
}

export default Logo;


