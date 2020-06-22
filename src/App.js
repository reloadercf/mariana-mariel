import React from 'react';
import IndexApp from './Components/Index-app/IndexApp'
import Order from './Components/Order/Order'
import IndexMenu from './Components/Menu/IndexMenu';
import Header from './Components/header'

const App = () => {
  return ( 
    <div className='container'>
      <Header />
      <IndexApp />
      <IndexMenu />
      <Order />
    </div>
   );
}
 
export default App;
