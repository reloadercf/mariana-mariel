import React, {useState} from 'react';
<<<<<<< HEAD
import { Modal, Col, Row } from 'antd';
import Button from '../Button/Button';
import Extras from '../Menu/Extras'

const ModalMenu = ({optionSelected, addItem, setAddItem}) => {
   const [state, setState] = useState({
=======
import { Modal, Select, Col, Row } from 'antd';
import { PlusCircleTwoTone } from '@ant-design/icons'
import Button from '../Button/Button';
import shortid from 'shortid';

const ModalMenu = ({item, carrito, addProducto}) => {
  const quantity = useQuantity(carrito.item && carrito.item.quantity)

  function useQuantity(defaultQuantity) {
    const [value, setValue] = useState(defaultQuantity || 1);
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
    id: shortid.generate(),
    quantity: quantity.value,
    subtotal: quantity.value * item.precio
  }

    const { Option } = Select;
    function handleChange(value) {
      console.log(`selected ${value}`);
    }
    const [state, setState] = useState({
>>>>>>> origin/master
        visible: false
    }) 

    let showModal = () => {
      setState({
        visible: true
      });
    };
  
<<<<<<< HEAD
    let addToOrder = e => {
      setAddItem((previous) => [
        ...previous,
        {
          ...addItem,
          descripcion: optionSelected.item,
          precio: optionSelected.precio,
          tipo: Option.value,
         
        }
      ])
      setState({
=======
    let addToOrder = () => {
      addProducto(order)

      setState({
        visible: false,
      });
    };

    let handleCancel = e => {
        setState({
>>>>>>> origin/master
        visible: false,
      });
      console.log(addItem)
    };

    let handleCancel = e => {
      setState({
      visible: false,
    });
  };
    
    return (
      <div className='modal1'>
      <Button mas onClick={showModal} />
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
<<<<<<< HEAD
              <h3>{optionSelected.item}</h3>
                <Extras />
=======
              <h3>{item.item}</h3>
              <div>
                <span>cantidad</span>
                <button onClick={() => {quantity.setValue(quantity.value - 1)}}>-</button>
                <input {...quantity}></input>
                <button onClick={() => {quantity.setValue(quantity.value + 1)}}>+</button>
              </div>
              <Select placeholder="Tipo" style={{ width: 175 }} onChange={handleChange}>
                <Option value="Opcion1">Opcion 1</Option>
                <Option value="Opcion2">Opcion 2</Option>
              </Select>
              <Select placeholder="Extras" style={{ width: 175 }} onChange={handleChange}>
                <Option value="Extra1">Extra 1</Option>
                <Option value="Extra2">Extra 2</Option>
              </Select>
>>>>>>> origin/master
              </Col>
          </Modal>
      </div>
    );
};
 
export default ModalMenu;