import React, { Component } from 'react';
import AddProduct from './components/AddProduct';
import AddSchedule from './components/AddSchedule';
import Products from './components/Products';
import Summary from './components/Summary';
import Header from './components/Header';
import {BrowserRouter,Route} from 'react-router-dom';

class App extends Component {




  render() {
    return (
      <BrowserRouter>
          <div className="testbox">

          <Header/>
          <Route exact  path="/" component={Summary} />
          <Route  path="/products" component={Products} />
          <Route path="/addproduct" component={AddProduct} />
          <Route path="/addschedule" component={AddSchedule} />



          </div>
     </BrowserRouter>

    );


  }
}

export default App;
