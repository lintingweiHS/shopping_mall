import React from 'react'
import './login.scss'
import Icon from '@/components/Icon'
import { Toast } from 'antd-mobile';
import axios from '_lib/axios.js'
export default class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            time: 0,
            phone: '',
            yzm: ''
        }
    }
    componentDidMount() {

    }
    handleChange = (e) => {
        let key = e.target.name;
        this.setState({
            [key]: e.target.value
        })
    }
    sendSMS = () => {
        axios.$Post('api/store/verify_code?access_token=' + this.state.phone, { mobile: this.state.phone }).then(res => {
            console.log(res)
        })
    }
    login = ()=>{
        axios.$Post(
            "api/passport/login-by-token?access_token=" + this.state.phone,
            {
              username: this.state.phone,
              token: this.state.yzm,
              type: 'phone'
            }
          ).then(res => {
            if (res.success) {
              localStorage.setItem("Authorization", res.data.accessToken);
              location.href = '/home'
            } 
          });
    }
    setTime = () => {
        const flag = RegExp(/^1\d{10}$/).test(this.state.phone);
        if (!flag) {
            Toast.fail('手机号格式错误', 1)
            return
        }
        this.setState({
            time: 60
        })
        this.sendSMS()
        const timer = setInterval(() => {
            let newTime = this.state.time - 1
            this.setState({
                time: newTime
            })
            if (newTime <= 0) {
                clearInterval(timer)
            }
        }, 1000)

    }

    setBtn = () => {
        if (this.state.time == 0) {
            return (<div className="btn" onClick={this.setTime}>
                发送
            </div>)
        } else {
            return <div className="btn grey" >等待({this.state.time})秒</div>
        }
    }

    render() {
        return (
            <div className="login">
                <img src="http://caunion.cdn.gongjiayun.cn/2020/5/13/RyqlsOt.png" alt="" />
                <div className="title">幸福上班族</div>
                <div className="oInps">
                    <div className="phone">
                        <Icon iconName="iconuserpro" />
                        <input name="phone" value={this.state.phone} onChange={this.handleChange} placeholder="请输入手机号或邮箱" type="text" />
                    </div>
                    <div className="yzm">
                        <Icon iconName="iconpassword" />
                        <input name="yzm" value={this.state.yzm} onChange={this.handleChange} placeholder="请输入验证码" type="text" />
                        {this.setBtn()}
                    </div>
                </div>
                <div className="danger" onClick={this.login} >
                    登录/注册
                </div>
                <div className="chuchu">
                    ©上海上班族电子商务有限公司
                </div>
                <div className="connect">联系客服</div>
            </div>
        )
    }
}