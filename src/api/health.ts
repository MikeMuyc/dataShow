import axios from './app'

//入住居民男女生数量
export function getcheckinSex() {
    return axios.get('/api/community/guashan/neighbor/checkin-gender-num');
}

//入住人群画像
export function getCheckinpeople(typeId:string) {
    return axios.get('/api/community/guashan/neighbor/checkin-types',{typeId:typeId});
}


//家庭医生人数
export function getFamilyDoctor() {
    return axios.get('/api/community/guashan/health/family-doctor/person-num');
}
