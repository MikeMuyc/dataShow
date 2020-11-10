const bk1 = require("../../images/neighborActive_review/cl1.png")
const bk2 = require("../../images/neighborActive_review/cl2.png")
const bk3 = require("../../images/neighborActive_review/cl3.png")
const bk4 = require("../../images/neighborActive_review/cl4.png")
const bk5 = require("../../images/neighborActive_review/cl5.png")
const bk6 = require("../../images/neighborActive_review/cl6.png")
const bk7 = require("../../images/neighborActive_review/健身.jpg")
const bk8 = require("../../images/neighborActive_review/文化培训.jpg")
const bk9 = require("../../images/neighborActive_review/养猫小技巧.jpg")
const bk10 = require("../../images/neighborActive_review/英语口语.jpg")


const bkl1 = require("../../images/neighborActive_review/new1.jpg")
const bkl2 = require("../../images/neighborActive_review/new2.jpg")
const bkl3 = require("../../images/neighborActive_review/new3.jpg")
const bkl4 = require("../../images/neighborActive_review/new4.jpg")
const bkl5 = require("../../images/neighborActive_review/new5.jpg")
const bkl6 = require("../../images/neighborActive_review/new6.jpg")

const re1 = require("../../images/neighborActive_review/音之舞舞蹈(城北中心).jpg")
const re2 = require("../../images/neighborActive_review/电力公司培训中心.jpg")
const re3 = require("../../images/neighborActive_review/康语儿童智能教育中心.jpg")
const re4 = require("../../images/neighborActive_review/红小兔创意早教.jpg")
const re5 = require("../../images/neighborActive_review/驾驶员理论培训点.jpg")
const re6 = require("../../images/neighborActive_review/羽林军羽毛球培训中心.jpg")
const re7 = require("../../images/neighborActive_review/拱墅未来人才培训基地.jpeg")
const re8 = require("../../images/neighborActive_review/杭州市安全生产培训中心.jpg")
const re9 = require("../../images/neighborActive_review/纳美培训学校.jpg")
const re10 = require("../../images/neighborActive_review/杭州山姆消防职业技能培训学校.jpg")

const re11 = require("../../images/neighborActive_review/杭州文澜中学.jpg")
const re12 = require("../../images/neighborActive_review/浙江大学城市学院(南校区).jpg")
const re13 = require("../../images/neighborActive_review/浙江大学(紫金港校区).jpg")
const re14 = require("../../images/neighborActive_review/崇贤中学.jpg")
const re15 = require("../../images/neighborActive_review/浙江大学(华家池校区).jpg")
const re16 = require("../../images/neighborActive_review/卖鱼桥小学教育集团.jpg")
const re17 = require("../../images/neighborActive_review/杭州育才中学.jpg")
const re18 = require("../../images/neighborActive_review/行知中学.jpg")
const re19 = require("../../images/neighborActive_review/杭州市锦绣中学.jpg")
const re20 = require("../../images/neighborActive_review/杭州上海世界外国语中学.jpeg")
const re21 = require("../../images/neighborActive_review/杭州幼儿师范学院第二附属幼儿园.jpg")
const re22 = require("../../images/neighborActive_review/杭钢幼儿园.jpg")


let imgList:any = [
    {
        name:'装点最美自己',
        img:bk1,
    },
    {
        name:'音乐课',
        img:bk2,
    },
    {
        name:'外语课',
        img:bk3,
    },

    {
        name:'农林园艺课',
        img:bk5,
    },
    {
        name:'心理学',
        img:bk6,
    },
    {
        name:'健身',
        img:bk7,
    },
    {
        name:'文化培训',
        img:bk8,
    },
    {
        name:'养猫小技巧',
        img:bk9,
    },

]

let newList:any = [
    {
        name:'张老师',
        img:bkl1,
        time:'2020-03-18 10:00-12:00',
        title:'考研',
        job:'大学教授',
        secondTitle:'考研政治',
        count:35,
        address:'瓜山南苑5幢602',
    },
    {
        name:'王老师',
        img:bkl2,
        time:'2020-05-08 11:00-12:00',
        title:'外语',
        job:'大学英语老师',
        secondTitle:'雅思',
        count:12,
        address:'瓜山新苑3幢102',
    },
    {
        name:'陈老师',
        img:bk10,
        time:'2020-04-08 14:00-16:00',
        title:'外语',
        job:'大学教授',
        secondTitle:'英语口语',
        count:61,
        address:'瓜山北苑1幢301',
    },
    {
        name:'王老师',
        img:bk4,
        time:'2020-04-12 18:00-22:00',
        title:'艺术',
        job:'大学教授',
        secondTitle:'艺术设计课',
        count:35,
        address:'瓜山南苑5幢602',
    },
    {
        name:'张老师',
        img:bkl3,
        time:'2020-05-12 18:00-20:00',
        title:'新媒体',
        job:'新媒体博主',
        secondTitle:'新媒体讲解',
        count:78,
        address:'瓜山南苑3幢102',
    },
    {
        name:'李现',
        img:bkl4,
        time:'2019-12-06 16:00-17:30',
        title:'摄影',
        job:'摄影爱好者',
        secondTitle:'摄影课堂',
        count:66,
        address:'瓜山南苑5幢602',
    },
]

