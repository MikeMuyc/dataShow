<template>
    <div id="education">
        <div class="back_home" @click="toHome"></div>
        <div class="logoTitle">教育场景</div>
        <div class="date_show">
            <em class="date_num">{{year}}</em>
            <i>年</i>
            <em class="date_num">{{month}}</em>
            <i>月</i>
            <em class="date_num">{{day}}</em>
            <i>日</i>
        </div>


        <div class="topart">
            <div class="boxTitle">达人库</div>
            <div class="itemain">
                <div class="lessons">
                    <div class="activeinfo" style="padding: 20px;">
                        <div class="infotext">
                            <i class="name">最新课程</i>

                        </div>
                        <div class="right more" @click="showBox = 'classChart'">课程统计&nbsp;&nbsp;></div>
                    </div>
                    <vue-perfect-scrollbar style="height: calc(100% - 62px)">
                        <div class="newLesson">

                            <div class="lesson" v-for="item in newList">
                                <!--<div class="secondTitle_column">{{item.title}}</div>-->
                                <div class="main">
                                    <div class="title">
                                        <img src="../images/pic.jpg" alt="">
                                        <div class="namex">{{item.name}}</div>
                                        <div class="job">{{item.job}}</div>
                                    </div>
                                    <img :src="item.img" @click="showImgBox(item)">
                                    <div class="info">
                                        <div class="name">
                                            <div class="left">{{item.secondTitle}}</div>
                                            <div class="right">
                                                <i>{{item.count}}</i>
                                                <em>人报名</em>
                                            </div>
                                        </div>
                                        <div class="msg">地点：{{item.address}}</div>
                                        <div class="msg">时间：{{item.time}}</div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </vue-perfect-scrollbar>

                </div>
                <div class="userList">
                    <div class="h3">热门达人</div>
                    <vue-perfect-scrollbar style="height: calc(100% - 62px)">
                        <div class="userboxes">
                            <div class="user" @click="showDaren(item)" v-for="item in darenList">
                                <img :src="item.img" >
                                <div class="info">
                                    <div class="username">{{item.name}}</div>
                                    <div class="userjob">{{item.tag}}</div>
                                </div>

                            </div>
                        </div>

                    </vue-perfect-scrollbar>
                </div>
            </div>
            <!--<div class="rightbox">
                <div class="boxTitle" style="margin-bottom: 20px">周边教育资源</div>
                <vue-perfect-scrollbar style="height: calc(100% - 62px);padding: 0 15px">
                    <div class="resources" v-for="item in resourceList">
                        <img :src="item.img" @click="showImgBox(item)">
                        <div class="info">
                            <div class="name">{{item.name}}</div>
                            <div class="msg">
                                <i class="iconfont icondingwei"></i>
                                {{item.address}}
                            </div>
                            <div class="address">{{item.phone? `电话：${item.phone};` : ''}}&nbsp;{{item.distan}}</div>
                        </div>
                    </div>
                </vue-perfect-scrollbar>
            </div>-->
        </div>

        <div class="bottompart">
            <div class="leftbox">
                <div class="boxTitle">社区教学</div>
                <div class="itemain">
                    <div class="itemPart">
                        <div class="secondTitle" style="margin-bottom: 14px">
                            热门教学课程
                        </div>
                        <vue-perfect-scrollbar style="height: calc(100% - 72px);padding: 0 20px">
                            <div class="lessonlist">
                                <div class="lesson" v-for="item in imgList">
                                    <img :src="item.img" @click="showImgBox(item)">
                                    <div class="name">{{item.name}}</div>
                                </div>

                            </div>

                        </vue-perfect-scrollbar>
                    </div>
                    <div class="itemPart" style="padding: 0 10px">
                        <div class="secondTitle">
                            教学活动
                        </div>
                        <div class="activeinfo" style="padding: 10px 24px">
                            <div class="infotext">
                                <i class="name">教学活动总数</i>
                                <em class="num more" @click="showBox = 'teachActive'">
                                    4
                                    <i class="iconfont iconzhijiao-triangle"></i>
                                </em>
                                <i class="unit">次</i>
                            </div>
                        </div>
                        <v-chart
                                :options="lessonType"
                                :autoResize="true"
                                style="width:100%;height:calc(100% - 98px);position: relative;"
                        />
                    </div>
                </div>
            </div>
            <div class="rightbox">
                <div class="boxTitle">周边教育资源</div>
                <div class="activeinfo" style="padding: 10px 24px">
                    <div class="infotext">
                        <i class="name">培训机构</i>
                        <em class="num">11</em>
                        <i class="unit">家</i>
                    </div>
                    <div class="right more" @click="showBox = 'resourcebox'">周边机构&nbsp;&nbsp;></div>
                </div>
                <v-chart
                        :options="teachResource"
                        :autoResize="true"
                        style="width:100%;height:calc(50% - 62px);position: relative"
                />

                <div class="activeinfo" style="padding: 10px 24px">
                    <div class="infotext">
                        <i class="name">K12教育资源</i>
                        <em class="num">10</em>
                        <i class="unit">所</i>
                    </div>
                    <div class="right more" @click="showBox = 'resourcebox2'">周边资源&nbsp;&nbsp;></div>
                </div>
                <v-chart
                        :options="teachResource2"
                        :autoResize="true"
                        style="width:100%;height:calc(50% - 62px);position: relative"
                />
            </div>
        </div>

        <transition name="fade">
            <div class="messageHover" v-show="showBox !=='close'">
                <div class="outsideClose" @click="closeVideo"></div>
                <transition name="toggle">
                    <div class="classChart" v-show="showBox === 'classChart'">
                        <i class="iconfont iconcha-copy close" @click="closeVideo"></i>
                        <v-chart
                                :options="classChart"
                                :autoResize="true"
                                ref="carNum"
                                style="width: 100%;height:100%;position: relative;"
                        />
                    </div>
                </transition>

                <transition name="toggle">
                    <div class="teachActive" v-show="showBox === 'teachActive'">
                        <i class="iconfont iconcha-copy close" @click="closeVideo"></i>
                        <div class="title">教学活动举办列表</div>
                        <el-table
                                :data="teachActiveData"
                                style="width: 100%;height:calc(100% - 46px)">
                            <el-table-column
                                    prop="eventName"
                                    label="名称"
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
                            <el-table-column
                                    prop="address"
                                    label="对象"
                                    align="center"
                                    show-overflow-tooltip
                            >
                            </el-table-column>
                        </el-table>
                    </div>
                </transition>

                <transition name="toggle">
                    <div class="resourcebox" v-show="showBox === 'resourcebox'">
                        <i class="iconfont iconcha-copy close" @click="closeVideo"></i>
                        <div class="title">周边机构</div>
                        <vue-perfect-scrollbar style="height: calc(100% - 54px);padding: 0 20px">
                            <div class="resources" v-for="item in resourceList1">
                                <img :src="item.img" @click="showImgBox(item)">
                                <div class="info">
                                    <div class="name">{{item.name}}</div>
                                    <div class="msg">
                                        <i class="iconfont icondingwei"></i>
                                        {{item.address}}
                                    </div>
                                    <div class="address">{{item.phone? `电话：${item.phone};` : ''}}&nbsp;{{item.distan}}</div>
                                </div>
                            </div>
                        </vue-perfect-scrollbar>
                    </div>
                </transition>
                <transition name="toggle">
                    <div class="resourcebox" v-show="showBox === 'resourcebox2'">
                        <i class="iconfont iconcha-copy close" @click="closeVideo"></i>
                        <div class="title">周边资源</div>
                        <vue-perfect-scrollbar style="height: calc(100% - 54px);padding: 0 20px">
                            <div class="resources" v-for="item in resourceList2">
                                <img :src="item.img" @click="showImgBox(item)">
                                <div class="info">
                                    <div class="name">{{item.name}}</div>
                                    <div class="msg">
                                        <i class="iconfont icondingwei"></i>
                                        {{item.address}}
                                    </div>
                                    <div class="address">{{item.phone? `电话：${item.phone};` : ''}}&nbsp;{{item.distan}}</div>
                                </div>
                            </div>
                        </vue-perfect-scrollbar>
                    </div>
                </transition>

                <transition name="bounce">
                    <div class="darenbox" v-show="showBox === 'daren'">
                        <i class="iconfont iconcha-copy close" @click="closeVideo"></i>
                        <div class="title">达人信息</div>
                        <div class="dareninfo">
                            <div class="darenitem left">
                                <img :src="darenDetail.img" alt="">
                                <div class="name">{{darenDetail.name}}</div>
                                <div class="tag">{{darenDetail.tag}}</div>
                            </div>
                            <div class="darenitem">
                                <img src="../images/education/电话.png" >
                                <div class="phone">电话：1575514751</div>
                            </div>
                        </div>
                        <div class="darendetail">
                            {{darenDetail.detail}}
                        </div>
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
</template>
<script lang="ts">
    import {Vue, Component, Watch} from "vue-property-decorator";
    import reviewBox from './allDataShow/reviewBox_before.vue'
    import {Button, Icon, Carousel, CarouselItem} from 'iview';
    import colorful from './allDataShow/colorList'

    import * as api from '../api/education';



    import {imgList,newList,resourceList1,resourceList2} from './allDataShow/education'
    @Component({
        components: {Carousel, CarouselItem, reviewBox, Button}
    })

    export default class education extends Vue {
        year: string = '';
        month: string = '';
        day: string = '';

        showBox: string = 'close';
        imgList:any = imgList;
        newList:any = newList;
        showImg:boolean = false;
        activeImg:any = {
            name:''
        };

        /*freestyle: any = {
            title: {
                text: '特色课程统计',
                textStyle: {
                    color: '#409fff',
                    fontWeight: 'bold',
                    fontSize: 14,
                },
                left: 12,
                top: 16,
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
                left: `44`,
                right: `84`,
                top: '84',
                bottom: '20',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    data: ['美妆', '美发', '舞蹈', '书法', '绘画', '声乐', '钢琴'],
                    name: '课程类型',
                    // nameGap: 5,
                    // boundaryGap: false,
                    nameLocation: 'end',
                    nameTextStyle: {
                        color: `#597eb2`,
                        padding: [0, 0, 0, -8],
                    },
                    splitNumber: 12,
                    minInterval: 1,

                    axisLabel: {
                        fontSize: 12,
                        interval: 0,
                        //rotate:-24,
                        margin:16,

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
                    name: '课程数量/节',
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
                        padding: [0, 0, -6, 14],
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
                    name: '活动/次数',
                    type: 'bar',
                    itemStyle: {
                        barBorderRadius: [2, 2, 0, 0]
                    },
                    barWidth: 20,
                    data: [5, 12, 33, 14, 23, 15, 16,],
                }

            ]
        };*/
        lessonType: any =  {

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
                left: `44`,
                right: `64`,
                top: '44',
                bottom: '20',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    data: ['美妆', '美发', '舞蹈', '书法', '绘画', '声乐', '钢琴'],
                    name: '活动类型',
                    // nameGap: 5,
                    // boundaryGap: false,
                    nameLocation: 'end',
                    nameTextStyle: {
                        color: `#597eb2`,
                        padding: [16, 0, 0, -12],
                    },
                    splitNumber: 12,
                    minInterval: 1,

                    axisLabel: {
                        fontSize: 12,
                        interval: 0,
                        //rotate:-24,
                        margin:16,

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
                    name: '活动次数/次',
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
                        padding: [0, 0, 6, 16],
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
                    name: '活动/次数',
                    type: 'bar',
                    itemStyle: {
                        barBorderRadius: [2, 2, 0, 0]
                    },
                    barWidth: 20,
                    data: [5, 12, 33, 14, 23, 15, 16,],
                }

            ]
        };
        teachResource:any = {
            tooltip: {
                trigger: 'item',
                formatter: '{b}: {c}所 ({d}%)'
            },
            grid: {
                left: `60`,
                right: `60`,
                top: '20',
                bottom: '20',
            },
            legend: {
                data: ['培训', '儿童教育', '体育'],
                top: `center`,
                right: `25%`,
                itemWidth: 12,
                itemHeight: 10,
                itemGap: 10,
                orient:'vertical',
                textStyle: {
                    color: `#fff`,
                    fontSize:12,
                },
            },
            series: [
                {
                    name: '周边机构',
                    type: 'pie',
                    radius: ['35%', '60%'],
                    center: ['25%', '50%'],
                    color: colorful.colorLinear,
                    label: {
                        show: false,
                    },

                    data: [
                        {
                            name:'培训',
                            value:7,
                        },
                        {
                            name:'儿童教育',
                            value:3,
                        },
                        {
                            name:'体育',
                            value:1,
                        },
                    ],
                }
            ]
        };
        teachResource2:any = {
            tooltip: {
                trigger: 'item',
                formatter: '{b}: {c}所 ({d}%)'
            },
            grid: {
                left: `60`,
                right: `60`,
                top: '20',
                bottom: '20',
            },
            legend: {
                data: ['幼儿园', '小学', '初中', '高中', '大学'],
                top: `center`,
                right: `25%`,
                itemWidth: 12,
                itemHeight: 10,
                itemGap: 10,
                orient:'vertical',
                textStyle: {
                    color: `#fff`,
                    fontSize:12,
                },
            },
            series: [
                {
                    name: '培训机构',
                    type: 'pie',
                    radius: ['35%', '60%'],
                    center: ['25%', '50%'],
                    color: colorful.colorLinear,
                    label: {
                        show: false,
                    },

                    data: [
                        {
                            name:'幼儿园',
                            value:1,
                        },
                        {
                            name:'小学',
                            value:1,
                        },
                        {
                            name:'初中',
                            value:3,
                        },
                        {
                            name:'高中',
                            value:2,
                        },
                        {
                            name:'大学',
                            value:3,
                        },
                    ],
                }
            ]
        };
        teachActiveData: any = [
            {
                eventName: '装点最美自己',
                time: '2020-3-10',
                address: '所有居民',
            },
            {
                eventName: '玩转手机应用',
                time: '2020-3-24',
                address: '所有居民',
            }, {
                eventName: '让生活潮起来',
                time: '2020-4-28',
                address: '所有居民',
            },{
                eventName: '做自己情绪的主人——关于情绪管理(讲座)',
                time: '2020-5-12',
                address: '所有居民',
            },
        ];

        classChart: any = {
            title: {
                text: '课程数量统计',
                textStyle: {
                    color: '#fff',
                    fontWeight: 'bold',
                    fontSize: 16,
                },
                left: 'center',
                top: 1,
            },
            textStyle: {
                color: `#999999`,
            },
            tooltip: {
                trigger: 'axis'
            },
            calculable: true,
            grid: {
                left: `24`,
                right: `44`,
                top: '54',
                bottom: '10',
                containLabel: true
            },
            legend: {
                data: ['考研政治', '英语口语', '雅思', '艺术设计'],
                top: `24`,
                right: `10`,
                itemGap: 16,
                textStyle: {
                    color: `#fff`,
                    fontSize: 12,
                },
            },
            color: [
                {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0, color: '#7b86ff' // 0% 处的颜色
                    }, {
                        offset: 1, color: '#524ede' // 100% 处的颜色
                    }],
                    global: false // 缺省为 false
                },
                {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0, color: '#66bfff' // 0% 处的颜色
                    }, {
                        offset: 1, color: '#0055cc' // 100% 处的颜色
                    }],
                    global: false // 缺省为 false
                },
                {
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
                {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0, color: '#ffcd7f' // 0% 处的颜色
                    }, {
                        offset: 1, color: '#ffa137' // 100% 处的颜色
                    }],
                    global: false // 缺省为 false
                },
            ],
            xAxis: [
                {
                    type: 'category',
                    data: colorful.monthList,
                    name: '月份',
                    nameLocation: 'end',
                    nameTextStyle: {
                        color: `#597eb2`,
                        padding: [0, 0, 0, -8],
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
                    name: '数量/节',
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
                        padding: [0, 0, -6, 14],
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
                    name: '美妆',
                    type: 'bar',
                    itemStyle: {
                        barBorderRadius: [2, 2, 0, 0]
                    },
                    barWidth:8,
                    data: [5, 5, 6, 4, 6, 6, 3, 4, 3, 5, 6, 6],
                },
                {
                    name: '健身',
                    type: 'bar',
                    itemStyle: {
                        barBorderRadius: [2, 2, 0, 0]
                    },
                    barWidth:8,
                    data: [ 8, 8, 5, 5, 6, 13, 14, 16, 16, 13, 14, 10],
                },
                {
                    name: '宠物',
                    type: 'bar',
                    itemStyle: {
                        barBorderRadius: [2, 2, 0, 0]
                    },
                    barWidth:8,
                    data: [15, 12, 13, 14, 23, 18, 16, 14, 17, 15, 16, 13],
                },
                {
                    name: '美食',
                    type: 'bar',
                    itemStyle: {
                        barBorderRadius: [2, 2, 0, 0]
                    },
                    barWidth:8,
                    data: [15, 14, 23, 18, 23, 24, 23, 15, 16, 23, 25, 22],
                }

            ]
        };

        darenList:any = [];
        darenDetail:any = {
            name:'',
            tag:'',
            img:'',
            detail:'',
            phone:''
        };
        resourceList1:any = resourceList1;
        resourceList2:any = resourceList2;
        mounted() {
            let myDate: any = new Date();     //获取当前年份(2位)
            this.year = myDate.getFullYear();    //获取完整的年份(4位,1970-????)
            this.month = ((myDate.getMonth() - 0 + 1) > 9 ? (Number(myDate.getMonth()) + 1).toString() : '0' + (Number(myDate.getMonth()) + 1).toString());       //获取当前月份(0-11,0代表1月)
            this.day = myDate.getDate() - 0 > 9 ? myDate.getDate() : '0' + myDate.getDate();

            this.init();
        }

        init() {
            api.getDarenku().then(({data})=>{
                let newArr:any = [];
                data.forEach(item =>{
                    item.img = `${this.$imgBaseUrl()}${item.photoId}`
                    newArr.push(item)
                })
                this.darenList = newArr
            });

        }

        showDaren(item:any){
            this.showBox = 'daren';
            this.darenDetail = item;
        }
        toHome() {
            this.$router.push({name: '未来社区首页'})
        }
        showImgBox(item:any){
            this.showImg = true;
            this.activeImg = item
        }
        closeVideo(){
            this.showBox = '';
            setTimeout(()=>{
                this.showBox = 'close';
            },200)
        }
    }
