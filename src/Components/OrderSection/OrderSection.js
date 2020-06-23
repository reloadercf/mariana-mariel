import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Order from '../Order/Order'
import IndexMenu from '../Menu/IndexMenu'
import Header from '../header/index'

const OrderSection = () => {
    return ( 
          <div className= 'content'>
            <Header />
            <IndexMenu />
            <Order />
          </div>      
     );
  }
   
export default OrderSection;