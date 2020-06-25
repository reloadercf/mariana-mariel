import React, {useState} from 'react';
import { Modal, Button } from 'antd';
import { PlusCircleTwoTone } from '@ant-design/icons'


const ModalMenu = () => {
    const [state, setState] = useState({
        visible: false
    }) 
  
    let showModal = () => {
      setState({
        visible: true,
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
                title="Café Americano"
                visible={state.visible}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                <img src='https://via.placeholder.com/200' alt='cafe' />
                <p>Café Americano</p>
                <p><input type ='text'/></p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>
        </div>
      );
};
 
export default ModalMenu;