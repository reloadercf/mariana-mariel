import React from 'react';
import { Table, Divider } from 'antd';
import { DeleteTwoTone } from '@ant-design/icons'

const OrderContent = ({carrito, deleteProducto}) => {
  const columns = [
    {
      title: 'Cant',
      dataIndex: 'quantity',
      key: 'quantity'
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
        </div>
     );
}
 
export default OrderContent;
