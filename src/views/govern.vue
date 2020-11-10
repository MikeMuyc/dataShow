<template>
    <div id="govern">
        <div class="back_home" @click="toHome"></div>
        <div class="logoTitle">治理场景</div>
        <div class="date_show">
            <em class="date_num">{{year}}</em>
            <i>年</i>
            <em class="date_num">{{month}}</em>
            <i>月</i>
            <em class="date_num">{{day}}</em>
            <i>日</i>
        </div>


        <div class="topart">
            <div class="topc3">
                <div class="boxTitle">诗友建议互动</div>
                <div class="moon_chart">
                    <div class="activeinfo" style="padding: 10px">
                        <div class="infotext">
                            <i class="name">互动答复率</i>
                            <em class="num more">
                                97.74
                            </em>
                            <i class="unit">%</i>
                        </div>
                    </div>
                    <v-chart
                            :options="fankuiChart"
                            :autoResize="true"
                            ref="moon"
                            style="width:100%;height:calc(50% - 24px);position: relative;border-bottom:1px solid #141f54;"
                    />
                    <v-chart
                            :options="manyiChart"
                            :autoResize="true"
                            ref="moon"
                            style="width:100%;height:calc(50% - 24px);position: relative;"
                    />
                </div>
            </div>
            <div class="topc4">
                <div class="boxTitle">热点话题</div>
                <div class="resident_table">
                    <div class="secondTitle">
                        {{residentList.title}}
                    </div>
                    <vue-perfect-scrollbar class="item_table">
                        <div class="lineItem" v-for="(item,index) in residentList.list">
                            <div class="item_name" :title="item">{{item}}</div>
                            <div class="item_top" v-if="index === 0">
                                <img src="../images/govern/top1_s.png">
                            </div>
                            <div class="item_top" v-if="index === 1">
                                <img src="../images/govern/top2_s.png">
                            </div>
                            <div class="item_top" v-if="index === 2">
                                <img src="../images/govern/top3_s.png">
                            </div>
                        </div>
                    </vue-perfect-scrollbar>

                </div>

            </div>
            <div class="topc2">
                <div class="boxTitle">社区云共治</div>
                <div class="itemain">
                    <div class="itemPart">
                        <div class="secondTitle">
                            云共治事件
                        </div>
                        <div class="activeinfo" style="padding: 0px 24px 10px">
                            <div class="infotext">
                                <i class="name">事件总数</i>
                                <em class="num more" @click="showBox = 'cloudEvent'">
                                    {{cloudAlarmTotal}}
                                    <i class="iconfont iconzhijiao-triangle"></i>
                                </em>
                                <i class="unit">件</i>
                            </div>
                        </div>
                        <vue-perfect-scrollbar style="height: calc(100% - 100px)">
                            <div class="eventcloud" v-for="item in eventList">
                                <img :src="item.img" @click="showImgBox(item)">
                                <div class="info">
                                    <div class="name" :title="item.alarmContent">
                                        <div class="left">
                                            <em>{{item.alarmContent}}</em>

                                            <i class="iconfont iconqueding" v-if="item.disposeStatus === '已处理'"></i>
                                            <i class="iconfont iconshijian4" v-else></i>
                                        </div>

                                        <i class="iconfont iconjiankong1" @click="startM(item.sipId)"></i>
                                    </div>
                                    <div class="msg" :title="item.alarmType">类型：{{item.alarmType}}</div>
                                    <div class="msg" :title="item.alarmTime">时间：{{item.alarmTime}}</div>
                                    <div class="msg" :title="item.alarmAddress">地点：{{item.alarmAddress}}</div>
                                </div>
                            </div>
                        </vue-perfect-scrollbar>

                    </div>
                    <div class="itemPart">
                        <div class="secondTitle">
                            社区事件处理率
                        </div>
                        <div class="today_do">
                            <div class="left">
                                <div class="activeinfo" style="padding: 10px 0 0 24px"></div>
                                <div class="legend" v-if="todayDoList[0]">
                                   <div class="item_icon item_icon1"></div>
                                   未处理：{{todayDoList[0].value}}件
                                </div>
                                <div class="legend" v-if="todayDoList[1]">
                                    <div class="item_icon item_icon2"></div>
                                    已处理：{{todayDoList[1].value}}件
                                </div>
                                <div class="legend" v-if="todayDoList[2]">
                                    <div class="item_icon item_icon3"></div>
                                    超时处理：{{todayDoList[2].value}}件
                                </div>
                            </div>
                            <v-chart
                                    :options="todayDo"
                                    :autoResize="true"
                                    ref="moon"
                                    style="width:48%;height:100%;position: relative;"
                            />
                        </div>
                        <div class="secondTitle" style="margin-top: 0">
                            告警事件类型统计
                        </div>

                        <typeItemChartList :chartList="eventypeList"
                                           style="height: calc(50% - 52px);padding: 0 16px"></typeItemChartList>
                    </div>
                </div>
            </div>
            <div class="topc1">
                <div class="boxTitle">社区安全</div>
                <div class="secondTitle">阳光厨房</div>
                <div class="activeinfo" style="padding: 0 24px 10px">
                    <div class="infotext">
                        <i class="name">报警事件</i>
                        <em class="num more" @click="showBox = 'KitchenEvent'">
                            {{kitchenAlarm}}
                            <i class="iconfont iconzhijiao-triangle"></i>
                        </em>
                        <i class="unit">件</i>
                    </div>
                </div>
                <vue-perfect-scrollbar style="height: calc(100% - 246px)">
                    <div class="eventList" v-for="item in KitchenEventList">
                        <img :src="item.img" @click="showImgBox(item)">
                        <div class="info">
                            <div class="name" :title="item.name">{{item.name}}</div>
                            <div class="msg" :title="item.alarmTime">时间：{{item.alarmTime}}</div>
                            <div class="msg" :title="item.alarmContent">内容：{{item.alarmContent}}</div>
                        </div>
                    </div>

                </vue-perfect-scrollbar>
                <div class="secondTitle">用电安全</div>
                <div class="colist">
                    <div class="splitItem borderR">
                        <div class="label">设备总数</div>
                        <div class="text">{{eleEquipment}}<i>个</i></div>
                    </div>
                    <div class="splitItem splitItemx">
                        <div class="label">报警总数</div>
                        <div class="text">
                            <em class="more" @click="showBox = 'alarmEvent'">
                                {{eleAlarm}}
                                <i class="iconfont iconzhijiao-triangle"></i>
                            </em>
                            <i>个</i>
                        </div>
                    </div>
                </div>
            </div>


        </div>

        <div class="bottompart">
            <div class="btItem">
                <div class="boxTitle">党建板块</div>
                <div class="itemain">
                    <div class="itemPart">
                        <div class="activeinfo" style="padding: 16px 24px">
                            <div class="infotext">
                                <i class="name">社区党员总数</i>
                                <em class="num more" @click="showBox = 'memberList'">
                                    {{memberNum}}
                                    <i class="iconfont iconzhijiao-triangle"></i>
                                </em>
                                <i class="unit">名</i>
                            </div>
                        </div>
                        <div class="secondTitle">
                            每月党员人数变化
                        </div>
                        <v-chart
                                :options="partyNum"
                                :autoResize="true"
                                ref="volunteer"
                                style="width:100%;height:calc(100% - 110px);position: relative;"
                        />
                    </div>
                    <div class="itemPart">
                        <div class="activeinfo" style="padding: 16px 24px">
                            <div class="infotext">
                                <i class="name">本年已举办支部活动次数</i>
                                <em class="num">
                                    1
                                </em>
                                <i class="unit">次</i>
                            </div>
                        </div>
                        <div class="secondTitle">
                            支部活动精彩瞬间回放
                        </div>
                        <reviewBox class="reviewBox" :activeImg="dangjianSwiper"></reviewBox>
                    </div>
                </div>
            </div>
            <div class="btItem right">
                <div class="boxTitle">志愿活动</div>
                <div class="itemain">
                    <div class="itemPart">
                        <div class="activeinfo" style="padding: 10px 24px">
                            <div class="infotext">
                                <i class="name">社区志愿者人数</i>
                                <em class="num">
                                    {{volunteerNum}}
                                </em>
                                <i class="unit">人</i>
                            </div>
                        </div>
                        <div class="secondTitle">
                            优秀志愿者榜
                            <div class="right more" @click="showBox = 'volunteerlist'">排行榜&nbsp;&nbsp;&gt;</div>
                        </div>
                        <div class="volunteer_table">
                            <div class="top2">
                                <img src="../images/govern/top2.png" alt="">
                                <p class="top">TOP 2</p>
                                <p class="name">{{volunteerTop3[1].name}}</p>
                            </div>
                            <div class="top1">
                                <img src="../images/govern/top1.png" alt="">
                                <p class="top">TOP 1</p>
                                <p class="name">{{volunteerTop3[0].name}}</p>
                            </div>
                            <div class="top2">
                                <img src="../images/govern/top3.png" alt="">
                                <p class="top">TOP 3</p>
                                <p class="name">{{volunteerTop3[2].name}}</p>
                            </div>
                        </div>
                        <div class="secondTitle">
                            志愿者活动温馨瞬间
                        </div>
                        <Carousel class="volunteer_img" autoplay :autoplay-speed="3000" dots="none">
                            <Carousel-item>
                                <div class="demo-carousel">
                                    <img v-for="item in bendilist" :src="item.img">
                                </div>
                            </Carousel-item>
                            <Carousel-item>
                                <div class="demo-carousel">
                                    <img v-for="item in bendilist" :src="item.img">
                                </div>
                            </Carousel-item>
                        </Carousel>
                    </div>
                    <div class="itemPart" style="padding: 0 10px">
                        <div class="activeinfo" style="padding: 10px 24px">
                            <div class="infotext">
                                <i class="name">本年社区志愿者活动总数</i>
                                <em class="num">
                                    1
                                </em>
                                <i class="unit">次</i>
                            </div>
                        </div>
                        <div class="secondTitle">
                            志愿者活动每月趋势变化
                        </div>
                        <v-chart
                                :options="volunteer"
                                :autoResize="true"
                                ref="volunteer"
                                style="width:100%;height:calc(100% - 98px);position: relative;"
                        />
                    </div>
                </div>
            </div>
        </div>

        <transition name="fade">
            <div class="messageHover" v-show="showBox !=='close'">
                <div class="outsideClose" @click="closeVideo"></div>
                <transition name="toggle">
                    <div class="KitchenEvent" v-show="showBox === 'KitchenEvent'">
                        <i class="iconfont iconcha-copy close" @click="closeVideo"></i>
                        <div class="title">厨房报警列表</div>
                        <el-table
                                :data="KitchenEventData"
                                height="328"
                                style="width: 100%">
                            <el-table-column
                                    prop="name"
                                    label="事件"
                                    min-width="120px"
                                    show-overflow-tooltip
                            >
                            </el-table-column>

                            <el-table-column
                                    prop="alarmTime"
                                    label="时间"
                                    width="160"
                            >
                            </el-table-column>
                            <el-table-column
                                    prop="alarmType"
                                    label="类型"
                                    width="100"
                            >
                            </el-table-column>
                            <el-table-column
                                    prop="alarmContent"
                                    label="内容"
                                    min-width="120"
                            >
                            </el-table-column>
                            <el-table-column
                                    label="图片"
                                    min-width="120px"
                                    align="center"
                            >
                                <template slot-scope="{row,$index}">
                                    <img :src="row.img" style="width: 60px;height: 60px;cursor: pointer"
                                         @click="showImgBox(row)">
                                </template>
                            </el-table-column>
                        </el-table>
                    </div>
                </transition>
                <transition name="toggle">
                    <div class="cloudEvent" v-show="showBox === 'cloudEvent'">
                        <i class="iconfont iconcha-copy close" @click="closeVideo"></i>
                        <div class="title">云治安报警列表</div>
                        <el-table
                                :data="cloudEventData"
                                height="310"
                                style="width: 100%">
                            <el-table-column
                                    prop="alarmContent"
                                    label="事件"
                                    min-width="120px"
                                    show-overflow-tooltip
                            >
                            </el-table-column>
                            <el-table-column
                                    prop="alarmType"
                                    label="类型"
                                    min-width="100px"
                                    show-overflow-tooltip
                            >
                            </el-table-column>
                            <el-table-column
                                    prop="alarmTime"
                                    label="时间"
                                    width="160"
                            >
                            </el-table-column>
                            <el-table-column
                                    prop="alarmAddress"
                                    label="地址"
                                    min-width="120px"
                                    show-overflow-tooltip
                            >
                            </el-table-column>
                            <el-table-column
                                    prop="disposeStatus"
                                    label="状态"
                                    align="center"
                                    min-width="100px"
                                    show-overflow-tooltip
                            >
                            </el-table-column>
                        </el-table>
                    </div>
                </transition>
                <transition name="toggle">
                    <div class="alarmEvent" v-show="showBox === 'alarmEvent'">
                        <i class="iconfont iconcha-copy close" @click="closeVideo"></i>
                        <div class="title">安全用电报警列表</div>
                        <el-table
                                :data="alarmEventData"
                                height="300"
                                style="width: 100%">
                            <el-table-column
                                    prop="alarmContent"
                                    label="事件"
                                    min-width="120px"
                                    show-overflow-tooltip
                            >
                            </el-table-column>

                            <el-table-column
                                    prop="alarmTime"
                                    label="时间"
                                    width="160"
                            >
                            </el-table-column>
                            <el-table-column
                                    prop="alarmAddress"
                                    label="地址"
                                    align="center"
                                    show-overflow-tooltip
                            >
                            </el-table-column>
                        </el-table>
                    </div>
                </transition>
                <transition name="toggle">
                    <div class="memberList" v-show="showBox === 'memberList'">
                        <i class="iconfont iconcha-copy close" @click="closeVideo"></i>
                        <div class="title">党员列表</div>
                        <el-table
                                :data="memberList"
                                height="300"
                                style="width: 100%">
                            <el-table-column
                                    label="照片"
                                    align="center"
                                    width="80px"
                            >
                                <template slot-scope="{row,$index}">
                                    <img src="" style="width: 60px">
                                </template>
                            </el-table-column>
                            <el-table-column
                                    prop="name"
                                    label="姓名"
                                    min-width="120px"
                                    show-overflow-tooltip
                            >
                            </el-table-column>
                            <el-table-column
                                    label="性别"
                                    width="80px"
                            >
                                <template slot-scope="{row,$index}">
                                    {{row.gender == 1 ? `男`: `女`}}
                                </template>
                            </el-table-column>
                            <el-table-column
                                    prop="age"
                                    label="年龄"
                                    width="80"
                            >
                            </el-table-column>
                            <el-table-column
                                    prop="joinTime"
                                    label="入党时间"
                                    min-width="160"
                            >
                            </el-table-column>
                            <el-table-column
                                    prop="tel"
                                    label="电话"
                                    min-width="140"
                            >
                            </el-table-column>
                        </el-table>
                    </div>
                </transition>
                <transition name="toggle">
                    <div class="volunteerlist" v-show="showBox === 'volunteerlist'">
                        <i class="iconfont iconcha-copy close" @click="closeVideo"></i>
                        <div class="title">志愿者排行榜</div>
                        <el-table
                                :data="volunteerlist"
                                height="300"
                                style="width: 100%">
                            <el-table-column
                                    label="名次"
                                    align="center"
                                    min-width="60"
                            >
                                <template slot-scope="{row,$index}">
                                    <img src="../images/govern/志愿者排行1.png" v-if="$index === 0">
                                    <img src="../images/govern/志愿者排行2.png" v-else-if="$index === 1">
                                    <img src="../images/govern/志愿者排行3.png" v-else-if="$index === 2">
                                    <div v-else >{{$index+1}}</div>
                                </template>
                            </el-table-column>

                            <el-table-column
                                    prop="name"
                                    label="姓名"
                                    min-width="120px"
                                    show-overflow-tooltip
                            >
                            </el-table-column>


                            <el-table-column
                                    prop="joinTimes"
                                    label="参与活动次数"
                                    min-width="100"
                            >
                            </el-table-column>
                        </el-table>
                    </div>
                </transition>
                <transition name="bounce">
                    <div class="video" v-show="showBox === 'video'">
                        <i class="iconfont iconcha-copy close" @click="closeVideo"></i>

                    </div>
                </transition>




                <!--<div class="fankuiList" v-show="showBox === 'fankuiList'">
                    <i class="iconfont iconcha-copy close" @click="closeVideo"></i>
                    <div class="title">社区反馈列表</div>
                    <el-table
                            :data="fankuiList"
                            height="264"
                            style="width: 100%">
                        <el-table-column
                                prop="detail"
                                label="事件"
                                min-width="120px"
                                show-overflow-tooltip
                        >
                        </el-table-column>

                        <el-table-column
                                prop="time"
                                label="时间"
                                width="160"
                        >
                        </el-table-column>
                    </el-table>
                </div>-->



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
</template>
<script lang="ts">
    import {Vue, Component, Watch} from "vue-property-decorator";
    import reviewBox from './allDataShow/reviewBox_before.vue'
    import {Button, Carousel, CarouselItem} from 'iview';
    import * as api from '../api/govern'
    import {imgList, bendilist} from './allDataShow/govern'

    import typeItemChartList from './allDataShow/typeItemChartList.vue'

    @Component({
        components: {Button, Carousel, CarouselItem, reviewBox, typeItemChartList}
    })

    export default class govern extends Vue {
        year: string = '';
        month: string = '';
        day: string = '';
        currentIndex: number = 0;
        showBox: string = 'close';
        imgList: any = imgList;
        bendilist: any = bendilist;
        showImg: boolean = false;
        activeImg: any = {
            name: '',
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
                    rich: {
                        a: {
                            color: 'white',
                            fontSize: '18',
                            marginRight: '5',
                        },
                        b: {
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
                borderColor: 'none',

            },
            grid: {
                left: `0`,
                right: `0`,
                top: '15',
                bottom: '0',
            },
            series: [
                {
                    name: '月处理率',
                    type: 'pie',
                    radius: ['42%', '60%'],
                    center: ['50%', '50%'],
                    avoidLabelOverlap: false,
                    color: ['#ffa239', '#ed4d82', '#50ffd3', '#0095ff', '#6557ff'],
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
        residentList: any =
            {
                title: '居民关心话题排行',
                list: [
                    '吴尊友称国内疫情不会再现小高峰',
                    '全国已有超1亿名学生复学',
                    '汶川地震十二周年',
                    '国际护士节',
                    '多地公布暑假时间',
                    '母亲节',
                    '本周社区诗友生日会活动'
                ]
            }
        ;
        volunteer: any = {
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
                bottom: '13',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
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
                    data: [18, 21, 17, 15, 14, 12, 19, 18, 18, 16, 18, 17],
                    smooth:true,
                    symbolSize: 0,

                }

            ]
        };
        partyNum: any = {
            textStyle: {
                color: `#999999`,
            },

            tooltip: {
                trigger: 'axis',
                formatter: '{b}月份<br />党员人数:{c}人'
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
                    name: '人数/个',
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
                    name: '人数/个',
                    type: 'line',
                    areaStyle: {},
                    smooth: true,
                    data: [90, 100, 120, 120, 130, 150, 155, 160, 168, 170, 190, 200],
                    symbolSize: 0,

                }

            ]
        };
        todayDo: any = null;
        fankuiChart: any = {
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b}: {c} ({d}%)'
            },

            series: [
                {
                    name: '反馈处理',
                    type: 'pie',
                    radius: ['34%', '52%'],
                    center: ['50%', '50%'],
                    avoidLabelOverlap: false,
                    color: [`#50ffd3`, '#ffa239'],
                    label: {
                        formatter: '{b|{b}}{b|{c}}',
                        position: 'outer',
                        alignTo: 'labelLine',
                        rich: {
                            b: {
                                fontSize: '14',
                                fontWeight: 'normal',
                                color: '#fff',
                            },
                        }
                    },
                    labelLine: {
                        show: 'true',
                        labelLine: {
                            length: 8,
                            length2: 12
                        },
                    },
                    data: [
                        {
                            name: '已处理',
                            value: 88,
                        },
                        {
                            name: '未处理',
                            value: 12,
                        },
                    ]
                }
            ]
        };
        manyiChart: any = {

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
                    name: '反馈处理',
                    type: 'pie',
                    radius: ['34%', '52%'],
                    center: ['50%', '50%'],
                    avoidLabelOverlap: false,
                    color: [`#009cff`, '#ff3939'],
                    label: {
                        formatter: '{b|{b}}{b|{c}}',
                        position: 'outer',
                        alignTo: 'labelLine',
                        rich: {
                            b: {
                                fontSize: '14',
                                fontWeight: 'normal',
                                color: '#fff',
                            },
                        }
                    },
                    labelLine: {
                        show: 'true',
                        labelLine: {
                            length: 8,
                            length2: 12
                        },
                    },
                    data: [
                        {
                            name: '满意',
                            value: 71,
                        },
                        {
                            name: '不满意',
                            value: 2,
                        },
                    ]
                }
            ]
        };
        KitchenEventData: any = [];
        cloudEventData: any = [];
        alarmEventData: any = [];
        screenWidth: number = 0;
        screenHeight: number = 0;

        cloudAlarmTotal: number = 0;
        kitchenAlarm: number = 0;
        todayDoList: any = [];
        eventypeList: any = [];
        fankuiData: any = [
            {
                name: '物业服务',
                count: 13,
            },
            {
                name: '功能建议',
                count: 17,
            },
            {
                name: '性能问题',
                count: 12,
            },
            {
                name: '生活干扰',
                count: 22,
            },
        ];
        fankuiList: any = [
            {
                detail: '物业人员工作态度不好',
                time: '2020-3-1 15:12:10',
            },
            {
                detail: '社区绿化管理不善',
                time: '2020-3-2 13:11:33',
            },
            {
                detail: '社区卫生不好',
                time: '2020-3-3 14:12:44',
            },
            {
                detail: '有噪声扰民',
                time: '2020-3-5 16:13:10',
            },
            {
                detail: '有噪声扰民',
                time: '2020-3-7 18:12:12',
            },
        ];

        dangjianSwiper: any = imgList;
        eventList: any = [];
        KitchenEventList: any = [];

        eleEquipment: number = 0;
        eleAlarm: number = 0;
        memberNum: number = 0;
        memberList: any = [];
        volunteerlist: any = [
            {
                name:'李四',
                joinTimes:12,
            },
            {
                name:'张三',
                joinTimes:8,
            },
            {
                name:'王五',
                joinTimes:7,
            },
            {
                name:'赵欢欢',
                joinTimes:5,
            },
            {
                name:'张一凡',
                joinTimes:5,
            },
        ];
        volunteerNum: number = 0;
        volunteerTop3: any = [
            {
                name: "李玉墉",
            },
            {
                name: "张志峰",
            },
            {
                name: "王林",
            },
        ];

        @Watch('screenWidth')
        onShowMessageChange() {
            let aa: any = this.$refs.residentContent;
            aa.style.left = '0px';
            this.currentIndex = 0;
            let bb: any = this.$refs.right2;
            bb.style.top = '0px';
        }

        @Watch('screenHeight')
        onShowMessageChange1() {
            let aa: any = this.$refs.residentContent;
            aa.style.left = '0px';
            this.currentIndex = 0;
            let bb: any = this.$refs.right2;
            bb.style.top = '0px';
        }

        mounted() {
            let myDate: any = new Date();     //获取当前年份(2位)
            this.year = myDate.getFullYear();    //获取完整的年份(4位,1970-????)
            this.month = ((myDate.getMonth() - 0 + 1) > 9 ? (Number(myDate.getMonth()) + 1).toString() : '0' + (Number(myDate.getMonth()) + 1).toString());       //获取当前月份(0-11,0代表1月)
            this.day = myDate.getDate() - 0 > 9 ? myDate.getDate() : '0' + myDate.getDate();

            let _this = this;
            window.onresize = function () { // 定义窗口大小变更通知事件
                _this.screenWidth = document.documentElement.clientWidth; //窗口宽度
                _this.screenHeight = document.documentElement.clientHeight; //窗口高度
            };

            this.init();
        }

        init() {
            api.getAlarmTotal({scene: 100}).then(({data}) => {
                this.$utils.numberGrow(this,`cloudAlarmTotal`,data.count)
            })
            api.getAlarmList({scene: 100,pageNum:1,pageSize:30}).then(({data}) => {
                let newArr: any = [];
                data.content.forEach(item => {
                    item.img = `${this.$imgBaseUrl()}${item.mediaId}`
                    newArr.push(item)
                })

                this.cloudEventData = newArr;
                this.eventList = newArr.slice(0, 10);
            })

            api.getKitchenAlarm().then(({data}) => {
                this.$utils.numberGrow(this,`kitchenAlarm`,data.count)
            })
            api.getKitchenList({pageNum:1,pageSize:30}).then(({data}) => {
                let newArr: any = [];
                data.content.forEach(item => {
                    item.img = `${this.$imgBaseUrl()}${item.mediaId}`
                    newArr.push(item)
                })

                this.KitchenEventData = newArr;
                this.KitchenEventList = newArr.slice(0, 5);
            })

            //安全用电
            api.geteleEquipment().then(({data}) => {
                this.$utils.numberGrow(this,`eleEquipment`,data.count)
            })
            api.getAlarmTotal({scene: 200}).then(({data}) => {
                this.$utils.numberGrow(this,`eleAlarm`,data.count)
            })
            api.getAlarmList({scene: 200,pageNum:1,pageSize:30}).then(({data}) => {
                let newArr: any = [];
                data.content.forEach(item => {
                    item.img = `${this.$imgBaseUrl()}${item.cover}`
                    newArr.push(item)
                })

                this.alarmEventData = newArr;
            })
            //事件处理
            api.getSolveCalc().then(({data}) => {
                this.todayDoList = this.$utils.getEchartData(data);
                let per:number = this.todayDoList[1].value /(this.todayDoList[0].value + this.todayDoList[1].value + this.todayDoList[2].value)*100;
                let title:string = `处理率\n${per.toFixed(2)}%`;
                this.todayDo = {
                    title: {
                        text: title,
                        textStyle: {
                            color: '#e5eeff',
                            fontWeight: 'normal',
                            fontSize: 14,
                        },
                        left: `center`,
                        top: `center`,
                    },
                    tooltip: {
                        trigger: 'item',
                        formatter: '{a} <br/>{b}: {c} ({d}%)'
                    },

                    series: [
                        {
                            name: '月处理率',
                            type: 'pie',
                            radius: ['52%', '74%'],
                            center: ['50%', '50%'],
                            avoidLabelOverlap: false,
                            color: [`#50ffd3`, '#0095ff', '#ffa239'],
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
            api.geteventype().then(({data}) => {
                let newArr = [];
                data.forEach((item,index) =>{
                    if(item.count === 0){

                    }
                    else{
                        item.per = `0%`;
                        newArr.push(item);
                    }
                })
                this.eventypeList = newArr;
            })


            //党建
            /*api.getdangjianSwiper().then(({data})=>{
                let newArr:any = [];
                data.forEach(item =>{
                    newArr.push(`${this.$imgBaseUrl()}${item.mediaId}`)
                })

                this.dangjianSwiper = newArr;
            });*/
            //党员总数
            api.getMemberNum().then(({data}) => {
                this.$utils.numberGrow(this,`memberNum`,data.count)
            });
            //党员列表
            api.getMemberList().then(({data}) => {
                this.memberList = data;
            });

            //志愿者总数
            api.getVolunteerNum().then(({data}) => {
                this.$utils.numberGrow(this,`volunteerNum`,data.count)
            });
            //志愿者top3
            api.getVolunteerTop().then(({data}) => {
                this.volunteerTop3 = data;
            });
        };

        chooseButton(index: any) {
            this.currentIndex = index;
            let bb: any = this.$refs.residentContent;
            bb.style.left = -(index * (this.$refs.resident[0].clientWidth)) + 'px'
            // console.log()
            // console.log(this.$refs.residentContent.offsetLeft)
        }

        toHome() {
            this.$router.push({name: '未来社区首页'})
        }

        showImgBox(item: any) {
            this.showImg = true;
            this.activeImg = item;
        }

        closeVideo() {
            let video: any = this.$refs.video;
            if(video){
                video.stopVideo();
            }
            this.showBox = '';
            setTimeout(()=>{
                this.showBox = 'close';
            },200)
        }

        startM(id: string) {
            this.showBox = 'video';
            let video: any = this.$refs.video;
            setTimeout(() => {
                video.playVideo(id);
            }, 1000)
        }


    }
</script>

<style lang="scss" scoped>
    @import "../styles/variables";

    #govern {
        width: 100%;
        height: 100%;
        min-height: 690px;
        position: relative;
        background-image: url("../images/govern/治理.jpg");
        background-color: #000;
        background-size: 100% 100%;
        background-repeat: no-repeat;


        .topart {
            position: absolute;
            z-index: 2;
            left: 1.25vw;
            top: 9.35vh;
            height: 45.2vh;
            width: 97.5vw;

            .topc1 {
                left: 79.43vw;
                top: 0;
                position: absolute;
                z-index: 3;
                width: 18.07vw;
                height: 100%;
                background-image: url("../images/govern/框1.png");
                background-size: 100% 100%;
                background-repeat: no-repeat;
                padding: 12px;

                .eventList {
                    display: flex;
                    padding: 0 10px;
                    margin-bottom: 10px;

                    img {
                        width: 40%;
                        height: 60px;
                        border-radius: 4px;
                        margin-right: 10px;
                        cursor: pointer;
                    }

                    .info {
                        width: calc(60% - 10px);

                        .name {
                            color: #ffffff;
                            height: 20px;
                            line-height: 20px;
                            width: 100%;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            white-space: nowrap;
                        }

                        .msg {
                            font-size: 12px;
                            color: $second-color;
                            height: 20px;
                            line-height: 20px;
                            width: 100%;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            white-space: nowrap;
                        }
                    }
                }


            }

            .topc2 {
                left: 36.36vw;
                top: 0;
                position: absolute;
                z-index: 3;
                width: 42.03vw;
                height: 100%;
                background-image: url("../images/govern/框2.png");
                background-size: 100% 100%;
                background-repeat: no-repeat;
                padding: 12px;

                .eventcloud {
                    display: flex;
                    padding: 0 10px;
                    margin-bottom: 10px;

                    img {
                        width: 40%;
                        height: 86px;
                        border-radius: 4px;
                        margin-right: 14px;
                        cursor: pointer;
                    }

                    .info {
                        width: calc(60% - 14px);
                        display: flex;
                        flex-direction: column;
                        justify-content: center;

                        .name {
                            height: 24px;
                            margin-bottom: 6px;
                            width: 100%;
                            display: flex;
                            align-items: center;

                            .left {
                                display: flex;
                                align-items: center;
                                width: calc(100% - 18px);

                                em {
                                    color: #ffffff;
                                    line-height: 24px;
                                    overflow: hidden;
                                    text-overflow: ellipsis;
                                    white-space: nowrap;
                                    max-width: calc(100% - 18px);
                                }

                                .iconshijian4 {
                                    font-size: 14px;
                                    margin-left: 4px;
                                    color: rgba(255, 210, 28, 0.87);
                                    cursor: pointer;
                                }

                                .iconqueding {
                                    font-size: 14px;
                                    margin-left: 4px;
                                    color: rgba(77, 202, 64, 0.87);
                                    cursor: pointer;
                                }
                            }

                            .iconjiankong1 {
                                width: 14px;
                                height: 14px;
                                line-height: 1;
                                font-size: 14px;
                                color: #409fff;
                                margin-left: 4px;
                                cursor: pointer;
                            }
                        }

                        .msg {
                            font-size: 12px;
                            color: $second-color;
                            height: 20px;
                            line-height: 20px;
                            width: 100%;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            white-space: nowrap;
                        }
                    }
                }

                .today_do {
                    height: calc(50% - 52px);
                    display: flex;
                    padding: 0 16px 0 10%;

                    .left {
                        width: 52%;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        .item_icon {
                            width: 16px;
                            height: 12px;
                            border-radius: 4px;
                            margin-right: 10px;
                            display: inline-flex;

                            &.item_icon1 {
                                background: #50ffd3;
                            }

                            &.item_icon2 {
                                background: #0095ff;
                            }

                            &.item_icon3 {
                                background: #ffa239;
                            }
                        }

                        .legend {
                            width: 100%;
                            color: #ffffff;
                            display: flex;
                            align-items: center;
                            margin-bottom: 16px;
                        }
                    }
                }

                .today_alarm_content {
                    width: 100%;
                    height: calc(50% - 52px);

                    padding: 0 10px 0 20px;


                }
            }

            .topc3 {
                left: 0;
                top: 0;
                position: absolute;
                z-index: 3;
                width: 17.14vw;
                height: 100%;
                background-image: url("../images/govern/框34.png");
                background-size: 100% 100%;
                background-repeat: no-repeat;
                padding: 12px;

                .moon_chart {
                    width: 100%;
                    height: calc(100% - 32px);


                }
            }

            .topc4 {
                left: 18.18vw;
                top: 0;
                position: absolute;
                z-index: 3;
                width: 17.14vw;
                height: 100%;
                background-image: url("../images/govern/框34.png");
                background-size: 100% 100%;
                background-repeat: no-repeat;
                padding: 12px;

                .resident_table {
                    height: calc(100% - 32px);

                    position: relative;
                    overflow: hidden;

                    .item_table {
                        width: 100%;
                        padding: 0 12px;
                        height: calc(100% - 56px);

                        .lineItem {
                            width: 100%;
                            height: 28px;
                            display: flex;
                            align-items: center;
                            font-size: 12px;
                            margin-bottom: 4px;
                            .item_name {
                                width: calc(100% - 34px);
                                line-height: 28px;
                                color: white;
                                overflow: hidden;
                                text-overflow: ellipsis;
                                white-space: nowrap;
                                text-indent: 5px;
                            }
                            .item_top {
                                width: 28px;
                                margin-left: 6px;
                            }
                        }
                    }
                }

                .item_button {
                    width: 90%;
                    height: 31px;
                    margin-left: 8%;
                    margin-top: 10px;

                    span {
                        display: inline-block;
                        width: 4px;
                        height: 4px;
                        margin-left: 5px;
                        background-color: #1f3c66;
                        border-radius: 50%;
                        cursor: pointer;

                        &:hover {
                            background-color: #66a6ff;
                        }

                        &.current {
                            width: 10px;
                            height: 4px;
                            border-radius: 20%;
                            background-color: #66a6ff;
                        }
                    }
                }
            }
        }

        .bottompart {
            position: absolute;
            z-index: 2;
            left: 1.25vw;
            bottom: 2.22vh;
            height: 41.48vh;
            width: 97.5vw;

            .btItem {
                left: 0;
                top: 0;
                position: absolute;
                z-index: 3;
                width: 48.28vw;
                height: 100%;
                background-image: url("../images/govern/框下.png");
                background-size: 100% 100%;
                background-repeat: no-repeat;
                padding: 12px;

                &.right {
                    right: 0;
                    left: auto;
                }

            }

            .reviewBox {
                width: 90%;
                margin-left: 5%;
                height: calc(100% - 152px);
                margin-top: 20px;
            }


            .volunteer_table {
                width: 90%;
                margin-left: 5%;
                height: calc(100% - 230px);
                display: flex;
                align-items: center;
                justify-content: center;

                > div {

                }

                .top2 {
                    width: 20%;
                    text-align: center;

                    img {
                        width: 70%;
                    }

                    p {
                        color: #597eb3;
                        font-size: 16px;
                        margin-top: -6px;
                        text-align: center;

                        &.top {
                            font-weight: 700;
                        }

                        &.name {
                            margin-top: 2px;
                            color: white;
                            font-size: 13px;
                        }
                    }
                }

                .top1 {
                    width: 20%;
                    margin: 0 10%;
                    text-align: center;

                    img {
                        width: 80%;
                    }

                    p {
                        color: #597eb3;
                        font-size: 17px;
                        text-align: center;
                        margin-top: -6px;

                        &.top {
                            font-weight: 700;
                        }

                        &.name {
                            color: white;
                            margin-top: 2px;
                            font-size: 13px;
                        }
                    }
                }
            }

            .demo-carousel {
                img {
                    width: 32%;
                    margin-right: 1.33%;
                    height: 80px;
                    display: inline-block;
                    vertical-align: top;
                    cursor: pointer;
                }
            }
        }


        .itemain {
            width: 100%;
            height: calc(100% - 32px);
            display: flex;

            .itemPart {
                width: 50%;
            }
        }

        .KitchenEvent {
            position: absolute;
            z-index: 2;
            right: 8vw;
            top: 20vh;
            width: 680px;
            height: 460px;
            background-image: url("../images/govern/列表框.png");
            background-repeat: no-repeat;
            background-size: 100% 100%;
            padding: 30px;

            .close {
                right: 40px;
                top: 40px;
            }
        }

        .cloudEvent {
            position: absolute;
            z-index: 2;
            right: 14vw;
            top: 21vh;
            width: 720px;
            height: 420px;
            background-image: url("../images/govern/列表框.png");
            background-repeat: no-repeat;
            background-size: 100% 100%;
            padding: 30px;
        }

        .alarmEvent {
            position: absolute;
            z-index: 2;
            right: 8vw;
            bottom: 20vh;
            width: 680px;
            height: 420px;
            background-image: url("../images/govern/列表框.png");
            background-repeat: no-repeat;
            background-size: 100% 100%;
            padding: 30px;
        }

        .fankuiList {
            position: absolute;
            z-index: 2;
            left: 11vw;
            top: 7.68vh;
            width: 680px;
            height: 420px;
            background-image: url("../images/govern/列表框.png");
            background-repeat: no-repeat;
            background-size: 100% 100%;
            padding: 30px;
        }

        .memberList {
            position: absolute;
            z-index: 2;
            left: 6.88vw;
            bottom: 7.68vh;
            width: 720px;
            height: 420px;
            background-image: url("../images/govern/列表框.png");
            background-repeat: no-repeat;
            background-size: 100% 100%;
            padding: 30px;
        }

        .volunteerlist{
            position: absolute;
            z-index: 2;
            right: 6.88vw;
            bottom: 7.68vh;
            width: 600px;
            height: 460px;
            background-image: url("../images/govern/志愿者排行弹窗.png");
            background-repeat: no-repeat;
            background-size: 100% 100%;
            padding: 30px;
        }
        .eventDetail {
            position: absolute;
            z-index: 2;
            left: 36.36vw;
            top: 7.68vh;
            width: 680px;
            height: 420px;
            background-image: url("../images/govern/列表框.png");
            background-repeat: no-repeat;
            background-size: 100% 100%;
            padding: 30px;
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
    }
</style>
<style lang="scss">
    #govern {

    }
</style>