let resourceList1:any = [
    {
        name:'音之舞舞蹈(城北中心)',
        address:'温州路38号3楼',
        phone:'(0571)87150653',
        distan:'',
        img:re1,
    },
    {
        name:'电力公司培训中心',
        address:'舟山东路91号',
        phone:'(0571)87154119',
        distan:'',
        img:re2,
    },
    {
        name:'康语儿童智能教育中心',
        address:'金华路88号尚品商务楼三楼',
        phone:'18958173126',
        distan:'',
        img:re3,
    },
    {
        name:'红小兔创意早教',
        address:'杭州市余杭区通运街166号南北盛德国际2幢1楼',
        phone:'17367051892',
        distan:'',
        img:re4,
    },
    {
        name:'驾驶员理论培训点',
        address:'浙江省杭州市拱墅区花园岗街209号',
        phone:'(0571)85061106',
        distan:'',
        img:re5,
    },
    {
        name:'羽林军羽毛球培训中心',
        address:'拱墅区祥园路38号',
        phone:'(0571)88161777',
        distan:'',
        img:re6,
    },
    {
        name:'拱墅未来人才培训基地',
        address:'浙江省杭州市拱墅区祥园路39-1号',
        phone:'17754149963',
        distan:'',
        img:re7,
    },
    {
        name:'杭州市安全生产培训中心',
        address:'杭州市下城区重机巷58号',
        phone:'(0571)88469524',
        distan:'',
        img:re8,
    },
    {
        name:'纳美培训学校',
        address:'黄姑山路48号拓峰科技园1号楼2楼',
        phone:'17852541130',
        distan:'',
        img:re9,
    },
    {
        name:'杭州山姆消防职业技能培训学校',
        address:'石桥街道石祥路59号新华经济创意园19幢东5楼',
        phone:'13606526275',
        distan:'',
        img:re10,
    },
];
let resourceList2:any = [
    {
        name:'杭州文澜中学',
        address:'浙江省杭州市拱墅区通益路301号',
        phone:'(0571)81952901',
        distan:'',
        img:re11,
    },
    {
        name:'浙江大学城市学院(南校区)',
        address:'杭州市拱墅区湖州街51号',
        phone:'(0571)88295000',
        distan:'',
        img:re12,
    },
    {
        name:'浙江大学(紫金港校区)',
        address:'杭州市西湖区余杭塘路866号',
        phone:'(0571)87951111',
        distan:'',
        img:re13,
    },
    {
        name:'崇贤中学',
        address:'前村街2号-16号',
        phone:'(0571)86274287',
        distan:'',
        img:re14,
    },
    {
        name:'浙江大学(华家池校区)',
        address:'杭州市江干区凯旋路268号',
        phone:'(0571)86971100',
        distan:'',
        img:re15,
    },
    {
        name:'卖鱼桥小学教育集团',
        address:'后横港路308号',
        phone:'(0571)86457710',
        distan:'',
        img:re16,
    },
    {
        name:'杭州育才中学',
        address:'浙江省杭州市拱墅区冠军路8号',
        phone:'(0571)88298028',
        distan:'',
        img:re17,
    },
    {
        name:'行知中学',
        address:'浙江省杭州市拱墅区大关苑路58号',
        phone:'(0571)88316672',
        distan:'',
        img:re18,
    },
    {
        name:'杭州市锦绣中学',
        address:'杭州市拱墅区登云路丰登街东口',
        phone:'(0571)88903788',
        distan:'',
        img:re19,
    },
    {
        name:'杭州上海世界外国语中学',
        address:'虎山公园北',
        phone:'(0571)81762012',
        distan:'',
        img:re20,
    },
    {
        name:'浙江师范大学杭州幼儿师范学院第二附属幼儿园',
        address:'石祥路239号双湾国际城20栋',
        phone:'(0571)84954154',
        distan:'',
        img:re21,
    },
    {
        name:'杭钢幼儿园',
        address:'浙江省杭州市拱墅区杭钢南苑社区36号',
        phone:'(0571)85034264',
        distan:'',
        img:re22,
    },
];

export {imgList,newList,resourceList1,resourceList2}
