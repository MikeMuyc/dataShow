import Vue from 'vue'
import axios from 'axios'

import qs from 'qs'


const timeout = 10000;
Vue.prototype.$http = axios;


export default class myaxios{
    baseURL:string = `./api`;
    proUrl:string = ``;
    constructor(url?: string,pUrl?: string) { //constructor是一个构造方法，用来接收参数
        if (url !== undefined) {
            this.baseURL = url;
        }
        if (pUrl) {
            this.proUrl = pUrl;
        }
    }
    post(url:string, data?:any) {
        if (process.env.NODE_ENV === 'development') {
            //开发环境 do something
            axios.defaults.baseURL = this.baseURL;
        }else{
            axios.defaults.baseURL = this.proUrl;
        }
        return axios({
            method: 'post',
            url: url,
            data: data,
            timeout: timeout,
            withCredentials: true,
            headers: {

            }
        })
    }

    get(url:string, params?:any) {
        if (process.env.NODE_ENV === 'development') {
            //开发环境 do something
            axios.defaults.baseURL = this.baseURL;
        }else{
            axios.defaults.baseURL = this.proUrl;
        }
        return axios({
            method: 'get',
            url: url,
            params: params,
            timeout: timeout,
            withCredentials: true,
            headers: {

            }
        })
    }
    delete(url:string, data?:any) {
        if (process.env.NODE_ENV === 'development') {
            //开发环境 do something
            axios.defaults.baseURL = this.baseURL;
        }else{
            axios.defaults.baseURL = this.proUrl;
        }
        return axios({
            method: 'delete',
            url: url,
            data: data,
            timeout: timeout,
            withCredentials: true,
            headers: {

            }
        })
    }
    put(url:string, data?:any){
        if (process.env.NODE_ENV === 'development') {
            //开发环境 do something
            axios.defaults.baseURL = this.baseURL;
        }else{
            axios.defaults.baseURL = this.proUrl;
        }
        return axios({
            method: 'put',
            url: url,
            data: data,
            timeout: timeout,
            withCredentials: true,
            headers: {

            }
        })
    }
}
