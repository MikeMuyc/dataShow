<template>
    <div id="building" ref="viewbox" @click="console1">
        <div class="back_home" @click="toHome"></div>
        <div class="logoTitle">建筑场景</div>

        <div class="date_show">
            <em class="date_num">{{year}}</em>
            <i>年</i>
            <em class="date_num">{{month}}</em>
            <i>月</i>
            <em class="date_num">{{day}}</em>
            <i>日</i>
        </div>

        <div class="topRouter serve" @click="$router.push({name:'服务场景'})"></div>
        <div class="topRouter loCarbon" @click="$router.push({name:'低碳场景'})"></div>
        <div class="topRouter entrepreneurship" @click="$router.push({name:'创业场景'})"></div>
        <div class="topRouter health" @click="$router.push({name:'健康场景'})"></div>
        <div class="topRouter traffic" @click="$router.push({name:'交通场景'})"></div>


        <div class="bottombox left1">
            <div class="label">居民楼数量</div>
            <div class="num">
                <em>274</em>
                <i>栋</i>
            </div>
        </div>
        <div class="bottombox left2">
            <div class="label">公寓组团</div>
            <div class="num">
                <em>25</em>
                <i>个</i>
            </div>
        </div>
        <div class="bottombox left3">
            <div class="label">人才公寓</div>
            <div class="num">
                <em>{{apartmentNum}}</em>
                <i>套</i>
            </div>
        </div>


        <div class="bottombox right3 cursor-pointer" @click="showBox = 'compoundFlat'">
            <div class="label">装配式建筑</div>
            <div class="num">
                <em>1</em>
                <i>栋</i>
            </div>
        </div>
        <div class="bottombox right2 cursor-pointer" @click="showBox = 'lowEnergyFlat'">
            <div class="label">低能耗建筑</div>
            <div class="num">
                <em>1</em>
                <i>栋</i>
            </div>
        </div>
        <div class="bottombox right1" >
            <div class="label">停车场数量</div>
            <div class="num">
                <em>4</em>
                <i>个</i>
            </div>
        </div>



        <!--主题-->

        <div class="redbox" :style="positionSet(item)"  v-for="item in beiyuanbei" @click="openBox(item)">
            <img src="../images/building/p.png" alt="">
            {{item.name}}
        </div>
        <div class="yellowbox" :style="positionSet(item)"  v-for="item in dongyuan" @click="openBox(item)">
            <img src="../images/building/y.png" alt="">
            {{item.name}}
        </div>
        <div class="greenbox" :style="positionSet(item)"  v-for="item in beiyuannan" @click="openBox(item)">
            <img src="../images/building/g.png" alt="">
            {{item.name}}
        </div>
        <div class="xinbox" :style="positionSet(item)"  v-for="item in xinyuan" @click="openBox(item)">
            <img src="../images/building/c.png" alt="">
            {{item.name}}
        </div>

        <!--主题-->
        <!--固定点位-->
        <div class="housepoint" :style="positionSet(item.position)" v-for="item in staticPoint">
            <img :src="item.img" alt="">
            <div class="houseHover" :style="hoverSet(item.position)">
                <img :src="item.hoverImg" alt="">
            </div>
        </div>

        <transition name="fade">
            <div class="messageHover" v-show="showBox !=='close'">
                <div class="outsideClose" @click="closeVideo"></div>
                <!--<div class="ckppp" v-if="showBox === 'ckppp'">-->
                <!--<i class="iconfont iconcha-copy close" @click="closeVideo"></i>-->
                <!--<div class="video" id="videoP"></div>-->
                <!--</div>-->

                <transition name="toggle">
                    <div class="centerbox" v-show="showBox === 'centerbox'">
                        <i class="iconfont iconcha-copy close" @click="closeVideo"></i>
                        <div class="title">{{centerboxData.name}}</div>
                        <el-carousel class="carousel carousel-theme" :interval="3000">
                            <el-carousel-item v-for="item in centerboxImg">
                                <img :src="item.src" >
                                <div class="desc" v-if="item.name || item.description">
                                    <div class="dstitle">{{item.name}}</div>
                                    <div class="text">{{item.description}}</div>
                                </div>
                            </el-carousel-item>
                        </el-carousel>
                    </div>
                </transition>



                <transition name="toggle">
                    <div class="centerbox large" v-if="showBox === 'lowEnergyFlat'">
                        <i class="iconfont iconcha-copy close" @click="closeVideo"></i>
                        <div class="title flat-title">低能耗建筑</div>
                        <cornerBox style="width: 100%;margin:0 0 20px;height: 80px">
                            <div class="bdlist" style="height: 80px">
                                <div class="splitItem">
                                    <div class="leftimg">
                                        <img src="../images/building/建筑.png" alt="">
                                    </div>
                                    <i class="label">建筑面积：</i>
                                    <i class="text">230</i>
                                    <i class="unit">㎡</i>
                                </div>
                                <div class="splitItem">
                                    <div class="leftimg">
                                        <img src="../images/building/层数.png" alt="">
                                    </div>
                                    <i class="label">层数：</i>
                                    <i class="text">单层</i>
                                </div>
                            </div>
                        </cornerBox>
                        <el-carousel class="carousel" :interval="3000">
                            <el-carousel-item v-for="item in lowEnergyImageList" :key="item.img">
                                <img :src="item.img" >
                                <div class="desc"  v-if="item.detail || item.title">
                                    <div class="dstitle" v-if="item.title">{{item.title}}</div>
                                    <div class="text" v-if="item.detail">
                                        {{item.detail}}
                                    </div>
                                </div>
                            </el-carousel-item>
                        </el-carousel>
                    </div>
                </transition>
                <transition name="toggle">
                    <div class="centerbox large" v-if="showBox === 'compoundFlat'">
                        <i class="iconfont iconcha-copy close" @click="closeVideo"></i>
                        <div class="title flat-title">装配式建筑</div>

                        <cornerBox style="width: 100%;margin:0 0 20px;height: 80px">
                            <div class="bdlist" style="height: 80px">
                                <div class="splitItem" style="flex: 5;">
                                    <div class="leftimg">
                                        <img src="../images/building/建筑.png" alt="">
                                    </div>
                                    <div class="label">面积：</div>
                                    <div class="text">14881.5</div>
                                    <i class="unit">㎡</i>
                                    <div class="label">地上：</div>
                                    <div class="text">12045.5</div>
                                    <i class="unit">㎡</i>
                                    <div class="label">地下：</div>
                                    <div class="text">2839</div>
                                    <i class="unit">㎡</i>
                                </div>
                                <div class="splitItem" style="flex: 3;">
                                    <div class="leftimg">
                                        <img src="../images/building/层数.png" alt="">
                                    </div>
                                    <div class="label">层数</div>
                                    <div class="label">地上：</div>
                                    <div class="text">4层</div>
                                    <div class="label">地下：</div>
                                    <div class="text">1层</div>
                                </div>
                            </div>
                        </cornerBox>
                        <el-carousel class="carousel" :interval="3000">
                            <el-carousel-item v-for="item in 1" :key="item">
                                <img src="../images/building/装配式建筑.jpg" >
                                <div class="desc">
                                    <div class="text">
                                        吊顶辐射板，其热辐射均匀健康，无风机、无对流、无扬尘，是一种极为舒适的热传递方式；圆孔装饰面式辐射板兼顾了美观和吊顶辐射 板的功能性。
                                    </div>
                                </div>
                            </el-carousel-item>
                        </el-carousel>
                    </div>
                </transition>
            </div>
        </transition>

    </div>
