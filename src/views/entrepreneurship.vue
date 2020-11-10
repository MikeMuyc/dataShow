<template>
    <div id="entrepreneurship">
        <div class="back_home" @click="toHome"></div>
        <div class="logoTitle">创业场景</div>
        <div class="date_show">
            <em class="date_num">{{year}}</em>
            <i>年</i>
            <em class="date_num">{{month}}</em>
            <i>月</i>
            <em class="date_num">{{day}}</em>
            <i>日</i>
        </div>

        <div class="leftop">
            <div class="boxTitle">入驻企业</div>
            <div class="activeinfo" style="padding: 10px 24px">
                <div class="infotext">
                    <i class="name">入驻企业数</i>
                    <em class="num more" @click="showBox = 'qiyedata'">
                        10
                        <i class="iconfont iconzhijiao-triangle"></i>
                    </em>
                    <i class="unit">家</i>
                </div>
            </div>
            <v-chart
                    :options="entrepreneurChart1"
                    :autoResize="true"
                    ref="entrepreneurship"
                    style="width:100%;height:calc(100% - 84px);position: relative;"
            />
        </div>

        <div class="leftbottom">
            <div class="boxTitle">创业空间</div>
            <div class="activeinfo">
                <div class="infotext">
                    <i class="name">创业空间</i>
                    <em class="num" >
                        10000
                    </em>
                    <i class="unit">㎡</i>
                </div>
            </div>
            <cornerBox style="margin: 20px 24px">
                <div class="colist" style="padding: 0">
                    <div class="splitItem borderR">
                        <div class="label">创业建筑</div>
                        <div class="text">26<i>栋</i></div>
                    </div>
                    <div class="splitItem ">
                        <div class="label">创业基地</div>
                        <div class="text">2<i>个</i></div>
                    </div>

                </div>
            </cornerBox>
            <div class="secondTitle" style="margin-bottom: 20px;margin-top: 30px">创业中心平面图展示</div>
            <div class="centerPicture" @click="showImg=true">
                <img src="../images/entrepreneurship/square.png" >
            </div>

        </div>

        <div class="rightpart">
            <div class="boxTitle">企业活动</div>
            <div class="activeinfo">
                <div class="infotext">
                    <i class="name">本年企业活动数量</i>
                    <em class="num" >
                        16
                    </em>
                    <i class="unit">次</i>
                </div>
            </div>
            <cornerBox style="margin: 20px 10px;width: calc(100% - 20px)">
                <div class="colist" style="padding: 0">
                    <div class="splitItem borderR">
                        <div class="label">投资对接会</div>
                        <div class="text">2<i>次</i></div>
                    </div>
                    <div class="splitItem borderR">
                        <div class="label">创业路演</div>
                        <div class="text">6<i>次</i></div>
                    </div>
                    <div class="splitItem ">
                        <div class="label">创业比赛</div>
                        <div class="text">8<i>次</i></div>
                    </div>

                </div>
            </cornerBox>
            <div class="secondTitle" style="margin-top: 40px">每月活动数量变化趋势</div>
            <v-chart
                    :options="monthActive"
                    :autoResize="true"
                    ref="entrepreneurship"
                    style="width:100%;height:calc(100% - 528px);position: relative;"
            />
            <div class="secondTitle" style="margin-bottom: 20px">活动精彩瞬间回放</div>
            <reviewBox class="review" :activeImg="imgList"></reviewBox>
        </div>

        <transition name="fade">
            <div class="messageHover" v-show="showBox !== 'close'">
                <div class="outsideClose" @click="closeVideo"></div>
                <transition name="toggle">
                    <div class="qiyedata" v-show="showBox === 'qiyedata'">
                        <i class="iconfont iconcha-copy close" @click="closeVideo"></i>
                        <div class="title">入住企业</div>
                        <el-table
                                :data="qiyedata"
                                height="264"
                                style="width: 100%">
                            <el-table-column
                                    prop="logo"
                                    label="logo"
                                    width="100px"
                                    align="center"
                            >
                            </el-table-column>
                            <el-table-column
                                    prop="name"
                                    label="名称"
                                    min-width="120"
                                    show-overflow-tooltip
                            >
                            </el-table-column>
                            <el-table-column
                                    prop="type"
                                    label="类型"
                                    width="100"
                            >
                            </el-table-column>
                            <el-table-column
                                    prop="position"
                                    label="位置"
                                    min-width="140"
                                    show-overflow-tooltip
                            >
                            </el-table-column>
                        </el-table>
                    </div>
                </transition>

            </div>
        </transition>

        <el-dialog
                :visible="showImg"
                custom-class="emDialog"
                width="53vw"
                :append-to-body="true"
                @close="showImg=false"
        >
            <div class="title" slot="title">
                创业中心平面图展示
            </div>

            <div class="timgbox">
                <img src="../images/entrepreneurship/square.png" >
            </div>

        </el-dialog>
        <div class="logo_bottom"></div>
    </div>
