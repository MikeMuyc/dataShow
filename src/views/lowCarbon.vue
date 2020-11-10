<template>
    <div id="lowCarbon" ref="viewbox" @click="console1">
        <div class="back_home" @click="toHome"></div>
        <div class="logoTitle">低碳场景</div>

        <div class="date_show">
            <em class="date_num">{{year}}</em>
            <i>年</i>
            <em class="date_num">{{month}}</em>
            <i>月</i>
            <em class="date_num">{{day}}</em>
            <i>日</i>
        </div>
        <div class="leftMiddle">
            <div class="boxTitle">环境温湿度</div>
            <div class="temperature">
                <cornerBox style="margin:0 16px;width: calc(100% - 32px);height: 80px">
                    <div class="colist " style="height: 80px">
                        <div class="splitItem">
                            <div class="label">PM2.5</div>
                            <div class="text">{{temperatureData.pm25}}<i>μg/m3</i></div>
                        </div>
                        <div class="splitItem">
                            <div class="label">温度</div>
                            <div class="text">{{temperatureData.tmp}}<i>℃</i></div>
                        </div>
                        <div class="splitItem">
                            <div class="label">湿度</div>
                            <div class="text">{{temperatureData.hum}}<i>%</i></div>
                        </div>
                    </div>
                </cornerBox>
            </div>
        </div>

        <div class="leftBottom">
            <div class="boxTitle">垃圾分类</div>
            <div class="boxmain">
                <div class="secondTitle">社区垃圾投放情况</div>
                <div class="chartTitle">本月垃圾投放量</div>
                <div class="numline">
                    <div class="left">
                        <div class="infotext">
                            <em class="num more" @click="showBox = 'garbageList'">
                                14.95
                                <i class="iconfont iconzhijiao-triangle"></i>

                            </em>
                            <i class="unit">吨</i>
                        </div>
                    </div>
                    <div class="right" style="justify-content:center;padding-top: 4px">
                        <em class="label">
                            环比上月：
                            <em class="num">1.2%</em>
                            <i class="iconfont iconup"></i>

                        </em>
                    </div>
                </div>
                <typeItemChartList style="height: 100px" :chartList="rulist" unit="吨"></typeItemChartList>
                <div class="chartTitle">本月垃圾投放总次数</div>
                <div class="numline">
                    <div class="left">
                        <div class="infotext">
                            <em class="num">
                                13520
                            </em>
                            <i class="unit">次</i>
                        </div>
                    </div>
                    <div class="right" style="justify-content:center;">
                        <em class="label">
                            投放正确率：
                            <em class="num">99.2%</em>
                        </em>
                    </div>
                </div>

                <v-chart
                        :options="garbageChart"
                        :autoResize="true"
                        style="height: calc(100% - 368px);position: relative;"
                />
            </div>
        </div>

        <div class="rightBox">
            <div class="boxTitle">能耗实时数据</div>
            <div class="boxmain">
                <div class="secondTitle">当月用电情况</div>
                <div class="smalltitle">本月总用电</div>
                <div class="numline">
                    <div class="left">
                        <em class="num">{{electriTotal}}</em>
                        <em class="clas"></em>
                        <em class="unit">千瓦时</em>
                    </div>
                    <div class="right">
                        <em class="label">环比上月：</em>
                        <em class="num">{{electriHB>0 ? `+${electriHB}%` : `${electriHB}%`}}</em>
                        <i v-if="electriHB>0" class="iconfont iconup"></i>
                        <i v-else-if="electriHB<0" class="iconfont icondown"></i>
                    </div>
                </div>
                <div class="chartTitle">
                    <div class="left">每月用电情况</div>
                    <!-- <div class="right">
                         <div class="line">
                             <div class="label">用电量</div>
                             <div class="num">150万 千瓦时</div>
                         </div>
                         <div class="line">
                             <div class="label">占比</div>
                             <div class="num">31%</div>
                         </div>

                     </div>-->
                </div>
                <v-chart
                        :options="electriChart"
                        :autoResize="true"
                        ref="medicalPeople"
                        class="leftChart"
                        style="position: relative;"
                />

                <div class="secondTitle">当月用水情况</div>
                <div class="smalltitle">本月总用水</div>
                <div class="numline">
                    <div class="left">
                        <em class="num">12</em>
                        <em class="clas">万</em>
                        <em class="unit">吨</em>
                    </div>
                    <div class="right">
                        <em class="label">环比上月：</em>
                        <em class="num">-8%</em>

                    </div>
                </div>
                <div class="chartTitle">
                    <div class="left">各区域用水情况</div>

                </div>
                <v-chart
                        :options="waterChart"
                        :autoResize="true"
                        ref="medicalPeople"
                        class="leftChart"
                        style="position: relative;"
                />
            </div>
        </div>



        <transition name="fade">
            <div class="messageHover" v-show="showBox !== 'close'">
                <div class="outsideClose" @click="closeVideo"></div>
                <transition name="toggle">
                    <div class="areaEnergy" v-show="showBox === 'areaEnergy'">
                        <i class="iconfont iconcha-copy close" @click="closeVideo"></i>
                        <div class="title">当月各区域能耗情况</div>
                        <v-chart
                                :options="areaEnergy"
                                :autoResize="true"
                                style="width:100%;height:calc(50% - 36px);margin-bottom: 16px;"
                        />
                        <v-chart
                                :options="areaEnergy2"
                                :autoResize="true"
                                style="width:100%;height:calc(50% - 36px);"
                        />
                    </div>
                </transition>
                <transition name="toggle">
                    <div class="garbageList" v-show="showBox === 'garbageList'">
                        <i class="iconfont iconcha-copy close" @click="closeVideo"></i>
                        <div class="title" style="margin-bottom: 20px">本月垃圾投放情况</div>
                        <el-table
                                :data="garbageList"
                                style="width: 100%">
                            <el-table-column
                                    prop="area"
                                    label="地区"
                                    width="120px"
                            >
                            </el-table-column>

                            <el-table-column
                                    label="投放分布"

                                    min-width="240"
                            >
                                <template slot-scope="{row,$index}">
                                    <div class="colorLine">
                                        <el-tooltip effect="dark" :content="`${item.name}:${item.num}吨 ${(item.num/row.count*100).toFixed(2)}%`" placement="top" v-for="item in row.detail">
                                            <div class="part" :class="calcName(item.name)" :style="calcWidth(item.num)"></div>
                                        </el-tooltip>

                                    </div>
                                </template>
                            </el-table-column>

                            <el-table-column
                                    prop="count"
                                    label="垃圾总量/吨"
                                    min-width="120"

                            >
                            </el-table-column>
                            <el-table-column
                                    prop="huanbi"
                                    label="环比上月"
                                    min-width="90px"
                                    align="center"
                            >
                                <template slot-scope="{row,$index}">
                                    {{row.huanbi>0 ? `+${row.huanbi}%` : `${row.huanbi}%`}}
                                    <i v-if="row.huanbi>0" class="iconfont iconup red"></i>
                                    <i v-else-if="row.huanbi<0" class="iconfont icondown"></i>
                                </template>
                            </el-table-column>
                            <el-table-column
                                    prop="tongbi"
                                    label="同比去年"
                                    min-width="90px"
                                    align="center"
                            >
                                <template slot-scope="{row,$index}">
                                    {{row.tongbi>0 ? `+${row.tongbi}%` : `${row.tongbi}%`}}
                                    <i v-if="row.tongbi>0" class="iconfont iconup red"></i>
                                    <i v-else-if="row.tongbi<0" class="iconfont icondown"></i>
                                </template>
                            </el-table-column>
                        </el-table>
                    </div>
                </transition>
                <transition name="bounce">
                    <div class="video" v-show="showBox === 'video'">
                        <i class="iconfont iconcha-copy close" @click="closeVideo"></i>

                    </div>
                </transition>
            </div>
        </transition>


        <div class="pointa" title="再生资源回收" :style="positionSet({x:'51.26%',y:'15.80%'})"></div>


        <div class="logo_bottom">

        </div>
    </div>
