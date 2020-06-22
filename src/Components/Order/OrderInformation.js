import React from 'react';

const OrderInformation = () => {
    return ( 
        <div className='row m-2'>
            <select className="form-control-sm col-md m-1" id="exampleFormControlSelect1">
                <option>Mesa 1</option>
                <option>Mesa 2</option>
                <option>Mesa 3</option>
                <option>Mesa 4</option>
                <option>Mesa 5</option>
            </select>
            <input type='text' placeholder='Orden' className='col-md m-1 sm' />
            <input type='text' placeholder='Nombre' className='col-md-12 m-1 sm' />
            <hr className='m-2' />
        </div>
     );
}
 
export default OrderInformation;