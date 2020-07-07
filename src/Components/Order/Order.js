import React from 'react'
import './Order.scss'; 
import { Col } from 'antd';
import OrderInformation from './OrderInformation'
import OrderContent from './OrderContent'
import ClosingOrder from './ClosingOrder'

const Order = ({addItem}) => {
    
  const suma = () => {
    let costs = addItem.map(item => item.precio);
    let result = costs.reduce((acc, el) => acc + el, 0);
    return result;
  }
  console.log(suma())

 return ( 
        <Col className='order' size='large' span={9} >
            <OrderInformation />
            <OrderContent addItem={addItem} />
            <ClosingOrder suma={suma} />
        </Col>
     );
}
 
export default Order;