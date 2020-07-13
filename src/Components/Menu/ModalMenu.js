import React, {useState} from 'react';
import { Modal, Select, Col, Row } from 'antd';
import { PlusCircleTwoTone } from '@ant-design/icons'
import Button from '../Button/Button'



const ModalMenu = ({item, carrito, addProducto}) => {
  const quantity = useQuantity(carrito.item && carrito.item.quantity)

  function useQuantity(defaultQuantity) {
    const [value, setValue] = useState(defaultQuantity || 1);
    console.log(value, 'value')
    function onChange(e) {
      if (!(+e.target.value >= 1)) {
        setValue(1);
        return;
      }
      setValue(+e.target.value);
  }
  return {
    value,
    setValue,
    onChange
  };
  
  };
  
  const order = {
    ...item,
    quantity: quantity.value,
    subtotal: quantity.value * item.precio
  }

    const { Option } = Select;
    function handleChange(value) {
      console.log(`selected ${value}`);
    }
    const [state, setState] = useState({
        visible: false
    }) 
  
    let showModal = () => {
      setState({
        visible: true
      });
    };
  
    let addToOrder = () => {
      addProducto(order)

      setState({
        visible: false,
      });
    };

    let handleCancel = e => {
        setState({
        visible: false,
      });
    };
    
    return (
      <div className='modal1'>
      <Button mas icon={<PlusCircleTwoTone />} onClick={showModal} />
          <Modal
              className='modal'
              visible={state.visible}
              onOk={addToOrder}
              onCancel={handleCancel}
              footer={[
                <Button id='btnAgregar' value='Agregar' enter key="submit" type="primary" onClick={addToOrder}/>
              ]}
          >
            <Col>
              <Row justify="center">
                <img src={item.imagen} alt='cafe' />
              </Row>
              <h3>{item.item}</h3>
              <div>
              <span>cantidad</span>
              <button onClick={() => {
                  quantity.setValue(quantity.value - 1);
                }}
              >-</button>
              <input {...quantity}></input>
              <button onClick={() => {
                quantity.setValue(quantity.value + 1);
              }}
              >+</button>

              </div>
              <Select placeholder="Tipo" style={{ width: 175 }} onChange={handleChange}>
                <Option value="Opcion1">Opcion 1</Option>
                <Option value="Opcion2">Opcion 2</Option>
              </Select>
              <Select placeholder="Extras" style={{ width: 175 }} onChange={handleChange}>
                <Option value="Extra1">Extra 1</Option>
                <Option value="Extra2">Extra 2</Option>
              </Select>
              </Col>
          </Modal>
      </div>
    );
};
 
export default ModalMenu;