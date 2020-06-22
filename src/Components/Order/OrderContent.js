import React from 'react';

const OrderContent = () => {
    return ( 
        <div>
            <table className="table table-striped sm">
                <thead>
                    <tr>
                        <th scope="col">Cant.</th>
                        <th scope="col">Descripción</th>
                        <th scope="col">Precio</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>descripcion</td>
                        <td>$20</td>
                    </tr>
                </tbody>
            </table>
        </div>
     );
}
 
export default OrderContent;