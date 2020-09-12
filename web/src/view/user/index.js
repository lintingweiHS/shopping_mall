import React, { Component } from 'react'
import axios from '_lib/axios.js'
import Icon from '@/components/Icon'
import './index.scss'
import Tabbar from '@/components/Tabbar/'
export default class User extends Component {
    constructor(props) {
        super(props),
            this.state = {
                userInfo: { companyInfo: {} }
            }
    }
    componentDidMount() {
        this.getInfo()
    }
    getInfo = () => {
        axios.$Get('api/usercenter/info').then(res => {
            this.setState({
                userInfo: res.data
            })
            console.log(this.state.userInfo)
        })
    }
    render() {
        return (
            <div className="user">
                <div className="user-header-wrap">
                    <div className="top-bg"></div>
                    <div className="user-header">
                        <div className="user-avatar">
                            <img src={this.state.userInfo.companyInfo.avatar} alt="" />
                        </div>
                        <div className="info">
                            <div className="name">{this.state.userInfo.name}</div>
                            <div className="balance">账号余额：{this.state.userInfo.companyInfo.score}</div>
                        </div>
                    </div>
                    <div className="order-status">
                        <div className="order-status-icon">
                            <img src={require('@/assets/images/pay_01.png')} alt="" />
                            <div className="type">待付款</div>
                        </div>
                        <div className="order-status-icon">
                            <img src={require('@/assets/images/pay_02.png')} alt="" />
                            <div className="type">待发货</div>
                        </div>
                        <div className="order-status-icon">
                            <img src={require('@/assets/images/pay_03.png')} alt="" />
                            <div className="type">待收货</div>
                        </div>
                        <div className="order-status-icon">
                            <img src={require('@/assets/images/pay_04.png')} alt="" />
                            <div className="type">退款/售后</div>
                        </div>
                    </div>
                </div>
                <div className="user-module">
                    <div className="item">
                        <div className="title">
                            <div className="img">
                                <img src={require('@/assets/images/shouhuodizhi.png')} alt="" />
                            </div>
                            <div className="text">收货地址</div>
                        </div>
                        <Icon iconName="icon202-copy" />
                    </div>
                    <div className="item">
                        <div className="title">
                            <div className="img">
                                <img src={require('@/assets/images/nv-fill-order.png')} alt="" />
                            </div>
                            <div className="text">订单管理</div>
                        </div>
                        <Icon iconName="icon202-copy" />
                    </div>
                    <div className="item">
                        <div className="title">
                            <div className="img">
                                <img src={require('@/assets/images/fast-booking.png')} alt="" />
                            </div>
                            <div className="text">我的预定</div>
                        </div>
                        <Icon iconName="icon202-copy" />
                    </div>
                    <div className="item">
                        <div className="title">
                            <div className="img">
                                <img src={require('@/assets/images/shouhou-copy-copy.png')} alt="" />
                            </div>
                            <div className="text">售后记录</div>
                        </div>
                        <Icon iconName="icon202-copy" />
                    </div>
                    <div className="item">
                        <div className="title">
                            <div className="img">
                                <img src={require('@/assets/images/yijian.png')} alt="" />
                            </div>
                            <div className="text">意见反馈</div>
                        </div>
                        <Icon iconName="icon202-copy" />
                    </div>
                </div>
                <Tabbar selectedTab="user" />
            </div>
        )
    }
}
