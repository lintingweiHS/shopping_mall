import axios from 'axios';
import qs from 'qs';
// 环境变量
let env = process.env.NODE_ENV;

// development开发 test测试  production生产
// let baseUrl = '';
// if (env === 'development') {
//   baseUrl = 'http://dev8.xfsbz.cn/';
// } else if (env === 'test') {
//   baseUrl = '待配置';
// } else if (env === 'production') {
//   baseUrl = 'http://huruqing.cn:3002';
// }



// 创建axios实例
const service = axios.create({
  timeout: 30000,
  baseURL: process.env.NODE_ENV === "development" ? '/api' : ""
});

// request拦截器(请求前的处理)
service.interceptors.request.use(
  config => {
    if (config.method === 'post' || config.method === 'put') {
      config.data = qs.stringify(config.data);
    }
    if (!config.headers.Authorization) {
      config.headers.Authorization = 'Bearer ' + (window.localStorage.getItem('Authorization') || '');
    }
    var sbzRegion = localStorage.getItem('sbzRegion');
    if (sbzRegion) {
      sbzRegion = JSON.parse(sbzRegion);
      config.headers['SBZ-REGION'] = sbzRegion.value;
    }
    var company = localStorage.getItem('company');
    if (company) {
      config.headers['Company'] = company;
    }

    var actId = localStorage.getItem('activityId');
    if (actId) {
      config.headers['ACT-ID'] = actId;
    }
    return config
  },
  error => {
    // Do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response 拦截器(数据返回后的处理)
service.interceptors.response.use(
  response => {
    const res = response.data
    if (res.status == 200) {
      return response.data
    } else if (res.status == 401) {
      // console.log(123)
      // location.href = '/login'
    } else {
      return Promise.reject('error')
    }
  },
  error => {
    const err = 'err' + error
    console.log(err.includes('401'))
    if (err.includes('401')) {
      location.href = '/login'
    }
    return Promise.reject(error)
  }
)


const $Get = (url, params, config = {}) => {
  return service.get(url, {
    params: params,
    ...config
  })
}

const $Post = (url, data, config = {}) => {
  return service.post(url, data, config)
}

const $Delete = (url, config = {}) => {
  return instance({
    url: url,
    method: 'delete',
    ...config
  })
}

const $Put = (url, data, config = {}) => {
  return instance.put(url, data, config)
}
// let $request = {
//     Get:Get,
//     Post:Post,
//     Delete:Delete,
//     Put:Put
// };
export default {
  $Get,
  $Post,
  $Delete,
  $Put
}
