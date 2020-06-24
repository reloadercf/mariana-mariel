import React from 'react';
import { Col } from 'antd';
import btnDesayuno from '../../Assets/btnDesayuno.png'
import btnComida from '../../Assets/btnComida.png'
import CardMenu from './CardMenu';


const IndexMenu = () => {
    return ( 
        <Col className='order' size='large' span={14}>
            <div className="buttons d-flex justify-content-around m-3">
                <input type="image" name="desayuno" src={btnDesayuno} alt="meseros"/>
                <input type="image" name="comida" src={btnComida} alt="cocina"/>
            </div>
            <div className='d-flex row'>
                <CardMenu />
                <CardMenu />
                <CardMenu />
                <CardMenu />
                <CardMenu />
                <CardMenu />
                <CardMenu />
            </div>
            
        </Col>
     );
}
 
export default IndexMenu;