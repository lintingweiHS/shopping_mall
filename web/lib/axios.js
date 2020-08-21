import axios from 'axios';
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
    // if (store.getters.token) {
    //   config.headers['X-Token'] = getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
    // }
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
    if (res.code == 666) {
      return response.data
    } else if (res.code == 603) {
      // 跳转到登陆页面
    } else {
      return Promise.reject('error')
    }
  },
  error => {
    console.log('err' + error) // for debug
    return Promise.reject(error)
  }
)


const Get = (url, params, config = {}) => {
    return service.get(url, {
        params: params,
        ...config
    })
}

const Post = (url, data, config = {}) => {
    return service.post(url, data, config)
}

const Delete = (url, config = {}) => {
    return instance({
        url: url,
        method: 'delete',
        ...config
    })
}

const Put = (url, data, config = {}) => {
    return instance.put(url, data, config)
}
// let $request = {
//     Get:Get,
//     Post:Post,
//     Delete:Delete,
//     Put:Put
// };
export default {
  Get,
  Post,
  Delete,
  Put
}
