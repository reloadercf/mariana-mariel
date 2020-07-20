import React from 'react'
import './Order.scss'; 
import { Col } from 'antd';
import OrderInformation from './OrderInformation'
import OrderContent from './OrderContent'
import ClosingOrder from './ClosingOrder'

const Order = ({carrito, setCarrito, deleteProducto}) => {

 return ( 
        <Col className='order' size='large' span={9} >
            <OrderInformation carrito={carrito} setCarrito={setCarrito} />
            <OrderContent carrito={carrito} deleteProducto={deleteProducto} />
            <ClosingOrder carrito={carrito} setCarrito={setCarrito} />
        </Col>
     );
}
 
export default Order;