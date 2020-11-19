<template>
    <div id="futureHome">
        <div class="healthHouse"></div>
        <div class="squarePosition"></div>
        <div class="logoTitle">未来社区综合管理平台</div>
        <div class="date_show">
            <em class="date_num">{{myDate.year}}</em>
            <i>年</i>
            <em class="date_num">{{myDate.month}}</em>
            <i>月</i>
            <em class="date_num">{{myDate.day}}</em>
            <i>日</i>
        </div>
        <div class="viewBox">
            <div class="left_content">
                <div class="building ">
                    <div class="boxTitle more" @click="$router.push({name:'建筑场景'})">
                        建筑场景
                    </div>
                    <div class="colist " style="height: calc(50% - 16px);padding: 0">
                        <div class="splitImg ">
                            <div class="left">
                                <img src="../images/首页/建筑.png">
                            </div>
                            <div class="right">
                                <div class="label">居民楼</div>
                                <div class="text">274<i>栋</i></div>
                            </div>
                        </div>
                        <div class="splitImg ">
                            <div class="left">
                                <img src="../images/首页/房间.png">
                            </div>
                            <div class="right">
                                <div class="label">人才公寓</div>
                                <div class="text">{{apartmentNum}}<i>套</i></div>
                            </div>
                        </div>
                    </div>
                    <div class="colist" style="height: calc(50% - 16px);padding: 0">
                        <div class="splitItem">
                            <div class="label">停车场数量</div>
                            <div class="text">4<i>个</i></div>
                        </div>
                        <div class="splitItem">
                            <div class="label">低能耗建筑</div>
                            <div class="text">1<i>栋</i></div>
                        </div>
                        <div class="splitItem">
                            <div class="label">装配式建筑</div>
                            <div class="text">1<i>栋</i></div>
                        </div>
                    </div>

                </div>
                <div class="service">
                    <div class="boxTitle more" @click="$router.push({name:'服务场景'})">
                        服务场景
                    </div>
                    <div class="colist" style="padding: 0;margin-top: 12px">
                        <div class="splitItem">
                            <div class="label">安防设备</div>
                            <div class="text">35<i>个</i></div>
                        </div>
                        <div class="splitItem">
                            <div class="label">消防设备</div>
                            <div class="text">20<i>个</i></div>
                        </div>
                        <div class="splitItem">
                            <div class="label">消防火警</div>
                            <div class="text red">2<i>次</i></div>
                        </div>
                    </div>
                    <div class="secondTitle">
                        服务业态占比
                    </div>
                    <v-chart
                            :options="service"
                            :autoResize="true"
                            ref="service"
                            style="padding: 0 12px;height: calc(100% - 156px);"
                    />

                </div>

            </div>

            <div class="right_content">
                <div class="manage">
                    <div class="boxTitle more" @click="toManage">
                        治理场景
                    </div>

                    <div class="colist" style="padding: 0;margin-top: 12px">
                        <div class="splitItem">
                            <div class="label">云共治事件</div>
                            <div class="text">{{cloudAlarmTotal}}<i>件</i></div>
                        </div>
                        <div class="splitItem">
                            <div class="label">党员</div>
                            <div class="text">10<i>名</i></div>
                        </div>
                        <div class="splitItem">
                            <div class="label">志愿者</div>
                            <div class="text">30<i>名</i></div>
                        </div>
                    </div>
                    <div class="secondTitle" style="margin-bottom: 0">
                        告警事件类型统计TOP3
                    </div>
                    <v-chart
                            :options="manage"
                            :autoResize="true"
                            ref="manage"
                            style="width:100%;height: calc(100% - 120px);"
                    />
                </div>
                <div class="low_carbon">
                    <div class="boxTitle more" @click="$router.push({name:'低碳场景'})">低碳场景</div>
                    <div class="colist" style="padding: 0;margin-top: 12px">
                        <div class="splitItem">
                            <div class="label">低碳设备</div>
                            <div class="text">12<i>件</i></div>
                        </div>
                        <div class="splitItem">
                            <div class="label">智慧垃圾桶</div>
                            <div class="text">120<i>个</i></div>
                        </div>
                    </div>
                    <div class="secondTitle">垃圾投放情况</div>
                    <!--<typeItemChartList style="height: calc(100% - 156px);margin: 0 20px" :chartList="rulist"  unit="吨"></typeItemChartList>-->
                    <v-chart
                            :options="garbageChart"
                            :autoResize="true"
                            style="height: calc(100% - 156px);position: relative;"
                    />
                </div>
            </div>
            <div class="bottom_content">
                <div class="neighbor">
                    <div class="boxTitle more" @click="$router.push({name:'邻里场景'})">
                        邻里场景
                    </div>
                    <div class="item_text">
                        <span class="text_label">入住居民人数</span>
                        <span class="text_content">{{checkinNum}}</span>
                        <span class="text_unit">个</span>
                    </div>
                    <div class="secondTitle">
                        活动参与人数
                    </div>
                    <v-chart
                            :options="neighbor"
                            :autoResize="true"
                            ref="neighbor"
                            style="width:100%; height: calc(100% - 122px);"
                    />


                </div>
                <div class="health">
                    <div class="boxTitle more" style="background-size: 100% 100%" @click="$router.push({name:'健康场景'})">
                        健康场景
                    </div>
                    <div class="colist" style="padding: 0;margin-top: 6px">
                        <div class="splitItem">
                            <div class="label">医疗人员</div>
                            <div class="text">16<i>人</i></div>
                        </div>
                        <div class="splitItem">
                            <div class="label">家庭医生人数</div>
                            <div class="text">46<i>人</i></div>
                        </div>
                    </div>
                    <div class="secondTitle">医疗人员占比</div>
                    <v-chart
                            :options="health"
                            :autoResize="true"
                            ref="health"
                            style="width:100%;height: calc(100% - 154px);"
                    />

                </div>
                <div class="education">
                    <div class="boxTitle more" @click="$router.push({name:'教育场景'})">
                        教育场景
                    </div>
                    <div class="colist" style="padding: 0;margin-top: 6px">
                        <div class="splitItem">
                            <div class="label">线上课程数量</div>
                            <div class="text">{{classNum}}<i>节</i></div>
                        </div>
                        <div class="splitItem">
                            <div class="label">线下课程数量</div>
                            <div class="text">4<i>节</i></div>
                        </div>
                    </div>

                    <div class="secondTitle">
                        线上、线下课程订阅数量
                    </div>
                    <v-chart
                            :options="education"
                            :autoResize="true"
                            ref="education"
                            style="width:100%;height:calc(100% - 154px);"
                    />
                </div>
                <div class="entrepreneurship">
                    <div class="boxTitle more" @click="$router.push({name:'创业场景'})">
                        创业场景
                    </div>
                    <div class="colist" style="padding: 0;margin-top: 6px">
                        <div class="splitItem">
                            <div class="label">企业入驻数量</div>
                            <div class="text">10<i>家</i></div>
                        </div>
                        <div class="splitItem">
                            <div class="label">企业活动数量</div>
                            <div class="text">16<i>家</i></div>
                        </div>
                    </div>

                    <div class="secondTitle">企业入驻类型数量</div>
                    <v-chart
                            :options="entrepreneurship"
                            :autoResize="true"
                            ref="entrepreneurship"
                            style="width:100%;height:calc(100% - 154px);position: relative;"
                    />
                </div>
                <div class="traffic">
                    <div class="boxTitle more"  @click="toTraffic">
                        交通场景
                    </div>
                    <div class="colist" style="padding: 0;margin-top: 6px">
                        <div class="splitItem">
                            <div class="label">车位总数量</div>
                            <div class="text">1230<i>个</i></div>
                        </div>
                        <div class="splitItem">
                            <div class="label">充电桩总数量</div>
                            <div class="text">62<i>个</i></div>
                        </div>
                    </div>
                    <div class="secondTitle" >使用情况</div>
                    <div style="display: flex;height:calc(100% - 142px);">
                        <v-chart
                                class="chart"
                                :options="traffic1"
                                :autoResize="true"
                                style="width:50%;height:100%;position: relative;"
                        />
                        <v-chart
                                class="chart"
                                :options="traffic2"
                                :autoResize="true"
                                style="width:50%;height:100%;position: relative;"
                        />
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
    import {Vue, Component} from "vue-property-decorator";
    import * as api from '../api/futureHome';
    import colorful from './allDataShow/colorList'
    import typeItemChartList from './allDataShow/typeItemChartList.vue'
    @Component({
        components: {typeItemChartList}
    })

    export default class futureHome extends Vue {

        classNum: number = 8;


        service: any = null;
        manage: any = null;

        neighbor: any = null;
        health: any = {
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b}: {c} ({d}%)'
            },
            series: [
                {
                    name: '医疗人员占比',
                    type: 'pie',
                    radius: ['0%', '65%'],
                    color: ['#ffa239', '#ed4d82', '#50ffd3', '#0095ff', '#6557ff'],
                    label: {
                        formatter: '{b|{b}}\n{per|{d}%}  ',
                        // shadowBlur:3,
                        // shadowOffsetX: 2,
                        // shadowOffsetY: 2,
                        // shadowColor: '#999',
                        // padding: [0, 7],
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
                        length2: 20
                    },
                    data: [
                        {
                            value: 9, name: '护士',
                            label: {
                                show: true
                            },
                            itemStyle: {
                                color: {
                                    type: 'linear',
                                    colorStops: [{
                                        offset: 1, color: '#ff7f00' // 0% 处的颜色
                                    }, {
                                        offset: 0, color: '#ffecb2' // 100% 处的颜色
                                    }],
                                    global: false // 缺省为 false
                                }
                            }
                        },
                        {
                            value: 3, name: '专科医生',
                            label: {
                                show: true
                            },
                            itemStyle: {
                                color: {
                                    type: 'linear',
                                    colorStops: [{
                                        offset: 1, color: '#4dffdb' // 0% 处的颜色
                                    }, {
                                        offset: 0, color: '#99fff6' // 100% 处的颜色
                                    }],
                                    global: false // 缺省为 false
                                }
                            }
                        },
                        {
                            value: 4, name: '全科医生',
                            label: {
                                show: true
                            },
                            itemStyle: {
                                color: {
                                    type: 'linear',
                                    colorStops: [{
                                        offset: 1, color: '#6699ff' // 0% 处的颜色
                                    }, {
                                        offset: 0, color: '#3366ff' // 100% 处的颜色
                                    }],
                                    global: false // 缺省为 false
                                }
                            }
                        },
                    ]
                }
            ]
        };
        education: any = {
            textStyle: {
                color: `#999999`,
            },
            tooltip: {
                trigger: 'axis'
            },
            color: [{
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
            }, {
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
            }],
            calculable: true,
            grid: {
                left: `30`,
                right: `42`,
                top: '34',
                bottom: '0',
                containLabel: true
            },
            legend: {
                data: ['线上', '线下'],
                itemWidth: 12,
                itemHeight: 8,
                right: 30,
                top: 5,
                textStyle: {
                    color: '#fff',
                    fontSize: 12,
                    verticalAlign: 'middle',
                }
            },
            xAxis: [
                {
                    type: 'category',
                    data: ['知识技能', '生活休闲', '心理健康', '美容美发',],
                    name: '课程',
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
                        interval: 0,//横轴信息全部显示
                        fontSize: 10,
                        formatter: function (value: any, index: number) {
                            if (value.length > 4) {
                                value = value[0] + value[1] + value[2] + '..'
                            }
                            return value;
                        },
                        textStyle: {
                            color: '#cce1ff',
                            display: 'inline-block',
                            overflow: 'hidden',
                            whiteSpace: 'nowrap',
                            textOverflow: 'ellipsis',
                            width: 10
                        },
                        // rotate:"45",
                        // rotate:-15,//-15度角倾斜显示
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
                    name: '订阅人数',
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
                    name: '线上',
                    type: 'bar',
                    itemStyle: {
                        barBorderRadius: [2, 2, 0, 0]
                    },
                    data: [7, 5, 6, 3],
                    barWidth:10,
                },
                {
                    name: '线下',
                    type: 'bar',
                    itemStyle: {
                        barBorderRadius: [2, 2, 0, 0]
                    },
                    data: [6, 3, 8, 4],
                    barWidth:10,
                }

            ]
        };
        entrepreneurship: any = {
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
                left: `20`,
                right: `40`,
                top: '30',
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
                        padding: [10, 0, 0, 10],
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
        traffic1: any = {
            tooltip:{
                trigger:'axis',
            },
            series: [
                {
                    type: 'gauge',
                    radius: `57%`,
                    data: [{value: 50, name: '车位使用率'}],
                    detail:{
                        show:false
                    },
                    title:{
                        show:false
                    },
                    pointer:{
                        width:0,
                        show:false,
                    },
                    axisLine: {
                        lineStyle: {
                            color: [[0, '#45aeff'], [1, '#45aeff']],
                            width: 1,
                        }
                    },
                    axisTick: {
                        length: 6,
                        lineStyle: {
                            color:  '#45aeff',
                        }
                    },
                    splitNumber:4,
                    splitLine: {
                        length: 10,
                        lineStyle: {
                            color:  '#45aeff',
                        }
                    },
                    axisLabel:{
                        show:false,
                    },
                },
                {
                    type: 'gauge',
                    radius: `85%`,
                    min: 0,
                    max: 100,
                    data: [{value: 80, name: '车位使用率'}],

                    detail:{
                        color:'#ffffff',
                        formatter:'{value}%',
                        fontSize:16,
                        offsetCenter:[0,0],
                    },
                    title:{
                        color:'#45aeff',
                        fontSize:12,
                        offsetCenter:[0,`96%`],
                    },
                    pointer:{
                        width:0,
                        show:false,
                    },
                    itemStyle:{
                        color:'#00efff'
                    },

                    axisLine: {            // 坐标轴线
                        lineStyle: {       // 属性lineStyle控制线条样式
                            color: [[0.8, '#45aeff'],[1,`#142355`]],
                            width: 10,
                        }
                    },
                    axisLabel: {
                        show:false,
                    },
                    axisTick: {
                        show:false,

                    },
                    splitLine: {
                        show: false,
                    },
                },
                {
                    type: 'gauge',
                    radius: `95%`,
                    data: [{value: 80, name: '车位使用率'}],
                    detail:{
                        show:false
                    },
                    title:{
                        show:false
                    },
                    pointer:{
                        width:0,
                        show:false,
                    },

                    axisLine: {
                        lineStyle: {
                            color: [[1, '#45aeff']],
                            width: 1,
                        }
                    },
                    axisTick: {
                        show:false,

                    },
                    splitLine: {
                        show:false,
                    },
                    axisLabel:{
                        show:false,
                    },
                },
            ]
        };
        traffic2: any = {
            series: [
                {
                    type: 'gauge',
                    radius: `57%`,
                    data: [{value: 86, name: '充电桩使用率'}],
                    detail:{
                        show:false
                    },
                    title:{
                        show:false
                    },
                    pointer:{
                        width:0,
                        show:false,
                    },
                    axisLine: {
                        lineStyle: {
                            color: [[0, '#45aeff'], [1, '#45aeff']],
                            width: 1,
                        }
                    },
                    axisTick: {
                        length: 6,
                        lineStyle: {
                            color:  '#45aeff',
                        }
                    },
                    splitNumber:4,
                    splitLine: {
                        length: 10,
                        lineStyle: {
                            color:  '#45aeff',
                        }
                    },
                    axisLabel:{
                        show:false,
                    },
                },
                {
                    type: 'gauge',
                    radius: `85%`,
                    min: 0,
                    max: 100,
                    data: [{value: 86, name: '充电桩使用率'}],
                    detail:{
                        color:'#ffffff',
                        formatter:'{value}%',
                        fontSize:16,
                        offsetCenter:[0,0],
                    },
                    title:{
                        color:'#45aeff',
                        fontSize:12,
                        offsetCenter:[0,`96%`],
                    },

                    pointer:{
                        width:0,
                        show:false,
                    },
                    itemStyle:{
                        color:'#00efff'
                    },

                    axisLine: {            // 坐标轴线
                        lineStyle: {       // 属性lineStyle控制线条样式
                            color: [[0.86, '#45aeff'],[1,`#142355`]],
                            width: 10,
                        }
                    },
                    axisLabel: {
                        show:false,
                    },
                    axisTick: {
                        show:false,

                    },
                    splitLine: {
                        show: false,
                    },
                },
                {
                    type: 'gauge',
                    radius: `95%`,
                    data: [{value: 86, name: '充电桩使用率'}],
                    detail:{
                        show:false
                    },
                    title:{
                        show:false
                    },
                    pointer:{
                        width:0,
                        show:false,
                    },

                    axisLine: {
                        lineStyle: {
                            color: [[1, '#45aeff']],
                            width: 1,
                        }
                    },
                    axisTick: {
                        show:false,

                    },
                    splitLine: {
                        show:false,
                    },
                    axisLabel:{
                        show:false,
                    },
                },
            ]
        };


        cloudAlarmTotal: number = 0;
        checkinNum: number = 0;
        apartmentNum: number = 0;
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
        garbageChart: any = {
            textStyle: {
                color: `#fff`,
            },
            tooltip: {
                trigger: 'axis',
            },
            calculable: true,
            grid: {
                left: `16`,
                right: `16`,
                top: '10',
                bottom: '10',
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
        get myDate() {
            let xDate: any = new Date();     //获取当前年份(2位)
            let year = xDate.getFullYear();    //获取完整的年份(4位,1970-????)
            let month = ((xDate.getMonth() - 0 + 1) > 9 ? (Number(xDate.getMonth()) + 1).toString() : '0' + (Number(xDate.getMonth()) + 1).toString());       //获取当前月份(0-11,0代表1月)
            let day = xDate.getDate() - 0 > 9 ? xDate.getDate() : '0' + xDate.getDate();
            return {year, month, day}
        }

        created() {
            this.init();
        }

        init() {
            //活动参与人数
            api.getActivePeople().then(({data}) => {
                this.neighbor = {

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
                        left: `22`,
                        right: `50`,
                        top: '30',
                        bottom: '5',
                        containLabel: true
                    },
                    xAxis: [
                        {
                            type: 'category',
                            data: this.$utils.getEchartxAxis(data),
                            name: '类型',

                            nameLocation: 'end',
                            nameTextStyle: {
                                color: '#597eb2',
                                padding: [25, 0, 0, -5],
                            },

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
                            name: '',
                            type: 'bar',
                            itemStyle: {
                                barBorderRadius: [2, 2, 0, 0]
                            },
                            barWidth: 16,
                            data: this.$utils.getEchartData(data),
                        }

                    ]
                };
            });

            //云共治事件，图表
            api.geteventype().then(({data}) => {
                let top3: any = data.slice(0, 3).reverse()
                this.manage = {
                    calculable: true,
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'shadow'
                        }
                    },
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 1,
                        y2: 0,
                        colorStops: [{
                            offset: 0, color: '#3344ff' // 0% 处的颜色
                        }, {
                            offset: 0.37, color: '#2d63ff' // 100% 处的颜色
                        }, {
                            offset: 0.73, color: '#2681ff' // 0% 处的颜色
                        }, {
                            offset: 1, color: '#409fff' // 100% 处的颜色
                        }],
                        global: false // 缺省为 false
                    },
                    grid: {
                        left: '8',
                        right: '40',
                        top: '10',
                        bottom: '10',
                        containLabel: true
                    },
                    xAxis: {
                        type: 'value',
                        show: false,
                    },
                    yAxis: {
                        type: 'category',
                        data: this.$utils.getEchartxAxis(top3),

                        axisLine: {
                            show: false,
                            lineStyle: {
                                color: `#666666`,
                            }
                        },
                        splitNumber:3,
                        axisTick: {
                            show: false
                        },
                        splitLine: {     //网格线
                            show: false
                        },
                        axisLabel: {
                            formatter: function (value: any) {

                                return '{value|' + value + '}';
                            },
                            interval: 0,
                            margin: 20,
                            rich: {
                                value: {
                                    width: 55,
                                    color: '#fff',
                                    align: 'left',
                                    fontSize: '14px'

                                }
                            }
                        }
                    },
                    series: [
                        {
                            type: 'bar',
                            barWidth: '6px',
                            data: this.$utils.getEchartData(top3),
                            //data: [0,1,1],
                            itemStyle: {
                                emphasis: {
                                    barBorderRadius: 30
                                },
                                normal: {
                                    barBorderRadius: [10, 10, 10, 10],
                                    label: {
                                        show: true, //开启显示
                                        position: 'right', //在上方显示
                                        textStyle: { //数值样式
                                            color: '#1e60e2',
                                            fontSize: 12
                                        }
                                    }
                                }
                            }
                        },
                    ]
                };
            })
            api.getAlarmTotal({scene: 100}).then(({data}) => {
                this.$utils.numberGrow(this, `cloudAlarmTotal`, data.count)
            })
            //入住人数
            api.getCheckinPerson().then(({data}) => {
                this.$utils.numberGrow(this, `checkinNum`, data.count)
            });
            //人才公寓
            api.getApartmentNum().then(({data}) => {

                //this.apartmentNum = data.count;
                this.$utils.numberGrow(this, `apartmentNum`, data.count)
                /*let step:number = Math.floor(data.count/100);
                let timer:number = 10;
                let coun:number = 0;

                let fn:any = setInterval(()=>{
                    if(this.apartmentNum < data.count - step){
                        this.apartmentNum += step;
                        coun++;
                    }
                    else{
                        clearInterval(fn);
                        this.apartmentNum = data.count
                        console.log(coun)
                    }

                },timer)*/

            });
            //服务占比
            api.getShopType().then(({data}) => {
                this.service = {
                    tooltip: {
                        trigger: 'item',
                        formatter: '{a} <br/>{b}: {c} ({d}%)'
                    },
                    grid: {
                        left: `60`,
                        right: `60`,
                        top: '20',
                        bottom: '20',
                    },
                    series: [
                        {
                            name: '服务业态占比',
                            type: 'pie',
                            radius: ['35%', '60%'],
                            center: ['50%', '50%'],
                            color: colorful.colorLinear,
                            label: {
                                formatter: '{b|{b}}\n{per|{c}家}  {per|{d}%}',
                                show: true,
                                rich: {
                                    b: {
                                        fontSize: 12,
                                        lineHeight: 12,
                                        color: '#409fff',
                                    },
                                    per: {
                                        fontSize: 10,
                                        lineHeight: 12,
                                        color: '#fff',
                                    }
                                }
                            },
                            labelLine: {
                                length: 6,
                                length2: 20
                            },
                            data: this.$utils.getEchartData(data),
                        }
                    ]
                }
            })
        }

        toDataManage() {
            this.$router.push({name: '数字化管理'})
        }

        toHealth() {

        }

        toTraffic() {
            this.$router.push({name: '交通场景'})
        }

        toManage() {
            this.$router.push({name: '治理场景'})
        }
    }
