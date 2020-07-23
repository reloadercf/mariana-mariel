import React, {useState} from 'react';
import { Row } from 'antd'
import Order from '../Order/Order'
import IndexMenu from '../Menu/IndexMenu'
import Header from '../Header/Header';

const OrderSection = () => {
  let [carrito,setCarrito]=useState({
    nombreCliente:"",
    total:0,
    item:[],
    status:false,
    pay:false,
    mesa:"",
    orden: (""+Math.random()).substring(2,7),
    mesero: ""
  })

  function addProducto(producto){
    //saber si existe
    //en caso de existir sumar uno
    //si no existe crear uno nuevo
    setCarrito({...carrito, item:[...carrito.item,producto]})
  }

  const deleteProducto = (id) => {
    setCarrito({...carrito, item: carrito.item.filter(item => item.id !== id)})
  }
  
  return ( 
    <Row className= 'content' justify='space-around'>
      <Header />
      <IndexMenu carrito={carrito} addProducto={addProducto} setCarrito={setCarrito} />
      <Order carrito={carrito} setCarrito={setCarrito} deleteProducto={deleteProducto} />
    </Row>      
  );
  }
   
export default OrderSection;