import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import IndexApp from './Components/Index-app/IndexApp'
import OrderSection from './Components/OrderSection/OrderSection.js'
import '../src/styles/App.scss';

const App = () => {
  return ( 
    <Router>
        <Switch>
          <div className='app'>
            <div className='indexApp'>
              <Route path ='/' exact component = {IndexApp} />
            </div>
            <div className= 'content'>
              <Route path ='/orden' component={OrderSection}/>
            </div>    
          </div>
        </Switch>
    </Router>
    
   
   );
}
 
export default App;
