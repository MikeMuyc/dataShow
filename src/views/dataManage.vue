<template>
    <div id="dataManage">
        <div class="back_home" @click="toHome"></div>
        <div class="logoTitle">数字化管理</div>
        <div class="date_show">
            <em class="date_num">{{year}}</em>
            <i>年</i>
            <em class="date_num">{{month}}</em>
            <i>月</i>
            <em class="date_num">{{day}}</em>
            <i>日</i>
        </div>

        <div class="content_top">
            <div class="crowd">
                <div class="boxTitle">
                    入住人群分析
                </div>
                <div class="item_text">
                    <span class="text_label">当前入住居民人数</span>
                    <span class="text_content">{{checkinNum}}</span>
                    <span class="text_unit">个</span>
                </div>
                <div class="secondTitle">
                    入住率趋势
                </div>
                <div class="crowd_chart">
                    <v-chart
                            :options="crowd"
                            :autoResize="true"
                            ref="crowd"
                            style="width:100%;height:100%;position: relative;"
                    />
                </div>
            </div>

            <div class="security_and_fire">
                <div class="boxTitle">
                    安防、消防设备统计
                </div>
                <div class="white_title">当日安防感知</div>

                <div class="colist">
                    <div class="splitItem">
                        <div class="label">过车感知</div>
                        <div class="text">185<i>个</i></div>
                    </div>
                    <div class="splitItem">
                        <div class="label">人员分析</div>
                        <div class="text">12<i>个</i></div>
                    </div>
                    <div class="splitItem splitItemx">
                        <div class="label">门禁记录</div>
                        <div class="text">
                            {{doorcount}}
                            <i>个</i>
                        </div>
                    </div>
                </div>
                <div class="white_title">当日消防报警</div>
                <div class="item_border">
                    <div class="item_border_content">
                        <div class="border_item">
                            <div>消防火警</div>
                            <p><span>2</span><span class="unit">个</span></p>
                        </div>
                        <div class="border_item">
                            <div>设备故障</div>
                            <p><span>2</span><span class="unit">个</span></p>
                        </div>
                        <div class="border_item">
                            <div>设备离线</div>
                            <p><span>2</span><span class="unit">个</span></p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="cloud">
                <div class="boxTitle">
                    社区云共治统计
                </div>
                <div class="secondTitle">
                    月社区处理率
                </div>
                <div class="cloud_do_chart">
                    <v-chart
                            :options="cloud1"
                            :autoResize="true"
                            ref="cloud1"
                            style="width:50%;height:100%;display: inline-block;position: relative;"
                    />
                    <span class="chart_text">
                        较上月下降4%
                        <span></span>
                    </span>
                </div>
                <div class="secondTitle" style="margin: 0 10px">月告警类型统计</div>
                <div class="cloud_info_chart">
                    <v-chart
                            :options="cloud2"
                            :autoResize="true"
                            ref="cloud2"
                            style="width:100%;height:100%;position: relative;"
                    />
                </div>
            </div>

            <div class="moon_community">
                <div class="boxTitle">
                    月社区建议统计
                </div>
                <div class="moon_chart">
                    <v-chart
                            :options="moon"
                            :autoResize="true"
                            ref="moon"
                            style="width:100%;height:50%;display: inline-block;position: relative;"
                    />
                    <vue-perfect-scrollbar class="moon_label">
                        <div class="moon_label_item">
                            <span class="item_icon item_icon1"></span>
                            <span class="item_name">物业人员工作状态、效率、态度不佳</span>
                            <span class="item_num">48起</span>
                        </div>
                        <div class="moon_label_item">
                            <span class="item_icon item_icon2"></span>
                            <span class="item_name">社区绿化管理不善</span>
                            <span class="item_num">22起</span>
                        </div>
                        <div class="moon_label_item">
                            <span class="item_icon item_icon3"></span>
                            <span class="item_name">社区卫生、生活垃圾处理不及时</span>
                            <span class="item_num">40起</span>
                        </div>
                        <div class="moon_label_item">
                            <span class="item_icon item_icon4"></span>
                            <span class="item_name">社区噪音扰民</span>
                            <span class="item_num">28起</span>
                        </div>
                        <div class="moon_label_item">
                            <span class="item_icon item_icon5"></span>
                            <span class="item_name">社区服务大厅服务质量投诉</span>
                            <span class="item_num">16起</span>
                        </div>
                    </vue-perfect-scrollbar>
                </div>
            </div>

            <div class="property">
                <div class="boxTitle">
                    物业服务统计
                </div>
                <div class="item_text">
                    <span class="text_label">本月服务总数</span>
                    <span class="text_content">1326</span>
                    <span class="text_unit">次</span>
                </div>
                <div class="secondTitle">
                    本月服务类型统计
                </div>
                <div class="property_chart">
                    <v-chart
                            :options="property"
                            :autoResize="true"
                            ref="property"
                            style="width:100%;height:100%;position: relative;"
                    />
                </div>
            </div>
        </div>
        <div class="content_bottom">
            <div class="community">
                <div class="boxTitle">
                    社区活动
                </div>
                <div class="item_text">
                    <span class="text_label">本月社区活动展开数量</span>
                    <span class="text_content">12</span>
                    <span class="text_unit">次</span>
                </div>
                <div class="item_border">
                    <div class="corner corner1"></div>
                    <div class="corner corner2"></div>
                    <div class="corner corner3"></div>
                    <div class="corner corner4"></div>
                    <div class="item_border_content">
                        <div class="border_item">
                            <div>音乐节</div>
                            <p><span>2</span><span class="unit">次</span></p>
                            <span>好评率95%</span>
                        </div>
                        <div class="border_split"></div>
                        <div class="border_item">
                            <div>街头艺人</div>
                            <p><span>5</span><span class="unit">次</span></p>
                            <span>好评率97%</span>
                        </div>
                        <div class="border_split"></div>
                        <div class="border_item">
                            <div>诗友生日会</div>
                            <p><span>3</span><span class="unit">次</span></p>
                            <span>好评率91%</span>
                        </div>
                        <div class="border_split"></div>
                        <div class="border_item">
                            <div>跳蚤市场</div>
                            <p><span>2</span><span class="unit">次</span></p>
                            <span>好评率93%</span>
                        </div>
                    </div>
                </div>
                <div class="secondTitle">
                    每月活动趋势
                </div>
                <div class="community_chart">
                    <v-chart
                            :options="community"
                            :autoResize="true"
                            ref="community"
                            style="width:100%;height:100%;position: relative;"
                    />
                </div>
            </div>
            <div class="party">
                <div class="boxTitle">
                    党建活动
                </div>
                <div class="item_text">
                    <span class="text_label">本年已举办支部活动次数</span>
                    <span class="text_content">12</span>
                    <span class="text_unit">次</span>
                </div>
                <div class="secondTitle">
                    党建活动每月趋势变化
                </div>
                <div class="party_chart">
                    <v-chart
                            :options="party"
                            :autoResize="true"
                            ref="party"
                            style="width:100%;height:100%;position: relative;"
                    />
                </div>
            </div>
            <div class="volunteer">
                <div class="boxTitle">
                    志愿活动
                </div>
                <div class="item_text">
                    <span class="text_label">本年社区志愿者活动总数</span>
                    <span class="text_content">16</span>
                    <span class="text_unit">次</span>
                </div>
                <div class="secondTitle">
                    志愿活动每月趋势变化
                </div>
                <div class="volunteer_chart">
                    <v-chart
                            :options="volunteer"
                            :autoResize="true"
                            ref="volunteer"
                            style="width:100%;height:100%;position: relative;"
                    />
                </div>
            </div>
            <div class="entrepreneurship">
                <div class="boxTitle">
                    创业活动
                </div>
                <div class="item_text">
                    <span class="text_label">本年企业活动数量</span>
                    <span class="text_content">35</span>
                    <span class="text_unit">次</span>
                </div>
                <div class="item_border">
                    <div class="corner corner1"></div>
                    <div class="corner corner2"></div>
                    <div class="corner corner3"></div>
                    <div class="corner corner4"></div>
                    <div class="item_border_content">
                        <div class="border_item">
                            <div>投资对接会</div>
                            <p><span>10</span><span class="unit">次</span></p>
                        </div>
                        <div class="border_split"></div>
                        <div class="border_item">
                            <div>创业路演</div>
                            <p><span>20</span><span class="unit">次</span></p>
                        </div>
                        <div class="border_split"></div>
                        <div class="border_item">
                            <div>创业比赛活动数量</div>
                            <p><span>5</span><span class="unit">次</span></p>
                        </div>
                    </div>
                </div>
                <div class="secondTitle">
                    每月活动数量变化趋势
                </div>
                <div class="entrepreneurship_chart">
                    <v-chart
                            :options="entrepreneurship"
                            :autoResize="true"
                            ref="entrepreneurship"
                            style="width:100%;height:100%;position: relative;"
                    />
                </div>
            </div>

        </div>
    </div>