</template>
<script lang="ts">
    import {Vue, Component,Watch} from "vue-property-decorator";
    import {Button} from 'iview';
    import cornerBox from './allDataShow/cornerBox.vue';
    import reviewBox from './allDataShow/reviewBox_before.vue';
    import colorful from './allDataShow/colorList'
    import {imgList} from './allDataShow/entrepreneurship'

    @Component({
        components: {
            cornerBox,
            reviewBox,
            Button
        }
    })

    export default class entrepreneurship extends Vue {
        year: string = '';
        month: string = '';
        day: string = '';
        imgList:any = imgList;
        showImg:boolean = false;
        showBox: string = 'close';
        entrepreneurChart1: any = {
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
                    offset: 0, color: '#6699ff' // 0% 处的颜色
                }, {
                    offset: 0.5, color: '#5386ff' // 0% 处的颜色
                }, {
                    offset: 1, color: '#3366ff' // 100% 处的颜色
                }],
                global: false // 缺省为 false
            },
            calculable: true,
            grid: {
                left: `30`,
                right: `42`,
                top: '34',
                bottom: '0',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    data: ['IT类', '新媒体', '广告类', '设计类'],
                    name: '类型',
                    // nameGap: 5,
                    // boundaryGap: false,
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
                    name: '数量/家',
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
                        padding: [5, 25, -3, 0],
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
                    name: '数量/家',
                    type: 'bar',
                    itemStyle: {
                        barBorderRadius: [2, 2, 0, 0]
                    },
                    barWidth: 16,
                    data: [2, 2, 3, 3],
                }

            ]
        };

        monthActive: any = {
            textStyle: {
                color: `#999999`,
            },
            tooltip: {
                trigger: 'axis'
            },
            color: [`#00eaff`, `#0095ff`, `#febf6e`],
            calculable: true,
            grid: {
                left: `14`,
                right: `26`,
                top: '50',
                bottom: '40',
                containLabel: true
            },
            legend: {
                data: ['投资对接会', '创业路演', '创业比赛'],
                bottom: `12`,
                left: `18`,
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
            },
            xAxis: [
                {
                    type: 'category',
                    data: colorful.monthList,
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
                    name: '活动/次',
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
                    name: '投资对接会',
                    type: 'line',
                    smooth: true,
                    data: [3, 5, 4, 4, 5, 6, 8, 5, 6, 7, 7, 9],
                },
                {
                    name: '创业路演',
                    type: 'line',
                    smooth: true,
                    data: [12, 9, 13, 12, 11, 10, 12, 13, 16, 15, 14, 17],
                },
                {
                    name: '创业比赛',
                    type: 'line',
                    smooth: true,
                    data: [4, 5, 5, 6, 6, 8, 9, 10, 12, 11, 12, 11],
                },
            ]
        };
        qiyedata:any = [
            {
                logo:'',
                name:'xxxx有限公司',
                type:'互联网',
                position:'西园1路1号',
            },
            {
                logo:'',
                name:'xxxx有限公司',
                type:'餐饮服务',
                position:'文二西路334号',
            },
            {
                logo:'',
                name:'xxxx有限公司',
                type:'产品硬件',
                position:'古墩路130号',
            },
        ];
        mounted() {
            let myDate: any = new Date();     //获取当前年份(2位)
            this.year = myDate.getFullYear();    //获取完整的年份(4位,1970-????)
            this.month = ((myDate.getMonth() - 0 + 1) > 9 ? (Number(myDate.getMonth()) + 1).toString() : '0' + (Number(myDate.getMonth()) + 1).toString());       //获取当前月份(0-11,0代表1月)
            this.day = myDate.getDate() - 0 > 9 ? myDate.getDate() : '0' + myDate.getDate();
        }


        closeVideo() {
            this.showBox = '';
            setTimeout(()=>{
                this.showBox = 'close';
            },200)
        }

        toHome(){
            this.$router.push({name:'未来社区首页'})
        }
    }
