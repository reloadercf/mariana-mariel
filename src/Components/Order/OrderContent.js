import React from 'react';
import { Table, Divider } from 'antd';

const OrderContent = ({carrito,addProducto}) => {

console.log(carrito.item)
  const columns = [
    {
      title: 'Cant',
      dataIndex: 'quantity',
      key: 'quantity',
      render: (quantity) =>{
        return <span>{quantity}<button>Borrar</button></span>
      }
    },
    {
      title: 'Descripcion',
      dataIndex: 'item',
      key: 'item'
    },
    {
      title: 'Precio',
      dataIndex: 'precio',
      key: 'precio'
    },
    {
      title: 'Subtotal',
      key: 'subtotal',
      dataIndex:'quantity',
      render: (quantity, precio) =>{
        return <span>${quantity*precio.precio}</span>
      }
     
    },
  ];

    return ( 
        <div>
            <Divider />
            <Table className="contentTable" columns={columns} dataSource={carrito.item} size="small" pagination={{ pageSize: 50 }} scroll={{ y: 240 }} />
            <Divider />
        </div>
     );
}
 
export default OrderContent;
