import React, { Fragment, useEffect, useState } from 'react'
import './Search.scss'
import { connect } from 'react-redux'
import * as TypeActions from '../../constant/TypeActions';

import CartProductBigSize from '../../components/CardProduct/CardProductBigSize/CardProductBigSize'
import Toolbar from '../../container/Header/Toolbar/Toolbar'
import { Link } from 'react-router-dom';

const Search = ({ dataFirst, onValueSearch, dataFilter }) => {
  console.log(dataFirst);
  const [valueSearch, setValueSearch] = useState({
    brand: '',
    price: '',
    category: ''
  })

  let [data, setData] = useState([])

  useEffect(() => {
    setData(dataFirst)
    if (dataFilter) {
      setData(dataFilter)
    }
  })

  const handleSubmitForm = (e) => {
    e.preventDefault();
    onValueSearch(valueSearch)
    data = dataFilter
  }

  let productCategory = null;
  if (valueSearch.category === 'phone') {
    productCategory = (
      <Fragment>
        <option value="iphone">Iphone</option>
        <option value="apple">Apple(phụ kiện)</option>
        <option value="samsung">Samsung</option>
      </Fragment>
    )
  }
  else if (valueSearch.category === 'laptop') {
    productCategory = (
      <Fragment>
        <option value="asus">ASUS</option>
        <option value="lg">LG</option>
        <option value="acer">Acer</option>
      </Fragment>
    )
  }
  else if (valueSearch.category === 'housewear') {
    productCategory = (
      <Fragment>
        <option value="panasonic">Panasonic</option>
        <option value="hafele">Hafele</option>
        <option value="philips">Philips</option>
        <option value="toshiba">Toshiba</option>
        <option value="sharp">Sharp</option>
      </Fragment>
    )
  } else if (valueSearch.category === 'acc') {
    productCategory = (
      <option value="kingston">Kingston</option>
    )
  }

  return (
    <Fragment>
      <Toolbar isShowToolbar />
      <div className="wrap__search">
        <div className="search">
          <div className="search__filter">
            <form onSubmit={handleSubmitForm}>
              <div className="search__filter__wrap">
                <label>Danh mục</label>
                <select onChange={
                  e => setValueSearch({
                    ...valueSearch,
                    category: e.target.value
                  })
                }>
                  <option value="">--- Chọn ---</option>
                  <option value="phone">Điện thoại</option>
                  <option value="laptop">Laptop</option>
                  <option value="housewear">Đồ gia dụng</option>
                  <option value="acc">Phụ kiện máy tính</option>
                </select>
              </div>

              <div className="search__filter__wrap">
                <label>Thương hiệu</label>
                <select onChange={
                  e => setValueSearch({
                    ...valueSearch,
                    brand: e.target.value
                  })
                }>
                  <option value="">--- Chọn ---</option>
                  {productCategory ? productCategory : null}
                </select>
              </div>

              <div className="search__filter__wrap">
                <label >Giá bán</label>
                <select onChange={
                  e => setValueSearch({
                    ...valueSearch,
                    price: e.target.value
                  })
                }>
                  <option value="">--- Chọn ---</option>
                  <option value="less1m">Duoi 1 triệu</option>
                  <option value="less10m">1 triệu - 10 triệu</option>
                  <option value="more10m">Trên 10 triệu</option>
                </select>
              </div>
              <button className="btn-form" type="submit">Tìm sản phẩm</button>
            </form>
          </div>


          <div className="search__product">
            {
              data.length === 0 ?
                <img className="img__empty" src="https://i.imgur.com/Drj57qu.png" alt="" />
                : data.map(product => {
                  return (
                    <Link to={`/productDetail/${product.id}`} key={product.id}>
                      <CartProductBigSize
                        url={product.image}
                        name={product.name}
                        price={product.price}
                        discountPrice={product.discountPrice}
                        urlGift={product.gift} />
                    </Link>
                  )
                })
            }
          </div>
        </div>
      </div>
    </Fragment >
  )
}

const mapStateToProps = state => {
  return {
    dataFirst: state.SearchReducer.dataFirst,
    dataFilter: state.SearchReducer.dataFilter
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onValueSearch: (value) => dispatch({ type: TypeActions.VALUE_SEARCH, value })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)

