<template>
    <div id="neighbor">
        <div class="back_home" @click="toHome"></div>
        <div class="logoTitle">邻里场景</div>
        <div class="date_show">
            <em class="date_num">{{year}}</em>
            <i>年</i>
            <em class="date_num">{{month}}</em>
            <i>月</i>
            <em class="date_num">{{day}}</em>
            <i>日</i>
        </div>
        <div class="viewBox">
            <div class="halfpart top">
                <div class="itemBox">
                    <div class="boxTitle">入住分析</div>
                    <div class="boxinfo ">
                        <div class="itemflex infotext border">
                            <i class="name">人才公寓</i>
                            <em class="num">{{apartmentNum}}</em>
                            <i class="unit">套</i>
                        </div>
                        <div class="itemflex infotext">
                            <i class="name">入住居民人数</i>
                            <em class="num more" @click="showBox = 'checkinHover'">
                                {{checkinNum}}
                                <i class="iconfont iconzhijiao-triangle"></i>
                            </em>
                            <i class="unit">人</i>
                        </div>
                    </div>
                    <div class="secondTitle">入住人群画像</div>
                    <cornerBox>
                        <div class="colist borderR">
                            <div class="splitItem" v-for="item in checkinEducation">
                                <div class="label">{{item.name}}</div>
                                <div class="text">{{item.count}}<i>人</i></div>
                            </div>
                        </div>
                    </cornerBox>

                    <div class="checkintilte">
                        <div class="ckItem">年龄占比</div>
                        <div class="ckItem">
                            职业类型
                            <div class="right" @click="showBox = 'citizenType'">全部&nbsp;&nbsp;&gt;</div>
                        </div>
                    </div>
                    <div class="checkinEchart">
                        <v-chart
                                :options="checkinOption1"
                                :autoResize="true"
                                ref="healthDoc"
                                style="width:50%;height:100%;position: relative;"
                        />
                        <typeItemChartList :chartList="citizenTop3" style="width:50%;height:132px;max-height:100%;padding: 0 10px;margin-top: 10px" :both="true" :rank="true" unit="人"></typeItemChartList>
                    </div>
                </div>
                <div class="itemBox">
                    <div class="boxTitle">社区活动</div>
                    <div class="activeinfo">
                        <div class="infotext">
                            <i class="name">本年社区活动展开数量</i>
                            <em class="num more" @click="showBox = 'activelist'">
                                {{activeTotal}}
                                <i class="iconfont iconzhijiao-triangle"></i>
                            </em>
                            <i class="unit">次</i>
                        </div>
                        <div class="right more" @click="showBox = 'activeChart'">平均参与人数&nbsp;&nbsp;></div>
                    </div>
                    <cornerBox>
                        <div class="colist borderR" style="padding: 0">
                            <div class="splitItem " v-for="item in activeList">
                                <div class="label">{{item.name}}</div>
                                <div class="text">{{item.count}}<i>次</i></div>
                            </div>
                        </div>
                    </cornerBox>
                    <div class="review">
                        <div class="secondTitle_column" >活动回放</div>
                        <reviewBox class="reviewBox" :activeImg="activeSwiper"></reviewBox>
                    </div>
                </div>
                <div class="itemBox">
                    <div class="boxTitle">邻里交易</div>
                    <div class="activeinfo">
                        <div class="infotext">
                            <i class="name">最新交易</i>

                        </div>
                        <div class="right more" @click="showBox = 'businessChart'">交易统计&nbsp;&nbsp;></div>
                    </div>
                    <div class="newBusiness">
                        <vue-perfect-scrollbar style="height:100%; padding: 0 12px;">
                            <div class="businessItem" v-for="item in businessList">
                                <img :src="item.img" @click="showImgBox(item)">
                                <div class="info">
                                    <div class="title">{{item.name}}</div>
                                    <div class="msg" :title="item.detail">{{item.detail}}</div>
                                    <div class="user">
                                        <img src="../images/neighbor/男性.png" alt="">
                                        <em>{{item.publishPerson}}</em>
                                        <img src="../images/neighbor/电话.png" alt="">
                                        <em>{{item.publishPersonTel}}</em>
                                    </div>
                                </div>
                            </div>
                        </vue-perfect-scrollbar>

                    </div>
                </div>
            </div>
            <div class="halfpart bottom">
                <div class="itemBox point">
                    <div class="boxTitle">邻里积分</div>
                    <div class="sp">
                        <div class="spItem">
                            <div class="secondTitle_column">积分区间统计</div>
                            <v-chart
                                    :options="neighborPoint"
                                    :autoResize="true"
                                    ref="healthDoc"
                                    style="position: relative;"
                            />
                        </div>
                        <div class="spItem">
                            <div class="secondTitle_column">月积分兑换途径</div>
                            <v-chart
                                    :options="exchangePoint"
                                    :autoResize="true"
                                    ref="healthDoc"
                                    style="position: relative;"
                            />
                        </div>
                    </div>
                    <div class="sp bottom">
                        <div class="secondTitle_column">月积分活跃度</div>
                        <div class="curson" @click="showBox = 'dailyChart'">每日活跃人数&nbsp;&nbsp;&gt;</div>
                        <v-chart
                                :options="monthChart"
                                :autoResize="true"
                                ref="healthDoc"
                                style="position: relative;"
                        />

                    </div>

                </div>
                <div class="itemBox">
                    <div class="boxTitle">社团风貌</div>
                    <div class="xiehui">
                        <div class="half">
                            <div class="infotext">
                                <i class="name">本月社区社团数量</i>
                                <em class="num">
                                    {{xiehuiNum}}
                                </em>
                                <i class="unit">次</i>
                            </div>
                            <div class="secondTitle">社团数量及类型统计</div>
                            <v-chart
                                    :options="xiehuitongji"
                                    :autoResize="true"
                                    ref="healthDoc"
                                    style="width:100%;height:calc(100% - 100px);position: relative;"
                            />
                        </div>
                        <div class="half">
                            <div class="infotext">
                                <i class="name">社区社团成员数</i>
                                <em class="num more" @click="showBox = 'xiehuiChart'">
                                    {{xiehuiPersonNum}}
                                    <i class="iconfont iconzhijiao-triangle"></i>
                                </em>
                                <i class="unit">次</i>
                            </div>
                            <div class="secondTitle">
                                明星社团
                                <div class="right more" @click="showBox = 'xiehuilist'">排行榜&nbsp;&nbsp;&gt;</div>
                            </div>
                            <div style="height: calc(100% - 100px);display: flex;align-items: center">
                                <div class="pricetag">
                                    <div class="item">
                                        <div class="img">
                                            <img :src="price2" alt="">
                                        </div>
                                        <div class="tpl">TOP&nbsp;&nbsp;2</div>
                                        <div class="name" v-if="xiehuiRank[1]">{{xiehuiRank[1].name || `暂无`}}</div>
                                    </div>
                                    <div class="item">
                                        <div class="img">
                                            <img :src="price1" alt="">
                                        </div>
                                        <div class="tpl">TOP&nbsp;&nbsp;1</div>
                                        <div class="name" v-if="xiehuiRank[0]">{{xiehuiRank[0].name || `暂无`}}</div>
                                    </div>
                                    <div class="item">
                                        <div class="img">
                                            <img :src="price3" alt="">
                                        </div>
                                        <div class="tpl">TOP&nbsp;&nbsp;3</div>
                                        <div class="name" v-if="xiehuiRank[2]">{{xiehuiRank[2].name || `暂无`}}</div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>



        </div>
        <transition name="fade">
            <div class="messageHover" v-show="showBox !== 'close'">
                <div class="outsideClose" @click="closeVideo"></div>
                <transition name="toggle">
                    <div class="checkinHover" v-show="showBox === 'checkinHover'">
                        <v-chart
                                :options="checkinData"
                                :autoResize="true"
                                ref="healthDoc"
                                style="width: 100%;height: 100%;position: relative;"
                        />
                        <i class="iconfont iconcha-copy close" @click="closeVideo"></i>
                    </div>
                </transition>
                <transition name="toggle">
                    <div class="citizenType" v-show="showBox === 'citizenType'">
                        <i class="iconfont iconcha-copy close" @click="closeVideo"></i>
                        <!--<v-chart
                                :options="citizenType"
                                :autoResize="true"
                                ref="healthDoc"
                                style="width: 100%;height: 100%;position: relative;"
                        />-->
                        <div class="title">职业类型人数统计</div>
                        <typeItemChartList :chartList="citizenList" style="height: calc(100% - 46px);padding: 0 10px" :both="true" :rank="true" unit="人"></typeItemChartList>
                    </div>
                </transition>
                <transition name="toggle">
                    <div class="activelist" v-show="showBox === 'activelist'">
                        <i class="iconfont iconcha-copy close" @click="closeVideo"></i>
                        <div class="title">当月活动举办列表</div>
                        <el-table
                                :data="activeData"
                                style="width: 100%;height:calc(100% - 46px)">
                            <el-table-column
                                    prop="name"
                                    label="名字"
                                    min-width="140px"
                                    show-overflow-tooltip
                            >
                            </el-table-column>

                            <el-table-column
                                    prop="time"
                                    label="时间"
                                    width="160"
                            >
                            </el-table-column>
                            <el-table-column
                                    prop="target"
                                    label="对象"
                                    min-width="140px"
                                    align="center"
                                    show-overflow-tooltip
                            >
                            </el-table-column>
                        </el-table>
                    </div>
                </transition>
                <transition name="toggle">
                    <div class="activeChart" v-show="showBox === 'activeChart'">
                        <i class="iconfont iconcha-copy close" @click="closeVideo"></i>
                        <v-chart
                                :options="activeChart"
                                :autoResize="true"
                                ref="healthDoc"
                                style="width: 100%;height: 100%;position: relative;"
                        />
                    </div>
                </transition>
                <transition name="toggle">
                    <div class="businessChart" v-show="showBox === 'businessChart'">
                        <i class="iconfont iconcha-copy close" @click="closeVideo"></i>
                        <v-chart
                                :options="businessChart"
                                :autoResize="true"
                                ref="healthDoc"
                                style="width: 100%;height: 100%;position: relative;"
                        />
                    </div>
                </transition>
                <transition name="toggle">
                    <div class="dailyChart" v-show="showBox === 'dailyChart'">
                        <i class="iconfont iconcha-copy close" @click="closeVideo"></i>
                        <v-chart
                                :options="dailyChart"
                                :autoResize="true"
                                ref="healthDoc"
                                style="width: 100%;height: 100%;position: relative;"
                        />
                    </div>
                </transition>
                <transition name="toggle">
                    <div class="xiehuilist" v-show="showBox === 'xiehuilist'">
                        <i class="iconfont iconcha-copy close" @click="closeVideo"></i>
                        <div class="title">协会排行榜</div>
                        <el-table
                                :data="xiehuiRank"
                                style="width: 100%;calc(100% - 46px)">
                            <el-table-column
                                    label="名次"
                                    align="center"
                                    width="80">
                                <template slot-scope="{row,$index}">
                                    <img src="../images/govern/top1_s.png" v-if="$index === 0">
                                    <img src="../images/govern/top2_s.png" v-else-if="$index === 1">
                                    <img src="../images/govern/top3_s.png" v-else-if="$index === 2">
                                    <div v-else>{{$index+1}}</div>

                                </template>
                            </el-table-column>

                            <el-table-column
                                    prop="name"
                                    label="社团名称"
                                    show-overflow-tooltip
                            >
                            </el-table-column>
                            <el-table-column
                                    prop="count"
                                    label="综合得分"
                                    width="100px"
                                    align="center"
                            >
                            </el-table-column>
                        </el-table>
                    </div>
                </transition>
                <transition name="toggle">
                    <div class="xiehuiChart" v-show="showBox === 'xiehuiChart'">
                        <i class="iconfont iconcha-copy close" @click="closeVideo"></i>
                        <v-chart
                                :options="xiehuiChart"
                                :autoResize="true"
                                ref="healthDoc"
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
                <img :src="activeImg.img" >
            </div>

        </el-dialog>
    </div>
