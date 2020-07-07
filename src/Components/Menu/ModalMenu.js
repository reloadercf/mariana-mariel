import React, {useState} from 'react';
import { Modal, Select, Col, Row } from 'antd';
import { PlusCircleTwoTone } from '@ant-design/icons'
import Button from '../Button/Button'

const ModalMenu = ({optionSelected, addItem, setAddItem}) => {

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
  
    let addToOrder = e => {
      setAddItem((previous) => [
        ...previous,
        {
          ...addItem,
          descripcion: optionSelected.item,
          precio: optionSelected.precio
        }
      ])
      setState({
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
                <img src={optionSelected.imagen} alt='cafe' />
              </Row>
              <h3>{optionSelected.item}</h3>
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