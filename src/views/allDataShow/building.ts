const bk1 = require("../../images/公区主题照片/潮玩主题-潮玩潮乐.jpg")
const bk2 = require("../../images/公区主题照片/电竞主题-荣耀之战.jpg")
const bk3 = require("../../images/公区主题照片/动漫主题-次元空间.jpg")
const bk4 = require("../../images/公区主题照片/工业主-机械时代.jpg")
const bk5 = require("../../images/公区主题照片/古风主题-国风诗韵.jpg")
const bk6 = require("../../images/公区主题照片/烘焙主题-烘焙日记.jpg")
const bk7 = require("../../images/公区主题照片/环保主题-绿色星光.jpg")
const bk8 = require("../../images/公区主题照片/旅行主题-世界那么大.jpg")
const bk9 = require("../../images/公区主题照片/美妆主题-国色天香.jpg")
const bk10 = require("../../images/公区主题照片/萌宠主题-猫狗大战.jpg")
const bk11 = require("../../images/公区主题照片/手作空间-手作慢生活.jpg")
const bk12 = require("../../images/公区主题照片/星空主题-星空记忆.jpg")
const bk13 = require("../../images/公区主题照片/阅读放空主题-书香花语.jpg")
const bk14 = require("../../images/公区主题照片/运动主题-我的挑战.jpg")

const lowEnergy1 = require("../../images/building/低能耗建筑1.jpg");
const lowEnergy2 = require("../../images/building/低能耗建筑2.jpg");
const lowEnergy3 = require("../../images/building/低能耗建筑3.jpg");
const lowEnergy4 = require("../../images/building/低能耗建筑4.jpg");
const lowEnergy5 = require("../../images/building/低能耗建筑5.jpg");

const makeup1 = require("../../images/building/makeup/makeup1.jpg");
const makeup2 = require("../../images/building/makeup/makeup2.jpg");
const makeup3 = require("../../images/building/makeup/makeup3.jpg");
const makeup4 = require("../../images/building/makeup/makeup4.jpg");
const makeup5 = require("../../images/building/makeup/makeup5.jpg");
const makeup6 = require("../../images/公区主题照片/美妆主题-国色天香.jpg");

const sport1 = require("../../images/公区主题照片/运动主题-我的挑战.jpg");
const sport2 = require("../../images/building/sport/sport1.png");
const sport3 = require("../../images/building/sport/sport2.png");
const sport4 = require("../../images/building/sport/sport3.png");
const sport5 = require("../../images/building/sport/sport4.png");

const pet1 = require("../../images/公区主题照片/萌宠主题-猫狗大战.jpg");

const school = require("../../images/building/学校点位.png");
const schoolHover = require("../../images/building/国际双语幼儿园.png");
const sport = require("../../images/building/户外运动空间icon.png");
const sportHover = require("../../images/building/户外运动空间.png");
const museum = require("../../images/building/展览馆icon.png");
const museumHover = require("../../images/building/艺术展览馆.png");
const park = require("../../images/building/社区文化公园icon.png");
const parkHover = require("../../images/building/社区文化公园.png");
const kindergartenHover = require("../../images/building/幼儿园.png");
const museumHover2 = require("../../images/building/运河文化户外展览馆.png");
const hygiene = require("../../images/building/社区卫生服务站icon.png");
const hygieneHover = require("../../images/building/社区卫生服务站.png");
const square = require("../../images/building/星空广场icon.png");
const squareHover = require("../../images/building/星空广场.png");
const sportp = require("../../images/building/体育健身中心点位.png");
const sportHover2 = require("../../images/building/体育健身中心.png");
const schoolHover2 = require("../../images/building/幸福学堂.png");

let imgList: any = {
    chaowan: {
        name: '潮玩主题-潮玩潮乐',
        src: bk1,
    },
    dianjing: {
        name: '电竞主题-荣耀之战',
        src: bk2,
    },
    dongman: [
        {
            name: '动漫主题-次元空间',
            src: bk3,
        }
    ],
    gongye: [
        {
            name: '工业主-机械时代',
            src: bk4,
        }
    ],
    gufeng: [
        {
            name: '古风主题-国风诗韵',
            src: bk5,
        }
    ],
    hongbei: [
        {
            name: '烘焙主题-烘焙日记',
            src: bk6,
        }
    ],
    huanbao: [
        {
            name: '环保主题-绿色星光',
            src: bk7,
        }]
    ,
    lvxing: [
        {
            name: '旅行主题-世界那么大',
            src: bk8,
        }
    ],
    meizhuang: [
        {
            name: '美妆主题-国色天香',
            src: bk9,
        }
    ],

    mengchong: [
        {
            name: '萌宠主题-猫狗大战',
            src: bk10,
        }
    ],
    shouzuo: [
        {
            name: '手作空间-手作慢生活',
            src: bk11,
        }
    ],
    xingkong: [
        {
            name: '星空主题-星空记忆',
            src: bk12,
        }
    ],
    yuedu: [
        {
            name: '阅读放空主题-书香花语',
            src: bk13,
        }
    ],
    yundong: [
        {
            name: '运动主题-我的挑战',
            src: bk14,
        }
    ],
}

