import React from 'react'
import axios from '_lib/axios.js'
import { ListView, Toast } from 'antd-mobile';
import './home.scss'
import ProductItem from '@/components/ProductItem/'
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

        return (
            <div className="home">
                <div className="recommend-title">
                </div>
               <ProductItem isLoading={this.state.isLoading} dataSource={this.state.dataSource} onEndReached={this.onEndReached} />
            </div>
        )
    }
}
