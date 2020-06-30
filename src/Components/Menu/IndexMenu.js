import React from 'react';
import { Col, Row } from 'antd';
import Button from '../Button/Button';
import CardMenu from './CardMenu';
import './IndexMenu.css'
import menu from '../../Assets/menu.json'


const IndexMenu = () => {
    const menuItems = menu.desayuno.map(item => {
        return (
            <CardMenu key={item.id} item={item}/>
        )
    })
    
    return ( 
        
        <Col className='order' size='large' span={14}>
            <div className="buttons d-flex justify-content-around m-3">
                <Button pink />
                <Button pink />
            </div>
            <Row >
                {menuItems}
            </Row>
            
        </Col>
     );
}
 
export default IndexMenu;