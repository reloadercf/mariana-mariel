import React from 'react';
import { Row } from 'antd'
import Order from '../Order/Order'
import IndexMenu from '../Menu/IndexMenu'
import Header from '../Header/Header'

const OrderSection = () => {
  
    return ( 
          <Row className= 'content' justify='space-around'>
            <Header />
            <IndexMenu />
            <Order />
          </Row>      
     );
  }
   
export default OrderSection;