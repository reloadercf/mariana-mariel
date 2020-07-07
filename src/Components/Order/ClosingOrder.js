import React from 'react';
import { Input, Select, DatePicker, Divider } from 'antd';
import Button from '../Button/Button';

const ClosingOrder = ({suma}) => {
    console.log(suma())
    const { Option } = Select;

    function handleChange(value) {
      console.log(`selected ${value}`);
    }

    return ( 
        <div>
            <div className='btnOrder'>
                <h4>Total: ${suma()}</h4>
                <Button value ='Ordenar' enter />
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
