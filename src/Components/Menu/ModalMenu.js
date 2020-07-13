import React, {useState} from 'react';
import { Modal, Col, Row } from 'antd';
import Button from '../Button/Button';
import Extras from '../Menu/Extras'

<<<<<<< HEAD
const ModalMenu = ({optionSelected, addItem, setAddItem}) => {
   const [state, setState] = useState({
=======
const ModalMenu = ({optionSelected,  carrito, addProducto}) => {

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
  
    let addToOrder = e => {
<<<<<<< HEAD
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
        visible: false,
      });
      console.log(addItem)
=======
      //no uses esto
      // setAddItem((previous) => [
      //   ...previous,
      //   {
      //     ...addItem,
      //     key: optionSelected.id,
      //     descripcion: optionSelected.item,
      //     precio: optionSelected.precio,
      //     quantity:1
      //   }
      // ])

      // setState({
      //   visible: false,
      // });
      // console.log(addItem)
>>>>>>> origin/master
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
                <img src={optionSelected.imagen} alt='cafe' />
              </Row>
              <h3>{optionSelected.item}</h3>
                <Extras />
              </Col>
          </Modal>
      </div>
    );
};
 
export default ModalMenu;