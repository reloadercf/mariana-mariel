import React from 'react'
import './Order.scss'; 
import { Col } from 'antd';
import OrderInformation from './OrderInformation'
import OrderContent from './OrderContent'
import ClosingOrder from './ClosingOrder'

const Order = ({carrito, deleteProducto}) => {

 return ( 
        <Col className='order' size='large' span={9} >
            <OrderInformation carrito={carrito} />
            <OrderContent carrito={carrito} deleteProducto={deleteProducto} />
            <ClosingOrder carrito={carrito}/>
        </Col>
     );
}
 
export default Order;