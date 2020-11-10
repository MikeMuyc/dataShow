<template>
    <div id="traffic" ref="viewbox" @click="console1">
        <div class="back_home" @click="toHome"></div>
        <div class="logoTitle">交通场景</div>
        <div class="logo_bottom"></div>
        <div class="date_show">
            <em class="date_num">{{year}}</em>
            <i>年</i>
            <em class="date_num">{{month}}</em>
            <i>月</i>
            <em class="date_num">{{day}}</em>
            <i>日</i>
        </div>
        <div class="viewBox">
            <div class="centerInfo">
                <div class="infoItem">
                    <div class="label">车位总数</div>
                    <div class="num">1230<em>个</em></div>
                </div>
                <div class="infoItem">
                    <div class="label">剩余车位</div>
                    <div class="num">100<em>个</em></div>
                </div>
            </div>

            <div class="station_num">
                <div class="boxTitle">
                    车位数量
                </div>
                <div class="colist" style="margin: 10px 0">
                    <div class="splitItem">
                        <div class="label">停车场总数</div>
                        <div class="text">4<i>个</i></div>
                    </div>
                    <div class="splitItem">
                        <div class="label">车位总数</div>
                        <div class="text">1230<i>个</i></div>
                    </div>
                    <div class="splitItem">
                        <div class="label">剩余车位</div>
                        <div class="text">100<i>个</i></div>
                    </div>
                </div>
                <div style="display: flex;height:calc(100% - 112px);padding: 0 10px;">
                    <v-chart
                            :options="parkNum"
                            :autoResize="true"
                            ref="healthDoc"
                            style="width:calc(100% - 100px);height:100%;position: relative;"
                    />
                    <div class="parkNum">
                        <div class="title">空闲数 / 总数</div>
                        <div class="item"><i>20</i>/270</div>
                        <div class="item"><i>30</i>/379</div>
                        <div class="item"><i>38</i>/443</div>
                        <div class="item"><i>12</i>/136</div>
                    </div>
                </div>

            </div>

            <div class="station_know">
                <div class="boxTitle">
                    车辆识别
                </div>
                <div class="activeinfo">
                    <div class="infotext">
                        <i class="name">今日进出车辆总数</i>
                        <em class="num">
                            62
                        </em>
                        <i class="unit">次</i>
                    </div>
                    <div class="right more" @click="showBox = 'carNum'">日统计&nbsp;&nbsp;></div>
                </div>
                <div class="secondTitle" @click="joinCarn">车辆进出情况</div>

                <div class="carList" ref="carList" style="height:calc(100% - 160px);padding: 0 12px">
                    <div class="carItem" ref="carItem" v-for="item in carleaveList">
                        <img :src="item.img" @click="showImgBox(item)">
                        <div class="info">
                            <div class="secondTitle">{{item.detail}}</div>
                            <div class="time">
                                <em>时间</em>
                                <i>{{item.time}}</i>
                            </div>
                            <div class="time">
                                <em>车牌号</em>
                                <i>{{item.carnum}}</i>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

            <div class="charge_survey">
                <div class="boxTitle">充电桩概况</div>
                <div class="charge_survey_content">
                    <div class="activeinfo" style="padding: 16px 24px 20px">
                        <div class="infotext">
                            <i class="name">充电桩总数</i>
                            <em class="num">
                                62
                            </em>
                            <i class="unit">个</i>
                        </div>
                    </div>
                    <div style="height: calc(100% - 70px);display: flex;justify-content: center;align-items: center">
                        <cornerBox>
                            <div class="colist borderR" style="padding: 0">
                                <div class="splitImg ">
                                    <div class="left">
                                        <img src="../images/traffic/快充.gif">
                                    </div>
                                    <div class="right">
                                        <div class="label">快充</div>
                                        <div class="text">25<i>个</i></div>
                                    </div>
                                </div>
                                <div class="splitImg ">
                                    <div class="left">
                                        <img src="../images/traffic/慢充.gif">
                                    </div>
                                    <div class="right">
                                        <div class="label">慢充</div>
                                        <div class="text">37<i>个</i></div>
                                    </div>
                                </div>
                            </div>
                        </cornerBox>
                    </div>

                </div>

            </div>
            <div class="wisdom_traffic">
                <div class="boxTitle">智慧交通</div>
                <div class="secondTitle">接驳车情况</div>

                <div class="busTitle">
                    <div class="textline" style="height: 42px;overflow: hidden">
                        <em>路线：</em>瓜山未来社区——拱宸桥（地铁站）——远洋乐堤港
                    </div>
                    <div class="textline">
                        <em>发车间隔：</em>10分钟
                    </div>
                </div>


                <!--<vue-perfect-scrollbar style="height: calc(100% - 402px)">
                    <div class="station" v-for="item in stationList">
                        <div class="label">{{item.name}}</div>
                        <div class="stationbox">
                            <img :src="item.img" @click="showImgBox(item)">
                            <div class="info">
                                <div class="address">{{item.address}}</div>
                                <div class="busName">{{item.busName}}</div>
                            </div>
                        </div>
                    </div>
                </vue-perfect-scrollbar>-->
                <div class="secondTitle">实时公交</div>
                <vue-perfect-scrollbar class="stationtable">
                    <div class="line title">
                        <div class="item">公交</div>
                        <div class="item">站点</div>
                        <div class="item">停靠时间</div>
                        <div class="item">下一班</div>
                    </div>
                    <div class="line" v-for="item in stationList">
                        <div class="item" :title="item.busname">{{item.busname}}</div>
                        <div class="item" :title="item.stationname">{{item.stationname}}</div>
                        <div class="item" :title="item.staytime">{{item.staytime}}</div>
                        <div class="item" :title="item.nexttime">{{item.nexttime}}</div>
                    </div>
                </vue-perfect-scrollbar>
                <div class="secondTitle">附近公共交通</div>

                <div class="busTitle">
                    <div class="textline">
                        <em>公交车站</em>
                    </div>
                </div>
                <div class="barnd" ref="brand">
                    <div class="list" >
                        <div class="item" v-for="item in stationImg">
                            <img :src="item.img" @click="showImgBox(item)">
                            <div class="name">{{item.name}}</div>
                        </div>

                    </div>
                </div>
                <div class="busTitle">
                    <div class="textline">
                        <em>共享单车停靠点</em>
                    </div>
                </div>
                <div class="barnd" ref="brand">
                    <div class="list" :style="`marginLeft:${marginL}px`">
                        <div class="item" v-for="item in bikeImg">
                            <img :src="item.img" @click="showImgBox(item)">
                            <div class="name">{{item.name}}</div>
                        </div>

                    </div>
                </div>
            </div>


            <div class="yellowbox" style="left:37.68%;top:39.55%;width: 17.44vh">智慧停车楼</div>
            <div class="stationPoint" :style="positionSet(item)" v-for="item in stationPointlist">
                <div class="houseHover"></div>
            </div>
            <div class="parkPoint" :style="positionSet(item)" v-for="item in parkPointlist"></div>
            <div class="sendCarPoint" :style="positionSet(sendCarPoint)" >
                <div class="houseHover"></div>
            </div>
            <div class="entryPoint" :class="{active:item.flag}" :style="positionSet(item)" v-for="item in entryPointlist" @click="item.flag = !item.flag">
                <transition name="slidex">
                    <div class="houseHover" v-show="item.flag">
                        <i class="iconfont iconche"></i>+1
                    </div>
                </transition>

            </div>


            <transition name="fade">
                <div class="messageHover" v-show="showBox !== 'close'">
                    <div class="outsideClose" @click="closeVideo"></div>
                    <transition name="toggle">
                        <div class="carNumChart" v-show="showBox === 'carNum'">
                            <i class="iconfont iconcha-copy close" @click="closeVideo"></i>
                            <v-chart
                                    :options="carNum"
                                    :autoResize="true"
                                    ref="carNum"
                                    style="width: 100%;height: 100%;position: relative;"
                            />
                        </div>
                    </transition>
                </div>
            </transition>
            <el-dialog
                    :visible="showImg"
                    custom-class="emDialog"
                    width="53vw"
                    :append-to-body="true"
                    @close="showImg = false"
            >
                <div class="title" slot="title">
                    {{activeImg.name || `图片`}}
                </div>

                <div class="timgbox">
                    <img :src="activeImg.img">
                </div>
            </el-dialog>
        </div>
    </div>
