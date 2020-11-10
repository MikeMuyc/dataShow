import axios from './app'

//主题列表
export function getThemeList() {
    return axios.get('/api/community/guashan/building/theme');
}
//主题图片信息
export function getThemePic(themeId:string) {
    return axios.get(`/api/community/guashan/building/theme/${themeId}/pictures`);
}
//人才公寓总数
export function getApartmentNum() {
    return axios.get('/api/community/guashan/neighbor/total-room-num');
}
