import React, { Component } from 'react'
import { NavBar, Icon, ListView, PullToRefresh, Toast } from 'antd-mobile'
import axios from '_lib/axios.js'


class myCourse extends Component {
  constructor(props) {
    super(props)
    // 创建ListViewDataSource对象
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
    }
  }

  componentDidMount() {
    this.getData(true)
  }

  getData(ref = false) {
    //获取数据
    var para = {}
    para.pageSize = this.state.pageSize
    para.pageNo = this.state.pageNo
    axios.$Get('api/store/product', {
      page: para.pageNo, limit: para.pageSize, sort: 'sort_order', order: 'desc', hideLoading: true
    }).then(res => {
      const dataList = res.data.products
      const len = dataList.length
      if (!res.data.has_more) { // 判断是否已经没有数据了
        this.setState({
          refreshing: false,
          isLoading: false,
          hasMore: false
        })
        Toast.info('没有数据了~', 1)
        return false
      }
      if (ref) {
        //这里表示刷新使用
        // 下拉刷新的情况，重新添加数据即可(这里等于只直接用了第一页的数据)
        this.setState({
          pageNo: this.state.pageNo,
          dataSource: this.state.dataSource.cloneWithRows(dataList), // 数据源中的数据本身是不可修改的,要更新datasource中的数据，请（每次都重新）调用cloneWithRows方法
          hasMore: true, // 下拉刷新后，重新允许开下拉加载
          refreshing: false, // 是否在刷新数据
          isLoading: false, // 是否在加载中
          products: dataList // 保存数据进state，在下拉加载时需要使用已有数据
        })
      } else {
        // 这里表示上拉加载更多
        // 合并state中已有的数据和新增的数据
        var products = this.state.products.concat(dataList) //关键代码
        this.setState({
          pageNo: this.state.pageNo,
          dataSource: this.state.dataSource.cloneWithRows(products), // 数据源中的数据本身是不可修改的,要更新datasource中的数据，请（每次都重新）调用cloneWithRows方法
          refreshing: false,
          isLoading: false,
          products: products // 保存新数据进state
        })
      }
    })
  }

  // 下拉刷新
  onRefresh = () => {
    this.setState({
      refreshing: true,
      isLoading: true,
      pageNo: 1 // 刷新嘛，一般加载第一页，或者按你自己的逻辑（比如每次刷新，换一个随机页码）
    }, () => {
      this.getData(true)
    })
  }

  // 滑动到底部时加载更多
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
      // 这里rowData,就是上面方法cloneWithRows的数组遍历的单条数据了，直接用就行
      return (
        <div key={rowID} className="article">
          <div className="article-title">
            {rowData.courseTitle}
          </div>
          <div className="article-body">
            <div className="hidden" style={{padding:'20px'}}>id: {rowData.product_id}</div>
            <div ><label className="label-3em" style={{padding:'20px'}}>姓名</label>：{rowData.name}</div>
          </div>
        </div>
      )
    }
    return (
      <div className="content-bg">
        <div className="content-box">
          <ListView
            ref={el => this.lv = el}
            dataSource={this.state.dataSource}
            // renderHeader={() => (<NavBar
            //   mode="light"
            //   icon={<Icon type="left" />}
            //   onLeftClick={() => this.props.history.push('/usercenter')}
            // >我的课程</NavBar>)}
            renderFooter={() => (<div className="footer">{this.state.isLoading ? '加载中...' : '暂无更多数据'}</div>)}
            renderRow={row}
            useBodyScroll
            pullToRefresh={<PullToRefresh
              refreshing={this.state.refreshing}
              onRefresh={this.onRefresh}
            />}
            onEndReachedThreshold={10}
            onEndReached={this.onEndReached}
            pageSize={5}
          />
        </div>
      </div>
    );
  }
}

export default myCourse