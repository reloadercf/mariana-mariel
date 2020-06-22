import React from 'react';

const CardMenu = () => {
    return ( 
        <div>
            <div className="card col-10 m-2">
                <img src="https://picsum.photos/100" className="card-img-top" alt="opcion" />
                <div className="card-body">
                    <h5 className="card-title">Café americano</h5>
                    <p className="card-text">$5</p>
                </div>
            </div>
        </div>
     );
}
 
export default CardMenu;