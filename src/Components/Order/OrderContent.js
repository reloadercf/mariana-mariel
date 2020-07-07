import React from 'react';
import { Table, Divider } from 'antd';

const OrderContent = ({addItem}) => {
  // addItem.map(element => {
  //   console.log(element.descripcion)
  // });

  const columns = [
    {
      title: 'Cant',
      dataIndex: 'cant',
      key: 'cant'
    },
    {
      title: 'Descripcion',
      dataIndex: 'descripcion',
      key: 'descripcion'
    },
    {
      title: 'Precio',
      dataIndex: 'precio',
      key: 'precio'
    },
  ];

    return ( 
        <div>
            <Divider />
            <Table className="contentTable" columns={columns} dataSource={addItem} size="small" />
            <Divider />
        </div>
     );
}
 
export default OrderContent;
