import React from 'react';
import { Row } from 'antd'
import Order from '../Order/Order'
import IndexMenu from '../Menu/IndexMenu'
import Header from '../Header/Header'

const OrderSection = () => {
    return ( 
          <Row className= 'content'>
            <Header />
            <IndexMenu />
            <Order />
          </Row>      
     );
  }
   
export default OrderSection;