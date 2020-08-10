

import React from 'react'
export default class Search extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            search: '',
            checkout: true,
            products: [],
        }
    }
    componentDidMount() {

    }
    componentWillUnmount() {

    }
    handleChange = (e) => {

        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {

        return (
            <div>
                <input type="text" name="search" value={this.state.search} onChange={this.handleChange} />
                <div>
                    <input type="checkbox" name="checkout" value={this.state.checkout} />
                Only show products in stock
                </div>
            </div>
        )
    }
}
const products = [
    { category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football" },
    { category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball" },
    { category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball" },
    { category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch" },
    { category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5" },
    { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" }
];