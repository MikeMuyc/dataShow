import axios from './app'

//人才公寓总数
export function getApartmentNum() {
    return axios.get('/api/community/guashan/neighbor/total-room-num');
}
//入住居民人数
export function getCheckinPerson() {
    return axios.get('/api/community/guashan/neighbor/checkin-person-num');
}
//入住人数趋势
export function getCheckinMonthNum() {
    return axios.get('/api/community/guashan/neighbor/checkin-month-num');
}
//入住人群画像
export function getCheckinpeople(typeId:string) {
    return axios.get('/api/community/guashan/neighbor/checkin-types',{typeId:typeId});
}



//社团数
export function getxiehuiNum() {
    return axios.get('/api/community/guashan/association/total-count');
}
//社团人数
export function getxiehuiPersonNum() {
    return axios.get('/api/community/guashan/association/total-person-num');
}
//社团人数
export function getxiehuitype() {
    return axios.get('/api/community/guashan/association/group-type');
}
//社团排行
export function getxiehuiRank() {
    return axios.get('/api/community/guashan/association/score-order');
}

//活动分类
export function getActiveType() {
    return axios.get('/api/community/guashan/activity/neighbor/group-type-count');
}
//活动参与人数
export function getActivePeople() {
    return axios.get('/api/community/guashan/activity/neighbor/group-type-person-num');
}
//活动总数
export function getActiveTotal() {
    return axios.get('/api/community/guashan/activity/neighbor/total-count');
}
//活动列表
export function getActiveList(data?:any) {
    return axios.get('/api/community/guashan/activity/neighbor/total-activity',data);
}


//活动轮播
export function getActiveSwiper() {
    return axios.get('/api/community/guashan/activity/neighbor/high-light');
}

//交易列表
export function getBusinessList() {
    return axios.get('/api/community/guashan/trading/simple-info');
}
//按年-交易次数
export function getBusinessNum() {
    return axios.get('/api/community/guashan/trading/group-month');
}
