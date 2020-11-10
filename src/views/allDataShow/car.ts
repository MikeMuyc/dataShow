const bk1 = require("../../images/traffic/bk1.png")
const bk2 = require("../../images/traffic/bk2.png")
const bk3 = require("../../images/traffic/bk3.png")
const bk4 = require("../../images/traffic/bk4.png")
const bk5 = require("../../images/traffic/bk5.png")

let bikeList :any =  [
    {
        name:'新苑东门',
        img:bk1,
    },
    {
        name:'拱宸桥地铁A口',
        img:bk2,
    },
    {
        name:'北苑北南门',
        img:bk3,
    },
    {
        name:'东苑南门',
        img:bk4,
    },
    {
        name:'',
        img:bk5,
    },

]

const c1 = require("../../images/neighborActive_review/c1.png")
const c2 = require("../../images/neighborActive_review/c2.png")
const c3 = require("../../images/neighborActive_review/c3.png")
const c4 = require("../../images/neighborActive_review/c4.png")
const c5 = require("../../images/neighborActive_review/c5.png")
const c6 = require("../../images/neighborActive_review/c6.png")
const c7 = require("../../images/neighborActive_review/c7.png")

let carList :any = [
    c1,
    c2,
    c3,
    c4,
    c5,
    c6,
    c7
]
const st1 = require("../../images/traffic/st1.png")
const st2 = require("../../images/traffic/st2.png")
const st3 = require("../../images/traffic/st3.jpg")

let stationList:any = [
    {
        name:'瓜山站点',
        address:'杭州市拱墅区拱康路与科祥街交叉路口往西南约50米',
        busName:'151h路;347路;347路区间;8220路;8220路区间;b7线',
        img:st1,
    },
    {
        name:'瓜山北苑站点',
        address:'拱康路与瓜山路交叉口东50米',
        busName:'151h路;342路;347路;347路区间;7277路;8220路;8220路区间;b7线',
        img:st2,
    },
    {
        name:'瓜山南苑站点',
        address:'浙江省杭州市拱墅区石祥路319号向南300米',
        busName:'95路;151h路',
        img:st3,
    }
]

export {carList,bikeList,stationList}

