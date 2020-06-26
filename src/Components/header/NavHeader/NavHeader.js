import React from 'react';
import '../NavHeader/NavHeader.scss'
import Button from '../../Button/Button';

const NavHeader = () => (
    <div className='navHeader'>
        <Button value ='Orden' green />
        <Button value ='Cocina' green />
        <Button id='historial' value ='Historial' green />
    </div>
);

export default NavHeader;