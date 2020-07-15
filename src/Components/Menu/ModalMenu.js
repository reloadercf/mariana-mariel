import React, {useState} from 'react';
import { Modal, Col, Row } from 'antd';
import Button from '../Button/Button';
import shortid from 'shortid';
import Extras from '../Menu/Extras'

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
    function hasExtras(item) {
      return item.extras === 'extras';
    }
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
              <h3>{item.item}</h3>
              <div>
                <span>cantidad</span>
                <button onClick={() => {quantity.setValue(quantity.value - 1)}}>-</button>
                <input {...quantity}></input>
                <button onClick={() => {quantity.setValue(quantity.value + 1)}}>+</button>
              </div>
              {hasExtras(item) && <>
                <h3>Extras:</h3>
                <Extras />
              </>}
              </Col>
          </Modal>
      </div>
    );
};
 
export default ModalMenu;