</template>
<script lang="ts">
    import {Vue, Component} from "vue-property-decorator";
    import * as api from '../api/dataManage'

    @Component({
        components: {}
    })

    export default class dataManage extends Vue {
        year: string = '';
        month: string = '';
        day: string = '';


        crowd: any = {
            textStyle: {
                color: `#999999`,
            },
            tooltip: {
                trigger: 'axis',
                formatter:'{b}月份<br />入住率:{c}%'
            },
            // tooltip: {
            //
            // },
            color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                    offset: 0, color: '#33eeff' // 0% 处的颜色
                }, {
                    offset: 0.5, color: 'rgba(51, 238, 255, 0.55)' // 0% 处的颜色
                }, {
                    offset: 1, color: 'rgba(110, 192, 196, 0.0)' // 100% 处的颜色
                }],
                global: false // 缺省为 false
            },
            calculable: true,
            grid: {
                left: `10`,
                right: `42`,
                top: '50',
                bottom: '33',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
                    name: '月份',
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
                    name: '百分比',
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
                    name: '百分比',
                    type: 'line',
                    areaStyle: {},
                    data: [60, 70, 71, 72, 75, 80, 81, 82, 83, 86, 90, 92],
                    symbolSize: 0,
                    itemStyle: {
                        lineStyle: {        // 系列级个性化折线样式
                            width: 2,
                            color: 'red'
                        }
                    }
                }

            ]
        };
        cloud1: any = null;
        cloud2: any = {
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
                top: '38',
                bottom: '3',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    data: ['废弃垃圾', '违停', '游商经营', '犬类识别'],
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
                        showMaxLabel:'false',
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
                        padding: [0,25, 0, 0],
                    },
                    splitNumber:2,
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
                    name: '数量/起',
                    type: 'bar',
                    itemStyle:{
                      barBorderRadius: [2, 2, 0, 0]
                    },
                    barWidth: 12,
                    data: [280, 260, 180, 160],
                }

            ]
        };
        moon: any = {
            title: {
                // text: '160起',
                x: 'center',
                y: 'center',
                subtextStyle: {
                    color: '#666',
                    fontSize: 16
                },
                textStyle: {
                    fontSize: '12',
                    rich:{
                        a:{
                            color:'white',
                            fontSize: '18',
                            marginRight:'5',
                        },
                        b:{
                            color: '#3c4a7b',
                        }
                    }
                },
                text: "{a|165}{b|起}",
            },
            tooltip: {
                trigger: 'item',
                // position: ['25%', '60%'],
                formatter: '较上期同期下降12%',
                // backgroundColor:'rgba(0,0,0,0)',
                borderColor:'none',

            },
            grid: {
                left: `0`,
                right: `0`,
                top: '15',
                bottom: '0',
            },
            // legend: {
            //     orient: 'vertical',
            //     padding:15,
            //     left:30,
            //     type:'scroll',
            //     bottom: -5,
            //     itemWidth: 12,
            //     itemHeight: 10,
            //     borderRadius: 2,
            //     height:80,
            //     pageButtonGap:'2',
            //     textStyle: {
            //         color: '#597eb3',
            //         rich: {
            //             a: {
            //                 color: '#597eb3',
            //                 fontSize: '10px',
            //                 align:'right'
            //             },
            //             b: {
            //                 color: 'white',
            //                 marginRight:'5px',
            //                 // width: '70%',
            //                 // overflow: 'hidden',
            //                 // textOverflow:'ellipsis',
            //                 // whiteSpace: 'nowrap',
            //             },
            //         },
            //     },
            //     // formatter:function(name){
            //     //     let arr = '{b|'+name+'}{a|'+10+'起}'
            //     //     return arr
            //     // },
            //     data:['物业人员工作状态、效率、态度不佳', '社区绿化管理不善', '社区卫生、生活垃圾处理不及时','社区噪音扰民','社区服务大厅服务质量投诉']
            // },
            series: [
                {
                    name: '月处理率',
                    type: 'pie',
                    radius: ['42%', '60%'],
                    center:['50%','50%'],
                    avoidLabelOverlap: false,
                    color:['#ffa239','#ed4d82','#50ffd3','#0095ff','#6557ff'],
                    label: {
                        normal: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {
                            show: false,
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data: [
                        {value: 48, name: '物业人员工作状态、效率、态度不佳'},
                        {value: 22, name: '社区绿化管理不善'},
                        {value: 40, name: '社区卫生、生活垃圾处理不及时'},
                        {value: 28, name: '社区噪音扰民'},
                        {value: 16, name: '社区服务大厅服务质量投诉'},
                    ]
                }
            ]
        };
        property: any = {
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
                left: `10`,
                right: `42`,
                top: '50',
                bottom: '33',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    data: ['报修', '搬家', '保洁', '洗衣', '快递'],
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
                    name: '数量/起',
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
                    name: '数量/起',
                    type: 'bar',
                    itemStyle:{
                      barBorderRadius: [2, 2, 0, 0]
                    },
                    barWidth: 12,
                    data: [310, 250, 200, 170, 150],
                }

            ]
        };
        community: any = {
            textStyle: {
                color: `#999999`,
            },
            tooltip: {
                trigger: 'axis'
            },
            color: ['#00eaff', '#0095ff', '#febf6e', '#5b4cff', '#ff4c79'],
            // color: {
            //     type: 'linear',
            //     x: 0,
            //     y: 0,
            //     x2: 0,
            //     y2: 1,
            //     colorStops: [{
            //         offset: 0, color: '#3366ff' // 0% 处的颜色
            //     }, {
            //         offset: 0.5, color: 'rgba(51,102, 255, 0.55)' // 0% 处的颜色
            //     },{
            //         offset: 1, color: 'rgba(110, 192, 196, 0.0)' // 100% 处的颜色
            //     }],
            //     global: false // 缺省为 false
            // },
            calculable: true,
            grid: {
                left: `10`,
                right: `42`,
                top: '50',
                bottom: '58',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
                    name: '月份',
                    // nameGap: 5,
                    boundaryGap: false,
                    nameLocation: 'end',
                    nameTextStyle: {
                        color: `#597eb2`,
                        padding: [25, 0, 0, -5],
                    },
                    splitNumber: 12,
                    minInterval: 1,
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: '#13214f'
                        }
                    },

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
                    name: '活动/次数',
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
            legend: {
                // orient: 'vertical',
                // x: 'left',
                icon: 'roundRect',   //  这个字段控制形状  类型包括 circle，rect ，roundRect，triangle，diamond，pin，arrow，none
                type: 'scroll',
                bottom: 30,
                itemWidth: 12,
                itemHeight: 10,
                borderRadius: 2,
                itemGap: 20,
                textStyle: {
                    color: '#fff',
                    fontSize: '10px'
                },
                x: 'center',
                data: ['活动总数', '音乐节', '街头艺人', '诗友生日会', '跳蚤市场']
            },
            series: [
                {
                    name: '活动总数',
                    type: 'line',
                    smooth: true,
                    data: [16, 17, 16, 15, 15, 16, 17, 18, 19, 18, 17, 20],
                    symbolSize: 0,
                },
                {
                    name: '音乐节',
                    type: 'line',
                    smooth: true,
                    data: [11, 12, 12, 11, 12, 11, 10, 12, 13, 14, 11, 12],
                    symbolSize: 0,
                },
                {
                    name: '街头艺人',
                    type: 'line',
                    smooth: true,
                    data: [16, 2, 3, 4, 4, 5, 3, 4, 6, 11, 16, 17],
                    symbolSize: 0,
                },
                {
                    name: '诗友生日会',
                    type: 'line',
                    smooth: true,
                    data: [12, 13, 12, 11, 11, 13, 12, 11, 10, 10, 11, 12],
                    symbolSize: 0,
                },
                {
                    name: '跳蚤市场',
                    type: 'line',
                    smooth: true,
                    data: [4, 6, 6, 5, 5, 4, 5, 5, 5, 4, 3, 5],
                    symbolSize: 0,
                },
            ]
        };
        party: any = {
            textStyle: {
                color: `#999999`,
            },
            tooltip: {
                trigger: 'axis',
                formatter:'{b}月份<br />活动次数:{c}次'
            },
            color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                    offset: 0, color: '#3366ff' // 0% 处的颜色
                }, {
                    offset: 0.5, color: 'rgba(51,102, 255, 0.55)' // 0% 处的颜色
                }, {
                    offset: 1, color: 'rgba(110, 192, 196, 0.0)' // 100% 处的颜色
                }],
                global: false // 缺省为 false
            },
            calculable: true,
            grid: {
                left: `10`,
                right: `42`,
                top: '50',
                bottom: '33',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
                    name: '月份',
                    // nameGap: 5,
                    boundaryGap: false,
                    nameLocation: 'end',
                    nameTextStyle: {
                        color: `#597eb2`,
                        padding: [25, 0, 0, -5],
                    },
                    splitNumber: 12,
                    minInterval: 1,
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: '#13214f'
                        }
                    },

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
                    name: '次数/次',
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
                    name: '次数',
                    type: 'line',
                    areaStyle: {},
                    data: [15, 21, 16, 17, 11, 13, 21, 15, 16, 10, 11, 20],
                    symbolSize: 0,
                    itemStyle: {
                        lineStyle: {        // 系列级个性化折线样式
                            width: 2,
                            color: 'red'
                        }
                    }
                }

            ]
        };
        volunteer: any = {
            textStyle: {
                color: `#999999`,
            },
            tooltip: {
                trigger: 'axis',
                formatter:'{b}月份<br />活动次数:{c}次'
            },
            color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                    offset: 0, color: '#33eeff' // 0% 处的颜色
                }, {
                    offset: 0.5, color: 'rgba(51, 238, 255, 0.55)' // 0% 处的颜色
                }, {
                    offset: 1, color: 'rgba(110, 192, 196, 0.0)' // 100% 处的颜色
                }],
                global: false // 缺省为 false
            },
            calculable: true,
            grid: {
                left: `10`,
                right: `42`,
                top: '50',
                bottom: '33',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
                    name: '月份',
                    // nameGap: 5,
                    boundaryGap: false,
                    nameLocation: 'end',
                    nameTextStyle: {
                        color: `#597eb2`,
                        padding: [25, 0, 0, -5],
                    },
                    splitNumber: 12,
                    minInterval: 1,
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: '#13214f'
                        }
                    },

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
                    name: '次数/次',
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
                    name: '百分比',
                    type: 'line',
                    areaStyle: {},
                    data: [12, 13, 10, 17, 15, 21, 14, 13, 18, 16, 20, 15],
                    symbolSize: 0,
                    itemStyle: {
                        lineStyle: {        // 系列级个性化折线样式
                            width: 2,
                            color: 'red'
                        }
                    }
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
            color: ['#00eaff', '#0095ff', '#febf6e', '#5b4cff', '#ff4c79'],
            // color: {
            //     type: 'linear',
            //     x: 0,
            //     y: 0,
            //     x2: 0,
            //     y2: 1,
            //     colorStops: [{
            //         offset: 0, color: '#3366ff' // 0% 处的颜色
            //     }, {
            //         offset: 0.5, color: 'rgba(51,102, 255, 0.55)' // 0% 处的颜色
            //     },{
            //         offset: 1, color: 'rgba(110, 192, 196, 0.0)' // 100% 处的颜色
            //     }],
            //     global: false // 缺省为 false
            // },
            calculable: true,
            grid: {
                left: `10`,
                right: `42`,
                top: '50',
                bottom: '58',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
                    name: '月份',
                    // nameGap: 5,
                    boundaryGap: false,
                    nameLocation: 'end',
                    nameTextStyle: {
                        color: `#597eb2`,
                        padding: [25, 0, 0, -5],
                    },
                    splitNumber: 12,
                    minInterval: 1,
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: '#13214f'
                        }
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
                    name: '活动/次数',
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
            legend: {
                icon: 'roundRect',   //  这个字段控制形状  类型包括 circle，rect ，roundRect，triangle，diamond，pin，arrow，none
                type: 'scroll',
                bottom: 30,
                itemWidth: 12,
                itemHeight: 10,
                borderRadius: 2,
                itemGap: 20,
                textStyle: {
                    color: '#fff',
                    fontSize: '10px'
                },
                x: 'center',
                data: ['投资对接会', '创业路演', '创业比赛']
            },
            series: [
                {
                    name: '投资对接会',
                    type: 'line',
                    smooth: true,
                    data: [16, 17, 16, 15, 15, 16, 17, 18, 19, 18, 17, 20],
                    symbolSize: 0,
                },
                {
                    name: '创业路演',
                    type: 'line',
                    smooth: true,
                    data: [11, 12, 12, 11, 12, 11, 10, 12, 13, 14, 11, 12],
                    symbolSize: 0,
                },
                {
                    name: '创业比赛',
                    type: 'line',
                    smooth: true,
                    data: [16, 2, 3, 4, 4, 5, 3, 4, 6, 11, 16, 17],
                    symbolSize: 0,
                },
            ]
        };


        checkinNum:number = 0;
        doorcount:number = 0;
        created() {
            let myDate: any = new Date();     //获取当前年份(2位)
            this.year = myDate.getFullYear();    //获取完整的年份(4位,1970-????)
            this.month = ((myDate.getMonth() - 0 + 1) > 9 ? (Number(myDate.getMonth()) + 1).toString() : '0' + (Number(myDate.getMonth()) + 1).toString());       //获取当前月份(0-11,0代表1月)
            this.day = myDate.getDate() - 0 > 9 ? myDate.getDate() : '0' + myDate.getDate();


            this.init();
        }

        init(){
            //入住人数
            api.getCheckinPerson().then(({data})=>{
                this.checkinNum = data.count
            });
            //门禁数
            api.getdoor().then(({data}) => {
                this.doorcount = data.count
            });
            //事件处理
            api.getSolveCalc().then(({data})=>{
                let DoList = this.$utils.getEchartData(data);
                let per:number = DoList[0].value /(DoList[0].value + DoList[1].value + DoList[2].value)*100;
                let title:string = `处理率\n${per.toFixed(2)}%`;
                this.cloud1 = {
                    title: {
                        text: title,
                        textStyle: {
                            color: '#e5eeff',
                            fontWeight: 'normal',
                            fontSize: 12,
                        },
                        left: `center`,
                        top: `center`,
                    },
                    tooltip: {
                        trigger: 'item',
                        formatter: '{a} <br/>{b}: {c} ({d}%)'
                    },
                    grid: {
                        left: `5`,
                        right: `0`,
                        top: '0',
                        bottom: '0',
                    },
                    series: [
                        {
                            name: '月处理率',
                            type: 'pie',
                            radius: ['52%', '70%'],
                            center: ['50%', '50%'],
                            avoidLabelOverlap: false,
                            color:[`#50ffd3`,'#0095ff','#ffa239'],
                            label: {
                                normal: {
                                    show: false,
                                    position: 'center'
                                },
                                emphasis: {
                                    show: false,
                                    textStyle: {
                                        fontSize: '12',
                                    },
                                    formatter: "{d}%",
                                }
                            },
                            labelLine: {
                                normal: {
                                    show: false
                                }
                            },
                            data: this.$utils.getEchartData(data)
                        }
                    ]
                };
            })
        }

        toHome(){
            this.$router.push({name:'未来社区首页'})
        }
    }
