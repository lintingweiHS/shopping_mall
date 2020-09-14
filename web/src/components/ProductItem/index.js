import React, { Component } from 'react'
import { ListView, Toast } from 'antd-mobile';
import './index.scss'
export default class ProductItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dataSource: props.dataSource
        }
    }
    componentWillReceiveProps(props) {
        this.setState({
            dataSource: props.dataSource
        })
    }
    onEndReached = () => {
        this.props.onEndReached();
    }
    render() {
        const row = (rowData, sectionID, rowID) => {
            return (
                <div className="item-cart" key={rowData.product_id}>
                    <div className="item-cart-image">
                        <img src={rowData.thumbnail} alt="" />
                        <span className="brand-name">{rowData.model}</span>
                    </div>
                    <div className="item-card-name">
                        <div className="identify">
                            <span>
                                京东物流
                            </span>
                        </div>
                        <div className="name">{rowData.name}</div>
                    </div>
                    <div className="item-cart-price">{rowData.special_format}</div>
                </div>
            )
        }
        return (
            <div className="products">
                <ListView
                    ref={el => this.lv = el}
                    dataSource={this.state.dataSource}
                    renderFooter={() => (<div className="footer" style={{
                        width: '100%',
                        textAlign: 'center',
                        fontSize: '12px'
                    }}>{this.state.isLoading ? '加载中...' : '暂无更多数据'}</div>)}
                    renderRow={row}
                    useBodyScroll
                    onEndReachedThreshold={10}
                    onEndReached={this.onEndReached}
                    pageSize={5}
                />
            </div>
        )
    }
}
