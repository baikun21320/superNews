import {request, requestjuhe} from "@/network/request";

export function getHomeMultidata() {
  return request({
    url: '/home/multidata'
  })
}

export function getHomeGoods(type, page) {
  return request({
    url: '/home/data',
    params: {
      type,
      page
    }
  })
}
export function getHomenews(type,page) {
  return requestjuhe({
    url: '/api/index?key=d70b88647838af28e4df47a868168365',
    //url: 'http://v.juhe.cn/toutiao/index?key=d70b88647838af28e4df47a868168365',
    params: {
      type,
      page
    }
  })
}
