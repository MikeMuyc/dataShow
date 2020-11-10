<template>
    <div id="health" ref="viewbox" @click="console1">
        <div class="back_home" @click="toHome"></div>
        <div class="logoTitle">健康场景</div>
        <div class="date_show">
            <em class="date_num">{{year}}</em>
            <i>年</i>
            <em class="date_num">{{month}}</em>
            <i>月</i>
            <em class="date_num">{{day}}</em>
            <i>日</i>
        </div>
        <div class="viewBox">
            <div class="left_content">
                <div class="boxTitle">健康生活</div>

                <div class="secondTitle">健身场所面积</div>
                <div class="colist" style="padding: 0">
                    <div class="splitItem ">
                        <div class="label">健身场所总面积</div>
                        <div class="text">1312<i>㎡</i></div>
                    </div>
                    <div class="splitItem ">
                        <div class="label">占社区面积占比</div>
                        <div class="text">20<i>%</i></div>
                    </div>
                </div>

                <div class="secondTitle">健身打卡</div>

                <div class="activeinfo neerbolb"
                     style="padding: 4px 0 12px;margin:0 24px;border-bottom: 1px rgba(102, 166, 255, 0.4) solid">
                    <div class="infotext">
                        <i class="name">总健身打卡人数</i>
                        <em class="num">4346</em>
                        <i class="unit">人</i>
                    </div>
                </div>
                <div class="activeinfo neerbolb" style="padding: 12px 24px;">
                    <div class="infotext">
                        <i class="name">月健身打卡次数</i>
                        <em class="num more" @click="showBox = 'checkMonth'">
                            2496
                            <i class="iconfont iconzhijiao-triangle"></i>
                        </em>
                        <i class="unit">人</i>
                    </div>
                </div>
                <cornerBox style="margin: 10px 12px;width: calc(100% - 24px)">
                    <div class="colist borderR" style="padding: 0">
                        <div class="splitItem splitItemx">
                            <div class="label">体育馆打卡人次</div>
                            <div class="text">
                                <em class="more" @click="showBox = 'checkin1'">
                                    134
                                    <i class="iconfont iconzhijiao-triangle"></i>
                                </em>
                                <i>次</i>
                            </div>
                        </div>
                        <div class="splitItem splitItemx">
                            <div class="label">健身房打卡人次</div>
                            <div class="text">
                                <em class="more" @click="showBox = 'checkin2'">
                                    1113
                                    <i class="iconfont iconzhijiao-triangle"></i>
                                </em>
                                <i>次</i>
                            </div>
                        </div>
                    </div>
                </cornerBox>
                <v-chart
                        :options="topData"
                        :autoResize="true"
                        style="width:100%;height:calc(100% - 580px);position: relative;"
                />

                <div class="secondTitle">体育活动</div>
                <div style="padding: 0 15px">
                    <reviewBox style="height: 144px" :activeImg="sportImageList"></reviewBox>
                </div>

            </div>
            <div class="right_content">
                <div class="boxTitle">医疗服务</div>
                <div class="secondTitle">社区周边医疗机构情况</div>
                <div class="activeinfo" style="padding: 0 24px 10px">
                    <div class="infotext">
                        <i class="name">总数量</i>
                        <em class="num">5</em>
                        <i class="unit">家</i>
                    </div>
                </div>

                <cornerBox style="margin-top: 10px">
                    <div class="colist borderR" style="padding: 0">
                        <div class="splitItem ">
                            <div class="label">牙科</div>
                            <div class="text">1<i>家</i></div>
                        </div>
                        <div class="splitItem ">
                            <div class="label">全科</div>
                            <div class="text">2<i>家</i></div>
                        </div>
                        <div class="splitItem">
                            <div class="label">医美诊所</div>
                            <div class="text">2<i>家</i></div>
                        </div>
                    </div>
                </cornerBox>
                <div class="secondTitle">医疗人员统计</div>
                <div class="activeinfo" style="padding: 0 24px 10px">
                    <div class="infotext">
                        <i class="name">总人数</i>
                        <em class="num">16</em>
                        <i class="unit">人</i>
                    </div>
                </div>


                <v-chart
                        :options="medicalPeople"
                        :autoResize="true"
                        style="width:100%;height:calc(100% - 716px);position: relative;"
                />

                <div class="appointmentOnline">
                    <div class="left">
                        <img draggable="false" :src="people">
                        <em>家庭医生团队人数</em>
                    </div>
                    <div class="right">
                        <em>{{familyDoctorNum}}</em>
                        <i>人</i>
                    </div>
                </div>
                <div class="secondTitle">健康小屋</div>
                <div class="colist" style="margin-bottom: 10px">
                    <div class="splitItem">
                        <div class="label">使用总数</div>
                        <div class="text">215<i>次</i></div>
                    </div>
                    <div class="splitItem">
                        <div class="label">今日使用数</div>
                        <div class="text">14<i>次</i></div>
                    </div>
                </div>
                <div class="colist" style="margin-bottom: 10px">
                    <div class="splitItem">
                        <div class="label">药柜OTC累计出售</div>
                        <div class="text">432<i>次</i></div>
                    </div>
                    <div class="splitItem">
                        <div class="label">今日药柜OTC出售</div>
                        <div class="text">21<i>次</i></div>
                    </div>
                </div>
                <div class="activeinfo" style="padding: 10px 0;margin:0 24px;border-top:1px rgba(102, 166, 255, 0.4) solid">
                    <div class="infotext">
                        <i class="name">今日健康服务</i>

                    </div>
                    <div class="right more" @click="showBox = 'healthSever'">月统计&nbsp;&nbsp;></div>
                </div>
                <typeItemChartList :chartList="serveList" style="height: 150px;padding: 0 10px"></typeItemChartList>
            </div>



            <div class="healthHouse" @click="showBox = 'healthHouse'"></div>
            <div class="runwayPoint" @click="showBox = 'runway'"></div>
            <div class="runwayPoint" style="left:33.13vw;top:14.17vh" @click="showBox = 'runway'"></div>

            <div class="housepoint" :style="positionSet({x:`51.41%`, y:`71.40%`})">
                <div class="houseHover" @click="showBox = 'physicalHouse'">绿色主题组团 健身房</div>
            </div>
            <div class="housepoint" :style="positionSet({x:`39.09%`, y:`71.18%`})"></div>
        </div>


        <transition name="fade">
            <div class="messageHover" v-show="showBox !== 'close'">
                <div class="outsideClose" @click="closeVideo"></div>
                <transition name="toggle">
                    <div class="healthSever" v-show="showBox === 'healthSever'">
                        <i class="iconfont iconcha-copy close" @click="closeVideo"></i>
                        <v-chart
                                :options="healthSever"
                                :autoResize="true"
                                ref="healthDoc"
                                style="width: 100%;height: 100%;position: relative;"
                        />

                    </div>
                </transition>
                <transition name="toggle">
                    <div class="physicalCheck lf2" v-show="showBox === 'checkMonth'">
                        <i class="iconfont iconcha-copy close" @click="closeVideo"></i>
                        <div class="title">健身打卡月统计</div>
                        <typeItemChartList :chartList="checkMonth" style="height: calc(100% - 46px);padding: 0 10px"
                                           :both="true" unit="次"></typeItemChartList>

                    </div>
                </transition>
                <transition name="toggle">
                    <div class="physicalCheck " v-show="showBox === 'checkin1'">
                        <i class="iconfont iconcha-copy close" @click="closeVideo"></i>
                        <div class="title">体育馆打卡人数</div>
                        <typeItemChartList :chartList="checkin1" style="height: calc(100% - 46px);padding: 0 10px" :both="true" unit="次"></typeItemChartList>

                    </div>
                </transition>
                <transition name="toggle">
                    <div class="physicalCheck lf3" v-show="showBox === 'checkin2'">
                        <i class="iconfont iconcha-copy close" @click="closeVideo"></i>
                        <div class="title">健身房打卡人数</div>
                        <typeItemChartList :chartList="checkin2" style="height: calc(100% - 46px);padding: 0 10px" :both="true" unit="次"></typeItemChartList>

                    </div>
                </transition>
                <transition name="bounce">
                    <div class="centerbox" v-show="showBox === 'healthHouse'">
                        <i class="iconfont iconcha-copy close" @click="closeVideo"></i>
                        <div class="title">健康小屋信息</div>
                        <div class="poogu">

                            <div class="item long">
                                <div class="label">所在位置：</div>
                                <div class="text">瓜山东苑</div>
                            </div>

                            <div class="item long">
                                <div class="label">特色介绍：</div>
                                <div class="text">健康小屋介绍，健康小屋介绍，健康小屋介绍，健康小屋介绍，健康小屋介绍，健康小屋介绍，健康小屋介 绍，健康小屋介绍，</div>
                            </div>
                        </div>
                        <el-carousel style="height: calc(100% - 168px)" :interval="3000">
                            <el-carousel-item v-for="item in sportImageList">
                                <img :src="item.img" style="width: 100%;height:100%;object-fit: cover;">
                            </el-carousel-item>
                        </el-carousel>
                    </div>
                </transition>
                <transition name="bounce">
                    <div class="centerbox" v-show="showBox === 'runway'">
                        <i class="iconfont iconcha-copy close" @click="closeVideo"></i>
                        <div class="title">樱花跑道信息</div>
                        <div class="poogu">
                            <div class="item">
                                <div class="label">全程长度：</div>
                                <div class="text">3.6km</div>
                            </div>
                            <div class="item">
                                <div class="label">所在位置：</div>
                                <div class="text">分布于东苑、新苑、北苑</div>
                            </div>

                            <div class="item long">
                                <div class="label">特色介绍：</div>
                                <div class="text">智能感应人员流动，根据人员流动开启灯光补给，沿途配备喷雾和直饮水设施。</div>
                            </div>
                        </div>
                        <el-carousel style="height: calc(100% - 168px)" :interval="3000">
                            <el-carousel-item v-for="item in sportImageList">
                                <img :src="item.img" style="width: 100%;height:100%;object-fit: cover;">
                            </el-carousel-item>
                        </el-carousel>
                    </div>
                </transition>
                <transition name="bounce">
                    <div class="centerbox" v-show="showBox === 'physicalHouse'">
                        <i class="iconfont iconcha-copy close" @click="closeVideo"></i>
                        <div class="title">健身房信息</div>
                        <div class="poogu">
                            <div class="item">
                                <div class="label">所属组团：</div>
                                <div class="text">绿色主题组团</div>
                            </div>
                            <div class="item">
                                <div class="label">所在位置：</div>
                                <div class="text">瓜山新苑x号</div>
                            </div>
                            <div class="item">
                                <div class="label">建筑面积：</div>
                                <div class="text">330㎡</div>
                            </div>
                            <div class="item">
                                <div class="label">运动设备：</div>
                                <div class="text">跑步机、哑铃架、单杠...</div>
                            </div>
                        </div>
                        <el-carousel style="height: calc(100% - 168px)" :interval="3000">
                            <el-carousel-item v-for="item in sportImageList">
                                <img :src="item.img" style="width: 100%;height:100%;object-fit: cover;">
                            </el-carousel-item>
                        </el-carousel>
                    </div>
                </transition>
            </div>
        </transition>

    </div>
