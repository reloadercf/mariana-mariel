import React from 'react';
// import IndexApp from './Components/Index-app/IndexApp'
import Order from './Components/Order/Order'
import IndexMenu from './Components/Menu/IndexMenu';

const App = () => {
  return ( 
    <div className='container'>
      {/* <IndexApp /> */}
      <IndexMenu />
      <Order />
    </div>
   );
}
 
export default App;
