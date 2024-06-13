import request from './request';
import {AxiosRequestConfig} from 'axios';
import {ChangeEvent, useEffect, useState} from "react";
import {SelectChangeEvent} from "@mui/material";
import {useAlertContext} from "context/AlertContext";

/**
 * 网络请求响应格式，T 是具体的接口返回类型数据
 */
interface CustomSuccessData<T> {
  code?: number;
  msg?: string;
  message?: string;
  data: T;
  count?: number
  [keys: string]: any;
}

/**
 * @description: 封装get请求方法
 * @param {string} url url 请求地址
 * @param {string | object} params 请求参数
 * @param {AxiosRequestConfig} config 请求配置
 * @return {Promise<CustomSuccessData<T>>} 返回的接口数据
 */
const get = <T>(url: string, params?: string | object, config?: AxiosRequestConfig): Promise<CustomSuccessData<T>> => {
  config = {
    method: 'get', // `method` 是创建请求时使用的方法
    url, // `url` 是用于请求的服务器 URL
    ...config,
  };
  if (params) {
    config.params = params;
  }
  return request(config);
};

/**
 * @description: 封装post请求方法
 * @param {string} url url 请求地址
 * @param {string | object} data 请求参数
 * @param {AxiosRequestConfig} config 请求配置
 * @return {Promise<CustomSuccessData<T>>} 返回的接口数据
 */
const post = <T>(
    url: string,
    data?: string | object,
    config?: AxiosRequestConfig
): Promise<CustomSuccessData<T>> => {
  config = {
    method: 'post',
    url,
    ...config,
  };
  if (data) {
    config.data = data;
  }
  return request(config);
};
const put = <T>(
  url: string,
  data?: string | object,
  config?: AxiosRequestConfig
): Promise<CustomSuccessData<T>> => {
  config = {
    method: 'put',
    url,
    ...config,
  };
  if (data) {
    config.data = data;
  }
  return request(config);
};

/**
 * @description: 封装patch请求方法
 * @param {string} url url 请求地址
 * @param {string | object} data 请求参数
 * @param {AxiosRequestConfig} config 请求配置
 * @return {Promise<CustomSuccessData<T>>} 返回的接口数据
 */
const patch = <T>(
    url: string,
    data?: string | object,
    config?: AxiosRequestConfig
): Promise<CustomSuccessData<T>> => {
  config = {
    method: 'patch',
    url,
    ...config,
  };
  if (data) {
    config.data = data;
  }
  return request(config);
};

/**
 * @description: 封装delete请求方法
 * @param {string} url url 请求地址
 * @param {string | object} params 请求参数
 * @param {AxiosRequestConfig} config 请求配置
 * @return {Promise<CustomSuccessData<T>>} 返回的接口数据
 */
const remove = <T>(
    url: string,
    params?: string | object,
    config?: AxiosRequestConfig
): Promise<CustomSuccessData<T>> => {
  config = {
    method: 'delete',
    url,
    ...config,
  };
  if (params) {
    config.params = params;
  }
  return request(config);
};

// 包裹请求方法的容器,使用 http 统一调用
const http = {
  get,
  post,
  put,
  patch,
  remove,
};

export const useRequest = (uri: string, params?: any) =>{
  const [data, setData] = useState<any>([])
  const [loading, setLoading] = useState<boolean>(false)
  const getData = async (params1?: {})=>{
    setLoading(true)
    let res = await http.get(uri, params1 || params)
    setLoading(false)
    if(res.code === 0){
      setData(res.data)
    }
    return
  }
  return [data, getData, loading]
}

export const useRequestPagination = (uri: string, defaultParams?: any) =>{
  const [data, setData] = useState<any>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [count, setCount] = useState<number>(0)
  const [page, setPage] = useState<number>(1)
  const [pageSize, setPageSize] = useState<string>('10')
  const [params, setParams] = useState<any>({})

  useEffect(()=>{
    getData()
  }, [page, pageSize])

  const {showMessage} = useAlertContext()

  const changePage = (event: ChangeEvent<unknown>, page: number) =>{
    setPage(page)
  }
  const changePageSize = (event: SelectChangeEvent) => {
    setPageSize(event.target.value)
  }
  const getData = async (newParams?: {})=>{
    const p = {...defaultParams, ...params, ...newParams}
    setParams(p)
    setLoading(true)
    let res = await http.get(uri, {...p, page: page, size: Number(pageSize)})
    setLoading(false)
    if(res.code === 0){
      setData(res.data)
      setCount(res.count as number)
    }else{
      showMessage('error', res.msg as string, 10)
    }
    return
  }

  return [data, getData, loading, page, pageSize, count, changePage, changePageSize]
}

export default http;