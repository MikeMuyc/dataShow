import axios from './app'

//入住居民人数
export function getCheckinPerson() {
    return axios.get('/api/community/guashan/neighbor/checkin-person-num');
}
//门禁总数
export function getdoor() {
    return axios.get('/api/community/guashan/service/door-record/total-count');
}

//云共治处理统计
export function getSolveCalc() {
    return axios.get('/api/community/guashan/govern/cloud/group-status');
}
