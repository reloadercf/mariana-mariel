import React from 'react';
import { Table, Divider } from 'antd';

const OrderContent = () => {
    const columns = [
        {
          title: 'Cant',
          dataIndex: 'cant',
        },
        {
          title: 'Descripcion',
          dataIndex: 'descripcion',
        },
        {
          title: 'Precio',
          dataIndex: 'precio',
        },
      ];
      const data = [
        {
          key: '1',
          cant: '1',
          descripcion: 'cafe americano',
          precio: '$20',
        },
      ];

    return ( 
        <div>
            <Divider />
            <Table columns={columns} dataSource={data} size="small" />
            <Divider />
        </div>
     );
}
 
export default OrderContent;
