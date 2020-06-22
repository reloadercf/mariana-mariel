import React from 'react';
import btnDesayuno from '../../Assets/btnDesayuno.png'
import btnComida from '../../Assets/btnComida.png'
import CardMenu from './CardMenu';

const IndexMenu = () => {
    return ( 
        <div className='col-md-6 bg-light border border-info rounded-lg'>
            <div className="buttons d-flex justify-content-around m-3">
                <input type="image" name="desayuno" src={btnDesayuno} alt="meseros"/>
                <input type="image" name="comida" src={btnComida} alt="cocina"/>
            </div>
            <div className='d-flex row'>
                <CardMenu />
                <CardMenu />
                <CardMenu />
                <CardMenu />
            </div>
            
        </div>
     );
}
 
export default IndexMenu;