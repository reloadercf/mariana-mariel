import React from 'react';
import { Card } from 'antd';
import ModalMenu from './ModalMenu';

const CardMenu = () => {
    const { Meta } = Card;

    return ( 
        <div>
            <Card className='card' cover={<img alt="example" src="https://picsum.photos/100"/>}>
                <Meta title="Café Americano" description="$5" />
                <ModalMenu />
            </Card>
        </div>
     );
}
 
export default CardMenu;




