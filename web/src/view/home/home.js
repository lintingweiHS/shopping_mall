import React from 'react'
import axios from '_lib/axios.js'
import './home.scss'
export default class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            has_more: false,
            products: []
        }
    }
    componentDidMount() {
        this.getData()
    }
    getData = () => {
        axios.$Get('api/store/product?page=1&limit=60&sort=sort_order&order=desc&hideLoading=true').then(res => {
            if (res.success) {
                this.setState({
                    has_more: res.data.has_more,
                    products: [...this.state.products, ...res.data.products]
                })
                console.log(this.state)
            }
        })
    }
    Product = () => {
        let pro = this.state.products.map((item, index) => {
            return (
                <div className="item-cart" key={index}>
                    <div className="item-cart-image">
                        <img src={item.thumbnail} alt="" />
                        <span className="brand-name">{item.model}</span>
                    </div>
                    <div className="item-card-name">
                        <div className="identify">
                            <span>
                                京东物流
                            </span>
                        </div>
                        <div className="name">{item.name}</div>
                    </div>
                    <div className="item-cart-price">{item.special_format}</div>
                </div>
            )
        })
        return pro
    }
    render() {
        return (
            <div className="home">
                <div className="recommend-title">
                    
                </div>
                <div className="products">
                    {this.Product()}
                </div>
            </div>
        )
    }
}