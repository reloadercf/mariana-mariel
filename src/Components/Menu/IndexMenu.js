import React from 'react';
import { Col } from 'antd';
import Button from '../Button/Button';
import CardMenu from './CardMenu';
import './IndexMenu.css'


const IndexMenu = () => {
    return ( 
        <Col className='order' size='large' span={14}>
            <div className="buttons d-flex justify-content-around m-3">
                <Button pink />
                <Button pink />
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