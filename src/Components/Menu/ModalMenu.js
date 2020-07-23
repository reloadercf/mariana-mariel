import React, {useState} from 'react';
import { Modal, Col, Row } from 'antd';
import Button from '../Button/Button';
import shortid from 'shortid';
import Extras from '../Menu/Extras'


const ModalMenu = ({item, carrito, addProducto, checkExtra}) => {
  const extrasList = [
    "Queso",
    "Pepperoni",
    "Tocino",
    "Huevo"
  ];

  function getDefaultExtras() {
    return extrasList.map(extra => ({
        ingrediente: extra,
        checked: false
    }))
}


  const quantity = useQuantity(carrito.item && carrito.item.quantity)
  const extras = useExtras(carrito.item.extras)

  function useExtras(defaultExtra){
    const [ extras, setExtras] = useState(
      defaultExtra || getDefaultExtras()
    )
    
    function checkExtra(i){
        const newExtras = [...extras];
        newExtras[i].checked = !newExtras[i].checked;
        setExtras(newExtras)
    }
    return {
        checkExtra,
        extras
    }

   
}

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
    subtotal: quantity.value * item.precio,
    extras: extras.extras
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
              <h2>{item.item}</h2>            
              <div className='quantityDiv'>
                <h5>Cantidad</h5>
                <button onClick={() => {quantity.setValue(quantity.value - 1)}}>-</button>
                <input  className= 'inputQuantity' />
                <button onClick={() => {quantity.setValue(quantity.value + 1)}}>+</button>
              </div>
              {hasExtras(item) && <>
                <h4>Agregar Extras:</h4>
                <Extras {...extras}/>
              </>}
              </Col>
          </Modal>
      </div>
    );
};
 
export default ModalMenu;