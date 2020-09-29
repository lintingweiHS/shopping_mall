import React, { Component } from "react";
import { TabBar } from "antd-mobile";
import Icon from "@/components/Icon";
import { withRouter, link } from "react-router-dom";
class Tabbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: "",
      key: false,
    };
  }
  componentDidMount() {
    this.getPath();
    this.props.history.listen(() => {
      this.getPath();
    });
  }
  getPath = () => {
    const path = location.pathname;
    if (
      path === "/" ||
      path === "/classification" ||
      path === "/shoppingcart" ||
      path === "/user"
    ) {
      this.setState({
        key: true,
        selectedTab: path,
      });
    } else {
      this.setState({
        key: false,
      });
    }
  };
  render() {
    return (
      <div
        className="tabbar"
        style={{
          position: "fixed",
          bottom: "0",
          width: "100%",
          display: this.state.key ? "block" : "none",
        }}
      >
        <TabBar
          unselectedTintColor="#2d2d2d"
          tintColor="#db3d3c"
          barTintColor="white"
          hidden={this.state.hidden}
        >
          <TabBar.Item
            title="首页"
            key="home"
            icon={
              <div>
                <Icon iconName="iconshouye1" />
              </div>
            }
            selectedIcon={
              <div>
                <Icon iconName="iconshouye1" />
              </div>
            }
            // badge={1}
            onPress={() => {
              this.props.history.push("/");
            }}
            selected={this.state.selectedTab === "/"}
          ></TabBar.Item>
          <TabBar.Item
            icon={
              <div>
                <Icon iconName="iconfenlei4" />
              </div>
            }
            selectedIcon={
              <div>
                <Icon iconName="iconfenlei4" />
              </div>
            }
            title="分类"
            key="classification"
            onPress={() => {
              this.props.history.push("/classification");
            }}
            selected={this.state.selectedTab == "/classification"}
          ></TabBar.Item>
          <TabBar.Item
            icon={
              <div>
                <Icon iconName="icongouwuche1" />
              </div>
            }
            selectedIcon={
              <div>
                <Icon iconName="icongouwuche1" />
              </div>
            }
            title="购物车"
            key="shoppingcart"
            onPress={() => {
              this.props.history.push("/shoppingcart");
            }}
            selected={this.state.selectedTab == "/shoppingcart"}
          ></TabBar.Item>
          <TabBar.Item
            icon={
              <div>
                <Icon iconName="iconwode1" />
              </div>
            }
            selectedIcon={
              <div>
                <Icon iconName="iconwode1" />
              </div>
            }
            title="我的"
            key="user"
            onPress={() => {
              this.props.history.push("/user");
            }}
            selected={this.state.selectedTab === "/user"}
          ></TabBar.Item>
        </TabBar>
      </div>
    );
  }
}

export default withRouter(Tabbar);
