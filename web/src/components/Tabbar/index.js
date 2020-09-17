import React, { Component } from 'react'
import { TabBar } from 'antd-mobile'
import Icon from '@/components/Icon'
class Tabbar extends Component {
    constructor(props) {
        super(props)
        console.log(props)
        this.state = {
            selectedTab: props.selectedTab
        }
    }
    render() {

        return (
            < div className="tabbar" style={{ "position": "fixed", bottom: '0', width: '100%' }}>
                <TabBar
                    unselectedTintColor="#2d2d2d"
                    tintColor="#db3d3c"
                    barTintColor="white"
                    hidden={this.state.hidden}
                >
                    <TabBar.Item
                        title="首页"
                        key="home"
                        icon={<div><Icon iconName="iconshouye1" /></div>}
                        selectedIcon={<div><Icon iconName="iconshouye1" /></div>}
                        // badge={1}
                        onPress={() => {
                            location.href = '/'
                         
                        }}
                        selected={this.props.selectedTab === '/'}
                    >
                    </TabBar.Item>
                    <TabBar.Item
                        icon={<div><Icon iconName="iconfenlei4" /></div>}
                        selectedIcon={<div><Icon iconName="iconfenlei4" /></div>}
                        title="分类"
                        key="classification"
                        onPress={() => {
                            location.href = '/classification'
                        }}
                        selected={this.props.selectedTab == '/classification'}
                    >
                    </TabBar.Item>
                    <TabBar.Item
                        icon={<div><Icon iconName="icongouwuche1" /></div>}
                        selectedIcon={<div><Icon iconName="icongouwuche1" /></div>}
                        title="购物车"
                        key="shoppingcart"
                        onPress={() => {
                            location.href = '/shoppingcart'
                        }}
                        selected={this.props.selectedTab == '/shoppingcart'}
                    >
                    </TabBar.Item>
                    <TabBar.Item
                        icon={<div><Icon iconName="iconwode1" /></div>}
                        selectedIcon={<div><Icon iconName="iconwode1" /></div>}
                        title="我的"
                        key="user"
                        onPress={() => {
                            location.href = '/user'
                        }}
                        selected={this.props.selectedTab === '/user'}
                    >
                    </TabBar.Item>
                </TabBar>
            </div >
        )
    }


}

export default Tabbar