</script>

<style lang="scss" scoped>
    #futureHome {
        width: 100%;
        height: 100%;
        position: relative;
        background-image: url("../images/dataBackground.jpg");
        background-size: 100% 100%;
        background-repeat: no-repeat;

        .healthHouse {
            position: absolute;
            z-index: 2;
            height: 3.43vh;
            width: 6.67vw;
            top: 23.64vh;
            right: 41.44vw;
            background-image: url("../images/health/健康小屋.png");
            background-size: 100% 100%;
            background-repeat: no-repeat;
            cursor: default;
        }
        .squarePosition {
            position: absolute;
            z-index: 3;
            width: 6.25vw;
            height: 3.43vh;
            right: 39.96vw;
            top: 16.48vh;
            background-image: url("../images/serve/广场.png");
            background-size: 100% 100%;
            background-repeat: no-repeat;
            cursor: default;
        }

        .logoTitle {
            background-image: url("../images/base/首页标题框.png");
            width: 1300px;
            left: calc(50% - 650px);
        }

        .viewBox {
            width: 100%;
            height: 100%;
            position: relative;

            .left_content {
                position: absolute;
                width: 21.82vw;
                left: 1vw;
                top: 7vh;

                .building {
                    width: 100%;
                    height: 23.52vh;
                    background-image: url("../images/futureHome/建筑框.png");
                    background-repeat: no-repeat;
                    padding: 12px;
                    background-size: 100% 100%;


                    .splitImg{
                        .left{
                            width: 30px;
                        }
                    }

                }

                .service {
                    width: 100%;
                    height: 33.33vh;
                    margin-top: 1.85vh;
                    background-image: url("../images/futureHome/服务框.png");
                    background-repeat: no-repeat;
                    padding: 12px;
                    background-size: 100% 100%;


                    .item_border {

                        height: 18%;
                        min-height: 50px;
                        margin: 1.5% 12px;
                        position: relative;
                    }

                    .item_border_content {
                        width: 100%;
                        height: 100%;
                        display: flex;
                        justify-content: space-around;
                        align-items: center;

                        .border_item {
                            text-align: left;
                            padding-left: 4.5%;
                            width: 50%;

                            > div {
                                font-size: 12px;
                                color: #409fff;
                                margin-bottom: 2px;
                            }

                            p {
                                margin-bottom: 2px;

                                span {
                                    color: #ffffff;
                                    font-size: 22px;
                                    font-weight: 700;
                                    margin-right: 10px;
                                }

                                .unit {
                                    font-size: 14px;
                                    color: #597eb3;;
                                }

                            }

                            > span {
                                color: #ccd9ff;
                                font-size: 12px;
                            }
                        }
                    }



                }
            }

            .center_content {
                position: absolute;
                width: 54vw;
                padding: 4vh;
                top: 7vh;
                left: 23vw;
                display: flex;
                justify-content: space-around;


                .people_item {
                    width: 167px;
                    height: 50px;
                    cursor: pointer;
                    background-image: url("../images/futureHome/人本化设施.png");
                    background-repeat: no-repeat;
                    background-size: 100% 100%;
                }

                .nature_item {
                    width: 167px;
                    height: 50px;
                    cursor: pointer;

                    background-image: url("../images/futureHome/生态化服务.png");
                    background-repeat: no-repeat;
                    background-size: 100% 100%;
                }

                .data_item {
                    width: 167px;
                    height: 50px;
                    cursor: pointer;

                    background-image: url("../images/futureHome/数字化管理.png");
                    background-repeat: no-repeat;
                    background-size: 100% 100%;
                }

            }

            .right_content {
                position: absolute;
                width: 22vw;
                right: 1vw;
                top: 7vh;

                .manage {
                    width: 100%;
                    height: 26.02vh;
                    background-image: url("../images/futureHome/治理框.png");
                    background-repeat: no-repeat;
                    padding: 12px;
                    background-size: 100% 100%;



                }

                .low_carbon {
                    width: 100%;
                    height: 30.08vh;
                    margin-top: 1.85vh;
                    background-image: url("../images/futureHome/低碳框.png");
                    background-repeat: no-repeat;
                    padding: 12px;
                    background-size: 100% 100%;

                }
            }

            .bottom_content {
                width: calc(100% - 2.5%);
                height: 29.92vh;
                position: absolute;
                left: 1.25vw;
                bottom: 2.13vh;
                display: flex;
                justify-content: space-between;
                align-items: center;

                .neighbor {
                    width: 21.82vw;
                    height: 100%;
                    background-image: url("../images/futureHome/低碳框.png");
                    background-repeat: no-repeat;
                    padding: 12px;
                    background-size: 100% 100%;


                    .item_text {
                        width: 100%;
                        text-indent: 10%;
                        margin-top: 8px;
                        height: 30px;

                        .text_label {
                            font-size: 12px;
                            color: #409fff;
                            margin-right: 10px;
                        }

                        .text_content {
                            font-size: 22px;
                            font-weight: 700;
                            color: #fff;
                            margin-left: 10px;
                            margin-right: 10px;
                        }

                        .text_unit {
                            font-size: 14px;
                            color: #597eb3;
                        }
                    }



                }

                .health {
                    width: 15.05vw;
                    height: 100%;
                    background-image: url("../images/futureHome/低碳框.png");
                    background-repeat: no-repeat;
                    padding: 12px;
                    background-size: 100% 100%;


                }

                .education {
                    width: 17.29vw;
                    height: 100%;
                    background-image: url("../images/futureHome/低碳框.png");
                    background-repeat: no-repeat;
                    padding: 12px;
                    background-size: 100% 100%;




                }

                .entrepreneurship {
                    width: 17.34vw;
                    height: 100%;
                    background-image: url("../images/futureHome/低碳框.png");
                    background-repeat: no-repeat;
                    padding: 12px;
                    background-size: 100% 100%;


                }

                .traffic {
                    width: 21.82vw;
                    height: 100%;
                    background-image: url("../images/futureHome/低碳框.png");
                    background-repeat: no-repeat;
                    padding: 12px;
                    background-size: 100% 100%;


                }

            }
        }

    }
</style>
