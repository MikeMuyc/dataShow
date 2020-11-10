import axios from './app'

//查询最近1年用电情况
export function getelectricity() {
    return axios.get('/api/community/guashan/lc/energy/electricity/group-month');
}
//查询总用电情况
export function getelectricityTotal(data?:any) {
    return axios.get('/api/community/guashan/lc/energy/electricity/total-count',data);
}
//用电环比上月
export function getelectricity_hb() {
    return axios.get('/api/community/guashan/lc/energy/electricity/monthly-ratio');
}
//查询最近1年用水情况
export function getWater() {
    return axios.get('/api/community/guashan/lc/energy/water/group-month');
}
//查询总用水情况
export function getWaterTotal(data?:any) {
    return axios.get('/api/community/guashan/lc/energy/water/total-count',data);
}
//用水环比上月
export function geWater_hb() {
    return axios.get('/api/community/guashan/lc/energy/water/monthly-ratio');
}


//温湿度
export function gettemperature(data?:any) {
    return axios.get('/api/community/guashan/lc/weather/now',data);
}
