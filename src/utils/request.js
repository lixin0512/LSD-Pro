import axios from "axios";
import qs from "querystring";
import Msg from '@/utils/message';

const msg = new Msg();
//环境
const NODE_ENV = import.meta.env.VITE_NODE_ENV;
if (NODE_ENV === "development") {
  axios.defaults.baseURL = "/api";
} else if (NODE_ENV === "production") {
  axios.defaults.baseURL = "http://prod.xxx.com";
}else if (NODE_ENV === "test") {
  axios.defaults.baseURL = "http://test.xxx.com";
}

const instance = axios.create({
  timeout: 5000,
});

const errorHandle = (status, info) => {
  switch (status) {
    case 400:
      msg.error("语义有误");
      break;
    case 401:
      msg.error("服务器认证失败");
      break;
    case 403:
      msg.error("服务器拒绝访问");
      break;
    case 404:
      msg.error("地址错误");
      break;
    case 500:
      msg.error("服务器出错");
      break;
    case 502:
      msg.error("服务器无响应");
      break;
    default:
      msg.error(info);
      break;
  }
};

// 请求拦截器
instance.interceptors.request.use(
  (config) => {
    if (config.method === "post") {
      config.data == qs.stringify(config.data);
    }

    //config 包含网络请求的所有信息
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 响应拦截器
instance.interceptors.response.use(
  (response) => {
    return response.status === 200
      ? Promise.resolve(response)
      : Promise.reject(response);
  },
  (error) => {
    const { response } = error;
    errorHandle(response.status, response.info);
  }
);

export default instance;