</script>

<style lang="scss" scoped>
    #entrepreneurship{
        width: 100%;
        height: 100%;
        min-height: 690px;
        position: relative;
        background-image: url("../images/entrepreneurship/创业bg.png");
        background-color: #000;
        background-size: 100% 100%;
        background-repeat: no-repeat;
        overflow: hidden;
        .leftop{
            position: absolute;
            z-index: 2;
            width: 21.8vw;
            height: 30vh;
            left: 1.2vw;
            top: 7.2vh;
            background-image: url("../images/entrepreneurship/框左上.png");
            background-size: 100% 100%;
            background-repeat: no-repeat;
            padding: 12px;
            min-width: 360px;
            animation: slide-left .3s ease;
        }
        .leftbottom{
            position: absolute;
            z-index: 2;
            width: 21.8vw;
            height: 58.9vh;
            left: 1.2vw;
            bottom: 2.2vh;
            background-image: url("../images/entrepreneurship/框左下.png");
            background-size: 100% 100%;
            background-repeat: no-repeat;
            padding: 12px;
            min-width: 360px;
            animation: slide-left .3s ease;
            .centerPicture{
                width: 100%;
                display: flex;
                height: calc(100% - 266px);
                padding: 0 20px;
                justify-content: center;
                align-items: center;
                cursor: pointer;
                img{
                    width: auto;
                    max-width: 100%;
                    max-height: 100%;
                }
            }
        }
        .rightpart{
            position: absolute;
            z-index: 2;
            width: 21.8vw;
            height: 90.37vh;
            right: 1.2vw;
            bottom: 2.2vh;
            background-image: url("../images/entrepreneurship/框右.png");
            background-size: 100% 100%;
            background-repeat: no-repeat;
            padding: 12px;
            min-width: 360px;
            animation: slide-right .3s ease;
            .review{
                height: 200px;
                padding: 0 10px;
            }
        }

        .qiyedata {
            position: absolute;
            z-index: 2;
            left: 3.6vw;
            top: 16vh;
            width: 540px;
            height: 460px;
            background-image: url("../images/entrepreneurship/弹窗.png");
            background-repeat: no-repeat;
            background-size: 100% 100%;
            padding: 30px;
        }

        .logo_bottom {
            position: absolute;
            bottom: 0;
            z-index: 3;
            text-align: center;
            left: 21.2vw;
            width: 57.6vw;
            height: 13.33vh;
            display: flex;
            justify-content: center;
            background-image: url("../images/base/底部.png");
            background-repeat: no-repeat;
            background-size: 100% auto;
            background-position: left bottom;
            color: #d9e6ff;
            align-items: flex-end;
            padding-bottom: 4.54vh;
            font-size: 16px;

            em {
                font-size: 28px;
                font-weight: bold;
                padding: 0 10px;
                line-height: 1;
            }
        }
    }
</style>
<style lang="scss" >
    #entrepreneurship{



    }
</style>
