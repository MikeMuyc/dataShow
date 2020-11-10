<template>
    <div id="serve" ref="viewbox">
        <suc-map
                style="width: 100%;height: 100%;position: relative"

                ref="mapObject"
                :options="olMap.map"
                v-bind.sync="olMap.map.view"
                @singleclick="pointback"
                @singleclick-blank="backFnc"
                @pointermove="showHover"
                @pointermove-blank="closeHover"
        >
            <ol-layer v-for="item in olMap.baseLayer" :options="item"></ol-layer>
            <ol-markers :z-index="3" v-if="markers.length > 0">
                <ol-marker v-for="item in markers" :options="item" @pointermove="showHover"></ol-marker>
                <ol-marker :options="squareMarker"></ol-marker>
            </ol-markers>


            <ol-heat-map v-if="heatConfig" :layerConfig="heatConfig.layerConfig" :points="heatConfig.points" projection="pixel" :z-index="2"></ol-heat-map>
            <ol-overlay v-if="overlay.show" :position="overlay.coord" projection="pixel" category="clickLabel">
                <div class="overlayBox">
                    {{overlay.name}}
                </div>
            </ol-overlay>
        </suc-map>
        <div class="back_home" @click="toHome"></div>
        <div class="logoTitle">服务场景</div>

        <div class="date_show">
            <em class="date_num">{{year}}</em>
            <i>年</i>
            <em class="date_num">{{month}}</em>
            <i>月</i>
            <em class="date_num">{{day}}</em>
            <i>日</i>
        </div>
        <div class="centerInfo">
            <div class="infoItem">
                <div class="label">周界球警报摄像机</div>
                <div class="num">15<em>个</em></div>
            </div>
            <div class="infoItem">
                <div class="label">智能设备</div>
                <div class="num">10 <em>个</em></div>
            </div>
            <div class="infoItem">
                <div class="label">今日告警</div>
                <div class="num">2 <em>个</em></div>
            </div>
            <div class="infoItem">
                <div class="label">消防设备</div>
                <div class="num">20 <em>个</em></div>
            </div>
        </div>
        <!--<div class="squarePosition" @click="showBox = 'imgLarge'"></div>-->

        <div class="businessbox">
            <div class="boxTitle">周边商家数量</div>
            <div class="activeinfo" style="padding: 10px 24px 0">
                <div class="infotext">
                    <i class="name">社区商家数量</i>
                    <em class="num ">
                        {{shopNum}}
                    </em>
                    <i class="unit">家</i>
                </div>
                <div class="right more" @click="showBox = 'storeChange'">变化趋势&nbsp;&nbsp;&gt;</div>
            </div>
            <div class="secondTitle">品牌商家</div>
            <div class="barnd" ref="brand">
                <div class="list" :style="`marginLeft:${marginL}px`">
                    <div class="item" v-for="item in brandlist">
                        <img :src="item.img" alt="">
                        <div class="name">{{item.name}}</div>
                    </div>

                </div>

            </div>
            <div class="secondTitle">服务业态占比</div>
            <v-chart
                    :options="serveChart"
                    :autoResize="true"
                    ref="healthDoc"
                    style="width:100%;height: calc(100% - 378px);position: relative;"
            />
            <div class="secondTitle">星空广场</div>
            <div class="square" @click="showBox = 'imgLarge'">
                <el-carousel class="carousel carousel-small" :interval="3000">
                    <el-carousel-item v-for="item in 1" :key="item">
                        <img src="../images/serve/广场平面图.png" style="width: 140px;height:80px;object-fit: cover;">
                    </el-carousel-item>
                </el-carousel>
                <div class="info">
                    <div class="label">特色场景:</div>
                    <div class="item" v-for="item in teselist">{{item.name}}</div>

                </div>
            </div>
        </div>

        <div class="guanjia">
            <div class="boxTitle">服务管家</div>
            <div class="normalcalSpl">
                <div class="half" style="border-right: #66a6ff 1px solid">
                    <div class="center">
                        <img draggable="false" :src="repair">
                        <div class="right">
                            <div class="em">{{guanjiaCalc[0].name}}</div>
                            <div class="epc">{{guanjiaCalc[0].count}}<i>次</i></div>
                        </div>
                    </div>
                </div>
                <div class="half">
                    <div class="center">
                        <img draggable="false" :src="wash">
                        <div class="right">
                            <div class="em">{{guanjiaCalc[1].name}}</div>
                            <div class="epc">{{guanjiaCalc[1].count}}<i>次</i></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="secondTitle" style="margin-top: 20px">本年服务情况</div>
            <v-chart
                    :options="guanjiaChart"
                    :autoResize="true"
                    ref="healthDoc"
                    style="width:100%;height:calc(100% - 128px);position: relative;"
            />
        </div>

        <div class="equipment">
            <div class="boxTitle">设备检测</div>
            <div class="secondTitle">
                今日安防感知
                <div class="right more" @click="showBox = 'safeAlarm'">月统计&nbsp;&nbsp;&gt;</div>
            </div>
            <div class="colist" style="">
                <div class="splitItem splitItemx">
                    <div class="label">过车感知</div>
                    <div class="text">
                        <img src="../images/serve/过车.png" style="margin-right: 4px">
                        <em class="more" @click="showBox = 'guocheData'">
                        185
                        <i class="iconfont iconzhijiao-triangle"></i>
                    </em>
                        <i>个</i></div>
                </div>

                <div class="splitItem splitItemx">
                    <div class="label">门禁记录</div>
                    <div class="text">
                        <img src="../images/serve/门禁.png" style="margin-right: 4px">
                        <em class="more" @click="showBox = 'door'">
                            {{doorcount}}
                            <i class="iconfont iconzhijiao-triangle"></i>
                        </em>
                        <i>个</i>
                    </div>
                </div>
            </div>
            <div class="colist" style="">
                <div class="splitItem splitItemx">
                    <div class="label">人员分析</div>
                    <div class="text">
                        <img src="../images/serve/人员.png" style="margin-right: 4px">
                        <em class="more" @click="showBox = 'renyuandata'">
                        12
                        <i class="iconfont iconzhijiao-triangle"></i>
                    </em>
                        <i>个</i></div>
                </div>
                <div class="splitItem splitItemx">
                    <div class="label">人型轨迹</div>
                    <div class="text">
                        <img src="../images/serve/轨迹.png" style="margin-right: 4px">
                        <em class="more" >
                            {{doorcount}}
                            <i class="iconfont iconzhijiao-triangle"></i>
                        </em>
                        <i>个</i>
                    </div>
                </div>
            </div>
            <v-chart
                    :options="fireAlarm_date"
                    :autoResize="true"
                    ref="healthDoc"
                    style="width:100%;height:calc(100% - 556px);position: relative"
            />
            <div class="secondTitle" style="margin-top: 0">
                今日消防警报
                <div class="right more" @click="showBox = 'fireAlarm'">月统计&nbsp;&nbsp;&gt;</div>
            </div>
            <div class="colist" style="padding-bottom: 10px">
                <div class="splitItem">
                    <div class="label">消防火警</div>
                    <div class="text">5<i>个</i></div>
                </div>
                <div class="splitItem">
                    <div class="label">设备故障</div>
                    <div class="text">3<i>个</i></div>
                </div>
                <div class="splitItem">
                    <div class="label">设备离线</div>
                    <div class="text">12<i>个</i></div>
                </div>
            </div>
            <v-chart
                    :options="alarmChart"
                    :autoResize="true"
                    ref="healthDoc"
                    style="width:100%;height: 120px;position: relative;"
            />
            <div class="activeinfo" style="padding: 16px 24px">
                <div class="infotext">
                    <i class="name">当前未处理告警</i>
                    <em class="num ">4</em>
                    <i class="unit">个</i>
                </div>
            </div>
            <cornerBox>
                <div class="colist" style="padding: 0">
                    <div class="splitItem">
                        <div class="label">消防火警</div>
                        <div class="text red">2<i>个</i></div>
                    </div>
                    <div class="splitItem">
                        <div class="label">设备故障</div>
                        <div class="text">0<i>个</i></div>
                    </div>
                    <div class="splitItem">
                        <div class="label">设备离线</div>
                        <div class="text">1<i>次</i></div>
                    </div>
                </div>
            </cornerBox>
        </div>

        <transition name="fade">
            <div class="messageHover" v-show="showBox !== 'close'">
                <div class="outsideClose" @click="closeVideo"></div>
                <transition name="toggle">
                    <div class="storeChange" v-show="showBox === 'storeChange'">
                        <i class="iconfont iconcha-copy close" @click="closeVideo"></i>
                        <v-chart
                                :options="storeChange"
                                :autoResize="true"
                                ref="carNum"
                                style="width: 100%;height: 100%;position: relative;"
                        />
                    </div>
                </transition>

                <transition name="toggle">
                    <div class="safeAlarm" v-show="showBox === 'safeAlarm'">
                        <i class="iconfont iconcha-copy close" @click="closeVideo"></i>
                        <v-chart
                                :options="safeAlarm"
                                :autoResize="true"
                                ref="carNum"
                                style="width: 100%;height: 100%;position: relative;"
                        />
                    </div>
                </transition>
                <transition name="toggle">
                    <div class="fireAlarm" v-show="showBox === 'fireAlarm'">
                        <i class="iconfont iconcha-copy close" @click="closeVideo"></i>
                        <v-chart
                                :options="fireAlarm"
                                :autoResize="true"
                                ref="carNum"
                                style="width: 100%;height: 100%;position: relative;"
                        />
                    </div>
                </transition>
                <transition name="toggle">
                    <div class="imgLarge" v-show="showBox === 'imgLarge'">
                        <i class="iconfont iconcha-copy close" @click="closeVideo"></i>
                        <div class="title">星空广场平面图</div>
                        <el-carousel class="carousel" :interval="3000">
                            <el-carousel-item v-for="item in 1" :key="item">
                                <img src="../images/serve/广场平面图.png" style="width: 100%;height:100%;object-fit: cover;">
                            </el-carousel-item>
                        </el-carousel>
                    </div>
                </transition>
                <transition name="toggle">
                    <div class="video" v-show="showBox === 'video'">
                        <i class="iconfont iconcha-copy close" @click="closeVideo"></i>

                    </div>
                </transition>
                <transition name="toggle">
                    <div class="doorbox" v-show="showBox === 'door'">
                        <i class="iconfont iconcha-copy close" @click="closeVideo"></i>
                        <div class="title">门禁记录</div>
                        <el-table
                                :data="doorrecord"
                                style="width: 100%;height:calc(100% - 42px);">
                            <el-table-column
                                    prop="deviceCode"
                                    label="设备编号"
                                    min-width="100px"
                                    show-overflow-tooltip
                            >
                            </el-table-column>
                            <el-table-column
                                    prop="name"
                                    label="名称"
                                    min-width="120px"
                                    show-overflow-tooltip
                            >
                            </el-table-column>

                            <el-table-column
                                    prop="time"
                                    label="时间"
                                    min-width="160"
                            >
                            </el-table-column>

                        </el-table>
                    </div>
                </transition>

                <transition name="toggle">
                    <div class="doorbox guocheData" v-show="showBox === 'guocheData'">
                        <i class="iconfont iconcha-copy close" @click="closeVideo"></i>
                        <div class="title">过车感应</div>
                        <el-table
                                :data="guocheData"
                                style="width: 100%;height:calc(100% - 46px)">
                            <el-table-column
                                    prop="time"
                                    label="时间"
                                    width="160px"
                            >
                            </el-table-column>
                            <el-table-column
                                    prop="karName"
                                    label="卡口"
                                    min-width="140px"
                                    show-overflow-tooltip
                            >
                            </el-table-column>

                            <el-table-column
                                    prop="carNum"
                                    label="车牌"
                                    min-width="160"
                                    show-overflow-tooltip
                            >
                            </el-table-column>
                        </el-table>
                    </div>
                </transition>
                <transition name="toggle">
                    <div class="doorbox renyuandata" v-show="showBox === 'renyuandata'">
                        <i class="iconfont iconcha-copy close" @click="closeVideo"></i>
                        <div class="title">人员分析</div>
                        <el-table
                                :data="renyuandata"
                                style="width: 100%;height:calc(100% - 46px);">

                            <el-table-column
                                    prop="time"
                                    label="时间"
                                    width="160"
                            >
                            </el-table-column>
                            <el-table-column
                                    prop="name"
                                    label="姓名"
                                    min-width="120px"
                                    show-overflow-tooltip
                            >
                            </el-table-column>

                            <el-table-column
                                    prop="deviceCode"
                                    label="设备编号"
                                    min-width="120px"
                                    show-overflow-tooltip
                            >
                            </el-table-column>

                            <!--<el-table-column
                                    label="人脸拍摄"
                                    min-width="120px"
                                    align="center"
                            >
                                <template slot-scope="{row,$index}">
                                    <img v-if="row.img" :src="row.img" style="width: 60px;height: 60px;cursor: pointer"
                                         @click="showImgBox(row)">
                                    <div v-else>无</div>
                                </template>
                            </el-table-column>-->

                        </el-table>
                    </div>
                </transition>
            </div>
        </transition>

        <!--<div class="setPoint" :style="positionSet(item)" :title="item.name" v-for="(item,index) in pointList"
             @click="startM(item.id)"></div>-->
        <!--<div class="setPoint p1" title="摄像头" @click="startM(device[2])"></div>-->
        <!--<div class="setPoint" title="摄像头" @click="startM(device[1])"></div>-->
        <!--<div class="setPoint p3" title="摄像头" @click="startM(device[3])"></div>-->

        <!--<div class="shops" :style="positionSet(item)" :title="item.name" v-for="item in brandpointlist">
            <img :src="item.img" @click.stop="brandpoint = item.name">
        </div>
        <div class="shopshoverbox" :style="hoverSet(item)" v-for="item in brandpointlist"
             v-show="brandpoint === item.name">
            <i class="iconfont iconcha-copy close" @click="closeShopHover"></i>
            <div class="title">{{item.name}}</div>
            <div class="flexbox">
                <img :src="item.img" alt="">
                <div class="info">
                    <div class="line">经营类型：xx</div>
                    <div class="line">营业时间：xx:00&#45;&#45;xx:00</div>
                    <div class="line">店铺地址：xx区xx路星空广场xx幢A4层</div>
                </div>
            </div>
        </div>-->
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
        <!--<div class="logo_bottom"></div>-->
    </div>
