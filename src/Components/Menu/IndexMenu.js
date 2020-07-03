import React, { useState } from 'react';
import { Col, Row } from 'antd';
import Button from '../Button/Button';
import CardMenu from './CardMenu';
import './IndexMenu.css'
import menu from '../../Assets/menu.json'
import NavMenu from './NavMenu'

const IndexMenu = () => {
    // const menuItems = menu.desayuno.map(item => {
    //     return (
    //         <CardMenu key={item.id} item={item}/>
    //     )
    // })
  
    const [tab, setTab] = useState('comida')
    console.log(tab)
    return ( 
        
        <Col className='order' size='large' span={14}>
            <div className="buttons d-flex justify-content-around m-3">
                <Button value ='Desayunos' pink onClick={() => { setTab('desayuno')}} />
                <Button value ='Comidas' pink onClick={() => { setTab('comida')}}/>
            </div>
            <Row >
                <NavMenu tab={tab} />
            </Row>
            
        </Col>
     );
}
 
export default IndexMenu;