let lowEnergyImageList: any = [
    {
        img: lowEnergy1,
        title: '',
        detail: '吊顶辐射板，其热辐射均匀健康，无风机、无对流、无扬尘，是一种极为舒适的热传递方式；圆孔装饰面式辐射板兼顾了美观和吊顶辐射板的功能性。',
    },
    {
        img: lowEnergy2,
        title: '雨水回收再利用',
        detail: '独特的伞状屋盖收集雨水，用于水幕、绿化灌溉、水晶喷泉，雨水回收利用系统与玻璃幕墙水幕降温系统的结合，是节能环保与生态建筑 的有机共存体现。',
    },
    {
        img: lowEnergy3,
        title: '自然通风体系+高效新风空调系统',
        detail: '满足室内温湿度需求；获得室外新鲜空气，达到更良好的室内空气品质；立面更为美观、成本最优；节能环保',
    },
    {
        img: lowEnergy4,
        title: '',
        detail: '屋面太阳能光伏板面积72㎡，蓄电池数量4块，根据杭州日照条件可提供室外LOGO（用电容量预留500W）19小时不间断供电。经过特殊处理的降温薄膜,将热量以红外辐射的方式传递出去,整个过程没有额外的能源消耗,降温节能，减少空调的电力消耗',
    },
    {
        img: lowEnergy5,
        title: '',
        detail: '',
    },
]

let makeupImageList: any = [
    {
        img: makeup1
    },
    {
        img: makeup2
    },
    {
        img: makeup3
    },
    {
        img: makeup4
    },
    {
        img: makeup5
    },
    {
        img: makeup6
    },
]

let sportImageList: any = [
    {
        name: '14天打卡减脂活动',
        img: sport1
    },
    {
        name: '14天打卡减脂活动',
        img: sport2
    },
    {
        name: '14天打卡减脂活动',
        img: sport3
    },
    {
        name: '14天打卡减脂活动',
        img: sport4
    },
    {
        name: '14天打卡减脂活动',
        img: sport5
    },
]

let petImageList: any = [
    {
        img: pet1
    }
]

let staticPoint: any = [
    {
        position:{
            x:'10.80%',
            y:'33.69%',
            left:-54,
            top:-40,
        },
        img: school,
        hoverImg:schoolHover,
    },
    {
        position:{
            x:'19.61%',
            y:'40.77%',
            left:-46,
            top:-40,
        },
        img: sport,
        hoverImg:sportHover,
    },
    {
        position:{
            x:'25.92%',
            y:'40.23%',
            left:-38,
            top:-58,
        },
        img: museum,
        hoverImg:museumHover,
    },
    {
        position:{
            x:'36.31%',
            y:'23.37%',
            left:-54,
            top:-40,
        },
        img: park,
        hoverImg:parkHover,
    },
    {
        position:{
            x:'45.67%',
            y:'42.58%',
            left:-21,
            top:-40,
        },
        img: school,
        hoverImg:kindergartenHover,
    },
    {
        position:{
            x:'30.49%',
            y:'50.16%',
            left:-66,
            top:-40,
        },
        img: museum,
        hoverImg:museumHover2,
    },
    {
        position:{
            x:'53.22%',
            y:'35.11%',
            left:-56,
            top:-42,
        },
        img: hygiene,
        hoverImg:hygieneHover,
    },
    {
        position:{
            x:'55.23%',
            y:'21.34%',
            left:-46,
            top:-40,
        },
        img: square,
        hoverImg:squareHover,
    },
    {
        position:{
            x:'63.02%',
            y:'79.87%',
            left:-46,
            top:-40,
        },
        img: sportp,
        hoverImg:sportHover2,
    },
    {
        position:{
            x:'57.45%',
            y:'82.88%',
            left:-34,
            top:-40,
        },
        img: school,
        hoverImg:schoolHover2,
    },
    {
        position:{
            x:'52.53%',
            y:'83.95%',
            left:-46,
            top:-40,
        },
        img: sport,
        hoverImg:sportHover,
    },
]
// @ts-ignore
export {imgList, lowEnergyImageList, makeupImageList, sportImageList, petImageList, staticPoint}
