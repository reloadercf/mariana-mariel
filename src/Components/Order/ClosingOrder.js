import React from 'react';
import { Input, Select, DatePicker, Divider } from 'antd';
import Button from '../Button/Button';

const ClosingOrder = ({addProducto, carrito}) => {
    const suma = () => {
        let costs = carrito.item.map(item => item.subtotal);
        let result = costs.reduce((acc, el) => acc + el, 0);
        return result;
      }
    
    const { Option } = Select;

    function handleChange(value) {
      console.log(`selected ${value}`);
    }

    return ( 
        <div>
            <div className='btnOrder'>
                <h4>Total: ${suma()}</h4>
                <Button value ='Ordenar' enter onClick={()=>addProducto(/*id*/)} />
            </div>
            <div>
                <Divider />
                <Input.Group compact>
                    <Select placeholder="Mesero" style={{ width: 175 }} onChange={handleChange}>
                        <Option value="Mesa1">Mesero 1</Option>
                        <Option value="Mesa2">Mesero 2</Option>
                    </Select>
                    <DatePicker style={{ width: '50%' }} />
                </Input.Group>
            </div>
        </div>
     );
}
 
export default ClosingOrder
