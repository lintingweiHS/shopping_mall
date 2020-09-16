import React, { Component } from "react";
import { List, Checkbox, Flex } from "antd-mobile";
import "./index.scss";
import axios from "_lib/axios.js";
const CheckboxItem = Checkbox.CheckboxItem;
export default class Shopping_cart extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.getCart();
  }
  getCart = () => {};
  onChange = (e) => {};
  render() {
    return (
      <div className="shopping_cart">
        <div className="title">购物车</div>
        <div className="header">
          <div className="count">共2件商品</div>
          <div className="alldelete">清空购物车</div>
          <div className="manage">管理</div>
        </div>
        <div className="cart-goods">
          <div className="group">
            <div className="group-item">
              <div className="title">京东物流</div>
              <div className="goods-list">
                <div className="goods-item">
                  <div className="content">
                    <CheckboxItem onChange={() => this.onChange()}>
                      <div>123</div>
                      <div>123</div>
                      <div>123</div> <div>123</div>
                    </CheckboxItem>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
