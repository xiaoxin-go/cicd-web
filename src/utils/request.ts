/****   request.ts   ****/
import {ApiUri} from "api";
import axios, { AxiosError, AxiosResponse } from 'axios';

// 创建新的axios实例
const service = axios.create({
  // 公共接口
  baseURL: ApiUri.prefix,
  // 超时时间 单位是ms，这里设置了5s的超时时间
  timeout: 5000,
});

// 添加一个请求拦截器
service.interceptors.request.use(
    (config: any) => {
      // 发请求前做的一些处理，数据转化，配置请求头，设置token,设置loading等
      // 每次发送请求之前判断pinia中是否存在token,如果存在，则统一在http请求的header都加上token，这样后台根据token判断你的登录情况

      // 数据转换，判断数据格式为formdata还是json格式，高版本的axios会默认转换，如果使用的是低版本的需要手动转换
      // json格式
      // config.data = JSON.stringify(config.data);
      return config;
    },
    (error: AxiosError) => {
      // 出现请求错误，清除toast
      return Promise.reject(error);
    }
);

// 添加一个响应拦截器
service.interceptors.response.use(
    (response: AxiosResponse) => {
      const { status, data } = response;
      if (status === 200) {
        // 接口网络请求成功，关闭等待提示
        if (data.code === 0) {
          // 接口请求结果正确
          return data;
        } else {
          return data;
        }
      }
    },
    (error: AxiosError) => {
      const { response } = error;
      // 响应失败，关闭等待提示
      console.log(response)
      return Promise.reject(error);
    }
);

export default service;