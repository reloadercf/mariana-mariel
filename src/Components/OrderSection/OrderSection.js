import React, {useState} from 'react';
import { Row } from 'antd'
import Order from '../Order/Order'
import IndexMenu from '../Menu/IndexMenu'
import Header from '../Header/Header'

const OrderSection = () => {
  const [addItem, setAddItem] = useState([])
  console.log(addItem)
  
  return ( 
    <Row className= 'content' justify='space-around'>
      <Header />
      <IndexMenu addItem={addItem} setAddItem={setAddItem} />
      <Order addItem={addItem} />
    </Row>      
  );
  }
   
export default OrderSection;