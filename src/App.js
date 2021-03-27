import React, { useEffect, Fragment } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom';

import './App.scss';
import Footer from './container/Footer/Footer';
import Header from './container/Header/Header';
import Accessories from './pages/Accessories/Accessories';
import HomePage from './pages/Home/HomePage';
import Login from './pages/Login/Login';
import PhoneProduct from './pages/PhoneProduct/PhoneProduct';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import ProductSaleLaptops from './pages/ProductSaleLaptops/ProductSaleLaptops';
import Housewear from './pages/Housewear/Housewear';
import ListPhonePage from './pages/PhoneProduct/ListPhonePage/ListPhonePage';
import PhoneDetail from './pages/PhoneProduct/PhoneDetail/PhoneDetail';
import AccDetail from './pages/Accessories/AccDetail/AccDetail';
import HousewearDetail from './pages/Housewear/HousewearDetail/HousewearDetail';
import Listlaptop from './pages/ProductSaleLaptops/ListLaptop/Listlaptop';


const App = (props) => {

  return (
    <div className="app">
      <Header />
      <ScrollToTop >
        <Switch>

          <Route path="/" exact component={HomePage} />
          <Route path="/login" exact component={Login} />

          <Route path="/listLaptop" exact component={Listlaptop} />
          <Route path="/productSaleLaptops" exact component={ProductSaleLaptops} />
          <Route path="/productDetail/:id" exact component={ProductDetail} />

          <Route path="/accessories" exact component={Accessories} />
          <Route path="/accDetail/:id" exact component={AccDetail} />

          <Route path="/listPhone" exact component={ListPhonePage} />
          <Route path="/phoneProduct" exact component={PhoneProduct} />
          <Route path="/phoneDetail/:id" exact component={PhoneDetail} />

          <Route path="/housewear" component={Housewear} />
          <Route path="/housewearDetail/:id" exact component={HousewearDetail} />
        </Switch>
      </ScrollToTop >
      <Footer />
    </div>
  )
}

export default App;

const ScrollToTop = withRouter(({ history, children }) => {
  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      unlisten();
    }
  }, []);

  return <Fragment>{children}</Fragment>;
})
