import React, {useState} from 'react';
import { Modal, Button, Select, Col, Row } from 'antd';
import { PlusCircleTwoTone } from '@ant-design/icons'



const ModalMenu = ({optionSelected}) => {

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
  
    let handleOk = e => {
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
        <div>
            <Button icon={<PlusCircleTwoTone />} onClick={showModal} />
            <Modal
                className='modal'
                visible={state.visible}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={[
                  <Button key="back" onClick={handleCancel}>
                    Regresar
                  </Button>,
                  <Button key="submit" type="primary" onClick={handleOk}>
                    Agregar
                  </Button>
                ]}
            >
              <Col>
                <Row justify="center">
                  <img src={optionSelected.item.imagen} alt='cafe' />
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