</template>

<script>
    import {Button} from 'iview'
    import colorful from './allDataShow/colorList'
    import cornerBox from './allDataShow/cornerBox.vue';
    import reviewBox from './allDataShow/reviewBox_before.vue'
    import {imgList, lowEnergyImageList, makeupImageList, sportImageList, petImageList,staticPoint} from './allDataShow/building'

    import * as api from '../api/building';
    export default {
        name: "building",
        components: {
            Button,
            cornerBox,
            reviewBox
        },
        data() {
            return {
                year: '',
                month: '',
                day: '',

                showBox: 'close',
                videoSrc: '',
                imgList: imgList,
                lowEnergyImageList: lowEnergyImageList,
                makeupImageList: makeupImageList,
                sportImageList: sportImageList,
                petImageList: petImageList,
                staticPoint:staticPoint,
                apartmentNum:0,
                player:null,
                beiyuanbei:[],
                beiyuannan:[],
                xinyuan:[],
                dongyuan:[],
                centerboxData:{
                    x:'10.26%',
                    y:'21.44%',
                    name:'',
                    description:'',
                    id:''
                },
                centerboxImg:[
                    {
                        src:'',
                        name:'',
                        description:'',
                    }
                ],
            }
        },


        mounted() {
            let myDate = new Date();     //获取当前年份(2位)
            this.year = myDate.getFullYear();    //获取完整的年份(4位,1970-????)
            this.month = ((myDate.getMonth() - 0 + 1) > 9 ? (Number(myDate.getMonth()) + 1).toString() : '0' + (Number(myDate.getMonth()) + 1).toString());       //获取当前月份(0-11,0代表1月)
            this.day = myDate.getDate() - 0 > 9 ? myDate.getDate() : '0' + myDate.getDate();
            this.init();
        },

        methods: {
            init(){
                //人才公寓
                api.getApartmentNum().then(({data})=>{
                    this.$utils.numberGrow(this,`apartmentNum`,data.count)
                });
                api.getThemeList().then(({data})=>{
                    if(data['1']){
                        this.dongyuan = data['1']
                    }
                    if(data['2']){
                        this.xinyuan = data['2']
                    }
                    if(data['3']){
                        this.beiyuanbei = data['3']
                    }
                    if(data['4']){
                        this.beiyuannan = data['4']
                    }
                });
            },
            toHome() {
                this.$router.push({name: '未来社区首页'})
            },
            console1(e) {
                let viewbox = this.$refs.viewbox;
                let x = (e.clientX / viewbox.clientWidth * 100).toFixed(2);
                let y = (e.clientY / viewbox.clientHeight * 100).toFixed(2);
                console.log(`x:'${x}%',y:'${y}%'`)
            },


            closeVideo(){
                this.showBox = '';
                this.videoSrc = '';
                if(this.player){
                    this.player.videoPause()
                }
                setTimeout(()=>{
                    this.showBox = 'close';
                },200)
            },
            positionSet(item) {
                return  `left:${item.x};top:${item.y}`;
            },
            hoverSet(position) {
                let style = '';
                style = `left:${position.left}px;top:${position.top}px`
                return style;
            },
            async openBox(item){
                this.centerboxData = item;
                this.centerboxImg = [];
                let {data} = await api.getThemePic(item.id);
                data.forEach(item =>{
                    this.centerboxImg.push({
                        name:item.name,
                        description:item.description,
                        src:`${this.$imgBaseUrl()}${item.mediaId}`,
                    })
                })
                this.showBox = 'centerbox';
            }
        },
        // beforedestroyed() {
        //     this.player.videoClear();
        //     this.player = null;
        // }
    }
