import React, { Component } from 'react';
import Icon from "@/components/Icon";
import './goodBuy.scss'
import { withRouter } from 'react-router-dom'
class goodBuy extends Component {
    constructor(props){
        super(props)
        
    }
    goCartList =()=>{
        this.props.history.push("/shoppingcart")
    }
    render() {
        return (
            <div className="buy-goods">
                <div className="btns">
                    <div onClick={this.goCartList} className="cart-icon">
                        <Icon iconName="icongouwuche" />
                    </div>
                    <div className="add-cart">
                        加入购物车
              </div>
                    <div className="buy">
                        立即购买
              </div>
                </div>
            </div>
        );
    }
}

export default withRouter(goodBuy);