</template>
<script lang="ts">
    import {Vue, Component} from "vue-property-decorator";
    import cornerBox from './allDataShow/cornerBox.vue';

    const people = require("@datashow/images/health/人群.png")

    import * as api from '../api/health';
    import colorful from './allDataShow/colorList'
    import reviewBox from './allDataShow/reviewBox_before.vue'
    import typeItemChartList from './allDataShow/typeItemChartList.vue'
    import {sportImageList} from './allDataShow/building'

    @Component({
        components: {typeItemChartList, reviewBox, cornerBox}
    })

    export default class health extends Vue {

        people: any = people;
        year: string = '';
        month: string = '';
        day: string = '';
        showBox: string = 'close';
        sportImageList: any = sportImageList;
        medicalPeople: any = {
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b}: {c} ({d}%)'
            },
            series: [
                {
                    name: '医疗人员占比',
                    type: 'pie',
                    radius: ['0%', '56%'],
                    center: ['50%', '50%'],
                    color: colorful.colorLinear,
                    label: {
                        formatter: '{b|{b}}\n{per|{c}人}  ',
                        show: true,
                        rich: {
                            b: {
                                fontSize: 10,
                                lineHeight: 12,
                                color: '#409fff',
                            },
                            per: {
                                fontSize: 10,
                                lineHeight: 14,
                                color: '#fff',
                            }
                        }
                    },
                    labelLine: {
                        length: 5,
                        length2: 30
                    },
                    data: [
                        {
                            value: 9, name: '护士',
                        },
                        {
                            value: 3, name: '专科医生',
                        },
                        {
                            value: 4, name: '全科医生',
                        },
                    ]
                }
            ]
        };

        topData: any = {
            title: {
                text: '打卡趋势',
                textStyle: {
                    color: '#fff',
                    fontSize: 14,
                },
                left: `10`,
                top: 0,
            },
            textStyle: {
                color: `#999999`,
            },
            tooltip: {
                trigger: 'axis'
            },
            color: ['#01e9fd', '#f9c475'],
            legend: {
                data: [`健身房打卡`, `体育馆打卡`],
                bottom: `0`,
                left: `20`,
                itemHeight:12,
                itemWidth:16,
                itemGap: 16,
                icon:'roundRect',
                textStyle: {
                    color: `#fff`,
                    fontSize: 12,
                    height:14,
                    padding:[2,0,0,0]
                },
                orient: 'horizontal'
            },
            calculable: true,
            grid: {
                left: `24`,
                right: `50`,
                top: '60',
                bottom: '30',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    data: ['4.28', '4.29', '4.30', '5.1', '5.2', '5.3', '5.4', '5.5',],
                    name: '日期',
                    // nameGap: 5,
                    boundaryGap: false,
                    nameLocation: 'end',
                    nameTextStyle: {
                        color: `#597eb2`,
                        padding: [25, 0, 0, -5],
                    },
                    splitNumber: 12,
                    minInterval: 1,

                    // splitNumber: 5 * 60 * 1000,
                    // interval: 5 * 60 * 1000,
                    axisLabel: {
                        fontSize: 10,
                        interval: 0,
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
                    name: '人数/人',
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
                    // data: [0,20,40,60,80,100],
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
                    name: '健身房打卡',
                    type: 'line',
                    smooth: true,
                    data: [64, 62, 58, 32, 36, 40, 37, 42],

                },
                {
                    name: '体育馆打卡',
                    type: 'line',
                    smooth: true,
                    data: [67, 65, 62, 52, 49, 51, 50, 54],
                }
            ]
        };
        healthSever: any = {
            title: {
                text: '健康服务月统计',
                textStyle: {
                    color: '#fff',
                    fontSize: 16,
                },
                left: `center`,
                top: 0,
            },
            textStyle: {
                color: `#999999`,
            },
            tooltip: {
                trigger: 'axis'
            },
            color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                    offset: 0, color: '#7fffdf' // 0% 处的颜色
                }, {
                    offset: 1, color: '#00998c' // 100% 处的颜色
                }],
                global: false // 缺省为 false
            },
            calculable: true,
            grid: {
                left: `12`,
                right: `40`,
                top: '36',
                bottom: '20',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    data: [`身体数据测量`, `健康宜教`, `疾病自测`, `家庭医生签约`, `医疗站点查询`, `中医体质辨识`, `智能导诊`, `居家服务预约`, `预约挂号`],
                    name: '类型',

                    nameLocation: 'end',
                    nameTextStyle: {
                        color: '#597eb2',
                    },


                    axisLabel: {
                        fontSize: 10,
                        interval: 0,
                        rotate: -15,
                        padding: [12, 0, 0, -18],
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
                    name: '服务次数/次',
                    axisLabel: {
                        fontSize: 10,
                        showMaxLabel: 'false',
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
                        padding: [0, 0, 0, 10],
                    },
                    splitNumber: 2,
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
                    name: '服务次数',
                    type: 'bar',
                    itemStyle: {
                        barBorderRadius: [2, 2, 0, 0]
                    },
                    barWidth: 20,
                    data: [60, 121, 58, 69, 89, 88, 79, 115, 145, 109],
                }

            ]
        }


        interval: number = 5000;


        familyDoctorNum: number = 0;
        serveList: any = [
            {
                name: '身体数据测量',
                count: 13,
                per: `0%`,
            },
            {
                name: '中医体质辨识',
                count: 17,
                per: `0%`,
            },
            {
                name: '健康宜教',
                count: 12,
                per: `0%`,
            },
            {
                name: '智能导诊',
                count: 12,
                per: `0%`,
            },
            {
                name: '疾病自测',
                count: 11,
                per: `0%`,
            },
            {
                name: '居家服务预约',
                count: 15,
                per: `0%`,
            },
        ];
        checkMonth: any = [
            {
                name: '萌宠组团',
                count: 304,
                per: `0%`,
            },
            {
                name: '手工组团',
                count: 367,
                per: `0%`,
            },
            {
                name: '电竞组团',
                count: 289,
                per: `0%`,
            },
            {
                name: '运动组团',
                count: 415,
                per: `0%`,
            },
            {
                name: '动漫组团',
                count: 331,
                per: `0%`,
            },
            {
                name: '国风组团',
                count: 212,
                per: `0%`,
            },
            {
                name: '烘焙组团',
                count: 255,
                per: `0%`,
            },
            {
                name: '美妆组团',
                count: 323,
                per: `0%`,
            },

        ];
        checkin1: any = [
            {
                name: '萌宠组团',
                count: 286,
                per: `0%`,
            },
            {
                name: '手工组团',
                count: 175,
                per: `0%`,
            },
            {
                name: '电竞组团',
                count: 157,
                per: `0%`,
            },
            {
                name: '运动组团',
                count: 225,
                per: `0%`,
            },
            {
                name: '动漫组团',
                count: 198,
                per: `0%`,
            },
            {
                name: '国风组团',
                count: 98,
                per: `0%`,
            },
            {
                name: '烘焙组团',
                count: 163,
                per: `0%`,
            },
            {
                name: '美妆组团',
                count: 178,
                per: `0%`,
            },

        ];
        checkin2: any = [
            {
                name: '萌宠组团',
                count: 118,
                per: `0%`,
            },
            {
                name: '手工组团',
                count: 192,
                per: `0%`,
            },
            {
                name: '电竞组团',
                count: 132,
                per: `0%`,
            },
            {
                name: '运动组团',
                count: 190,
                per: `0%`,
            },
            {
                name: '动漫组团',
                count: 133,
                per: `0%`,
            },
            {
                name: '国风组团',
                count: 114,
                per: `0%`,
            },
            {
                name: '烘焙组团',
                count: 92,
                per: `0%`,
            },
            {
                name: '美妆组团',
                count: 145,
                per: `0%`,
            },
        ];
        created() {
            let myDate: any = new Date();     //获取当前年份(2位)
            this.year = myDate.getFullYear();    //获取完整的年份(4位,1970-????)
            this.month = ((myDate.getMonth() - 0 + 1) > 9 ? (Number(myDate.getMonth()) + 1).toString() : '0' + (Number(myDate.getMonth()) + 1).toString());       //获取当前月份(0-11,0代表1月)
            this.day = myDate.getDate() - 0 > 9 ? myDate.getDate() : '0' + myDate.getDate();

            this.init();

        }

        init() {
            //家庭医生人数
            api.getFamilyDoctor().then(({data}) => {

                this.$utils.numberGrow(this, `familyDoctorNum`, data.count)
            });

        }

        console1(e) {
            let viewbox: any = this.$refs.viewbox;
            let x: any = (e.clientX / viewbox.clientWidth * 100).toFixed(2);
            let y: any = (e.clientY / viewbox.clientHeight * 100).toFixed(2);
            console.log(`x:'${x}%',y:'${y}%'`)
        }

        percentCalc(num: number, total: number) {
            let per = num / total * 100;
            return per.toFixed(2)
        }

        positionSet(item: any) {
            return `left:${item.x};top:${item.y}`;
        }

        closeVideo() {
            this.showBox = '';
            setTimeout(() => {
                this.showBox = 'close';
            }, 200)
        }

        toHome() {
            this.$router.push({name: '未来社区首页'})
        }
    }
