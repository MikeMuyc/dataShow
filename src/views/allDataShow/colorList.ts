const colorList:any = [
    `#ff7f00`,
    `#00ffbf`,
    `#3366ff`,
    `#794cff`,
    `#e83a74`,
];
const colorLinear:any = [
        {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
                offset: 0, color: '#ffecb2' // 0% 处的颜色
            }, {
                offset: 1, color: '#ff7f00' // 100% 处的颜色
            }],

        },
        {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
                offset: 0, color: '#99ffe5' // 0% 处的颜色
            }, {
                offset: 1, color: '#00ffbf' // 100% 处的颜色
            }],
        },
        {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
                offset: 0, color: '#6699ff' // 0% 处的颜色
            }, {
                offset: 1, color: '#3366ff' // 100% 处的颜色
            }],
        },
        {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
                offset: 0, color: '#4c5bff' // 0% 处的颜色
            }, {
                offset: 1, color: '#794cff' // 100% 处的颜色
            }],
        },
        {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
                offset: 0, color: '#ff8cb2' // 0% 处的颜色
            }, {
                offset: 1, color: '#e83a74' // 100% 处的颜色
            }],
        },
    ]

    /*[
    [`#ffecb2`,`#ff7f00`],
    [`#99ffe5`,`#00ffbf`],
    [`#6699ff`,`#3366ff`],
    [`#4c5bff`,`#794cff`],
    [`#ff8cb2`,`#e83a74`],
]*/;
const monthList:any = [`6月`,`7月`,`8月`,`9月`,`10月`,`11月`,`12月`,`1月`,`2月`,`3月`,`4月`,`5月`];

const dateList:any = [`1号`,`2号`,`3号`,`4号`,`5号`,`6号`,`7号`,`8号`,`9号`,`10号`,`11号`,`12号`,`13号`,`14号`,`15号`,`16号`,`17号`,`18号`,`19号`,`20号`,`21号`,`22号`,`23号`,`24号`,`25号`,`26号`,`27号`,`28号`,`29号`,`30号`,`31号`];

const hourList:any = [`0时`,`1时`,`2时`,`3时`,`4时`,`5时`,`6时`,`7时`,`8时`,`9时`,`10时`,`11时`,`12时`,`13时`,`14时`,`15时`,`16时`,`17时`,`18时`,`19时`,`20时`,`21时`,`22时`,`23时`];
export default {
    colorList,
    colorLinear,
    monthList,
    dateList,
    hourList
}
