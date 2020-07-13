import React, {useState} from 'react';
import { Row } from 'antd'
import Order from '../Order/Order'
import IndexMenu from '../Menu/IndexMenu'
import Header from '../Header/Header'

const OrderSection = () => {
  let [carrito,setCarrito]=useState({
    nombreCliente:"",
    total:0,
    item:[],
    status:false,
    pay:false,
    mesa:"",
    orden: ""
  })

  const addDatosCliente = (mesa, orden, cliente) => {
    setCarrito({
      nombreCliente: cliente,
      mesa: mesa,
      orden: orden
    })

  }

  function addProducto(producto){
    console.log(carrito.item)
    console.log(producto)
    if(carrito.item.includes(producto)) {
      console.log('ya existe ' + producto.item);
      setCarrito({item:[...carrito.item, producto.quantity ++]});
    } else setCarrito({...carrito, item:[...carrito.item,producto]})
    //aqui tienes que validar si existe, 
      //si es que SI existe entonces sumale a cantidad 1
      //en caso de que no exista setCarrito({...carrito, item:[...carrito.item,producto]})
  }
  
  return ( 
    <Row className= 'content' justify='space-around'>
      <Header />
      <IndexMenu carrito={carrito} addProducto={addProducto} />
      <Order carrito={carrito} addDatosCliente={addDatosCliente} />
    </Row>      
  );
  }
   
export default OrderSection;