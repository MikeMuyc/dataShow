import axios from './app'

//活动参与人数
export function getActivePeople() {
    return axios.get('/api/community/guashan/activity/neighbor/group-type-person-num');
}

//云共治类型统计
export function geteventype() {
    return axios.get('/api/community/guashan/govern/cloud/group-type');
}
//云共治告警总数
export function getAlarmTotal(data?:any) {
    return axios.get('/api/community/guashan/govern/cloud/count',data);
}
//入住居民人数
export function getCheckinPerson() {
    return axios.get('/api/community/guashan/neighbor/checkin-person-num');
}
//人才公寓总数
export function getApartmentNum() {
    return axios.get('/api/community/guashan/neighbor/total-room-num');
}

//商铺类型统计
export function getShopType() {
    return axios.get('/api/community/guashan/service/shop/group-scope');
}
