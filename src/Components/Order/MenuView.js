import React from 'react';
import { Row } from 'antd';
import IndexMenu from '../Menu/IndexMenu';
import Order from '../Order/Order'
import './Order.css'; 

const MenuView = () => {
    return ( 
        <Row className='MenuView'>
            <IndexMenu />
            <Order />
        </Row>
     );
}
 
export default MenuView;