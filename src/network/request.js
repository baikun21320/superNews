import axios from "axios";

export function request(config) {
  //创建axios实例
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })
  //请求拦截
  instance.interceptors.request.use(config =>{
    return config
  })
  // ,err =>{
  //
  // })
  //响应拦截
  instance.interceptors.response.use(res =>{

    return res
  },err =>{
    console.log(err);
  })
  return instance(config)
}
export function requestjuhe(config) {
  //创建axios实例
  const instance = axios.create({
    timeout: 5000,
  })
  //请求拦截
  instance.interceptors.request.use(config =>{
    return config
  })
  // ,err =>{
  //
  // })
  //响应拦截
  instance.interceptors.response.use(res =>{

    return res
  },err =>{
    console.log(err);
  })

  return instance(config)
}
