import React from 'react'
import CardMenu from './CardMenu';
import menu  from '../../Assets/menu.json'


const NavMenu = ({ tab, addItem, setAddItem }) => {
    console.log(tab)
    return menu[tab].map(item => {
        return (
            <CardMenu key={item.id} item={item} addItem={addItem} setAddItem={setAddItem} />
        )
    });
}

export default NavMenu