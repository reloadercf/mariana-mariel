import React from 'react'
import './Order.scss'; 
import { Col } from 'antd';
import OrderInformation from './OrderInformation'
import OrderContent from './OrderContent'
import ClosingOrder from './ClosingOrder'

const Order = () => {
 return ( 
        <Col className='order' size='large' span={9} >
            <OrderInformation />
            <OrderContent />
            <ClosingOrder />
        </Col>
     );
}
 
export default Order;