</script>

<style lang="scss" scoped>
    @import "../styles/variables";

    #education {
        width: 100%;
        height: 100%;
        min-height: 690px;
        position: relative;
        background-image: url("../images/education/教育.jpg");
        background-size: 100% 100%;
        background-repeat: no-repeat;


        .topart {
            position: absolute;
            z-index: 2;
            left: 1.25vw;
            top: 9.26vh;
            height: 43.33vh;
            width: 97.5vw;
            background-image: url("../images/education/框上.png");
            background-size: 100% 100%;
            background-repeat: no-repeat;
            padding: 12px;

        }

        .bottompart {
            position: absolute;
            z-index: 2;
            left: 1.25vw;
            bottom: 2.22vh;
            height: 43.33vh;
            width: 97.5vw;
            display: flex;
            justify-content: space-between;
            .leftbox {
                width: 67.24vw;
                height: 100%;
                background-image: url("../images/education/框左下.png");
                background-size: 100% 100%;
                background-repeat: no-repeat;
                padding: 12px;
            }

            .rightbox {
                width: 29.22vw;
                height: 100%;
                background-image: url("../images/education/框右下.png");
                background-size: 100% 100%;
                background-repeat: no-repeat;
                padding: 12px;
            }
        }



        .resources {
            display: flex;
            padding-bottom: 15px;
            margin-bottom: 15px;
            border-bottom: 1px solid #141f54;
            img {
                width: 140px;
                height: 90px;
                border-radius: 4px;
                margin-right: 30px;
                cursor: pointer;
            }

            .info {
                width: calc(100% - 170px);
                display: flex;
                flex-direction: column;
                justify-content: center;

                .name {
                    color: #ffffff;
                    height: 24px;
                    line-height: 24px;
                    margin-bottom: 6px;
                    width: 100%;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    font-size: 16px;
                    font-weight: bold;
                }

                .msg {
                    font-size: 14px;
                    color: $second-color;
                    height: 20px;
                    line-height: 20px;
                    width: 100%;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    margin-bottom: 6px;

                    .iconfont {
                        color: #3dfff4;
                    }
                }

                .address {
                    font-size: 12px;
                    color: #E5ECFF;
                    height: 20px;
                    line-height: 20px;
                    width: 100%;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
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

            .userList {
                width: 30%;
                padding: 0 10px 0 30px;

                .h3 {
                    color: $label-color;
                    font-weight: bold;
                    padding: 20px 0;
                }

                .userboxes{
                    display: flex;
                    flex-wrap: wrap;
                }
                .user {
                    display: inline-flex;
                    width: 50%;
                    margin-bottom: 20px;
                    cursor: pointer;

                    img {
                        width: 40px;
                        height: 40px;
                        border-radius: 50%;
                        margin-right: 10px;
                    }

                    .info {
                        width: calc(100% - 50px);

                        .username {
                            line-height: 20px;
                            height: 20px;
                            margin-bottom: 6px;
                            overflow: hidden;
                            white-space: nowrap;
                            text-overflow: ellipsis;
                            color: #fff;
                        }

                        .userjob {
                            font-size: 12px;
                            line-height: 14px;
                            height: 14px;
                            overflow: hidden;
                            white-space: nowrap;
                            text-overflow: ellipsis;
                            color: $second-color;
                        }
                    }
                }
            }

            .lessons {
                width: 70%;
                border-right: solid 1px #0E1E52;
            }
        }

        .lessonlist {
            display: flex;
            flex-wrap: wrap;

            .lesson {
                width: 29.33%;
                margin: 0 2%;
                display: flex;
                flex-direction: column;
                padding: 10px 0 0;

                img {
                    width: 100%;
                    height: 9.2vh;
                    min-height: 90px;
                    cursor: pointer;
                }

                .name {
                    padding: 10px 0;
                    text-align: center;
                    width: 100%;
                    line-height: 24px;
                    height: 48px;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    color: #fff;
                }
            }
        }

        .newLesson {
            display: flex;
            flex-wrap: wrap;
            padding: 0 10px;
            .lesson {
                width: 33.33%;
                display: flex;
                padding: 0 10px;
                margin-bottom: 20px;

                .main {
                    display: flex;
                    flex-wrap: wrap;
                    /*width: calc(100% - 46px);*/
                    width: 100%;
                    .title {
                        width: 100%;
                        display: flex;
                        height: 36px;
                        align-items: center;
                        margin-bottom: 12px;

                        img {
                            width: 32px;
                            height: 32px;
                            border-radius: 50%;
                        }

                        .namex {
                            color: #fff;
                            padding: 0 10px;
                        }

                        .job {
                            color: $second-color;
                            font-size: 12px;
                        }
                    }

                    img {
                        width: 110px;
                        height: 76px;
                        margin-right: 10px;
                        cursor: pointer;
                    }

                    .info {
                        width: calc(100% - 120px);
                        height: 76px;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                    }

                    .name {
                        width: 100%;
                        display: flex;
                        margin-bottom: 4px;
                        height: 24px;
                        align-items: center;
                        justify-content: space-between;

                        .left {
                            overflow: hidden;
                            white-space: nowrap;
                            text-overflow: ellipsis;
                            font-weight: bold;
                            color: $label-color;
                        }

                        .right {
                            padding: 0 6px;
                            white-space: nowrap;

                            i {
                                font-size: 20px;
                                font-weight: bold;
                                color: #fff;
                            }

                            em {
                                color: $unit-color;
                                font-size: 12px;
                                padding-left: 4px;
                            }
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
                        margin-bottom: 2px;
                    }
                }

            }
        }

        .classChart {
            position: absolute;
            z-index: 2;
            left: 21.5vw;
            top: 16.44vh;
            width: 900px;
            height: 380px;
            background-image: url("../images/education/三级弹窗1（课程数量）.png");
            background-repeat: no-repeat;
            background-size: 100% 100%;
            padding: 30px;

        }
        .teachActive{
            position: absolute;
            z-index: 2;
            left: 28.23vw;
            bottom: 10vh;
            width: 42vw;
            height: 28vw;
            background-image: url("../images/education/三级弹窗2（列表）.png");
            background-repeat: no-repeat;
            background-size: 100% 100%;
            padding: 2vw 2.5vw;
        }
        .resourcebox{
            position: absolute;
            z-index: 2;
            right: 7.66vw;
            top: 28.7vh;
            width: 650px;
            height: 600px;
            background-image: url("../images/education/周边机构资源弹窗.png");
            background-repeat: no-repeat;
            background-size: 100% 100%;
            padding: 30px;
        }
        .darenbox{
            position: absolute;
            z-index: 2;
            right: 16.56vw;
            top: 17.78vh;
            width: 460px;
            min-height: 230px;
            background-image: url("../images/education/三级弹窗3（达人）.png");
            background-repeat: no-repeat;
            background-size: 100% 100%;
            padding: 30px 50px 40px;
            .dareninfo{
                display: flex;
                align-items: center;
                margin-bottom: 16px;
                .darenitem{
                    width: 50%;
                    overflow: hidden;
                    color: #fff;

                    img{
                        width:28px;
                        height: 28px;
                        float: left;
                    }
                    .phone{
                        height: 28px;
                        line-height: 28px;
                    }
                    &.left{
                        img{
                            width:40px;
                            height: 40px;
                            border-radius: 50%;
                            margin-right: 10px;
                            float: left;
                        }
                        .name{
                            font-weight: bold;
                            color: #fff;
                            height: 20px;
                            line-height: 20px;
                            width: calc(100% - 50px);
                            float: left;
                        }
                        .tag{
                            font-size: 12px;
                            color: $second-color;
                            line-height: 20px;
                            height: 20px;
                            width: calc(100% - 50px);
                            float: left;
                        }
                    }
                }
            }
            .darendetail{
                color:#fff
            }
        }
    }
</style>
<style lang="scss">
    #education {

    }
</style>
