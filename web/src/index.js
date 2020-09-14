
import './index.css';
import 'antd-mobile/dist/antd-mobile.css';
import './assets/iconfont/iconfont.css'
import React from 'react';
import ReactDOM from 'react-dom';
import store from './redux/redux';
import axios from '../lib/axios';

localStorage.setItem('activityId', '2c3b41a5-c6be-4872-b21f-2e92e58bc9ba')
localStorage.setItem('company', '13')
localStorage.setItem('sbzRegion', '{"value":"1_2802_2821","label":"北京 东城区 内环到三环里"}')
store.dispatch({
  type: 'store',
  key: 'axios',
  value: axios
})
import Router from './router/router'


ReactDOM.render((
  <Router />

), document.getElementById('root'))
