import React, { Component } from "react";
import { Checkbox, Stepper } from "antd-mobile";
import "./index.scss";
import axios from "_lib/axios.js";
import Icon from "@/components/Icon";
const CheckboxItem = Checkbox.CheckboxItem;
export default class Shopping_cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      total: {},
      key: true,
    };
  }
  componentDidMount() {
    this.getCart();
  }
  getCart = () => {
    axios.$Get("api/store/cart?hideLoading=false").then((res) => {
      if (res.success) {
        this.setState({
          products: res.data.products,
          total: res.data.total,
          key: true,
        });
      }
    });
  };
  checkChange = (e) => {};
  stepperChange = (num, product_id) => {
    if (!this.state.key) {
      return;
    }
    this.setState({
      key: false,
    });
    axios.$Put("api/store/cart/" + product_id, { qty: num }).then((res) => {
      if (res.success) {
        this.getCart();
      }
    });
  };
  group = () => {
    const products = this.state.products.map((item, index) => {
      if (item.items.length === 0) {
        return;
      }
      return (
        <div className="group" key={item.code}>
          <div className="group-title">{item.name}</div>
          <div className="goods-list">{this.goodsItem(item.items, index)}</div>
        </div>
      );
    });
    return products;
  };
  goodsItem = (item, index) => {
    const goodsItem = item.map((goods, goodsIndex) => {
      return (
        <div className="goods-item" key={goods.product_id}>
          <CheckboxItem onChange={() => this.checkChange()}>
            <div className="img">
              <img src={goods.image} alt="" />
            </div>
            <div className="cart-content">
              <div className="cart-header">{goods.name} </div>
              <div className="cart-price">{goods.price_format}</div>
              <div className="cart-stock-num">
                <div className="cart-stock">{goods.stock === 0 ? "无货" : "有货"}</div>
                <div className="cart-stepper">
                  <Stepper
                    showNumber
                    max={100}
                    min={1}
                    value={parseInt(goods.quantity)}
                    onChange={(num) => {
                      this.stepperChange(num, goods.product_id);
                    }}
                  />
                </div>
              </div>
            </div>
          </CheckboxItem>
        </div>
      );
    });
    return goodsItem;
  };

  render() {
    return (
      <div className="shopping_cart">
        <div className="title">购物车</div>
        <div className="header">
          <div className="count">共2件商品</div>
          <div className="alldelete">
            <Icon iconName="iconshanchu" />
            &nbsp; 清空购物车
          </div>
          <div className="manage">
            <Icon iconName="iconguanli" />
            &nbsp; 管理
          </div>
        </div>
        <div className="cart-goods">{this.group()}</div>
      </div>
    );
  }
}
