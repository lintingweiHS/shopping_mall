import React, { Component } from "react";
import { ListView, Toast } from "antd-mobile";
import { withRouter } from 'react-router-dom'
import "./index.scss";
 class ProductItem extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   dataSource: props.dataSource,
    // };
  }
  componentWillReceiveProps(props) {
    this.setState({
      dataSource: props.dataSource,
    });
  }
  onEndReached = () => {
    this.props.onEndReached();
  };
  gotoDetail = (id) =>{
    this.props.history.push("/shopdetail?id=" +id)
  }
  render() {
    const row = (rowData, sectionID, rowID) => {
      return (
        <div className="item-cart" key={rowData.product_id} onClick={()=>{this.gotoDetail(rowData.product_id)}}>
          <div className="item-cart-image">
            <img src={rowData.thumbnail ? rowData.thumbnail : require('@img/goods_default.jpg')} alt="" />
            <span className="brand-name">{rowData.model}</span>
          </div>
          <div className="item-card-name">
            <div className="identify">
              <span>京东物流</span>
            </div>
            <div className="name">{rowData.name}</div>
          </div>
          <div className="item-cart-price">{rowData.special_format}</div>
        </div>
      );
    };
    return (
      <div className="products-c">
        <ListView
          ref={(el) => (this.lv = el)}
          dataSource={this.props.dataSource}
          renderFooter={() => (
            <div
              className="footer"
              style={{
                width: "100%",
                textAlign: "center",
                fontSize: "12px",
              }}
            >
              {this.props.isLoading ? "加载中..." : "暂无更多数据"}
            </div>
          )}
          renderRow={row}
          useBodyScroll
          onEndReachedThreshold={10}
          onEndReached={this.onEndReached}
          pageSize={5}
        />
      </div>
    );
  }
}

export default withRouter(ProductItem)
