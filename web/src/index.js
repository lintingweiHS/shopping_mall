
import './index.css';
import 'antd-mobile/dist/antd-mobile.css';
import './assets/iconfont/iconfont.css'
import React from 'react';
import ReactDOM from 'react-dom';
import store from './redux/redux';
import axios from '../lib/axios';


store.dispatch({
  type: 'store',
  key: 'axios',
  value: axios
})
import Router from './router/router'


ReactDOM.render((
  <Router />

), document.getElementById('root'))