</script>

<style lang="scss" scoped>
    #dataManage {
        width: 100%;
        height: 100%;
        min-height: 690px;
        position: relative;
        background-image: url("../images/dataManage/背景.png");
        background-color: #000;
        background-size: 100% 100%;
        background-repeat: no-repeat;






        .content_top {
            width: 100%;
            height: 46.68%;
            padding-top: 9.35vh;

            > div {
                height: 100%;
                min-height: 270px;
                margin-left: 1%;
                display: inline-block;
                vertical-align: top;
                background-repeat: no-repeat;
                padding: 12px;
                background-size: 100% 100%;

            }

            .crowd {
                width: 16.6%;
                background-image: url("../images/dataManage/入住人群分析框.png");

                .item_text {
                    width: 100%;
                    text-indent: 10%;
                    margin-top: 6%;

                    .text_label {
                        font-size: 12px;
                        color: #409fff;
                        margin-right: 10px;
                    }

                    .text_content {
                        font-size: 18px;
                        font-weight: 700;
                        color: #fff;
                        margin-right: 10px;
                    }

                    .text_unit {
                        font-size: 14px;
                        color: #597eb3;
                    }
                }


                .crowd_chart {
                    width: 100%;
                    height: calc(88% - 60px);
                }
            }

            .security_and_fire {
                width: 20.1%;
                background-image: url("../images/dataManage/安防、消防框.png");

                .white_title {
                    font-size: 16px;
                    color: white;
                    text-indent: 5%;
                    margin: 16px ;

                }

                .item_border{
                    width: 90%;
                    height: 20%;
                    min-height: 50px;
                    margin: 1.5% 5%;
                    position: relative;

                    .item_border_content {
                        width: 100%;
                        height: 100%;
                        display: flex;
                        justify-content: space-around;
                        align-items: center;

                        .border_item {
                            text-align: center;
                            /*min-width: 24%;*/
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
                                    margin-right: 4px;
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

            .cloud {
                width: 22.4%;
                background-image: url("../images/dataManage/社区云共治框.png");
                .cloud_do_chart{
                    width: 100%;
                    height: calc(50% - 60px);
                    display: flex;
                    align-items: center;
                    .chart_text{
                        vertical-align: top;
                        color: #ffffff;
                        span{
                            display: inline-block;
                            width: 7px;
                            height: 12px;
                            background-image: url("../images/dataManage/下降.png");
                            background-repeat: no-repeat;
                            background-size: 100% 100%;
                        }
                    }
                }
                .cloud_info_chart{
                    width: 100%;
                    height: calc(50% - 44px);
                }
            }

            .moon_community {
                width: 17.1%;
                background-image: url("../images/dataManage/社区投诉框.png");
                .moon_chart{
                    width: 90%;
                    height: calc(99% -  30px);
                    margin-left: 5%;
                    .moon_label{
                        width: 100%;
                        height: 50%;
                        .moon_label_item{
                            width: 100%;
                            margin-top:2%;
                            >span{
                                display: inline-block;
                                vertical-align: middle;
                                &.item_icon{
                                    width: 16px;
                                    height: 12px;
                                    border-radius: 4px;
                                    margin-right: 10px;
                                }
                                &.item_icon1{
                                     background:#ffa239;
                                 }
                                &.item_icon2{
                                     background:#ed4d82;
                                 }
                                &.item_icon3{
                                     background:#50ffd3;
                                 }
                                &.item_icon4{
                                     background:#0095ff;
                                 }
                                &.item_icon5{
                                     background:#6557ff;
                                 }
                                &.item_name{
                                    width: calc(100% - 70px);
                                    overflow: hidden;
                                    font-size: 12px;
                                    color:white;
                                    text-overflow:ellipsis;
                                    white-space: nowrap;
                                 }
                                &.item_num {
                                     width: 44px;
                                     font-size: 12px;
                                     color: #597eb3;
                                     border-radius: 4px;
                                 }
                            }
                        }
                    }
                }
            }

            .property {
                width: 16.6%;
                background-image: url("../images/dataManage/物业服务框.png");

                .item_text {
                    width: 100%;
                    text-indent: 10%;
                    margin-top: 6%;

                    .text_label {
                        font-size: 12px;
                        color: #409fff;
                        margin-right: 10px;
                    }

                    .text_content {
                        font-size: 18px;
                        font-weight: 700;
                        color: #fff;
                        margin-right: 10px;
                    }

                    .text_unit {
                        font-size: 14px;
                        color: #597eb3;
                    }
                }



                .property_chart {
                    width: 100%;
                    height: calc(88% - 60px);
                }
            }

        }

        .content_bottom {
            width: 100%;
            height: 47.7%;
            margin-top: 20px;

            > div {
                height: 100%;
                min-height: 330px;
                margin-left: 1%;
                display: inline-block;
                vertical-align: top;
                background-repeat: no-repeat;
                padding: 12px;
                background-size: 100% 100%;


            }

            .community {
                width: 28.4%;
                background-image: url("../images/dataManage/社区活动框.png");

                .item_text {
                    width: 100%;
                    text-indent: 10%;
                    margin-top: 3%;

                    .text_label {
                        font-size: 12px;
                        color: #409fff;
                        margin-right: 10px;
                    }

                    .text_content {
                        font-size: 18px;
                        font-weight: 700;
                        color: #fff;
                        margin-right: 10px;
                    }

                    .text_unit {
                        font-size: 14px;
                        color: #597eb3;
                    }
                }

                .item_border {
                    width: 90%;
                    height: 20%;
                    min-height: 66px;
                    margin: 1.5% 5%;
                    position: relative;

                    .corner {
                        width: 11px;
                        height: 11px;
                        position: absolute;
                        background-repeat: no-repeat;
                        background-size: 100% 100%;

                        &.corner1 {
                            background-image: url("../images/base/边角-1.png");
                            top: 0;
                            left: 0;
                        }

                        &.corner2 {
                            background-image: url("../images/base/边角-2.png");
                            top: 0;
                            right: 0;
                        }

                        &.corner3 {
                            background-image: url("../images/base/边角-3.png");
                            bottom: 0;
                            left: 0;
                        }

                        &.corner4 {
                            background-image: url("../images/base/边角-4.png");
                            bottom: 0;
                            right: 0;
                        }
                    }

                    .item_border_content {
                        width: 100%;
                        height: 100%;
                        display: flex;
                        justify-content: space-around;
                        align-items: center;

                        .border_item {
                            text-align: center;
                            /*min-width: 24%;*/
                            > div {
                                font-size: 12px;
                                color: #409fff;
                                margin-bottom: 2px;
                            }

                            p {
                                margin-bottom: 2px;

                                span {
                                    color: #ffffff;
                                    font-size: 18px;
                                    font-weight: 700;
                                    margin-right: 4px;
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

                        .border_split {
                            width: 1px;
                            height: 50%;
                            background-color: rgba(102, 166, 255, 0.4);
                        }
                    }
                }



                .community_chart {
                    width: 100%;
                    height: calc(70% - 60px);
                }
            }

            .party {
                width: 22.4%;
                background-image: url("../images/dataManage/党建活动框.png");

                .item_text {
                    width: 100%;
                    text-indent: 10%;
                    margin-top: 6%;

                    .text_label {
                        font-size: 12px;
                        color: #409fff;
                        margin-right: 10px;
                    }

                    .text_content {
                        font-size: 18px;
                        font-weight: 700;
                        color: #fff;
                        margin-right: 10px;
                    }

                    .text_unit {
                        font-size: 14px;
                        color: #597eb3;
                    }
                }


                .party_chart {
                    width: 100%;
                    height: calc(88% - 60px);
                }
            }

            .volunteer {
                width: 22.4%;
                background-image: url("../images/dataManage/志愿活动框.png");

                .item_text {
                    width: 100%;
                    text-indent: 10%;
                    margin-top: 6%;

                    .text_label {
                        font-size: 12px;
                        color: #409fff;
                        margin-right: 10px;
                    }

                    .text_content {
                        font-size: 18px;
                        font-weight: 700;
                        color: #fff;
                        margin-right: 10px;
                    }

                    .text_unit {
                        font-size: 14px;
                        color: #597eb3;
                    }
                }


                .volunteer_chart {
                    width: 100%;
                    height: calc(88% - 60px);
                }
            }

            .entrepreneurship {
                width: 21.1%;
                background-image: url("../images/dataManage/创业活动框.png");

                .item_text {
                    width: 100%;
                    text-indent: 10%;
                    margin-top: 3%;

                    .text_label {
                        font-size: 12px;
                        color: #409fff;
                        margin-right: 10px;
                    }

                    .text_content {
                        font-size: 18px;
                        font-weight: 700;
                        color: #fff;
                        margin-right: 10px;
                    }

                    .text_unit {
                        font-size: 14px;
                        color: #597eb3;
                    }
                }

                .item_border {
                    width: 90%;
                    height: 16%;
                    min-height: 50px;
                    margin: 1.5% 5%;
                    position: relative;

                    .corner {
                        width: 11px;
                        height: 11px;
                        position: absolute;
                        background-repeat: no-repeat;
                        background-size: 100% 100%;

                        &.corner1 {
                            background-image: url("../images/base/边角-1.png");
                            top: 0;
                            left: 0;
                        }

                        &.corner2 {
                            background-image: url("../images/base/边角-2.png");
                            top: 0;
                            right: 0;
                        }

                        &.corner3 {
                            background-image: url("../images/base/边角-3.png");
                            bottom: 0;
                            left: 0;
                        }

                        &.corner4 {
                            background-image: url("../images/base/边角-4.png");
                            bottom: 0;
                            right: 0;
                        }
                    }

                    .item_border_content {
                        width: 100%;
                        height: 100%;
                        display: flex;
                        justify-content: space-around;
                        align-items: center;

                        .border_item {
                            text-align: center;
                            /*min-width: 24%;*/
                            > div {
                                font-size: 12px;
                                color: #409fff;
                                margin-bottom: 2px;
                            }

                            p {
                                margin-bottom: 2px;

                                span {
                                    color: #ffffff;
                                    font-size: 18px;
                                    font-weight: 700;
                                    margin-right: 4px;
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

                        .border_split {
                            width: 1px;
                            height: 50%;
                            background-color: rgba(102, 166, 255, 0.4);
                        }
                    }
                }



                .entrepreneurship_chart {
                    width: 100%;
                    height: calc(75% - 60px);
                }
            }
        }
    }
</style>
