import React from 'react';
import btnOrdenar from '../../Assets/btnOrdenar.png'
import { Input, Select, DatePicker, Divider } from 'antd';

const ClosingOrder = () => {
    const { Option } = Select;

    function handleChange(value) {
      console.log(`selected ${value}`);
    }

    return ( 
        <div>
            <div className='btnOrder'>
                <h4>Total: $20</h4>
                <input type="image" name="btnOrdenar" src={btnOrdenar} alt="Ordenar"/>
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
 
export default ClosingOrder;
