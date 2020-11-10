import myaxios from "@datashow/axios";
let axios = new myaxios();

export default axios;
//获取当前用户信息
export function getUserInformation() {
    return axios.get('/rest/realty/user/info');
}
//修改密码
export function changePassword(params:any) {
    return axios.get(`/rest/realty/user/changePwd`,params);
}
