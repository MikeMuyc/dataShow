import axios from './app'

//云共治告警总数
export function getAlarmTotal(data?:any) {
    return axios.get('/api/community/guashan/govern/cloud/count',data);
}
//云共治处理统计
export function getSolveCalc() {
    return axios.get('/api/community/guashan/govern/cloud/group-status');
}
//云共治类型统计
export function geteventype() {
    return axios.get('/api/community/guashan/govern/cloud/group-type');
}
//云共治告警列表
export function getAlarmList(data?:any) {
    return axios.get('/api/community/guashan/govern/cloud/info',data);
}


// 阳光厨房告警总数
export function getKitchenAlarm() {
    return axios.get('/api/community/guashan/govern/kitchen/count');
}
// 阳光厨房告警列表
export function getKitchenList(data?:any) {
    return axios.get('/api/community/guashan/govern/kitchen/info',data);
}
// 安全用电设备总数
export function geteleEquipment() {
    return axios.get('/api/community/guashan/govern/cloud/e-device-count');
}

//党建轮播
export function getdangjianSwiper() {
    return axios.get('/api/community/guashan/govern/activity/party/high-light');
}

//党员总数
export function getMemberNum() {
    return axios.get('/api/community/guashan/govern/communist/total-count');
}
//党员列表
export function getMemberList() {
    return axios.get('/api/community/guashan/govern/communist');
}

//志愿者总数
export function getVolunteerNum() {
    return axios.get('/api/community/guashan/govern/volunteer/total-count');
}
//志愿者top3
export function getVolunteerTop() {
    return axios.get('/api/community/guashan/govern/volunteer/excellent');
}
