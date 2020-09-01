import React from 'react'
import './login.scss'
import Icon from '@/components/Icon'
export default class Login extends React.Component {
    render() {
        return (
            <div className="login">
                <img src="http://caunion.cdn.gongjiayun.cn/2020/5/13/RyqlsOt.png" alt="" />
                <div className="title">幸福上班族</div>
                <Icon iconName="iconshouye1"/>
            </div>
        )
    }
}