</template>
<script lang="ts">
    import {Vue, Component} from "vue-property-decorator";
    import {Button} from 'iview';
    import cornerBox from './allDataShow/cornerBox.vue';
    import colorful from './allDataShow/colorList'
    import activeImages from './allDataShow/activeImages'
    import typeItemChartList from './allDataShow/typeItemChartList.vue'
    import * as api from '../api/neighbor';
    import reviewBox from './allDataShow/reviewBox_before.vue'
    const price1 = require("@datashow/images/neighbor/奖杯1.png")
    const price2 = require("@datashow/images/neighbor/奖杯2.png")
    const price3 = require("@datashow/images/neighbor/奖杯3.png")
    @Component({
        components: {cornerBox, Button, reviewBox, typeItemChartList}
    })

    export default class neighbor extends Vue {
        price1: any = price1;
        price2: any = price2;
        price3: any = price3;
        colorList: any = colorful.colorList;
        year: string = '';
        month: string = '';
        day: string = '';
        showImg:boolean = false;
        activeImg:any = {
            name:''
        };


        ctrlShow:boolean = false;
        citizenTop3:any = [
            {
                name: 'IT类',
                count: 65,
                per: `0%`,
            },
            {
                name: '设计类',
                count: 63,
                per: `0%`,
            },
            {
                name: '新媒体类',
                count: 42,
                per: `0%`,
            },
        ]
        citizenList:any = [
            {
                name: 'IT类',
                count: 65,
                per: `0%`,
            },
            {
                name: '设计类',
                count: 63,
                per: `0%`,
            },
            {
                name: '新媒体类',
                count: 42,
                per: `0%`,
            },
            {
                name: '广告类',
                count: 25,
                per: `0%`,
            },
            {
                name: '其他类',
                count: 12,
                per: `0%`,
            },
        ];
        checkinOption1: any = null;
        checkinOption2: any = null;
        xiehuitongji: any = null;
        checkinData: any = {
            title: {
                text: '入住人数趋势',
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
                left: `16`,
                right: `24`,
                top: '60',
                bottom: '10',
                containLabel: true
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
                    name: '人数',
                    type: 'line',
                    smooth:true,
                    areaStyle: {
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [
                                {
                                    offset: 0, color: '#4e8aff'
                                }, {
                                    offset: 1, color: 'rgba(149,184,255,0.26)'
                                }
                            ],
                            global: false
                        }
                    },
                    data: [877, 911, 924, 1040, 1122, 1257, 1345, 1451, 1353, 1365, 1199, 1251],
                }

            ]
        };
        citizenType: any = {
            title: {
                text: '居民职业类型',
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
            color: {
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
                global: false // 缺省为 false
            },
            calculable: true,
            grid: {
                left: `30`,
                right: `30`,
                top: '40',
                bottom: '20',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    data: ['IT类', '设计类', '自媒体', '广告类', '服务类'],
                    name: '',
                    // nameGap: 5,
                    // boundaryGap: false,
                    nameLocation: 'end',


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
                    data: [230, 150, 330, 455, 651, 513],
                }

            ]
        };

        activeChart: any = null;
        businessChart: any = null;
        dailyChart: any = {
            title: {
                text: '每日活跃人数',
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
                left: `34`,
                right: `34`,
                top: '60',
                bottom: '18',
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
                    name: '活跃人数/人',
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
                    name: '活跃人数',
                    type: 'line',
                    smooth: true,
                    data: [45, 46, 48, 48, 45, 45, 44, 51, 52, 56, 58, 60, 63, 60, 61, 55, 67, 68, 63, 67, 66, 65, 72, 77, 75, 76, 83, 81, 80, 86, 88],

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
                                    offset: 0.5, color: 'rgba(153,187,255,0.5)'
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
        xiehuiChart: any = {
            title: {
                text: '社团成员数量变化趋势',
                textStyle: {
                    color: '#e5eeff',
                    fontWeight: 'bold',
                    fontSize: 16,
                },
                left: `center`,
                top: 10,
            },

            textStyle: {
                color: `#fff`,
            },
            tooltip: {
                trigger: 'axis'
            },
            color: [`#4cfff0`],
            calculable: true,
            grid: {
                left: `40`,
                right: `40`,
                top: '60',
                bottom: '40',
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
                    name: '参与人数/人',
                    z: 0,
                    nameTextStyle: {
                        color: `#597eb2`,
                    },
                    splitLine: {
                        show: false
                    },
                    axisLine: {
                        lineStyle: {
                            color: `#597eb2`,
                        }
                    },

                    // interval: Math.ceil(100 / 5),   //  平均分为5份
                    axisLabel: {
                        formatter: '{value}'
                    },
                },
            ],
            series: [
                {
                    name: '参与人数',
                    type: 'line',
                    smooth: true,
                    data: [15,35,41,58,86,126,131,153,186,197,201,212],
                    areaStyle: {
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{
                                offset: 0, color: '#4cfff0'
                            }, {
                                offset: 1, color: 'rgba(153,255,246,0.26)'
                            }],
                            global: false
                        }
                    },
                },
            ]
        };

        neighborPoint: any = {
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b}: {c} ({d}%)'
            },
            grid: {
                left: `60`,
                right: `60`,
                top: '30',
                bottom: '30',
            },
            color:colorful.colorLinear,
            series: [
                {
                    name: '积分区间统计',
                    type: 'pie',
                    radius: ['30%', '50%'],
                    center: ['50%', '50%'],

                    label: {
                        formatter: '{b|{b}}\n{per|{c}人}  {per|{d}%}',
                        show: true,
                        rich: {
                            b: {
                                fontSize: 12,
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
                        length: 4,
                        length2: 20
                    },
                    data: [
                        {
                            value: 199,
                            name: '0-1000',
                        },
                        {
                            value: 53,
                            name: '1001-2000',
                        },
                        {
                            value: 174,
                            name: '2001-3000',
                        },
                    ]
                }
            ]
        };
        exchangePoint: any = {
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b}: {c} ({d}%)'
            },
            grid: {
                left: `60`,
                right: `60`,
                top: '30',
                bottom: '30',
            },
            color:colorful.colorLinear,
            series: [
                {
                    name: '积分兑换途径',
                    type: 'pie',
                    radius: ['30%', '50%'],
                    center: ['50%', '50%'],

                    label: {
                        formatter: '{b|{b}}\n{per|{c}次}  {per|{d}%}',
                        show: true,
                        rich: {
                            b: {
                                fontSize: 12,
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
                        length: 4,
                        length2: 20
                    },
                    data: [
                        {
                            value: 35,
                            name: '房租抵用',

                        },
                        {
                            value: 23,
                            name: '课程折扣',

                        },
                        {
                            value: 144,
                            name: '礼品兑换',

                        },
                    ]
                }
            ]
        };
        monthChart: any = {
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
                right: `26`,
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
                    name: '活跃度/%',
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
                    min: 0,
                    max: 100,
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
                    name: '活跃度',
                    type: 'line',
                    smooth: true,
                    data: [50, 56, 63, 70, 80, 77, 83, 84, 78, 76, 71, 65, 63, 61, 60, 57, 62, 64, 59, 57, 53, 56, 60, 61, 63, 66, 73, 77, 74, 69, 66],

                    areaStyle: {
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [
                                {
                                    offset: 0, color: '#4e8aff'
                                }, {
                                    offset: 1, color: 'rgba(149,184,255,0.26)'
                                }
                            ],
                            global: false
                        }
                    },
                }

            ]
        };

        activeData: any = [
            {
                name: '关爱萌宠',
                time: '2020-4-9 12:31:12',
                object: '全体居民',
            },
            {
                name: '创业扶持',
                time: '2020-4-9 12:31:12',
                object: '创业人员',
            },
        ];
        activeSwiper: any = [];
        showBox: string = 'close';


        //入住
        apartmentNum:number = 0;
        checkinNum:number = 0;
        checkinEducation:any = [];

        //社团
        xiehuiNum:number = 0;
        xiehuiPersonNum:number = 0;
        xiehuiRank:Array<any>=[];

        //活动
        activeList:any=[];
        activeTotal:number = 0;
        //交易
        businessList:any=[];
        created() {
            let myDate: any = new Date();     //获取当前年份(2位)
            this.year = myDate.getFullYear();    //获取完整的年份(4位,1970-????)
            this.month = ((myDate.getMonth() - 0 + 1) > 9 ? (Number(myDate.getMonth()) + 1).toString() : '0' + (Number(myDate.getMonth()) + 1).toString());       //获取当前月份(0-11,0代表1月)
            this.day = myDate.getDate() - 0 > 9 ? myDate.getDate() : '0' + myDate.getDate();
            this.init();

        }



        init(){
            api.getApartmentNum().then(({data})=>{
                this.$utils.numberGrow(this,`apartmentNum`,data.count)
            });
            api.getCheckinPerson().then(({data})=>{
                this.$utils.numberGrow(this,`checkinNum`,data.count)
            });
            //入住人群学历
            api.getCheckinpeople('education').then(({data})=>{
                this.checkinEducation = data
            });
            //入住人群年龄
            api.getCheckinpeople('age').then(({data})=>{
                let newArr:any = [];
                data.forEach(item =>{
                    newArr.push({
                        name:item.name,
                        count:item.count,
                        per:'0%',
                    })
                })
                //this.citizenList = newArr;
                this.checkinOption1 = {
                    tooltip: {
                        trigger: 'item',
                            formatter: '{a} <br/>{b}: {c}人 ({d}%)'
                    },
                    color:colorful.colorLinear,
                    series: [
                        {
                            name: '年龄占比',
                            type: 'pie',
                            radius: ['18', '32'],
                            center: ['50%', '60%'],
                            // color: this.colorList,
                            label: {
                                show: true,
                                formatter: '{b|{b}}\n{per|{d}%}',
                                rich: {
                                    b: {
                                        fontSize: 12,
                                        lineHeight: 12,
                                        color: '#409fff',
                                    },
                                    per: {
                                        fontSize: 12,
                                        lineHeight: 14,
                                        color: '#fff',
                                    }
                                }
                            },
                            labelLine: {
                                length: 6,
                                length2: 20
                            },
                            data:this.$utils.getEchartData(data),
                        }
                    ]
                }

            });
            //入住人群职业
            api.getCheckinpeople('job').then(({data})=>{
                this.checkinOption2 = {
                    tooltip: {
                        trigger: 'axis'
                    },
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [
                            {
                                offset: 1, color: '#3366ff' // 0% 处的颜色
                            }, {
                                offset: 0, color: '#6699ff' // 100% 处的颜色
                            }
                        ],
                        global: false // 缺省为 false
                    },
                    calculable: true,
                    grid: {
                        left: `10`,
                        right: `20`,
                        top: '40',
                        bottom: '10',
                        containLabel: true
                    },
                    xAxis: [
                        {
                            type: 'category',
                            data: this.$utils.getEchartxAxis(data),
                            name: '',

                            nameLocation: 'end',
                            nameTextStyle: {
                                color: `#597eb2`,
                                padding: [25, 0, 0, -5],
                            },
                            splitNumber: 12,
                            minInterval: 1,

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
                            name: '人数',
                            show: false,
                        }
                    ],
                    series: [
                        {
                            name: '',
                            type: 'bar',
                            itemStyle: {
                                barBorderRadius: [2, 2, 0, 0]
                            },
                            barWidth: 14,

                            label: {
                                show: true,
                                position: 'top',
                                color: '#cce1ff',
                                formatter: '{c}人',
                            },
                            data:this.$utils.getEchartData(data),
                        }

                    ]
                }
                this.citizenType = {
                    title: {
                        text: '居民职业类型',
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
                    color: {
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
                        global: false // 缺省为 false
                    },
                    calculable: true,
                    grid: {
                        left: `30`,
                        right: `30`,
                        top: '40',
                        bottom: '20',
                        containLabel: true
                    },
                    xAxis: [
                        {
                            type: 'category',
                            data:  this.$utils.getEchartxAxis(data),
                            name: '',
                            // nameGap: 5,
                            // boundaryGap: false,
                            nameLocation: 'end',


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
                            data:this.$utils.getEchartData(data),
                        }

                    ]
                };
            });
            //入住人数趋势
            api.getCheckinMonthNum().then(({data})=>{
                if(data){
                    this.checkinData = {
                        title: {
                            text: '入住人数趋势',
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
                            left: `16`,
                            right: `24`,
                            top: '60',
                            bottom: '10',
                            containLabel: true
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
                                name: '人数',
                                type: 'line',
                                smooth: true,
                                areaStyle: {
                                    color: {
                                        type: 'linear',
                                        x: 0,
                                        y: 0,
                                        x2: 0,
                                        y2: 1,
                                        colorStops: [
                                            {
                                                offset: 0, color: '#4e8aff'
                                            }, {
                                                offset: 1, color: 'rgba(149,184,255,0.26)'
                                            }
                                        ],
                                        global: false
                                    }
                                },
                                data:this.$utils.getEchartData(data),
                                symbolSize: 0,

                            }

                        ]
                    }
                }
            });

            //社团数
            api.getxiehuiNum().then(({data})=>{
                this.$utils.numberGrow(this,`xiehuiNum`,data.count)
            });
            //社团人数
            api.getxiehuiPersonNum().then(({data})=>{
                this.$utils.numberGrow(this,`xiehuiPersonNum`,data.count)
            });
            //社团类型
            api.getxiehuitype().then(({data})=>{
                this.xiehuitongji = {
                    tooltip: {
                        trigger: 'item',
                        formatter: '{a} <br/>{b}: {c} ({d}%)'
                    },
                    grid: {
                        left: `60`,
                        right: `60`,
                        top: '30',
                        bottom: '30',
                        containLabel: true
                    },
                    color:colorful.colorLinear,
                    series: [
                        {
                            name: '健康档案',
                            type: 'pie',
                            radius: ['30', '50'],
                            center: ['50%', '50%'],

                            label: {
                                formatter: '{b|{b}}\n{per|{c}个}  {per|{d}%}',
                                show: true,
                                rich: {
                                    b: {
                                        fontSize: 12,
                                        lineHeight: 14,
                                        color: '#409fff',
                                    },
                                    per: {
                                        fontSize: 12,
                                        lineHeight: 14,
                                        color: '#fff',
                                    }
                                }
                            },
                            labelLine: {
                                length: 8,
                                length2: 20
                            },
                            data:this.$utils.getEchartData(data),
                        }
                    ]
                };
            });
            //社团排行
            api.getxiehuiRank().then(({data})=>{
                this.xiehuiRank = data;
            });

            //活动分类
            api.getActiveType().then(({data})=>{
                this.activeList = data;
            });
            api.getActivePeople().then(({data})=>{
                this.activeChart = {
                    title: {
                        text: '年活动平均参与人数',
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
                        left: `20`,
                        right: `40`,
                        top: '50',
                        bottom: '20',
                        containLabel: true
                    },
                    xAxis: [
                        {
                            type: 'category',
                            data: this.$utils.getEchartxAxis(data),
                            name: '类型',
                            // nameGap: 5,
                            // boundaryGap: false,
                            nameLocation: 'end',
                            nameTextStyle: {
                                color: '#597eb2',
                            },

                            // splitNumber: 5 * 60 * 1000,
                            // interval: 5 * 60 * 1000,
                            axisLabel: {
                                fontSize: 12,
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

            api.getActiveTotal().then(({data})=>{
                this.$utils.numberGrow(this,`activeTotal`,data.count)
            });
            api.getActiveList().then(({data})=>{
                this.activeData = data;

            });
            api.getActiveSwiper().then(({data})=>{
                let newArr:any = [];
                data.forEach(item =>{
                    newArr.push({
                        name:item.name,
                        img:`${this.$imgBaseUrl()}${item.mediaId}`
                    })
                })

                this.activeSwiper = newArr;
            });
            //交易
            api.getBusinessList().then(({data})=>{
                let newArr:any = [];
                data.forEach(item =>{
                    item.img = `${this.$imgBaseUrl()}${item.cover}`
                    newArr.push(item)
                })

                this.businessList = newArr;
            });
            api.getBusinessNum().then(({data})=>{
                this.businessChart = {
                    title: {
                        text: '交易统计',
                        textStyle: {
                            color: '#e5eeff',
                            fontWeight: 'bold',
                            fontSize: 16,
                        },
                        left: `center`,
                        top: 10,
                    },
                    legend: {
                        data: ['交易次数', '参与人数'],
                        bottom: `6`,
                        right: `center`,
                        itemGap: 20,
                        textStyle: {
                            color: `#fff`,
                        },
                    },
                    textStyle: {
                        color: `#fff`,
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    color: [`#4e8aff`],
                    calculable: true,
                    grid: {
                        left: `56`,
                        right: `56`,
                        top: '80',
                        bottom: '60',
                    },
                    xAxis: [
                        {
                            name: '月份',
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
                            name: '交易次数/次',
                            z: 1,
                            nameTextStyle: {
                                color: `#597eb2`,
                            },
                            splitLine: {
                                show: false
                            },
                            max:10,

                            axisLine: {
                                lineStyle: {
                                    color: `#597eb2`,
                                }
                            }
                        },
                        /*{
                            name: '参与人数/人',
                            z: 0,
                            nameTextStyle: {
                                color: `#597eb2`,
                            },
                            splitLine: {
                                show: false
                            },
                            axisLine: {
                                lineStyle: {
                                    color: `#597eb2`,
                                }
                            },

                            // interval: Math.ceil(100 / 5),   //  平均分为5份
                            axisLabel: {
                                formatter: '{value}'
                            },
                        },*/
                    ],
                    series: [
                        {
                            name: '交易次数',
                            type: 'line',
                            data: this.$utils.getEchartData(data),
                            smooth:true,
                            areaStyle: {
                                color: {
                                    type: 'linear',
                                    x: 0,
                                    y: 0,
                                    x2: 0,
                                    y2: 1,
                                    colorStops: [{
                                        offset: 0, color: '#4e8aff'
                                    }, {
                                        offset: 1, color: 'rgba(149,184,255,0.26)'
                                    }],
                                    global: false
                                }
                            },
                        },
                        /*{
                            name: '参与人数',
                            type: 'bar',
                            data: [131, 134, 131, 213, 156, 156, 134, 164, 178, 90, 221, 241],
                            barWidth: 12,
                            itemStyle: {
                                barBorderRadius: [2, 2, 0, 0],
                                color: {
                                    type: 'linear',
                                    x: 0,
                                    y: 0,
                                    x2: 0,
                                    y2: 1,
                                    colorStops: [{
                                        offset: 0, color: '#7fffdf'
                                    }, {
                                        offset: 1, color: '#00998c'
                                    }],
                                    global: false
                                }
                            }
                        },*/

                    ]
                };
            });
        }

        closeVideo() {
            this.showBox = '';
            setTimeout(()=>{
                this.showBox = 'close';
            },200)
        }
        toHome() {
            this.$router.push({name: '未来社区首页'})
        }
        showImgBox(item:any){
            this.showImg = true;
            this.activeImg = item
        }
    }
</script>

<style lang="scss" scoped>
    #neighbor {
        width: 100%;
        height: 100%;
        min-height: 690px;
        position: relative;
        background-image: url("../images/neighbor/邻里.png");
        background-color: #000;
        background-size: 100% 100%;
        background-repeat: no-repeat;

        .viewBox {
            width: 100%;
            height: 100%;
            position: relative;
            z-index: 1;

            .halfpart {
                width: 100%;
                height: 43.2%;
                padding: 0 14px;
                display: flex;

                &.top {
                    position: absolute;
                    top: 10%;

                    .itemBox {
                        background-image: url("../images/neighbor/背景框1.png");
                        background-size: 100% 100%;
                        background-repeat: no-repeat;

                    }

                }

                &.bottom {
                    position: absolute;
                    bottom: 24px;

                    .itemBox {
                        background-image: url("../images/neighbor/背景框2.png");
                        width: calc(50% - 20px);
                        background-size: 100% 100%;
                        background-repeat: no-repeat;
                    }
                }

                .itemBox {
                    width: calc(33.33% - 20px);
                    margin: 0 10px;
                    padding: 12px;

                    &.point {
                        .sp {
                            height: calc(50% - 16px);
                            display: inline-flex;
                            width: 100%;

                            .spItem {
                                width: 50%;
                                display: inline-flex;
                                align-items: center;
                            }

                            &.bottom {
                                align-items: center;
                                position: relative;

                                .curson {
                                    position: absolute;
                                    right: 30px;
                                    top: 1px;
                                    z-index: 2;
                                    color: #ccd9ff;
                                    cursor: pointer;
                                }
                            }
                        }
                    }
                }

                .boxinfo {
                    display: flex;

                    .itemflex {
                        width: calc(50% - 1px);
                        height: 28px;
                        margin: 12px 0;

                        &.border {
                            border-right: 1px solid rgba(102, 166, 255, 0.6);
                        }

                    }
                }

                /* .infotext {
                     display: inline-flex;
                     justify-content: center;
                     align-items: flex-end;
                     .name {
                         color: #409fff;
                         font-size: 16px;
                         font-weight: bold;
                     }

                     .num {
                         color: white;
                         font-size: 24px;
                         line-height: 26px;
                         height: 26px;
                         padding: 0 20px;
                         font-weight: bold;

                         &.more {
                             cursor: pointer;
                             position: relative;
                         }

                         .iconfont {
                             position: absolute;
                             right: 6px;
                             bottom: 0;
                             font-size: 12px;
                             color: #409fff;
                             width: 14px;
                             height: 14px;
                             line-height: 12px;
                         }
                     }

                     .unit {
                         color: #597eb3;
                     }
                 }*/
                .checkintilte {
                    display: flex;
                    height: 44px;
                    padding-top: 10px;
                    align-items: flex-end;

                    .ckItem {
                        padding: 0 12px 0 24px;
                        height: 24px;
                        width: 50%;
                        color: #409fff;
                        font-size: 16px;
                        font-weight: bold;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;

                        .right {
                            font-size: 12px;
                            color: #c3d7f5;
                            font-weight: normal;
                            cursor: pointer;
                            user-select: none;
                        }
                    }
                }

                .checkinEchart {
                    height: calc(100% - 246px);

                    display: flex;
                    align-items: center;
                }

                .review{
                    display: inline-flex;
                    align-items: center;
                    width: 100%;
                    height: calc(100% - 158px);
                    padding: 15px 24px;
                    overflow: hidden;


                    .reviewBox{
                        width: calc(100% - 54px);
                    }
                }

                .newBusiness {
                    height: calc(100% - 100px);
                    overflow: hidden;


                    .businessItem {
                        height: 90px;
                        border-bottom: 1px solid #141f54;
                        display: flex;
                        margin-bottom: 10px;

                        img {
                            width: 128px;
                            margin-right: 10px;
                            height: 80px;
                            border-radius: 4px;
                            cursor: pointer;
                        }

                        .info {
                            height: 80px;
                            width: calc(100% - 138px);

                            .title {
                                font-size: 16px;
                                font-weight: bold;
                                height: 24px;
                                line-height: 24px;
                                overflow: hidden;
                                text-overflow: ellipsis;
                                white-space: nowrap;
                                color: white;
                                margin-bottom: 8px;
                            }

                            .msg {
                                height: 20px;
                                line-height: 20px;
                                overflow: hidden;
                                text-overflow: ellipsis;
                                white-space: nowrap;
                                color: #ccd9ff;
                                margin-bottom: 8px;
                            }

                            .user {
                                height: 20px;
                                display: flex;
                                align-items: center;
                                img{
                                    width:28px;
                                    height:28px;
                                }
                                em{
                                    padding: 0 16px 0 0;
                                    color: #ccd9ff;

                                }
                            }
                        }
                    }
                }


                .xiehui {
                    display: flex;
                    height: calc(100% - 44px);

                    .half {
                        width: 50%;
                        height: 100%;
                        padding: 0 20px;

                        .infotext {
                            padding: 20px 10px;
                        }
                    }

                    .pricetag {
                        display: inline-flex;
                        width: 100%;

                        .item {
                            width: 33.33%;

                            .img {
                                height: 80px;
                                width: 100%;
                                display: inline-flex;
                                align-items: flex-end;
                                justify-content: center;

                                img {
                                    max-width: 100%;
                                }
                            }

                            .tpl {
                                height: 40px;
                                line-height: 40px;
                                margin-bottom: 20px;
                                color: #597eb3;
                                font-weight: bold;
                                text-align: center;
                            }

                            .name {
                                height: 24px;
                                line-height: 24px;
                                color: #fff;
                                text-align: center;
                            }
                        }
                    }
                }
            }
        }

        .checkinHover {
            position: absolute;
            z-index: 2;
            left: 3.6vw;
            top: 8vh;
            width: 38.4vw;
            height: 26.8vw;
            background-image: url("../images/neighbor/三级弹窗1.png");
            background-repeat: no-repeat;
            background-size: 100% 100%;
            padding: 2vw 2.5vw;


        }

        .citizenType {
            position: absolute;
            z-index: 2;
            left: 14.6vw;
            top: 24vh;
            width: 38.4vw;
            height: 26.8vw;
            background-image: url("../images/neighbor/三级弹窗1.png");
            background-repeat: no-repeat;
            background-size: 100% 100%;
            padding: 2vw 2.5vw;

            .close {
                position: absolute;
                z-index: 2;
                right: 30px;
                top: 30px;
                color: #ffffff;
                cursor: pointer;
            }
        }

        .activelist {
            position: absolute;
            z-index: 2;
            left: 24vw;
            top: 12vh;
            width: 38.4vw;
            height: 26.8vw;
            background-image: url("../images/neighbor/三级弹窗2（列表）.png");
            background-repeat: no-repeat;
            background-size: 100% 100%;
            padding: 2vw 2.5vw;
        }

        .activeChart {
            position: absolute;
            z-index: 2;
            left: 28vw;
            top: 14vh;
            width: 40.4vw;
            height: 27.8vw;
            background-image: url("../images/neighbor/三级弹窗1.png");
            background-repeat: no-repeat;
            background-size: 100% 100%;
            padding: 2vw 2.5vw;

        }

        .businessChart {
            position: absolute;
            z-index: 2;
            right: 2.5vw;
            top: 14vh;
            width: 42.8vw;
            height: 28.2vw;
            background-image: url("../images/neighbor/三级弹窗3（交易统计）.png");
            background-repeat: no-repeat;
            background-size: 100% 100%;
            padding: 2vw 2.5vw;

        }

        .dailyChart {
            position: absolute;
            z-index: 2;
            left: 2.5vw;
            bottom: 8vh;
            width: 48.8vw;
            height: 26.3vw;
            background-image: url("../images/neighbor/三级弹窗4（每日活跃人数）.png");
            background-repeat: no-repeat;
            background-size: 100% 100%;
            padding: 2vw 2.5vw;

        }

        .xiehuilist {
            position: absolute;
            z-index: 2;
            right: 2.5vw;
            bottom: 6vh;
            width: 36.8vw;
            height: 30.3vw;
            background-image: url("../images/neighbor/三级弹窗2（列表）.png");
            background-repeat: no-repeat;
            background-size: 100% 100%;
            padding: 2vw 2.5vw;

        }

        .xiehuiChart {
            position: absolute;
            z-index: 2;
            right: 2.5vw;
            bottom: 10vh;
            width: 40.8vw;
            height: 26.3vw;
            background-image: url("../images/neighbor/三级弹窗1.png");
            background-repeat: no-repeat;
            background-size: 100% 100%;
            padding: 2vw 2.5vw;

        }
    }
</style>
<style lang="scss">
    #neighbor {

    }

</style>
