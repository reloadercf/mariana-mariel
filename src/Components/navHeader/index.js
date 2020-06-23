import React from 'react';
import btnOrden from '../../Assets/btnOrden.png';
import btnCocina from '../../Assets/btnCocina.png';
import btnHistorial from '../../Assets/btnHistorial.png';

const NavHeader = () => (
    <div>
        <button><img src = {btnOrden} alt='btnOrden'></img></button>
        <button><img src = {btnCocina} alt='btnCocina'></img></button>
        <button><img src = {btnHistorial} alt='btnHistorial'></img></button>
    </div>
);

export default NavHeader;