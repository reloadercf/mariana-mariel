import React from 'react'
import './Order.css'; 
import OrderInformation from './OrderInformation'
import OrderContent from './OrderContent'
import ClosingOrder from './ClosingOrder'

const Order = () => {
 return ( 
        <div className='col-md-4 float-right bg-light border border-info rounded-lg'>
            <OrderInformation />
            <OrderContent />
            <ClosingOrder />
        </div>
     );
}
 
export default Order;