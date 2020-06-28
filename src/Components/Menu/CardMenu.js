import React from 'react';
import { Card, Col } from 'antd';
import ModalMenu from './ModalMenu';

const CardMenu = ({item}) => {
    const { Meta } = Card;

    return ( 
        <Col span={12}>
            <Card className='card' cover={<img alt="example" src={"https://picsum.photos/100"}/>}>
                <Meta title={item.item} description={'$ ' + item.precio} />
                <ModalMenu optionSelected={item} />
            </Card>
        </Col>
     );
}
 
export default CardMenu;