</script>

<style lang="scss" scoped>
    @import "../styles/variables";
    #health {
        width: 100%;
        height: 100%;
        min-height: 690px;
        position: relative;
        background-image: url("../images/health/健康.jpg");
        background-color: #000;
        background-size: 100% 100%;
        background-repeat: no-repeat;

        .logo_bottom {
            position: absolute;
            bottom: 0;
            z-index: 9;
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
            z-index: 1;
            overflow: hidden;

            .left_content {
                position: absolute;
                z-index: 2;
                width: 21.8%;
                min-width: 360px;
                height: 90.37vh;
                top: 7.6%;
                left: 1.25vw;
                background-image: url("../images/serve/框右.png");
                background-repeat: no-repeat;
                background-size: 100% 100%;
                padding: 12px;
                animation: slide-left .3s ease;
            }

            .right_content {
                position: absolute;
                z-index: 2;
                width: 21.8%;
                min-width: 360px;
                height: 90.37vh;
                right: 1.25vw;
                top: 7.6%;
                background-image: url("../images/serve/框右.png");
                background-repeat: no-repeat;
                background-size: 100% 100%;
                padding: 12px;
                animation: slide-right .3s ease;
            }

            .neerbolb {
                .num {
                    padding: 0 20px 0 25px;
                }
            }

            .healthHouse {
                position: absolute;
                cursor: pointer;
                z-index: 2;
                height: 40px;
                width: 132px;
                top: 24.54vh;
                right: 43.44vw;
                background-image: url("../images/health/健康小屋.png");
                background-size: 100% 100%;
                background-repeat: no-repeat;
            }

            .runwayPoint {
                position: absolute;
                cursor: pointer;
                z-index: 2;
                height:37px;
                width: 100px;
                bottom: 27.22vh;
                right: 31.3vw;
                background-image: url("../images/health/樱花跑道.png");
                background-size: 100% 100%;
                background-repeat: no-repeat;
            }

            .housepoint {
                position: absolute;
                z-index: 2;
                width: 28px;
                height: 34px;
                background-image: url("../images/health/健身房.png");
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
                    height: 56px;
                    width: 200px;
                    padding: 0 20px 16px;
                    justify-content: center;
                    align-items: center;
                    color: #ffffff;
                    left: -86px;
                    top: -48px;
                    font-size: 16px;
                    background-image: url("../images/health/健身房名称.png");
                    background-size: 100% 40px;
                    background-repeat: no-repeat;
                }
            }

            .carouselbox {
                width: 100%;
                padding: 0 6%;

                .cardbg {
                    background-color: #101f5e;
                    color: #fff;
                    width: 100%;
                    height: 100%;
                    position: relative;
                    padding: 20px;
                    cursor: pointer;

                    h2 {
                        height: 30px;
                        line-height: 30px;
                        margin-bottom: 16px;
                    }

                    .detail {
                        height: calc(100% - 46px);
                        overflow: hidden;
                    }
                }
            }

            .appointmentOnline {
                width: 100%;
                height: 54px;
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 0 12px;

                .left {
                    display: inline-flex;
                    align-items: center;
                    font-weight: bold;
                    color: #409fff;

                    img {
                        width: 60px;
                    }
                }

                .right {
                    em {
                        color: white;
                        font-size: 24px;
                        font-weight: bold;
                    }

                    i {
                        color: #597eb3;
                        font-size: 13px;
                        margin-left: 6px;
                    }
                }

            }

        }

        .healthSever {
            position: absolute;
            z-index: 3;
            right: 13.62vw;
            bottom: 4.18vh;
            width: 45vw;
            height: 36.11vh;
            background-image: url("../images/health/健康服务月统计弹窗.png");
            background-repeat: no-repeat;
            background-size: 100% 100%;
            padding: 1.5vw 1.75vw;
            .close{
                right: 1.5vw;
                top: 1.5vw;
            }

        }

        .physicalCheck {
            position: absolute;
            z-index: 3;
            left: 8.57vw;
            top: 26.2vh;
            width: 32.3vw;
            height: 50vh;
            background-image: url("../images/health/健身打卡月统计弹窗.png");
            background-repeat: no-repeat;
            background-size: 100% 100%;
            padding: 2vw 2.5vw;

            &.lf2{
                left: 10.4vw;
                top: 16vh;
            }
            &.lf3{
                left: 12.26vw;
            }

        }

        .centerbox {
            .poogu{
                padding: 20px 90px 20px 10px;
                display: flex;
                flex-wrap: wrap;

                .item{
                    width: 50%;
                    display: inline-flex;
                    margin-bottom: 16px;
                    line-height: 18px;
                    align-items: flex-start;
                    max-height: 36px;
                    overflow: hidden;
                    &.long{
                        width: 100%;
                    }
                    .label{
                        color: $label-color;
                        width: 84px;
                        flex:none;
                    }
                    .text{
                        color: #fff;
                    }
                }
            }
        }
    }
</style>
<style lang="scss">
    #health {
        .carouselbox {

            .el-carousel__indicators--horizontal {
                white-space: nowrap;
            }

            .el-carousel__button {
                background-color: #409fff;
            }

            .el-carousel__arrow {
                display: none;
            }
        }
    }

</style>
