import axios from './app'

//服务管家统计总量
export function getguanjiaCalc() {
    return axios.get('/api/community/guashan/service/steward/total-count');
}
//服务管家-本年数据
export function getguanjiaEchart() {
    return axios.get('/api/community/guashan/service/steward/group-month');
}

//品牌logo
export function getLogo() {
    return axios.get('/api/community/guashan/service/shop/logo');
}
//门禁总数
export function getdoor() {
    return axios.get('/api/community/guashan/service/door-record/total-count');
}
//门禁列表
export function getdoorList() {
    return axios.get('/api/community/guashan/service/door-record');
}
//商铺类型统计
export function getShopType() {
    return axios.get('/api/community/guashan/service/shop/group-scope');
}
//商铺总数
export function getShopNum() {
    return axios.get('/api/community/guashan/service/shop/total-count');
}

