import React from 'react';
import { Card, Col } from 'antd';
import ModalMenu from './ModalMenu';
import menu from '../../Assets/menu.json'

const CardMenu = ({item}) => {
    const { Meta } = Card;
  
    return ( 
        <Col span={12}>
            <Card className='card' cover={<img alt="example" src={item.imagen}/>}>
                <Meta title={item.item} description={'$ ' + item.precio} />
                <ModalMenu optionSelected={item}/>
            </Card>
        </Col>
     );
}
 
export default CardMenu;