</template>
<script lang="ts">
    import {Vue, Component} from "vue-property-decorator";
    import {Button} from 'iview'
    import colorful from './allDataShow/colorList'
    import cornerBox from './allDataShow/cornerBox.vue';
    import reviewBox from './allDataShow/reviewBox_before.vue'

    import typeItemChartList from './allDataShow/typeItemChartList.vue'
    import * as api from '../api/lowCarbon'
    import {point, imgList} from './allDataShow/lowCarbon'

    @Component({
        components: {
            Button,
            cornerBox,
            reviewBox,

            typeItemChartList
        }
    })

    export default class lowCarbon extends Vue {
        year: string = '';
        month: string = '';
        day: string = '';

        pointList: any = point;
        imgList: any = imgList;
        electriChart: any = null;
        waterChart: any = {
            textStyle: {
                color: `#fff`,
            },
            tooltip: {
                trigger: 'axis',
            },
            color: [`#ffd451`],
            calculable: true,
            grid: {
                left: `10`,
                right: `10`,
                top: '40',
                bottom: '10',
                containLabel: true
            },
            xAxis: [
                {
                    name: '',
                    type: 'category',
                    data: colorful.monthList,
                    nameGap: 10,
                    boundaryGap: true,
                    nameTextStyle: {
                        color: `#597eb2`,
                        padding: [28, 10, 0, 0],
                    },
                    axisTick: {
                        alignWithLabel: true,
                    },
                    axisLine: {
                        lineStyle: {
                            color: `#597eb2`,
                        }
                    }
                }
            ],
            yAxis: [
                {
                    name: '用水量/吨',
                    z: 1,
                    nameTextStyle: {
                        color: `#597eb2`,
                        padding: [0, 0, 0, 10],
                    },
                    splitLine: {
                        show: false
                    },
                    axisLine: {
                        lineStyle: {
                            color: `#597eb2`,
                        }
                    },
                    axisLabel: {
                        formatter: '{value}万'
                    },
                },
            ],
            series: [

                {
                    name: '用水量',
                    type: 'bar',
                    data: [13.3, 12.4, 19.6, 16.13, 18.33, 10.36, 11.20, 14.50, 12.4, 19.6, 26.13, 18.56],
                    barWidth: 12,
                    itemStyle: {
                        barBorderRadius: [2, 2, 0, 0],
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [
                                {
                                    offset: 1, color: '#0157cd'
                                },
                                {
                                    offset: 0, color: '#66c0ff'
                                }
                            ],
                            global: false
                        }
                    }
                },

            ]
        };

        garbageChart: any = {
            textStyle: {
                color: `#fff`,
            },
            tooltip: {
                trigger: 'axis',
            },
            calculable: true,
            grid: {
                left: `10`,
                right: `10`,
                top: '40',
                bottom: '20',
                containLabel: true
            },
            color: [`#fdd34d`, `#4c88ff`],
            xAxis: [
                {
                    name: '',
                    type: 'category',
                    data: colorful.monthList,
                    nameGap: 10,
                    boundaryGap: true,
                    nameTextStyle: {
                        color: `#597eb2`,
                        padding: [28, 10, 0, 0],

                    },

                    axisTick: {
                        alignWithLabel: true,
                    },
                    axisLine: {
                        lineStyle: {
                            color: `#597eb2`,
                        }
                    }
                }
            ],
            yAxis: [
                {
                    name: '次数',
                    z: 1,
                    nameTextStyle: {
                        color: `#597eb2`,
                        padding: [0, 0, 0, 20],
                    },
                    splitLine: {
                        show: false
                    },
                    axisLine: {
                        lineStyle: {
                            color: `#597eb2`,
                        }
                    },


                },
                {
                    name: '正确率/%',
                    z: 1,
                    nameTextStyle: {
                        color: `#597eb2`,
                        padding: [0, 0, 0, 10],
                    },
                    splitLine: {
                        show: false
                    },
                    axisLine: {
                        lineStyle: {
                            color: `#597eb2`,
                        }
                    },
                },
            ],
            series: [

                {
                    name: '投放次数',
                    type: 'line',
                    smooth: true,
                    data: [1312, 1210, 1515, 1346, 1403, 1165, 1360, 1100, 1314, 946, 943, 935],

                },
                {
                    name: '正确率',
                    type: 'line',
                    smooth: true,
                    data: [97.3, 97.201, 98.41, 97.31, 98.83, 99.03, 98.70, 98.50, 98.24, 98.56, 98.23, 98.35],
                    yAxisIndex: 1,
                    /*barWidth: 12,
                    itemStyle: {
                        barBorderRadius: [2, 2, 0, 0],
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [
                                {
                                    offset: 1, color: '#0157cd'
                                },
                                {
                                    offset: 0, color: '#66c0ff'
                                }
                            ],
                            global: false
                        }
                    }*/
                },
            ]
        };

        showBox: string = 'close';


        errorChart: any = {
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b}: {c}个 ({d}%)'
            },

            series: [
                {
                    name: '故障情况',
                    type: 'pie',
                    radius: ['0%', '60%'],
                    center: ['50%', '50%'],
                    label: {
                        show: true,
                        formatter: '{b|{b}}\n{per|{d}%}',
                        rich: {
                            b: {
                                fontSize: 12,
                                lineHeight: 14,
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
                        length: 8,
                        length2: 26
                    },
                    data: [
                        {
                            value: 97,
                            name: '正常',
                            itemStyle: {
                                color: {
                                    type: 'linear',
                                    colorStops: [{
                                        offset: 1, color: '#00ffbf' // 0% 处的颜色
                                    }, {
                                        offset: 0, color: '#99fff6' // 100% 处的颜色
                                    }],
                                    global: false // 缺省为 false
                                }
                            }

                        },
                        {
                            value: 3,
                            name: '故障',
                            itemStyle: {
                                color: {
                                    type: 'linear',
                                    colorStops: [{
                                        offset: 1, color: '#3366ff' // 0% 处的颜色
                                    }, {
                                        offset: 0, color: '#6699ff' // 100% 处的颜色
                                    }],
                                    global: false // 缺省为 false
                                }
                            }
                        },
                    ]
                }
            ]
        };

        rulist: any = [
            {
                name: '易腐垃圾',
                color: 'green',
                count: 7.1,
                per: `0%`,
            },
            {
                name: '可回收垃圾',
                color: 'blue',
                count: 4.6,
                per: `0%`,
            },
            {
                name: '有害垃圾',
                color: 'red',
                count: 0.13,
                per: `0%`,
            },
            {
                name: '其他垃圾',
                color: 'black',
                count: 3.12,
                per: `0%`,
            },
        ];

        recentlyMonth: any = {
            endTime: ``,
            startTime: ``,
        }

        electriTotal: number = 0;
        electriHB: number = 0;
        waterTotal: number = 0;
        waterHB: number = 0;
        temperatureData: any = {
            "pm25": 22,
            "tmp": 22,
            "hum": 81,
            "time": "2020-05-09 05:30:00",
        };
        garbageList: any = [
            {
                area: '北苑北',
                count: 12,
                huanbi: 4.6,
                tongbi: -2.2,
                garbage1:{
                    name: '易腐垃圾',
                    num: 8,
                },
                garbage2:{
                    name: '可回收垃圾',
                    num: 3.2,
                },
                garbage3:{
                    name: '有害垃圾',
                    num: 0.2,
                },
                garbage4:{
                    name: '其他垃圾',
                    num: 0.6,
                },
                detail: [
                    {
                        name: '易腐垃圾',
                        num: 8,
                    },
                    {
                        name: '可回收垃圾',
                        num: 3.2,
                    },
                    {
                        name: '有害垃圾',
                        num: 0.2
                    },
                    {
                        name: '其他垃圾',
                        num: 0.6,
                    },
                ],
            },
            {
                area: '北苑南',
                count: 10,
                huanbi: 3.2,
                tongbi: 2.3,
                garbage1:{
                    name: '易腐垃圾',
                    num:  6.6,
                },
                garbage2:{
                    name: '可回收垃圾',
                    num: 3,
                },
                garbage3:{
                    name: '有害垃圾',
                    num: 0,
                },
                garbage4:{
                    name: '其他垃圾',
                    num: 0.4,
                },
                detail: [
                    {
                        name: '易腐垃圾',
                        num: 6.6,
                    },
                    {
                        name: '可回收垃圾',
                        num: 3,
                    },
                    {
                        name: '有害垃圾',
                        num: 0
                    },
                    {
                        name: '其他垃圾',
                        num: 0.4,
                    },
                ],
            },
            {
                area: '新苑',
                count: 14.6,
                huanbi: 2.5,
                tongbi: 2.1,
                garbage1:{
                    name: '易腐垃圾',
                    num:  8,
                },
                garbage2:{
                    name: '可回收垃圾',
                    num: 4.2,
                },
                garbage3:{
                    name: '有害垃圾',
                    num: 0.2,
                },
                garbage4:{
                    name: '其他垃圾',
                    num: 1.6,
                },
                detail: [
                    {
                        name: '易腐垃圾',
                        num: 8,
                    },
                    {
                        name: '可回收垃圾',
                        num: 4.2,
                    },
                    {
                        name: '有害垃圾',
                        num: 0.2
                    },
                    {
                        name: '其他垃圾',
                        num: 1.6,
                    },
                ],
            },
            {
                area: '东苑',
                count: 12,
                huanbi: -2.0,
                tongbi: -1.6,
                garbage1:{
                    name: '易腐垃圾',
                    num:  8,
                },
                garbage2:{
                    name: '可回收垃圾',
                    num: 3.2,
                },
                garbage3:{
                    name: '有害垃圾',
                    num: 0.2,
                },
                garbage4:{
                    name: '其他垃圾',
                    num: 0.6,
                },
                detail: [
                    {
                        name: '易腐垃圾',
                        num: 8,
                    },
                    {
                        name: '可回收垃圾',
                        num: 3.2,
                    },
                    {
                        name: '有害垃圾',
                        num: 0.2
                    },
                    {
                        name: '其他垃圾',
                        num: 0.6,
                    },
                ],
            },
        ];
        garbageMax: number = 0;

        areaEnergy: any = {
            title: {
                text: '各区域当月用电情况',
                textStyle: {
                    color: '#fff',
                    fontWeight: 'normal',
                    fontSize: 14,
                },
                left: `16`,
                top: 0,
            },

            tooltip: {
                trigger: 'axis'
            },
            color: ['#ffd451'],
            calculable: true,
            grid: {
                left: `30`,
                right: `24`,
                top: '52',
                bottom: '30',
                containLabel: true
            },
            legend: {
                data: ['用电量', '环比'],
                icon:'roundRect',
                itemWidth: 16,
                itemHeight: 10,
                itemGap:20,
                right: 'center',
                bottom:'0',
                textStyle: {
                    color: '#fff',
                    fontSize: 14,
                    verticalAlign: 'middle',
                }
            },
            xAxis: [
                {
                    type: 'category',
                    data: ['新苑', '东苑', '北苑北', '北苑南',],
                    name: '',

                    nameLocation: 'end',
                    nameTextStyle: {
                        color: `#597eb2`,
                    },

                    axisLabel: {

                        textStyle: {
                            color: '#cce1ff',
                            display: 'inline-block',
                            overflow: 'hidden',
                            whiteSpace: 'nowrap',
                            textOverflow: 'ellipsis',
                            width: 10
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
                    name: '用电量/千瓦时',
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
                    splitLine: {
                        show: false,
                    },
                    axisLine: {
                        lineStyle: {
                            color: `#f6f6f6`,
                        }
                    }
                },
                {
                    name: '环比上月/%',
                    axisLabel: {
                        fontSize: 10,
                        showMaxLabel: 'false',
                        textStyle: {
                            color: '#cce1ff'
                        },
                        formatter:'{value}%',
                    },
                    nameLocation: 'end',
                    axisTick: {
                        show: false
                    },
                    nameTextStyle: {
                        color: `#597eb2`,
                        padding: [5, 25, -3, 0],
                    },
                    min:-30,
                    max:30,
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
                    name: '环比',
                    type: 'line',
                    data: [2.1, 3.7, -1.6, 4.3],
                    yAxisIndex:1,
                },
                {
                    name: '用电量',
                    type: 'bar',
                    itemStyle: {
                        barBorderRadius: [2, 2, 0, 0],
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [
                                {
                                    offset: 1, color: '#0055cc'
                                },
                                {
                                    offset: 0, color: '#66bfff'
                                }
                            ],
                            global: false
                        }
                    },
                    data: [62331, 58323, 57666, 54844],
                    barWidth: 20,
                },
            ]
        };
        areaEnergy2: any = {
            title: {
                text: '各区域当月用水情况',
                textStyle: {
                    color: '#fff',
                    fontWeight: 'normal',
                    fontSize: 14,
                },
                left: `16`,
                top: 0,
            },

            tooltip: {
                trigger: 'axis'
            },
            color: ['#ffd451'],
            calculable: true,
            grid: {
                left: `30`,
                right: `24`,
                top: '52',
                bottom: '30',
                containLabel: true
            },
            legend: {
                data: ['用水量', '环比'],
                icon:'roundRect',
                itemWidth: 16,
                itemHeight: 10,
                itemGap:20,
                right: 'center',
                bottom:'0',
                textStyle: {
                    color: '#fff',
                    fontSize: 14,
                    verticalAlign: 'middle',
                }
            },
            xAxis: [
                {
                    type: 'category',
                    data: ['新苑', '东苑', '北苑北', '北苑南',],
                    name: '',

                    nameLocation: 'end',
                    nameTextStyle: {
                        color: `#597eb2`,
                    },

                    axisLabel: {

                        textStyle: {
                            color: '#cce1ff',
                            display: 'inline-block',
                            overflow: 'hidden',
                            whiteSpace: 'nowrap',
                            textOverflow: 'ellipsis',
                            width: 10
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
                    name: '用水量/吨',
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
                    splitLine: {
                        show: false,
                    },
                    axisLine: {
                        lineStyle: {
                            color: `#f6f6f6`,
                        }
                    }
                },
                {
                    name: '环比上月/%',
                    axisLabel: {
                        fontSize: 10,
                        showMaxLabel: 'false',
                        textStyle: {
                            color: '#cce1ff'
                        },
                        formatter:'{value}%',
                    },
                    nameLocation: 'end',
                    axisTick: {
                        show: false
                    },
                    nameTextStyle: {
                        color: `#597eb2`,
                        padding: [5, 25, -3, 0],
                    },
                    min:-30,
                    max:30,
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
                    name: '环比',
                    type: 'line',
                    data: [2.1, 3.7, -1.6, 4.3],
                    yAxisIndex:1,
                },
                {
                    name: '用水量',
                    type: 'bar',
                    itemStyle: {
                        barBorderRadius: [2, 2, 0, 0],
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [
                                {
                                    offset: 1, color: '#019a8d'
                                },
                                {
                                    offset: 0, color: '#7fffdf'
                                }
                            ],
                            global: false
                        }
                    },
                    data: [21.22, 23.8, 25.66, 18.44],
                    barWidth: 20,
                },
            ]
        };
        mounted() {
            let myDate: any = new Date();     //获取当前年份(2位)
            this.year = myDate.getFullYear();    //获取完整的年份(4位,1970-????)
            this.month = ((myDate.getMonth() + 1) > 9 ? (Number(myDate.getMonth()) + 1).toString() : '0' + (Number(myDate.getMonth()) + 1).toString());       //获取当前月份(0-11,0代表1月)
            this.day = myDate.getDate() > 9 ? myDate.getDate() : '0' + myDate.getDate();

            this.recentlyMonth = {
                endTime: `${this.year}-${this.month}-${myDate.getDate() + 1}`,
                startTime: `${this.year}-${myDate.getMonth()}-${myDate.getDate()}`,
            }
            this.init();


        }

        init() {
            /*api.getelectricity().then(({data}) => {
                api.getWater().then(obj => {
                    this.electriChart = {
                        textStyle: {
                            color: `#fff`,
                        },
                        tooltip: {
                            trigger: 'axis',
                        },
                        calculable: true,
                        grid: {
                            left: `10`,
                            right: `10`,
                            top: '40',
                            bottom: '30',
                            containLabel: true
                        },
                        color: [`#fdd34d`, `#46e7e5`],
                        xAxis: [
                            {
                                name: '',
                                type: 'category',
                                data: this.$utils.getEchartxAxis(data),
                                nameGap: 10,
                                boundaryGap: true,
                                nameTextStyle: {
                                    color: `#597eb2`,
                                    padding: [28, 10, 0, 0],

                                },
                                axisLabel: {
                                    fontSize: 10,
                                    rotate: -15,

                                    margin: 18,
                                    padding: [6, 12, 0, -12],
                                    textStyle: {
                                        color: '#cce1ff'
                                    },
                                },
                                axisTick: {
                                    alignWithLabel: true,
                                },
                                axisLine: {
                                    lineStyle: {
                                        color: `#597eb2`,
                                    }
                                }
                            }
                        ],
                        yAxis: [
                            {
                                name: '用电量/千瓦时',
                                z: 1,
                                nameTextStyle: {
                                    color: `#597eb2`,
                                    padding: [0, 0, 0, 20],
                                },
                                splitLine: {
                                    show: false
                                },
                                axisLine: {
                                    lineStyle: {
                                        color: `#597eb2`,
                                    }
                                },
                                axisLabel: {},
                            },
                            {
                                name: '用水量/吨',
                                z: 1,
                                nameTextStyle: {
                                    color: `#597eb2`,
                                    padding: [0, 0, 0, 10],
                                },
                                splitLine: {
                                    show: false
                                },
                                axisLine: {
                                    lineStyle: {
                                        color: `#597eb2`,
                                    }
                                },
                            },
                        ],
                        series: [

                            {
                                name: '用电量',
                                type: 'line',
                                smooth: true,
                                data: this.$utils.getEchartData(data),
                            },
                            {
                                name: '用水量',
                                type: 'line',
                                smooth: true,
                                //data: [13300, 12021, 19641, 16131, 18533, 10736, 11420, 14450, 12214, 19456, 12613, 18556],
                                data: this.$utils.getEchartData(obj.data),
                                yAxisIndex: 1,

                            },
                        ]
                    };


                })
            })*/
            api.getelectricity().then(({data})=>{
                this.electriChart = {
                    textStyle: {
                        color: `#fff`,
                    },
                    tooltip: {
                        trigger: 'axis',
                    },
                    calculable: true,
                    grid: {
                        left: `10`,
                        right: `10`,
                        top: '40',
                        bottom: '10',
                        containLabel: true
                    },
                    xAxis: [
                        {
                            name: '',
                            type: 'category',
                            data: this.$utils.getEchartxAxis(data),
                            nameGap: 10,
                            boundaryGap: true,
                            nameTextStyle: {
                                color: `#597eb2`,
                                padding: [28, 10, 0, 0],
                            },
                            axisTick: {
                                alignWithLabel: true,
                            },
                            axisLine: {
                                lineStyle: {
                                    color: `#597eb2`,
                                }
                            }
                        }
                    ],
                    yAxis: [
                        {
                            name: '用电量/千瓦时',
                            z: 1,
                            nameTextStyle: {
                                color: `#597eb2`,
                                padding: [0, 0, 0, 20],
                            },
                            splitLine: {
                                show: false
                            },
                            axisLine: {
                                lineStyle: {
                                    color: `#597eb2`,
                                }
                            },
                            axisLabel: {

                            },
                        },
                    ],
                    series: [

                        {
                            name: '用电量',
                            type: 'bar',
                            data: this.$utils.getEchartData(data),
                            barWidth: 12,
                            itemStyle: {
                                barBorderRadius: [2, 2, 0, 0],
                                color: {
                                    type: 'linear',
                                    x: 0,
                                    y: 0,
                                    x2: 0,
                                    y2: 1,
                                    colorStops: [
                                        {
                                            offset: 1, color: '#524ede'
                                        },
                                        {
                                            offset: 0, color: '#8e97ff'
                                        }
                                    ],
                                    global: false
                                }
                            }
                        },

                    ]
                };
            })


            api.getelectricityTotal(this.recentlyMonth).then(({data}) => {
                this.$utils.numberGrow(this, `electriTotal`, data.count)
            })
            api.getelectricity_hb().then(({data}) => {
                this.$utils.numberGrow(this, `electriHB`, data.count)
            })

            api.getWaterTotal(this.recentlyMonth).then(({data}) => {
                this.$utils.numberGrow(this, `waterTotal`, data.count)
            })
            api.geWater_hb().then(({data}) => {
                this.$utils.numberGrow(this, `waterHB`, data.count)
            })

            api.gettemperature().then(({data}) => {
                this.temperatureData = data;
            })


            this.garbageMax = 0;
            for (let i = 0; i < this.garbageList.length; i++) {
                if (this.garbageList[i].count > this.garbageMax) {
                    this.garbageMax = this.garbageList[i].count
                }
            }
        }

        toHome() {
            this.$router.push({name: '未来社区首页'})
        }

        console1(e) {
            let viewbox: any = this.$refs.viewbox;
            let x: any = (e.clientX / viewbox.clientWidth * 100).toFixed(2);
            let y: any = (e.clientY / viewbox.clientHeight * 100).toFixed(2);
            console.log(`x:'${x}%',y:'${y}%'`)
        }

        startM(id?: string) {
            if (id) {
                this.showBox = 'video';
                let video: any = this.$refs.video;
                setTimeout(() => {
                    video.playVideo(id);
                }, 1000)
            }
        }

        closeVideo() {
            let video: any = this.$refs.video;
            if (video) {
                video.stopVideo();
            }
            this.showBox = '';
            setTimeout(() => {
                this.showBox = 'close';
            }, 200)
        }

        positionSet(item: any) {
            return `left:${item.x};top:${item.y}`;
        }

        calcWidth(num: number) {

            let per: number = num / this.garbageMax * 100;
            if (per < 3) {
                per = 3;
            }

            return `width:${per}%`


        }

        calcName(name: string) {
            if (name === '易腐垃圾') {
                return `green`
            } else if (name === '可回收垃圾') {
                return `blue`
            } else if (name === '有害垃圾') {
                return `red`
            } else if (name === '其他垃圾') {
                return `black`
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../styles/variables";

    #lowCarbon {
        width: 100%;
        height: 100%;
        position: relative;
        background-image: url("../images/dataBackground.jpg");
        background-color: #000;
        background-size: 100% 100%;
        background-repeat: no-repeat;
        z-index: 1;
        overflow: hidden;

        .leftMiddle {
            position: absolute;
            z-index: 4;
            width: 21.82vw;
            height: 20.83vh;
            left: 1.25vw;
            top: 7.31vh;
            background-image: url("../images/lowCarbon/框右上.png");
            background-size: 100% 100%;
            background-repeat: no-repeat;
            padding: 12px;
            min-width: 360px;
            animation: slide-left .3s ease;
            .temperature {
                height: calc(100% - 32px);
                display: flex;
                align-items: center;
            }
        }

        .leftBottom {
            position: absolute;
            z-index: 4;
            width: 21.82vw;
            height: 67.96vh;
            left: 1.25vw;
            bottom: 2.13vh;
            background-image: url("../images/lowCarbon/框右下.png");
            background-size: 100% 100%;
            background-repeat: no-repeat;
            padding: 12px;
            min-width: 360px;
            animation: slide-left .3s ease;
            .informg {
                display: flex;
                justify-content: space-between;
                align-items: baseline;
                height: 24px;
                margin-bottom: 10px;

                .left {
                    color: $label-color;
                    font-weight: bold;
                }

                .right {
                    color: $second-color;
                    font-size: 12px;
                }
            }


            .review {
                height: calc(100% - 82px);
            }
        }

        .rightBox {
            position: absolute;
            z-index: 2;
            width: 21.82vw;
            height: 91.3vh;
            right: 1.25vw;
            bottom: 1.39vh;
            background-image: url("../images/lowCarbon/低碳左框.png");
            background-size: 100% 100%;
            background-repeat: no-repeat;
            padding: 12px;
            min-width: 340px;
            animation: slide-right .3s ease;
            .leftChart {
                height: calc(50% - 148px - 2vh);
                width: 100%;
            }
        }




        .boxmain {
            padding: 0 1.2vw;
            height: calc(100% - 32px);
            overflow: hidden;

            .secondTitle {

                margin: 10px -12px;
            }

            .infotext {
                padding: 15px 0;
            }

        }

        .numline {
            display: flex;
            align-items: baseline;
            height: 36px;
            margin-bottom: 2vh;

            .left {
                width: 50%;

                .num {
                    color: #fff;
                    font-size: 24px;
                }

                .clas {
                    color: #fff;
                    font-size: 16px;
                    padding-right: 10px;
                }

                .unit {
                    color: #597eb3;
                }
            }

            .right {
                width: 50%;
                padding-left: 10px;
                text-align: right;
                .label {
                    color: $label-color;
                }

                .num {
                    color: #fff;
                    padding-right: 6px;
                }

                .iconfont {
                    font-size: 16px;

                    &.iconup {
                        color: #ffc018;
                    }

                    &.icondown {
                        color: #46e7e5;
                    }
                }
            }
        }

        .smalltitle {
            color: $label-color;
            font-weight: bold;
            margin-bottom: 6px;
            height: 24px;
            line-height: 24px;
        }

        .chartTitle {
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 30px;
            color: $label-color;
            font-weight: bold;
        }

        .areaEnergy {
            position: absolute;
            z-index: 2;
            left: 14.22vw;
            top: 19.26vh;
            width: 560px;
            height: 700px;
            background-image: url("../images/lowCarbon/能耗弹窗.png");
            background-repeat: no-repeat;
            background-size: 100% 100%;
            padding: 30px 40px;
        }

        .garbageList {
            position: absolute;
            z-index: 2;
            left: 6.58vw;
            bottom: 14.5vh;

            width: 780px;
            height: 360px;
            background-image: url("../images/lowCarbon/低碳3级框.png");
            background-repeat: no-repeat;
            background-size: 100% 100%;
            padding: 30px 40px;
        }

        .video {
            position: absolute;
            z-index: 2;
            left: calc(50% - 600px);
            top: calc(50% - 340px);
            width: 1200px;
            height: 680px;
            background-image: url("../images/serve/弹窗-商家数量.png");
            background-repeat: no-repeat;
            background-size: 100% 100%;
            padding: 86px 80px 70px;

            .close {
                right: 72px;
                top: 54px
            }
        }



        .logo_bottom {
            position: absolute;
            bottom: 0;
            z-index: 2;
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


        .point {
            width: 30px;
            height: 34px;
            z-index: 3;
            position: absolute;
            cursor: pointer;
            background-image: url("../images/lowCarbon/投放点.png");
            background-size: 100% 100%;
            background-repeat: no-repeat;
        }

        .pointa {
            width: 30px;
            height: 34px;
            z-index: 3;
            position: absolute;
            cursor: pointer;
            background-image: url("../images/lowCarbon/再生资源回收.png");
            background-size: 100% 100%;
            background-repeat: no-repeat;
        }

        .pointb {
            width: 30px;
            height: 34px;
            z-index: 3;
            position: absolute;
            cursor: pointer;
            background-image: url("../images/lowCarbon/特殊大件.png");
            background-size: 100% 100%;
            background-repeat: no-repeat;
        }

        .pointc {
            width: 30px;
            height: 34px;
            z-index: 3;
            position: absolute;
            cursor: pointer;
            background-image: url("../images/lowCarbon/集置点.png");
            background-size: 100% 100%;
            background-repeat: no-repeat;
        }

        .pointd {
            width: 30px;
            height: 34px;
            z-index: 3;
            position: absolute;
            cursor: pointer;
            background-image: url("../images/lowCarbon/清洗点.png");
            background-size: 100% 100%;
            background-repeat: no-repeat;
        }

        .iconup {
            font-size: 14px;
            color: #ffc018;

            &.red {
                color: #ff3a3a;
            }
        }

        .icondown {
            font-size: 14px;
            color: #46e7e5;
        }

        .colorLine {
            width: 200px;
            height: 8px;
            background-color: #16235B;
            border-radius: 4px;
            overflow: hidden;
            display: flex;

            .part {
                height: 100%;
                cursor: pointer;

                &:last-child {
                    border-top-right-radius: 4px;
                    border-bottom-right-radius: 4px;
                }
            }

            .red {
                background-image: linear-gradient(90deg,
                        #e3292e 0%,
                        #f35c5e 50%,
                        #fe8282 100%);
            }

            .green {
                background-image: linear-gradient(90deg,
                        #029a8d 0%,
                        #7bfddf 100%);
            }

            .black {
                background-image: linear-gradient(90deg,
                        #626262 0%,
                        #9499a0 50%,
                        #bbc3cf 100%);
            }

            .blue {
                background-image: linear-gradient(90deg,
                        #3344ff 0%,
                        #2d63ff 37%,
                        #2681ff 73%,
                        #409fff 100%);
            }
        }
    }
</style>
<style lang="scss">
    #lowCarbon {

    }
</style>