</template>
<script lang="ts">
    import {Vue, Component} from "vue-property-decorator";
    import {Select, Option, Button} from 'iview'
    import colorful from './allDataShow/colorList'
    import cornerBox from './allDataShow/cornerBox.vue';
    import {carList, bikeList, stationList} from './allDataShow/car';


    @Component({
        components: {
            Select,
            Option,
            Button,
            cornerBox,
        }
    })

    export default class health extends Vue {
        year: string = '';
        month: string = '';
        day: string = '';
        carImg: any = carList;
        bikeImg: any = bikeList;
        stationImg: any = stationList;
        stationList:any = [
            {
                busname:'17路',
                stationname:'瓜山南站',
                nexttime:'09:10',
                staytime:'10分钟',
            },
            {
                busname:'45路',
                stationname:'瓜山北站',
                nexttime:'09:45',
                staytime:'3分钟',
            },
            {
                busname:'49路',
                stationname:'瓜山北站',
                nexttime:'10:10',
                staytime:'2分钟',
            },
            {
                busname:'143路',
                stationname:'瓜山北站',
                nexttime:'10:25',
                staytime:'4分钟',
            },
        ];
        marginL: number = 0;
        interval: any = null;


        brandWidth: number = 90 + 20;
        showBox: string = 'close';
        showImg: boolean = false;
        activeImg: any = {
            name: ''
        };

        parkNum = {
            calculable: true,
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                },
            },
            legend: {
                data: ['已占用', '空闲',],
                top: `1`,
                left: `20`,
                itemGap: 20,
                itemWidth: 16,
                itemHeight: 12,
                textStyle: {
                    color: `#fff`,
                    fontSize: 12,
                    padding:[2,0,0,0]
                },
            },

            color: [
                {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 1,
                    y2: 0,
                    colorStops: [{
                        offset: 0, color: '#0964db' // 0% 处的颜色
                    }, {
                        offset: 1, color: '#45c3fd' // 100% 处的颜色
                    }],
                    global: false // 缺省为 false
                },
                {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 1,
                    y2: 0,
                    colorStops: [{
                        offset: 0, color: '#00b678' // 0% 处的颜色
                    },
                        {
                            offset: 1, color: '#7bfddf' // 100% 处的颜色
                        }],
                    global: false // 缺省为 false
                },
            ],
            grid: {
                left: '10',
                right: '40',
                top: '30',
                bottom: '0',
                containLabel: true
            },
            xAxis: {
                type: 'value',
                show: false,
                boundaryGap: [0, 0.01],
                axisTick: {
                    alignWithLabel: true,
                    show: false
                },
                splitLine: {     //网格线
                    show: false
                },
                axisLine: {
                    show: false,
                    lineStyle: {
                        color: `#666666`,
                    }
                }
            },
            yAxis: {
                type: 'category',
                data: ['北苑南', '北苑北', '东苑', '新苑',],
                axisLine: {
                    show: false,
                    lineStyle: {
                        color: `#666666`,
                    }
                },

                axisTick: {
                    show: false
                },
                splitLine: {
                    show: false
                },
                axisLabel: {
                    formatter: function (value: any, index: number) {
                        if (value.length > 5) {
                            value = value[0] + value[1] + value[2] + value[3] + '...'
                        }
                        return '{value|' + value + '}';
                    },
                    interval: 0,
                    margin: 12,
                    rich: {
                        value: {
                            color: '#fff',
                            align: 'left',
                            fontSize: '12px'

                        }
                    }
                }
            },
            series: [
                {
                    type: 'bar',
                    barWidth: '8px',
                    name: '已占用',
                    stack: '1',
                    data: [124, 405, 349, 250],
                    itemStyle: {

                        normal: {
                            barBorderRadius: 4,
                            label: {
                                show: true, //开启显示
                                position: ['50%', '-14'],
                                textStyle: { //数值样式
                                    color: '#1e60e2',
                                    fontSize: 12,

                                }
                            }
                        }
                    }
                },
                {
                    type: 'bar',
                    barWidth: '8px',
                    data: [12, 38, 30, 20],
                    stack: '1',
                    name: '空闲',
                    itemStyle: {
                        emphasis: {
                            barBorderRadius: 30
                        },
                        normal: {
                            barBorderRadius: [10, 10, 10, 10],
                            label: {
                                show: true, //开启显示
                                position: 'right',
                                textStyle: { //数值样式
                                    color: '#00b678',
                                    fontSize: 12,
                                    padding: [0, 0, 0, 0]
                                }
                            }
                        }
                    }
                },
            ]
        };
        carNum: any = {
            title: {
                text: '本月每日进出车辆数量统计',
                textStyle: {
                    color: '#e5eeff',
                    fontWeight: 'bold',
                    fontSize: 16,
                },
                left: `center`,
                top: 10,
            },
            textStyle: {
                color: `#999999`,
            },
            tooltip: {
                trigger: 'axis'
            },
            color: [`#4e8aff`],
            calculable: true,
            grid: {
                left: `14`,
                right: `24`,
                top: '50',
                bottom: '10',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    data: colorful.dateList,
                    name: '',
                    // nameGap: 5,
                    boundaryGap: false,
                    nameLocation: 'end',
                    nameTextStyle: {
                        color: `#597eb2`,
                        padding: [25, 0, 0, -5],
                    },

                    // splitNumber: 5 * 60 * 1000,
                    // interval: 5 * 60 * 1000,
                    axisLabel: {
                        fontSize: 10,
                        textStyle: {
                            color: '#cce1ff'
                        },
                    },
                    axisLine: {
                        lineStyle: {
                            color: `#f6f6f6`,
                        }
                    },
                    axisTick: {
                        show: false
                    }
                }
            ],
            yAxis: [
                {
                    name: '车辆/辆',
                    axisLabel: {
                        fontSize: 10,
                        textStyle: {
                            color: '#cce1ff'
                        },
                    },
                    nameLocation: 'end',
                    axisTick: {
                        show: false
                    },
                    nameTextStyle: {
                        color: `#597eb2`,
                        padding: [0, 0, 0, 0],
                    },
                    splitLine: {
                        show: false,
                    },
                    axisLine: {
                        lineStyle: {
                            color: `#f6f6f6`,
                        }
                    }
                }
            ],
            series: [
                {
                    name: '进出车辆',
                    type: 'line',
                    smooth: true,
                    data: [165, 187, 171, 202, 220, 247, 260, 219, 205, 186, 169, 155, 143, 140, 154, 157, 126, 121, 123, 130, 125, 147, 152, 171, 173, 176, 213, 207, 180, 171, 188],

                    areaStyle: {
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [
                                {
                                    offset: 0, color: 'rgba(76,136,255,1)'
                                },
                                {
                                    offset: 0.2, color: 'rgba(76,136,255,0.8)'
                                },
                                {
                                    offset: 0.35, color: 'rgba(115,162,255,0.8)'
                                },
                                {
                                    offset: 0.8, color: 'rgba(115,162,255,0.1)'
                                },
                                {
                                    offset: 1, color: 'rgba(76,136,255,0)'
                                }
                            ],
                            global: false
                        }
                    },
                }

            ]
        };


        carleaveList: any = [
            {
                carnum: '浙AB3491',
                time: '2019-5-4 12:33:12',
                detail: '内部车辆进入',
                img: carList[1],
            },
            {
                carnum: '浙AF0663',
                time: '2019-5-3 11:41:32',
                detail: '内部车辆进入',
                img: carList[4],
            },
        ];
        stationPointlist: any = [
            {
                x:'59.81%',
                y:'60.21%',
                name:'',
            },
            {
                x:'30.64%',
                y:'24.56%',
                name:'',
            },
        ];
        parkPointlist: any = [
            {
                x:'43.19%',
                y:'49.68%',
                name:'',
            },
            {
                x:'63.74%',
                y:'75.39%',
                name:'',
            },
        ];
        entryPointlist: any = [
            {
                x:'60.16%',
                y:'68.78%',
                flag:false,
            },
            {
                x:'38.56%',
                y:'44.61%',
                flag:false,
            },
            {
                x:'26.41%',
                y:'45.12%',
                flag:false,
            },
        ];
        sendCarPoint:any = {
            x:'48.21%',
            y:'32.79%',
        }
        created() {
            let myDate: any = new Date();     //获取当前年份(2位)
            this.year = myDate.getFullYear();    //获取完整的年份(4位,1970-????)
            this.month = ((myDate.getMonth() - 0 + 1) > 9 ? (Number(myDate.getMonth()) + 1).toString() : '0' + (Number(myDate.getMonth()) + 1).toString());       //获取当前月份(0-11,0代表1月)
            this.day = myDate.getDate() - 0 > 9 ? myDate.getDate() : '0' + myDate.getDate();

            this.interval = setInterval(() => {
                let brand: any = this.$refs.brand;
                if (brand.clientWidth - this.carImg.length * this.brandWidth > this.marginL - this.brandWidth * 3) {
                    this.marginL = 0;
                } else {
                    this.marginL -= this.brandWidth * 3;
                }

                if (new Date().getTime() % 13 > 8) {
                    this.joinCarn();
                }

                this.entryPointlist.forEach(item =>{
                    item.flag = false;
                })
                if(Math.random() > 0.5){
                    let num = Math.floor(Math.random() * 3);
                    this.entryPointlist[num].flag = true;
                }

            }, 3000)

        }

        beforeDestroy() {
            clearInterval(this.interval);
            this.interval = null;
        }

        toHome() {
            this.$router.push({name: '未来社区首页'})
        }

        joinCarn() {
            let carItem: any = this.$refs.carItem;
            let carList: any = this.$refs.carList;
            let nowDate: any = new Date().getTime();


            let aValue = Math.floor(Math.random() * 10) + 65;
            let bValue = Math.floor(Math.random() * 25) + 65;
            let aValueString = String.fromCharCode(aValue);
            let bValueString = String.fromCharCode(bValue);
            let numm = Math.floor(Math.random() * 9989);
            carList.scrollTop = 0;
            carItem[0].style.transition = `none`;
            carItem[0].style.marginTop = `-131px`;
            let detailLst: any = [`内部车辆离开`, `内部车辆进入`, `外部车辆进入`, `外部车辆离开`];


            this.carleaveList.unshift(
                {
                    carnum: `浙${aValueString}${bValueString}${numm}`,
                    time: this.$utils.dateFormat(nowDate, `time`),
                    detail: detailLst[Math.floor(Math.random() * 4)],
                    img: this.carImg[Math.floor(Math.random() * 7)],
                },
            )
            setTimeout(() => {
                carItem[0].style.transition = `all .3s`;
                carItem[0].style.marginTop = `0px`;
            }, 200)


        }

        closeVideo() {
            this.showBox = '';
            setTimeout(() => {
                this.showBox = 'close';
            }, 200)
        }

        showImgBox(item: any) {
            this.showImg = true;
            this.activeImg = item;
        }
        positionSet(item) {
            let style = '';
            if(item.click){
                style = `left:${item.x};top:${item.y};cursor:pointer;`
            }
            else{
                style = `left:${item.x};top:${item.y}`
            }
            return style;
        }
        console1(e) {
            let viewbox: any = this.$refs.viewbox;
            let x: any = (e.clientX / viewbox.clientWidth * 100).toFixed(2);
            let y: any = (e.clientY / viewbox.clientHeight * 100).toFixed(2);
            console.log(`x:'${x}%',y:'${y}%'`)
        }
    }
