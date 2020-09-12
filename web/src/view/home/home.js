import React from 'react'
import axios from '_lib/axios.js'
import { ListView, Toast } from 'antd-mobile';
import Tabbar from '@/components/Tabbar/'
import './home.scss'
export default class Home extends React.Component {
    constructor(props) {
        super(props)
        const dataSource = new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2 // rowHasChanged(prevRowData, nextRowData); 用其进行数据变更的比较
        })
        this.state = {
            dataSource,
            pageNo: 1,
            pageSize: 60,
            hasMore: true,
            refreshing: true,
            isLoading: true,
            products: [],
            selectedTab: 'home',
            hidden: false,
            fullScreen: false,
        }
    }
    componentDidMount() {
        this.getData()
    }
    getData = () => {
        axios.$Get('api/store/product', {
            page: this.state.pageNo, limit: this.state.pageSize, sort: 'sort_order', order: 'desc', hideLoading: true
        }).then(res => {
            if (res.success) {
                console.log(!res.data.hasMore)
                const dataList = res.data.products
                if (!res.data.has_more) {
                    this.setState({
                        refreshing: false,
                        isLoading: false,
                        hasMore: false
                    })
                    Toast.info('没有数据了', 1)
                    return false
                } else {
                    var products = this.state.products.concat(dataList) //关键代码
                    console.log(products)
                    this.setState({
                        pageNo: this.state.pageNo,
                        dataSource: this.state.dataSource.cloneWithRows(products), // 数据源中的数据本身是不可修改的,要更新datasource中的数据，请（每次都重新）调用cloneWithRows方法
                        refreshing: false,
                        isLoading: false,
                        products: products // 保存新数据进state
                    })
                }
            }

        })
    }
    onEndReached = (event) => {
        // 加载中或没有数据了都不再加载
        if (this.state.isLoading || !this.state.hasMore) {
            return
        }
        this.setState({
            isLoading: true,
            pageNo: this.state.pageNo + 1, // 加载下一页
        }, () => {
            this.getData(false)
        })

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
            <div className="home">
                <div className="recommend-title">
                </div>

                <div className="products">
                    <ListView
                        ref={el => this.lv = el}
                        dataSource={this.state.dataSource}
                        renderFooter={() => (<div className="footer" style={{
                            width:'100%',
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
                <Tabbar selectedTab="home" />
            </div>
        )
    }
}