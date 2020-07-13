import React from 'react'
import CardMenu from './CardMenu';

let Desayunos=[
    {
        id: 1,
        item: "Café americano",
        precio: 5,
        imagen: "./Products/cafe.png",
        quantity:1,
        subtotal:0
    },
    {
        id: 2,
        item: "Café con leche",
        precio: 7,
        imagen: "./Products/cafeLeche.png",
        quantity:1,
        subtotal:0
    },
    {
        id: 3,
        item: "Sandwich de jamón y queso",
        precio: 10,
        imagen: "./Products/sandwich.png",
        quantity:1,
        subtotal:0

    },
    {
        id: 4,
        item: "Jugo de frutas natural",
        precio: 7,
        imagen: "./Products/jugo.png",
        quantity:1,
        subtotal:0
    }
]

let Comidas=[
    {
        id: 5,
        item: "Hamburguesa simple",
        precio: 10,
        imagen: "../Products/burger.png",
        quantity:1,
        subtotal:0
    },
    {
        id: 6,
        item: "Hamburguesa doble",
        precio: 15,
        imagen: "../Products/doble.png",
        quantity:1,
        subtotal:0
    },
    {
        id: 7,
        item: "Papas fritas",
        precio: 5,
        imagen: "../Products/papas.png",
        quantity:1,
        subtotal:0

    },
    {
        id: 8,
        item: "Aros de cebolla",
        precio: 5,
        imagen: "../Products/cebolla.png",
        quantity:1,
        subtotal:0
    },
    {
        id: 9,
        item: "Agua 500ml",
        precio: 5,
        imagen: "../Products/jugo.png",
        quantity:1,
        subtotal:0
    },
    {
        id: 10,
        item: "Agua 750ml",
        precio: 7,
        imagen: "../Products/jugo.png",
        quantity:1,
        subtotal:0
    },
    {
        id: 11,
        item: "Bebida/gaseosa 500ml",
        precio: 7,
        imagen: "../Products/refresco.png",
        quantity:1,
        subtotal:0
    },
    {
        id: 12,
        item: "Bebida/gaseosa 750ml",
        precio: 10,
        imagen: "../Products/refresco.png",
        quantity:1,
        subtotal:0
    }
]

const NavMenu = ({ tab,  carrito, addProducto }) => {
   
    return(
        <div>
        
            {tab==="comida"?
            <div>
            
                {Comidas.map(item=> <CardMenu key={item.id} item={item}  carrito={carrito} addProducto={addProducto} />)}
            </div>:
            <div>
                {Desayunos.map(item=> <CardMenu key={item.id} item={item} carrito={carrito} addProducto={addProducto} />)}
            </div>
            }
        </div>
    )
}

export default NavMenu