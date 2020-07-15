import React from 'react';
import {Select} from 'antd';

const Extras = () => {
    
    const { Option } = Select;

    function handleChange(value) {
      console.log(`selected ${value}`);
    }
   
    return(
        <div>
            <Select placeholder="Tipo" style={{ width: 175 }} onChange={handleChange}>
                <Option value="Opcion1">Opcion 1</Option>
                <Option value="Opcion2">Opcion 2</Option>
            </Select>
            <form>
                <span>Extras:</span>
                <input type= 'checkbox' onClick={()=>{ console.log('hello')}} ></input>
            </form>
        </div>
    )
}

export default Extras