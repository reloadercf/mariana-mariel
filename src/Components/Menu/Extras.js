import React, {useState} from 'react';
import {Select} from 'antd';

const Extras = () => {
    
    const { Option } = Select;

    function handleChange(value) {
      console.log(`selected ${value}`);
    }
   
    return(
        <div>
        <Select placeholder="Tipo" style={{ width: 175 }} onChange={handleChange}>
            <Option value="Pollo">Pollo</Option>
            <Option value="Res">Res</Option>
            <Option value="Vegana">Vegana</Option>
        </Select>
        <Select placeholder="Extras" style={{ width: 175 }} onChange={handleChange}>
            <Option value="Queso">Queso</Option>
            <Option value="Tocino">Tocino</Option>
        </Select>
        </div>
    )
}

export default Extras