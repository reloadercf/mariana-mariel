import React from 'react';
import btnOrdenar from '../../Assets/btnOrdenar.png'

const ClosingOrder = () => {
    return ( 
        <div>
            <div className=''>
                <p>Total: $20</p>
                <input type="image" name="btnOrdenar" src={btnOrdenar} alt="Ordenar"/>
            </div>
            <div>
                <hr/>
                <label htmlFor='mesero'>Te atendió: </label>
                <select className="col-8 m-1 sm" name='mesero' id="exampleFormControlSelect1">
	                <option>Mesero 1</option>
                    <option>Mesero 2</option>
                    <option>Mesero 3</option>
                </select>
                <input type='date' className='col m-1 sm' />
            </div>
        </div>
     );
}
 
export default ClosingOrder;