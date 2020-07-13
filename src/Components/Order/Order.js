import React from 'react'
import './Order.scss'; 
import { Col } from 'antd';
import OrderInformation from './OrderInformation'
import OrderContent from './OrderContent'
import ClosingOrder from './ClosingOrder'

const Order = ({carrito, addDatosCliente}) => {
    
  const suma = () => {
    
    // let costs = 10 //esto esta mal
    let result = 10
    return result;
  }
  

 return ( 
        <Col className='order' size='large' span={9} >
            <OrderInformation addDatosCliente={addDatosCliente} />
            <OrderContent carrito={carrito} />
            <ClosingOrder suma={suma} />
        </Col>
     );
}
 
export default Order;