import React, { Component } from "react";
import axios from "_lib/axios.js";
import { SearchBar, Tabs } from "antd-mobile";
import "./index.scss";
import redux from "@/redux/redux";
export default class Classification extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categorys: [],
      category: {},
      goods: {
        categories: [],
      },
    };
  }
  componentDidMount() {
    const state = redux.getState();
    if (state.todos.categoryList) {
      const categoryList = state.todos.categoryList;
      this.setState({
        categorys: categoryList,
        category: categoryList[0],
        goods: categoryList[0].categories[0],
      });
    } else {
      this.getData();
    }
  }
  getData = () => {
    axios.$Get("api/store/category").then((res) => {
      if (res.success && res.data[0]) {
        redux.dispatch({
          type: "store",
          key: "categoryList",
          value: res.data,
        });
        this.setState({
          categorys: res.data,
          category: res.data[0],
          goods: res.data[0].categories[0],
        });
      }
    });
  };
  setTab = (tab) => {
    return <span className="tab">{tab.name}</span>;
  };
  tabClick = (e) => {
    this.setState({
      category: e,
      goods: e.categories[0],
    });
  };
  categoryClick = (e) => {
    this.setState({
      goods: e,
    });
  };
  goodsList = () => {
    const goods = this.state.goods.categories.map((item, index) => {
      return (
        <div className="class-tree" key={item.category_id}>
          <div className="tree-img">
            <img src={item.image} alt="" />
          </div>
          <div className="tree-name">{item.name}</div>
        </div>
      );
    });
    return goods;
  };
  render() {
    return (
      <div className="classification">
        <SearchBar placeholder="搜索商品" maxLength={8} />
        <div className="tabs">
          <Tabs
            tabs={this.state.categorys}
            tabBarUnderlineStyle={{ border: "1px #f44 solid" }}
            tabBarBackgroundColor={{ background: "#f5f5f5" }}
            renderTab={(tab) => <span>{tab.name}</span>}
            onTabClick={this.tabClick}
          ></Tabs>
        </div>
        <div className="classmain">
          <Tabs
            tabs={this.state.category.categories}
            renderTab={(tab) => <span>{tab.name}</span>}
            tabBarPosition="left"
            tabBarUnderlineStyle={{ border: "none" }}
            onTabClick={this.categoryClick}
          ></Tabs>
          <div className="goods">{this.goodsList()}</div>
        </div>
      </div>
    );
  }
}