</template>
<script lang="ts">
    import {Vue, Component} from "vue-property-decorator";
    import {Button} from 'iview'
    import colorful from './allDataShow/colorList'
    import cornerBox from './allDataShow/cornerBox.vue';
    import reviewBox from './allDataShow/reviewBox_before.vue'


    const repair = require("@datashow/images/serve/报修.png")

    const wash = require("@datashow/images/serve/保洁.png")

    import * as api from '../api/serve';
    import {point, mapTV, mapSquare, heatConfig} from './allDataShow/TV';

    const baseBg = require("../images/serve/服务.jpg");

    const mapConfig = {
        map: {
            id: "photoMap",
            view: {
                center: {
                    coord: [960, 540]
                },
                zoom: 3,
                maxZoom: 3,
                minZoom: 3,
                projection: {
                    code: "xkcd-image",
                    units: "pixels",
                    extent: [0, 0, 1920, 1080]
                },
                extent:[960, 540, 960, 540],
            },
            controls: [],
            events: ["singleclick","pointermove"]
        },
        baseLayer: [
            {
                name: "static",
                source: {
                    type: "ImageStatic",
                    url: baseBg,
                    imageExtent: [0, 0, 1920, 1080]
                },
                onLayerCreated: function () {
                    console.log(`finished`);
                },
                visible: true
            },
            {
                name: "heat",
                type: "Heatmap",
                source: {
                    type: "KML",
                    url: heatConfig,
                },
                blur: 15,
                radius: 5,
                onLayerCreated(layer) {
                    if (layer && layer.oLayer) {
                        layer.oLayer.getSource().on('addfeature', function (event) {
                            const name = event.feature.get('name');
                            const magnitude = parseFloat(name.substr(2));
                            event.feature.set('weight', magnitude - 5);
                        });
                    }
                },
                zIndex: 2
            }
        ],
    }
    @Component({
        components: {
            Button,
            cornerBox,
            reviewBox,
        }
    })

    export default class serve extends Vue {
        olMap: any = this.$getMapConfig(mapConfig);
        markers: any = mapTV;
        squareMarker: any = mapSquare;
        overlay:any = {
            show:false,
            coord:[],
            name:'',
        };


        heatConfig: any = heatConfig;
        year: string = '';
        month: string = '';
        day: string = '';
        showImg: boolean = false;
        activeImg: any = {
            name: '',
        };

        repair: any = repair;
        wash: any = wash;
        showBox: string = 'close';
        pointList: any = point;
        brandlist: any = [];
        brandpointlist: any = [];
        brandpoint: string = '';
        teselist: any = [
            {
                name: '城市氧吧',

            },
            {
                name: '童趣广场',

            },
            {
                name: '露天影院',

            },
            {
                name: '雕塑花园',

            },
            {
                name: '聚会BBQ',

            },

        ]
        serveChart: any = null;
        alarmChart: any = {
            series: [
                {
                    type: 'gauge',
                    radius: `50%`,
                    data: [{value: 85, name: '消防警报处理率'}],
                    detail: {
                        show: false
                    },
                    title: {
                        show: false
                    },
                    pointer: {
                        width: 0,
                        show: false,
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
                            color: '#45aeff',
                        }
                    },
                    splitNumber: 4,
                    splitLine: {
                        length: 10,
                        lineStyle: {
                            color: '#45aeff',
                        }
                    },
                    axisLabel: {
                        show: false,
                    },
                },
                {
                    type: 'gauge',
                    radius: `75%`,
                    min: 0,
                    max: 100,
                    data: [{value: 85, name: '消防警报处理率'}],

                    detail: {
                        color: '#ffffff',
                        formatter: '{value}%',
                        fontSize: 16,
                        offsetCenter: [0, 0],
                    },
                    title: {
                        color: '#fff',
                        fontSize: 14,
                        offsetCenter: [0, `110%`],
                    },
                    pointer: {
                        width: 0,
                        show: false,
                    },
                    itemStyle: {
                        color: '#00efff'
                    },

                    axisLine: {            // 坐标轴线
                        lineStyle: {       // 属性lineStyle控制线条样式
                            color: [[0.8, '#45aeff'], [1, `#142355`]],
                            width: 10,
                        }
                    },
                    axisLabel: {
                        show: false,
                    },
                    axisTick: {
                        show: false,

                    },
                    splitLine: {
                        show: false,
                    },
                },
                {
                    type: 'gauge',
                    radius: `85%`,
                    data: [{value: 85, name: '消防警报处理率'}],
                    detail: {
                        show: false
                    },
                    title: {
                        show: false
                    },
                    pointer: {
                        width: 0,
                        show: false,
                    },

                    axisLine: {
                        lineStyle: {
                            color: [[1, '#45aeff']],
                            width: 1,
                        }
                    },
                    axisTick: {
                        show: false,

                    },
                    splitLine: {
                        show: false,
                    },
                    axisLabel: {
                        show: false,
                    },
                },
            ]
        };
        guanjiaChart: any = null;
        errorChart: any = {
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b}: {c}个 ({d}%)'
            },

            series: [
                {
                    name: '故障情况',
                    type: 'pie',
                    radius: ['0%', '70%'],
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
                            value: 105,
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
                            value: 170,
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


        storeChange: any = {
            title: {
                text: '周边商家数量变化趋势',
                textStyle: {
                    color: '#e5eeff',
                    fontWeight: 'bold',
                    fontSize: 16,
                },
                left: `center`,
                top: 16,
            },
            textStyle: {
                color: `#999999`,
            },
            tooltip: {
                trigger: 'axis'
            },
            color: [`#4cfff0`],
            calculable: true,
            grid: {
                left: `24`,
                right: `36`,
                top: '60',
                bottom: '20',
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
                    name: '数量/家',
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
                    name: '商家数量',
                    type: 'line',
                    data: [56, 63, 63, 69, 62, 57, 56, 54, 49, 56, 69, 71],
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
                                    offset: 0, color: '#4cfff0'
                                }, {
                                    offset: 1, color: 'rgba(153,255,246,0.26)'
                                }
                            ],
                            global: false
                        }
                    },
                }

            ]
        };

        safeAlarm: any = {
            title: {
                text: '安防感知月统计',
                textStyle: {
                    color: '#e5eeff',
                    fontWeight: 'bold',
                    fontSize: 16,
                },
                left: `center`,
                top: 2,
            },
            textStyle: {
                color: `#999999`,
            },
            tooltip: {
                trigger: 'axis',

            },
            color: [`#01e9fd`, `#0097fe`, `#f9c475`, `#fd4b76`],
            calculable: true,

            grid: {
                left: `14`,
                right: `26`,
                top: '50',
                bottom: '10',
                containLabel: true
            },
            legend: {
                // data: ['过车感知', '人员分析', '门禁记录', '事件感知'],
                data: ['过车感知', '人员分析', '门禁记录'],
                top: `32`,
                right: `10`,
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
                    name: '数量/个',
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
                    name: '过车感知',
                    type: 'line',
                    smooth: true,
                    data: [296, 273, 253, 261, 252, 257, 260, 261, 265, 266, 259, 261, 263, 271, 275, 277, 286, 281, 293, 290, 312, 322, 307, 321, 333, 366, 353, 357, 350, 351, 358],
                },
                {
                    name: '人员分析',
                    type: 'line',
                    smooth: true,
                    data: [3542, 3583, 3453, 3484, 3412, 3497, 3526, 3541, 3566, 3521, 3483, 3451, 3431, 3410, 3421, 3473, 3486, 3451, 3485, 3493, 3513, 3543, 3557, 3585, 3595, 3613, 3632, 3617, 3603, 3617, 3628],
                },
                {
                    name: '门禁记录',
                    type: 'line',
                    smooth: true,
                    data: [1633, 1585, 1611, 1647, 1685, 1707, 1688, 1711, 1745, 1732, 1723, 1743, 1755, 1765, 1782, 1731, 1703, 1647, 1643, 1677, 1628, 1611, 1587, 1586, 1556, 1596, 1611, 1623, 1590, 1623, 1633],
                },
                // {
                //     name: '事件感知',
                //     type: 'line',
                //     smooth:true,
                //     data: [43, 55, 55, 45, 43, 33, 47, 33, 45, 41, 47, 43, 47, 38, 35, 41, 47, 36, 41, 45, 43, 53, 42, 52, 57, 46, 73, 61, 65, 63, 56],
                // }

            ]
        };
        fireAlarm: any = {
            title: {
                text: '消防警报月统计',
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
            color: [`#fd4b76`, `#f9c475`, `#0097fe`],
            calculable: true,
            grid: {
                left: `14`,
                right: `26`,
                top: '60',
                bottom: '10',
                containLabel: true
            },
            legend: {
                data: ['消防火警', '设备故障', '设备离线'],
                top: `32`,
                right: `10`,
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
                    name: '数量/个',
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
                    name: '消防火警',
                    type: 'line',
                    smooth: true,
                    data: [5, 5, 4, 6, 4, 5, 2, 2, 2, 3, 3, 2, 3, 2, 1, 2, 2, 2, 0, 1, 1, 0, 2, 0, 0, 0, 3, 3, 2, 3, 1],
                },
                {
                    name: '设备故障',
                    type: 'line',
                    smooth: true,
                    data: [11, 12, 8, 8, 7, 8, 7, 8, 6, 6, 4, 2, 3, 2, 1, 2, 1, 3, 3, 5, 2, 3, 5, 5, 4, 3, 1, 0, 0, 3, 4, 2],
                },
                {
                    name: '设备离线',
                    type: 'line',
                    smooth: true,
                    data: [13, 15, 11, 17, 15, 17, 15, 12, 14, 13, 13, 13, 15, 15, 15, 13, 13, 17, 13, 14, 12, 10, 13, 12, 11, 9, 10, 8, 7, 7, 9],
                },
            ]
        };
        fireAlarm_date: any = {
            title: {
                text: '今日感知趋势',
                textStyle: {
                    color: '#409fff',
                    fontWeight: 'bold',
                    fontSize: 14,
                },
                left: `10`,
                top: `2`,
            },
            textStyle: {
                color: `#999999`,
            },
            tooltip: {
                trigger: 'axis'
            },
            color: [`#01e9fd`, `#0097fe`, `#f9c475`, `#fd4b76`],
            calculable: true,
            grid: {
                left: `20`,
                right: `26`,
                top: '60',
                bottom: '60',
                containLabel: true
            },
            legend: {
                data: ['过车感知', '人员分析', '门禁记录'],
                bottom: `22`,
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
            },
            xAxis: [
                {
                    type: 'category',
                    data: colorful.hourList,
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
                    name: '数量/个',
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
                    name: '过车感知',
                    type: 'line',
                    smooth: true,
                    data: [13, 17, 15, 21, 22, 25, 22, 21, 20, 23, 19, 21, 25, 30, 32, 35, 32, 32, 33, 34, 32, 27, 30, 31, 32, 31, 28],
                },
                {
                    name: '人员分析',
                    type: 'line',
                    smooth: true,
                    data: [53, 52, 52, 51, 55, 57, 63, 62, 63, 63, 64, 68, 63, 58, 56, 54, 53, 51, 48, 43, 45, 41, 47, 49, 52, 48],
                },
                {
                    name: '门禁记录',
                    type: 'line',
                    smooth: true,
                    data: [43, 45, 41, 47, 43, 41, 38, 41, 42, 40, 38, 34, 35, 35, 34, 37, 38, 41, 42, 47, 48, 45, 49, 51, 50,],
                },
                // {
                //     name: '事件感知',
                //     type: 'line',
                //     data: [4, 5, 5, 4, 7, 3, 7, 3, 8, 11, 4, 3, 7, 8, 8, 12, 23, 35, 33, 11, 15, 13, 15, 11],
                // }
            ]
        };
        marginL: number = 0;
        brandWidth: number = 0;
        interval: any = null;


        test_deviceId: any = ['33010000001321000003', '33010000001321000004', '33010000001321000005', '33010000001321000006'];

        shopNum: number = 0;
        guanjiaCalc: any = [
            {
                "id": null,
                "name": "维修",
                "keyName": null,
                "count": 0
            },
            {
                "id": null,
                "name": "保洁",
                "keyName": null,
                "count": 0
            }
        ];
        logoList: any = [];
        doorcount: number = 0;
        doorrecord: any = [];
        guocheData: any = [
            {
                time: '2020-5-24 12:12:45',
                karName: '瓜山北苑南门',
                carNum: '浙AD5841',
            },
            {
                time: '2020-5-24 12:32:41',
                karName: '瓜山南苑西门',
                carNum: '浙A35451',
            },
            {
                time: '2020-5-24 18:12:45',
                karName: '瓜山新苑东门',
                carNum: '浙BD5311',
            },
            {
                time: '2020-5-25 10:11:15',
                karName: '瓜山北苑南门',
                carNum: '浙AD5841',
            },
            {
                time: '2020-5-25 13:14:45',
                karName: '瓜山北苑南门',
                carNum: '浙A8941',
            },
            {
                time: '2020-5-25 17:12:45',
                karName: '瓜山北苑南门',
                carNum: '浙A55841',
            },
        ];
        renyuandata: any = [
            {
                time: '2020-5-25 10:14:15',
                name: '张*问',
                deviceCode: '1',
                img: '',
            },
            {
                time: '2020-5-25 11:14:15',
                name: '李*丽',
                deviceCode: '1',
                img: '',
            },
            {
                time: '2020-5-25 14:11:15',
                name: '吴*',
                deviceCode: '3',
                img: '',
            },
            {
                time: '2020-5-25 17:24:25',
                name: '张*',
                deviceCode: '3',
                img: '',
            },
            {
                time: '2020-5-25 10:14:15',
                name: '王*至',
                deviceCode: '2',
                img: '',
            },

        ];

        mounted() {
            let myDate: any = new Date();     //获取当前年份(2位)
            this.year = myDate.getFullYear();    //获取完整的年份(4位,1970-????)
            this.month = ((myDate.getMonth() - 0 + 1) > 9 ? (Number(myDate.getMonth()) + 1).toString() : '0' + (Number(myDate.getMonth()) + 1).toString());       //获取当前月份(0-11,0代表1月)
            this.day = myDate.getDate() - 0 > 9 ? myDate.getDate() : '0' + myDate.getDate();

            this.$nextTick(() => {
                let brand: any = this.$refs.brand;
                if (brand.clientWidth > this.brandlist.length * 80) {
                    this.interval = setInterval(() => {
                        if (brand.clientWidth > this.brandlist.length * 80 + this.marginL) {
                            this.marginL = 0;
                        } else {
                            this.marginL -= 80 * 3;
                        }
                    }, 3000)
                }

            })


            this.init();
        }

        init() {
            api.getShopNum().then(({data}) => {
                this.shopNum = data.count
            });
            api.getguanjiaCalc().then(({data}) => {
                this.guanjiaCalc = data
            });
            api.getguanjiaEchart().then(({data}) => {
                this.guanjiaChart = {
                    textStyle: {
                        color: `#999999`,
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    color: ['#01e9fd', '#fdc337'],
                    calculable: true,
                    legend: {
                        data: ['维修次数', '保洁次数'],
                        top: `6`,
                        right: `10`,
                        textStyle: {
                            color: `#fff`,
                        },
                    },
                    grid: {
                        left: `24`,
                        right: `24`,
                        top: '36',
                        bottom: '20',
                        containLabel: true
                    },
                    xAxis: [
                        {
                            type: 'category',
                            data: this.$utils.getEchartxAxis(data[0]),
                            name: '',
                            // nameGap: 5,
                            boundaryGap: false,
                            nameLocation: 'end',

                            nameTextStyle: {
                                color: `#597eb2`,
                                // padding: [10, -10, 0, 10],
                            },

                            axisLabel: {
                                fontSize: 10,
                                rotate: -15,
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
                                padding: [0, 0, 0, 10],
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
                            name: '维修次数',
                            type: 'line',
                            smooth: true,
                            data: this.$utils.getEchartData(data[0]),
                        },
                        {
                            name: '保洁次数',
                            type: 'line',
                            smooth: true,
                            data: this.$utils.getEchartData(data[1]),
                        },
                    ]
                }
            });

            api.getLogo().then(({data}) => {
                let newArr: any = [];
                data.forEach(item => {
                    item.img = `${this.$imgBaseUrl()}${item.logo_id}`
                    newArr.push(item)
                })
                this.brandlist = newArr;
                this.brandpointlist = [
                    newArr[0],
                    newArr[1],
                ];
                this.brandpointlist[0].x = '26.25%';
                this.brandpointlist[0].y = '43.85%';
                this.brandpointlist[1].x = '56%';
                this.brandpointlist[1].y = '86.85%';
            });

            api.getdoor().then(({data}) => {
                this.$utils.numberGrow(this, `doorcount`, data.count)
            });
            api.getdoorList().then(({data}) => {
                let newArr: any = [];
                data.content.forEach(item => {
                    item.img = `${this.$imgBaseUrl()}${item.photoId}`
                    if (item.name.length === 2) {
                        item.name = item.name.substr(0, 1) + '*';
                    } else if (item.name.length > 2) {
                        let num = '';
                        let len = item.name.length - 2;
                        while (len) {
                            num += '*';
                            len--;
                        }
                        item.name = item.name.substr(0, 1) + num + item.name.substr(-1, 1);
                    }
                    newArr.push(item)
                })
                this.doorrecord = data.content
            });
            api.getShopType().then(({data}) => {
                this.serveChart = {
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
                    color: colorful.colorLinear,
                    series: [
                        {
                            name: '服务业态占比',
                            type: 'pie',
                            radius: ['35%', '60%'],
                            center: ['50%', '50%'],

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
                /*this.serveChart.series[0].data = data.map((item) => {
                    return {
                        value: item.count,
                        name: item.name
                    }
                });*/
            });


            /*api.getheatConfig().then(({data}) => {
                this.olMap.baseLayer[1].source.url = {
                        "layerConfig": {
                            "blur": 15,
                            "radius": 5
                        },
                        "points": data
                    };
                this.heatConfig = {
                    "layerConfig": {
                        "blur": 15,
                        "radius": 5
                    },
                    "points": data
                }
            });*/
        }

        beforeDestroy() {
            clearInterval(this.interval)
            this.interval = null;
        }

        toHome() {
            this.$router.push({name: '未来社区首页'})
        }

        showImgBox(item: any) {
            this.showImg = true;
            this.activeImg = item
        }

        startM(id: string) {
            this.showBox = 'video';
            let video: any = this.$refs.video;
            setTimeout(() => {
                video.playVideo(id);
            }, 1000)

        }

        closeShopHover() {
            if (this.brandpoint) {
                this.brandpoint = ''
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

        console1(e) {
            let viewbox: any = this.$refs.viewbox;
            let x: any = (e.clientX / viewbox.clientWidth * 100).toFixed(2);
            let y: any = (e.clientY / viewbox.clientHeight * 100).toFixed(2);
            console.log(`x:'${x}%',y:'${y}%'`);
            this.closeShopHover();
        }

        positionSet(item: any) {
            return `left:${item.x};top:${item.y}`;
        }

        hoverSet(item: any) {
            if (item.x) {
                let maxw = document.body.clientWidth;
                let maxh = document.body.clientHeight;
                let vw = maxw / 100;
                let vh = maxh / 100;
                let boxw = 460, boxh = 220;
                let itemX = Number(item.x.replace(`%`, ``));
                let itemY = Number(item.y.replace(`%`, ``));
                let px = vw * itemX + 15 - boxw / 2;
                let py = vh * itemY - boxh - 10;
                if (px < 30) {
                    px = 30
                } else if (px + boxw > maxw - 30) {
                    px = maxw - 30 - boxw;
                }
                if (py < 30) {
                    py = 30
                } else if (py + boxh > maxh - 30) {
                    py = maxh - 30 - boxh;
                }

                return `left:${px}px;top:${py}px`;
            }
        }

        backFnc(data) {
            console.log(data.coord)
        }

        pointback(data) {
            if(data.feature['values_']['id'] === `square`){
                this.showBox = 'imgLarge';
            }
            else if(data.feature['values_']['name']){
                this.startM(data.feature['values_']['id']);
            }
            else{
                console.log(data.coord)
            }
        }
        showHover(data){
            if(data){
                if(data.feature['values_'].name){
                    this.overlay = {
                        show:true,
                        coord:data.coord,
                        name:data.feature['values_'].name,
                    }
                };
            }
        }
        closeHover(){
            this.overlay = {
                show:false,
                coord:[],
                name:'',
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../styles/variables";

    #serve {
        width: 100%;
        height: 100%;
        position: relative;
        /*background-image: url("../images/serve/服务.jpg");*/
        background-color: #000;
        background-size: 100% 100%;
        background-repeat: no-repeat;
        z-index: 1;
        overflow: hidden;


        .squarePosition {
            position: absolute;
            z-index: 3;
            width: 110px;
            height: 40px;
            right: 41.52vw;
            top: 23.52vh;
            background-image: url("../images/serve/广场.png");
            background-size: 100% 100%;
            background-repeat: no-repeat;
            cursor: pointer;
        }

        .centerInfo {
            position: absolute;
            z-index: 3;
            width: calc(100% - 46vw);
            height: 9.8vh;
            left: 23vw;
            top: 8.8vh;
            background-image: linear-gradient(-90deg,
                    rgba(0, 13, 51, 0) 0%,
                    rgba(0, 13, 51, 0.6) 14%,
                    rgba(0, 13, 51, 0.8) 76%,
                    rgba(0, 13, 51, 0) 100%);
            padding: 0 100px;
            animation: bounce-in3 .3s ease;
            display: flex;

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

        .businessbox {
            position: absolute;
            min-width: 360px;
            z-index: 3;
            width: 21.8vw;
            height: 54vh;
            left: 1.2vw;
            top: 7.4vh;
            background-image: url("../images/serve/框左上.png");
            background-size: 100% 100%;
            background-repeat: no-repeat;
            padding: 12px;
            animation: slide-left .3s ease;

            .barnd {
                margin: 0 10px;
                overflow: hidden;

                .list {
                    display: flex;
                    transition: all .3s;
                }

                .item {
                    width: 60px;
                    flex: none;
                    margin: 0 10px;
                    text-align: center;

                    img {
                        width: 40px;
                        height: 40px;
                        border-radius: 50%;
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

            .square {
                display: flex;
                padding: 0 20px;
                cursor: pointer;

                .carousel {
                    width: 140px;
                    height: 74px;
                    margin-right: 15px;

                }

                .info {
                    width: calc(100% - 160px);
                    display: inline-flex;
                    flex-wrap: wrap;

                    .label {
                        color: $label-color;
                        margin-bottom: 4px;
                        height: 16px;
                        line-height: 16px;
                        width: 100%;
                    }

                    .item {
                        width: 50%;
                        color: #ccd9ff;
                        font-size: 12px;
                        line-height: 14px;
                        margin-bottom: 4px;
                    }
                }
            }
        }

        .guanjia {
            position: absolute;
            z-index: 3;
            width: 21.8vw;
            height: 35vh;
            left: 1.2vw;
            bottom: 1.38vh;
            background-image: url("../images/serve/框左下.png");
            background-size: 100% 100%;
            background-repeat: no-repeat;
            padding: 12px;
            min-width: 360px;
            animation: slide-left .3s ease;
        }

        .equipment {
            position: absolute;
            z-index: 3;
            width: 21.8vw;
            height: 90.3vh;
            right: 1.2vw;
            top: 7.4vh;
            background-image: url("../images/serve/框右.png");
            background-size: 100% 100%;
            background-repeat: no-repeat;
            padding: 12px;
            min-width: 360px;
            animation: slide-right .3s ease;
        }


        .boxmain {
            padding: 0 1.2vw;
            height: calc(100% - 32px);
            overflow: hidden;

            .secondTitle {

                margin: 10px -12px;
            }

            .infotext {
                padding: 10px 0;
            }

        }


        .storeChange {
            position: absolute;
            z-index: 2;
            left: 3.6vw;
            top: 12vh;
            width: 36vw;
            height: 25vw;
            background-image: url("../images/serve/弹窗-商家数量.png");
            background-repeat: no-repeat;
            background-size: 100% 100%;
            padding: 2vw 2.5vw;

        }


        .safeAlarm {
            position: absolute;
            z-index: 2;
            right: 3.2vw;
            top: 12vh;
            width: 50vw;
            height: 21.2vw;
            background-image: url("../images/serve/弹窗-设备检测.png");
            background-repeat: no-repeat;
            background-size: 100% 100%;
            padding: 2vw 2.5vw;

        }

        .fireAlarm {
            position: absolute;
            z-index: 2;
            right: 3.2vw;
            bottom: 8vh;
            width: 50vw;
            height: 21.2vw;
            background-image: url("../images/serve/弹窗-设备检测.png");
            background-repeat: no-repeat;
            background-size: 100% 100%;
            padding: 2vw 2.5vw;

        }

        .imgLarge {
            position: absolute;
            z-index: 2;
            right: 21.45vw;
            top: 20vh;
            width: 57.4vw;
            height: 35.2vw;
            background-image: url("../images/serve/弹窗大.png");
            background-repeat: no-repeat;
            background-size: 100% 100%;
            padding: 2vw 2.5vw;

            .carousel {
                width: 100%;
                height: calc(100% - 44px);
            }
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

        .doorbox {
            position: absolute;
            z-index: 2;
            right: 8vw;
            top: 18vh;
            width: 46.32vw;
            height: 34.6vw;
            background-image: url("../images/serve/弹窗-门禁记录.png");
            background-repeat: no-repeat;
            background-size: 100% 100%;
            padding: 2vw 2.5vw;

            &.guocheData {
                width: 43.32vw;
                height: 31.6vw;
                right: 13vw;
                top: 18vh;
            }

            &.renyuandata {
                right: 9vw;
                top: 18vh;
            }
        }

        .logo_bottom {
            position: absolute;
            bottom: 0;
            z-index: 1;
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

        .setPoint {
            position: absolute;
            z-index: 2;
            left: 40.25vw;
            top: 26.85vh;
            width: 28px;
            height: 36px;
            background-image: url("../images/serve/摄像头.png");
            background-repeat: no-repeat;
            background-size: 100% 100%;
            cursor: pointer;

            &.p1 {
                left: 46.25vw;
                top: 46.85vh;
            }

            &.p2 {
                left: 36.25vw;
                top: 56.85vh;
            }

            &.p3 {
                left: 56vw;
                top: 56.85vh;
            }
        }

        .shops {
            position: absolute;
            z-index: 2;
            left: 34.25vw;
            top: 23.25vh;
            width: 30px;
            height: 30px;

            img {
                width: 100%;
                height: 100%;
                border-radius: 50%;
                border: 1px solid $second-color;
            }
        }

        .shopshoverbox {
            position: fixed;
            z-index: 9;
            width: 460px;
            height: 220px;
            background-image: url("../images/serve/商家弹窗.png");
            background-repeat: no-repeat;
            background-size: 100% 100%;
            padding: 50px;

            .close {
                position: absolute;
                z-index: 3;
                right: 36px;
                top: 36px;
                color: #ffffff;
                cursor: pointer;
            }

            .title {
                font-size: 18px;
                color: $second-color;
                margin-bottom: 15px;
            }

            .flexbox {
                display: flex;

                img {
                    width: 80px;
                    height: 80px;
                }

                .info {
                    margin-left: 15px;
                    width: calc(100% - 95px);
                    height: 80px;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;

                    .line {
                        width: 100%;
                        color: $second-color;
                        overflow: hidden;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                    }
                }
            }
        }

        @keyframes bounce-in3 {
            0% {
                transform-origin: center top 0;
                transform: rotateX(90deg);
            }
            100% {
                transform-origin: center top 0;
                transform: rotateX(0deg);
            }
        }
    }
</style>
<style lang="scss">
    #serve {
        .vueol-overlay{
            max-width: 300px;
            width: auto;
            background-color: rgba(256,256,256,0.88);
            border-radius: 2px;
            .overlayBox{
                padding: 5px 10px;
                min-width: 60px;
                max-width: 300px;
                text-align: center;
                white-space: nowrap;
            }
        }

        //轮播
        .el-carousel__container {
            height: 100%;
        }

        .el-carousel__arrow {
            display: none;
        }

        .el-carousel__button {
            width: 8px;
            height: 8px;
            border-radius: 4px;
            opacity: 1;
            background-color: #999;
        }

        .el-carousel__indicator.is-active button {
            background-color: #409fff;
        }

        .el-carousel__indicator--horizontal {
            padding: 12px 4px 0;
        }
    }
</style>
