import axios from 'axios';
import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import { pushDataAction } from './actions/PushDataAction';
import './App.scss';

import Footer from './container/Footer/Footer';
import Header from './container/Header/Header';
import AccDetail from './pages/Accessories/AccDetail/AccDetail';
import Accessories from './pages/Accessories/Accessories';
import Cart from './pages/Cart/Cart';
import HomePage from './pages/Home/HomePage';
import Housewear from './pages/Housewear/Housewear';
import HousewearDetail from './pages/Housewear/HousewearDetail/HousewearDetail';
import Login from './pages/Login/Login';
import ListPhonePage from './pages/PhoneProduct/ListPhonePage/ListPhonePage';
import PhoneDetail from './pages/PhoneProduct/PhoneDetail/PhoneDetail';
import PhoneProduct from './pages/PhoneProduct/PhoneProduct';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import Listlaptop from './pages/ProductSaleLaptops/ListLaptop/Listlaptop';
import ProductSaleLaptops from './pages/ProductSaleLaptops/ProductSaleLaptops';
import Search from './pages/Search/Search';


const App = ({ onPushData }) => {

  useEffect(() => {
    axios.get('https://phongvu-4eee2-default-rtdb.firebaseio.com/.json')
      .then(res => {
        onPushData(res.data)
      }).catch(e => {
        console.log('err', e)
      })
  }, [])

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

          <Route path="/cart" exact component={Cart} />

          <Route path="/search" exact component={Search} />
        </Switch>
      </ScrollToTop >
      <Footer />
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    onPushData: (data) => dispatch(pushDataAction(data))
  }
}
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
});


export default connect(null, mapDispatchToProps)(App);


