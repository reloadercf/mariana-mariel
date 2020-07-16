import React from 'react';
import { Table, Divider } from 'antd';
import { DeleteTwoTone } from '@ant-design/icons'

const OrderContent = ({carrito, deleteProducto}) => {
 

  function addExtras(){
    //const myItem = carrito.item.filter(itm => itm.extras === extras) // este es el item que quiero renderizar

    
    if(carrito.item[0].extras){
      console.log('ok', carrito.item[0].extras)
    }
  }
  //addExtras()

  console.log('add extra', addExtras)
  
  const columns = [
    {
      title: 'Cant',
      dataIndex: 'quantity',
      key: 'quantity'
    },
    {
      title: 'Descripcion',
      dataIndex: 'item',
      key: 'item',
    },
    {
      title: 'Precio',
      dataIndex: 'precio',
      key: 'precio'
    },
    {
      title: 'Subtotal',
      key: 'subtotal',
      dataIndex:'subtotal',
    },
    {
      title: '',
      dataIndex: 'id',
      key: 'id',
      render: (id) =>{
        return <DeleteTwoTone onClick={() => deleteProducto(id)} />
      }
    },
  ];

 
    
    return ( 
        <div>
            <Divider />
            <Table className="contentTable" columns={columns} dataSource={carrito.item} size="small" pagination={{ pageSize: 50 }} scroll={{ y: 240 }} />
            <Divider />
            <button onClick= {addExtras}>llamar EXtra</button>
        </div>
     );
}
 
export default OrderContent;
