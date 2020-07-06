import React, { useState } from 'react';
import { Col, Row } from 'antd';
import Button from '../Button/Button';
import './IndexMenu.scss'
import NavMenu from './NavMenu'

const IndexMenu = () => {

    const [tab, setTab] = useState('comida')
    console.log(tab)
    return ( 
        
        <Col className='order' size='large' span={14}>
            <div className="btnMenu">
                <Button value ='Desayunos' pink onClick={() => { setTab('desayuno')}} />
                <Button value ='Comidas' pink onClick={() => { setTab('comida')}}/>
            </div>
            <Row className="menu">
                <NavMenu tab={tab} />
            </Row>
            
        </Col>
     );
}
 
export default IndexMenu;