</script>

<style lang="scss" scoped>
    @import "../styles/variables";

    #traffic {
        width: 100%;
        height: 100%;
        min-height: 690px;
        position: relative;
        background-image: url("../images/traffic/底.jpg");
        background-color: #000;
        background-size: 100% 100%;
        background-repeat: no-repeat;

        .centerInfo {
            position: absolute;
            z-index: 5;
            width: calc(100% - 46vw);
            height: 9.8vh;
            left: 23vw;
            top: 9.6vh;
            background-image: linear-gradient(-90deg,
                    rgba(0, 13, 51, 0) 0%,
                    rgba(0, 13, 51, 0.6) 14%,
                    rgba(0, 13, 51, 0.8) 76%,
                    rgba(0, 13, 51, 0) 100%);
            padding: 0 100px;

            display: flex;
            justify-content: center;

            .infoItem {
                width: 25%;
                display: flex;
                flex-direction: column;
                justify-content: center;

                .label {
                    color: #d9e5ff;
                    width: 100%;
                    font-size: 16px;
                    font-weight: bold;
                    text-align: center;
                    margin-bottom: 10px;
                }

                .num {
                    color: #fff;
                    font-size: 24px;
                    font-weight: bold;
                    text-align: center;
                    text-shadow: 0 0 15px #CCFAFE;
                    em {
                        padding-left: 10px;
                        font-size: 14px;
                    }
                }
            }
        }

        .barnd {
            margin: 0 10px 10px;
            overflow: hidden;

            .list {
                display: flex;
                transition: all .3s;
            }

            .item {
                display: inline-flex;
                flex-direction: column;
                margin: 0 10px;

                img {
                    width: 90px;
                    height: 60px;
                    border-radius: 2px;
                    cursor: pointer;
                }

                .name {
                    width: 100%;
                    text-align: center;
                    line-height: 24px;
                    height: 24px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    color: #fff;
                    font-size: 12px;
                }
            }
        }

        .logo_bottom {
            position: absolute;
            bottom: 0;
            z-index: 1;
            text-align: center;
            margin-left: 16%;
            width: 68%;
            height: 20%;
            display: flex;
            align-items: center;
            justify-content: center;
            background-image: url("../images/base/底部.png");
            background-repeat: no-repeat;
            background-size: 100% 100%;
            /*font-family: PangMenZhengDao;*/
            /*font-weight: 700;*/
        }


        .viewBox {
            width: 100%;
            height: 100%;
            position: relative;
            z-index: 2;
            overflow: hidden;

            .station_num {
                position: absolute;
                z-index: 5;
                min-width: 360px;
                width: 21.8vw;
                height: 31.48vh;
                top: 7.6vh;
                left: 1.25vw;
                background-image: url("../images/traffic/框左上.png");
                background-repeat: no-repeat;
                background-size: 100% 100%;
                padding: 12px;
                animation: slide-left .3s ease;
                .parkNum {
                    width: 100px;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    text-align: right;

                    .title {
                        color: #cce1ff;
                        font-size: 12px;
                        line-height: 24px;
                        margin-bottom: 6px;

                    }

                    .item {
                        color: #fff;
                        line-height: 28px;
                        display: inline-flex;
                        width: 100%;
                        height: calc(25% - 12px);
                        justify-content: flex-end;

                        i {
                            color: #29dfa4;
                        }
                    }

                }


            }

            .station_know {
                position: absolute;
                z-index: 5;
                min-width: 360px;
                width: 21.8vw;
                left: 1.25vw;
                height: 57.04vh;
                bottom: 2.22vh;
                background-image: url("../images/traffic/框左下.png");
                background-repeat: no-repeat;
                background-size: 100% 100%;
                padding: 12px;
                animation: slide-left .3s ease;
                .carList {
                    overflow-y: auto;

                    scrollbar-dark-shadow-color:rgba(0, 51, 102, 0.6);

                    &::-webkit-scrollbar {
                        width: 10px;
                    }

                    &::-webkit-scrollbar-track {
                        background-color: rgba(0, 51, 102, 0.6);
                        border-radius: 2px;
                        min-height: 16px;
                    }

                    &::-webkit-scrollbar-thumb {
                        background-color: #7b9f9f;
                        border-radius: 2px;
                    }
                    .carItem {
                        transition: none;
                        border-bottom: 1px solid #2E4E8F;
                        display: flex;
                        margin-bottom: 15px;
                        padding: 0 0 15px;

                        img {
                            width: 134px;
                            margin-right: 10px;
                            height: 100px;
                            border-radius: 4px;
                            cursor: pointer;
                        }

                        .info {
                            height: 100px;
                            width: calc(100% - 144px);
                            display: flex;
                            align-items: center;
                            flex-wrap: wrap;
                            padding-left: 10px;

                            .secondTitle {
                                font-size: 12px;
                                font-weight: normal;
                                display: inline-flex;
                                margin: 10px 0;
                                width: auto;
                                padding: 0 10px;
                                height: 24px;
                            }

                            .time {
                                width: 100%;
                                font-size: 12px;
                                margin-bottom: 6px;
                                display: flex;

                                em {
                                    color: $label-color;
                                    width: 50px;
                                }

                                i {
                                    color: #fefefe;
                                }
                            }

                        }
                    }
                }

            }

            .charge_survey {
                position: absolute;
                z-index: 5;
                min-width: 360px;
                width: 21.8vw;
                height: 20vh;
                top: 7.41%;
                right: 1.25vw;
                background-image: url("../images/traffic/框右上.png");
                background-repeat: no-repeat;
                background-size: 100% 100%;
                padding: 12px;
                animation: slide-right .3s ease;
                .charge_survey_content {
                    width: 100%;
                    height: calc(100% - 37px);


                    .item_border {
                        width: 90%;
                        height: calc(90% - 78px);
                        min-height: 50px;
                        margin: 0 5%;
                        margin-top: 2%;
                        position: relative;

                        .item_border_content {
                            width: 100%;
                            height: 100%;
                            display: flex;
                            justify-content: space-around;
                            align-items: center;

                            .border_item {
                                text-align: center;
                                height: 100%;
                                display: flex;
                                flex-direction: column;
                                justify-content: center;
                                /*min-width: 24%;*/
                                > div {
                                    font-size: 12px;
                                    color: $label-color;
                                }

                                img {
                                    width: 70%;
                                    margin-left: 15%;
                                    cursor: pointer;
                                }

                                p {

                                    span {
                                        color: #ffffff;
                                        font-size: 16px;
                                        font-weight: 700;
                                        margin-right: 4px;
                                    }

                                    .unit {
                                        font-size: 14px;
                                        color: $unit-color;
                                    }

                                }

                                > span {
                                    color: #ccd9ff;
                                    font-size: 12px;
                                }

                            }

                            .border_split {
                                width: 1px;
                                height: 50%;
                                background-color: rgba(102, 166, 255, 0.4);
                            }
                        }
                    }
                }


            }

            .wisdom_traffic {
                position: absolute;
                z-index: 5;
                min-width: 360px;
                width: 21.8vw;
                height: 68.6%;
                bottom: 2.22vh;
                right: 1.25vw;
                background-image: url("../images/traffic/框右下.png");
                background-repeat: no-repeat;
                background-size: 100% 100%;
                padding: 12px;
                animation: slide-right .3s ease;
                .busTitle {
                    padding: 0 20px;

                    .label {
                        color: $label-color;
                        margin-bottom: 10px;

                        .iconfont {
                            color: $label-color;
                        }
                    }

                    .textline {
                        color: #ffffff;
                        margin-bottom: 10px;

                        em {
                            color: $label-color
                        }
                    }
                }

                /*.station {
                    padding: 0 20px;
                    font-size: 12px;
                    margin-bottom: 10px;

                    .label {
                        color: $label-color;
                        margin-bottom: 4px;
                    }

                    .stationbox {
                        display: flex;

                        img {
                            width: 76px;
                            height: 50px;
                            border-radius: 2px;
                            margin-right: 10px;
                            cursor: pointer;
                        }

                        .info {
                            width: calc(100% - 86px);
                            height: 50px;
                            display: flex;
                            flex-direction: column;
                            justify-content: center;

                            .address {
                                width: 100%;
                                color: $second-color;
                            }

                            .busName {
                                width: 100%;
                                color: #fff;
                            }
                        }
                    }
                }*/
                .stationtable{
                    padding: 0 12px;
                    height: calc(100% - 502px);
                    .line{
                        display: flex;
                        height: 20px;
                        align-items: center;
                        margin-bottom: 10px;
                        color: #ffffff;
                        &.title{
                            color: $label-color;
                        }
                        .item{
                            width: 25%;
                            height: 20px;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            white-space: nowrap;
                            text-align: center;
                        }
                    }
                }
            }

            .activeinfo {
                padding: 20px 10px;

                .right {
                    font-size: 12px;

                }
            }

            .infotext {
                display: inline-flex;
                justify-content: center;
                align-items: flex-end;

                .name {
                    color: $label-color;
                    font-size: 12px;
                    font-weight: bold;
                }

                .num {
                    color: white;
                    font-size: 24px;
                    line-height: 26px;
                    height: 26px;
                    padding: 0 20px;
                    font-weight: bold;

                }

                .unit {
                    font-size: 12px;
                    color: $unit-color;
                }
            }

        }

        .carNumChart {
            position: absolute;
            z-index: 2;
            left: 4vw;
            top: 50.43vh;
            width: 47.4vw;
            height: 38.56vh;
            background-image: url("../images/traffic/弹窗-进出车辆.png");
            background-repeat: no-repeat;
            background-size: 100% 100%;
            padding: 2vw 2.5vw;

        }

        .stationPoint {
            position: absolute;
            z-index: 2;
            width: 28px;
            height: 34px;
            background-image: url("../images/traffic/公交车站点位.png");
            background-size: 100% 100%;
            background-repeat: no-repeat;

            &:hover {
                .houseHover {
                    display: flex;
                }
            }

            .houseHover {
                position: absolute;
                cursor: pointer;
                display: none;
                height: 46px;
                width: 90px;
                padding: 0 20px 16px;
                justify-content: center;
                align-items: center;
                color: #ffffff;
                left: -30px;
                top: -38px;
                font-size: 16px;
                background-image: url("../images/traffic/公交车站.png");
                background-size: 100% 30px;
                background-repeat: no-repeat;
            }
        }
        .sendCarPoint{
            position: absolute;
            z-index: 2;
            width: 28px;
            height: 34px;
            background-image: url("../images/traffic/接驳车当前位置.webp");
            background-size: 100% 100%;
            background-repeat: no-repeat;
            &:hover {
                .houseHover {
                    display: flex;
                }
            }

            .houseHover {
                position: absolute;
                cursor: pointer;
                display: none;
                height: 46px;
                width: 84px;
                padding: 0 20px 16px;
                justify-content: center;
                align-items: center;
                color: #ffffff;
                left: -26px;
                top: -36px;
                font-size: 16px;
                background-image: url("../images/traffic/接驳车.png");
                background-size: 100% 30px;
                background-repeat: no-repeat;
            }
        }
        .parkPoint{
            position: absolute;
            z-index: 2;
            width: 28px;
            height: 34px;
            background-image: url("../images/traffic/停车场点位.png");
            background-size: 100% 100%;
            background-repeat: no-repeat;
        }
        .entryPoint{
            position: absolute;
            z-index: 2;
            width: 64px;
            height: 64px;
            background-image: url("../images/traffic/道闸静态.png");
            background-size: 100% 100%;
            background-repeat: no-repeat;
            &.active {
                background-image: url("../images/traffic/道闸动图.webp");

            }
            .houseHover {
                position: absolute;
                cursor: pointer;
                display: flex;
                height: 36px;
                width: 84px;
                justify-content: center;
                align-items: center;
                left: -10px;
                top: -30px;
                font-size: 14px;
                background-color: rgba(0,0,0,0.7);
                color: #fff;
                border-radius: 10px;
                .iconfont{
                    color: #fff;
                    margin-right: 6px;
                }

            }
        }
    }
    .slidex-enter-active {
        animation: slide-fade .3s;
    }
    .slidex-leave-active {
        animation: slide-fade-out .3s;
    }
    @keyframes slide-fade {
        0% {
            transform: translateY(20px);
            opacity: 0;
        }
        100% {
            transform: translateY(0px);
            opacity: 1;
        }
    }
    @keyframes slide-fade-out {
        0% {
            transform: translateY(0px);
            opacity: 1;
        }
        100% {
            transform: translateY(-20px);
            opacity: 0;
        }
    }
</style>
<style lang="scss">
    #traffic {

    }
</style>