</script>
<style lang="scss" scoped>
    @import "../styles/variables";

    #building {
        width: 100%;
        height: 100%;
        position: relative;
        background-image: url("../images/building/底.jpg");
        background-size: 100% 100%;
        background-repeat: no-repeat;
        z-index: 1;

        .topRouter {
            position: absolute;
            z-index: 5;
            width: 18.64vh;
            max-width: 211px;
            height: 5.74vh;
            top: 9.54vh;

            background-size: 100% 100%;
            background-repeat: no-repeat;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #fff;
            font-size: 16px;
            cursor: pointer;

            &:hover {
                background-image: url("../images/按钮选中.png");
            }

            &.serve {
                left: 12.14vw;
                background-image: url("../images/building/服务.png");
            }

            &.loCarbon {
                left: 28.33vw;
                background-image: url("../images/building/低碳.png");
            }

            &.entrepreneurship {
                left: 44.53vw;
                background-image: url("../images/building/创业.png");
            }

            &.health {
                right: 28.28vw;
                background-image: url("../images/building/健康.png");
            }

            &.traffic {
                right: 12.08vw;
                background-image: url("../images/building/交通.png");
            }


        }

        .bottombox {
            position: absolute;
            z-index: 3;
            width: 11.56vw;
            height: 10.74vh;
            bottom: 2vh;
            background-image: url("../images/building/底部框.png");
            background-size: 100% 100%;
            background-repeat: no-repeat;
            padding: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            animation: bounce-in .3s ease;
            .label {
                color: $label-color;
                font-weight: bold;
                margin-bottom: 10px;
            }

            .num {
                em {
                    font-size: 28px;
                    color: #fff;
                    font-weight: bold;
                    padding: 0 8px;
                }

                i {
                    color: $unit-color;
                    font-weight: bold;
                    font-size: 16px;
                }
            }

            &.left1 {
                left: 4.17vw;
            }

            &.left2 {
                left: 20.21vw;

                .iconfont {
                    color: #3d97f4;
                    font-size: 16px;
                    position: absolute;
                    right: 16px;
                    top: 16px;
                    cursor: pointer;
                }
            }
            &.left3 {
                left: 36.2vw;

            }

            &.right1 {
                right: 4.17vw;
            }

            &.right2 {
                right: 20.21vw;
            }

            &.right3 {
                right: 36.2vw;
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
                padding: 10px 0;
            }

        }

        .numline {
            display: flex;
            align-items: baseline;
            height: 36px;
            margin-bottom: 2vh;

            .left {
                width: 40%;

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
                width: 60%;
                padding-left: 10px;

                .label {
                    color: #409fff;
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
            color: #409fff;
            font-weight: bold;
            margin-bottom: 10px;
            height: 24px;
            line-height: 24px;
        }

        .chartTitle {
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 30px;

            .left {
                color: #409fff;
            }

            .right {
                display: flex;
                align-items: center;
                color: #ffffff;

                .itemGroup {
                    display: inline-flex;
                    align-items: center;
                    padding-left: 20px;

                    .squ {
                        width: 16px;
                        height: 12px;
                        border-radius: 2px;
                        margin-right: 4px;

                        &.nor {
                            background-image: linear-gradient(0deg,
                                    #5652df 0%,
                                    #8e98ff 100%);
                        }

                        &.noru {
                            background-image: linear-gradient(0deg,
                                    #035acf 0%,
                                    #66c0ff 100%);
                        }

                        &.duib {
                            background-color: #ffd451;
                        }
                    }
                }
            }

        }

        .ckppp {
            position: absolute;
            z-index: 5;
            left: calc(50% - 600px);
            top:  calc(50% - 340px);
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

            .video {
                width: 100%;
                height: 100%;
            }

        }

        .centerbox {

            &.large{
                width: 960px;
                height:720px;
                left:calc(50% - 480px);
                top:calc(50% - 360px);
                .carousel {
                    width: 100%;
                    height: calc(100% - 154px)
                }
            }


            .carousel {
                width: 100%;
                height: calc(100% - 50px)
            }
        }

        .theme-button {
            position: absolute;
            z-index: 4;
            top: 18.7vh;
            right: 37.34vw;
            width: 5.21vw;
            height: 3.43vh;
            cursor: pointer;

            &.sport {
                top: 25.93vh;
                right: 43.91vw;
            }

            &.pet {
                top: 72.87vh;
                right: 46.88vw;
            }
        }

        .videoButtn {
            position: absolute;
            z-index: 4;
            right: 37.6vw;
            bottom: 35.96vh;
            width: 6.25vw;
            height: 3.33vh;
            cursor: pointer;

            &.p1 {
                left: 53vw;
                top: 20.38vh;
                width: 6vw;
                height: 3.02vh;
            }
        }



        .bdlist {
            width: 100%;
            height: 60px;
            display: flex;
            padding: 0 10px;
            align-items: center;

            .splitItem {
                display: inline-flex;
                align-items: center;
                flex:1;
                justify-content:center;
                border-right: 1px solid rgba(102, 166, 255, 0.6);
                height: 30px;
                &:last-child{
                    border-right: 0;
                }
                .leftimg{
                    width: 60px;
                    height: 60px;
                    display: inline-flex;
                    align-items: center;
                    img{
                        width: 100%;
                    }
                }
                .label {
                    color: $label-color;
                    font-size: 14px;
                    display: inline-flex;
                    align-items: flex-end;
                    height: 30px;
                }

                .text {
                    color: #fff;
                    font-size: 20px;
                    line-height: 1.2;
                    &.red{
                        color: #ff5757;
                    }
                    display: inline-flex;
                    align-items: flex-end;
                    height: 30px;
                    padding: 0 8px;
                }
                .unit {
                    font-size: 14px;
                    font-weight: bold;
                    color: $unit-color;
                    padding-right: 8px;
                    display: inline-flex;
                    align-items: flex-end;
                    height: 30px;
                }
            }
        }


        .housepoint {
            position: absolute;
            z-index: 2;
            width: 28px;
            height: 34px;
            >img{
                width: 28px;
                height: 34px;
                cursor: pointer;
                object-fit:fill;
            }
            &:hover {
                .houseHover {
                    display: flex;
                }
            }

            .houseHover {
                position: absolute;
                cursor: pointer;
                display: none;
                left: -86px;
                top: -40px;
                font-size: 16px;
            }
        }
    }
</style>
<style lang="scss">
    #building {

    }
</style>
