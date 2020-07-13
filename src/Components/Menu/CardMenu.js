import React from 'react';
import { Card, Col } from 'antd';
import ModalMenu from './ModalMenu';

const CardMenu = ({item,  carrito, addProducto}) => {
    const { Meta } = Card;
    // console.log(item)
    return ( 
        <Col span={12}>
            <Card className='card' cover={<img alt="example" src={item.imagen}/>}>
                <Meta title={item.item} description={'$ ' + item.precio} />
                {/* <button onClick={()=>addProducto(item)}>Agregar</button> */}
                <ModalMenu item={item}  carrito={carrito} addProducto={addProducto} />
            </Card>
        </Col>
     );
}
 //<ModalMenu optionSelected={item}  carrito={carrito} addProducto={addProducto} />
export default CardMenu;



