<template>
    <div id="reviewBox" >
        <!--@mouseenter="activeEnter" @mouseleave="activeLeave"-->
        <div class="reviewImg">
            <div v-if="activelist.length === 0" class="emp">无图片</div>
            <el-carousel class="img" :interval="3000" indicator-position="none">
                <el-carousel-item v-for="item in activelist" >
                    <img :src="item.img" >
                    <div class="desc" v-if="item.name">
                        <div class="text">{{item.name}}</div>
                    </div>
                </el-carousel-item>
            </el-carousel>
        </div>
        <div ref="reviewlist" class="reviewlist" v-if="activeImg.length>1">
            <div class="ctrl top" @click="activeMove(3)" v-show="ctrlShow">
                <i class="iconfont iconshouqi"></i>
            </div>
            <div class="ctrl bottom" @click="activeMove(-3)" v-show="ctrlShow">
                <i class="iconfont iconzhankai1"></i>
            </div>
            <div ref="reviewItem" class="reviewItem"
                 v-for="(item,index) in activeImg"
            >
                <img :src="item.img">
            </div>

            <div class="empty" v-if="activeImg.length === 0">
                暂无活动
            </div>
        </div>

        <el-dialog
                :visible="showImg"
                custom-class="emDialog"
                width="53vw"
                :append-to-body="true"
                @close="closeImgBox"
        >
            <div class="title" slot="title">
                {{`图片`}}
            </div>

            <div class="timgbox">
                <!--<img :src="activeImg[curIndex].img" >-->
            </div>

        </el-dialog>
    </div>
</template>
<script lang="ts">
    import {Vue, Component, Prop, Watch} from "vue-property-decorator";

    import {Button} from 'iview';

    @Component({
        components: {Button}
    })

    export default class reviewBox extends Vue {
        @Prop({
            default: function () {
                return [
                    [
                        {
                            img: '',
                            name:'',
                        },
                    ],
                ]
            }
        })
        activeImg: Array<any>;
        @Watch(`activeImg`)
        imgChange(){
            if(this.activeImg.length>0){
                if(this.activeImg[0].isArray){
                    this.activelist = this.activeImg[0];
                    this.same = false;
                }
                else{
                    this.activelist = this.activeImg;
                    this.same = true;
                }
            }
            else{
                this.activelist = [];
                this.same = false;
            }
        }

        activelist:Array<any> = [];
        same:boolean = false;
        curIndex: number = 0;
        ctrlShow: boolean = false;
        boxHeight: number = 36 + 10;

        showImg: boolean = false;

        interval: any = null;

        mounted() {
            if(this.activeImg.length>0){
                if(Array.isArray(this.activeImg[0])){
                    this.activelist = this.activeImg[0];
                    this.same = false;
                    this.activeImg
                }
                else{
                    this.activelist = this.activeImg;
                    this.same = true;
                }
            }
            else{
                this.activelist = [];
                this.same = false;
            }

            console.log(this.activeImg,this.activelist)
            this.$nextTick(() => {
                //this.activeLeave();
            })
        }



        activeMove(num: number) {
            let reviewItem: any = this.$refs.reviewItem;
            let reviewlist: any = this.$refs.reviewlist;
            let mt = Math.floor(reviewItem[0].style.marginTop.replace(`px`, ``))
            let maxHeight = -(this.activeImg.length * this.boxHeight - 10) + reviewlist.clientHeight;

            if (reviewItem[0].style.marginTop) {

                if (mt + num * this.boxHeight > 0) {
                    reviewItem[0].style.marginTop = 0;
                } else if (mt + num * this.boxHeight < maxHeight) {
                    reviewItem[0].style.marginTop = maxHeight + `px`;
                } else {
                    reviewItem[0].style.marginTop = mt + num * this.boxHeight + `px`
                }
            } else {
                if (num * this.boxHeight > 0) {
                    reviewItem[0].style.marginTop = 0;
                } else {
                    reviewItem[0].style.marginTop = num * this.boxHeight + `px`
                }
            }

        }
        showImgBox(){
            this.showImg = true;
            //this.activeEnter();
        }
        closeImgBox(){
            this.showImg = false;
            //this.activeLeave();
        }

        beforeDestroy() {
            clearInterval(this.interval)

        }
    }
</script>

<style lang="scss" scoped>
    #reviewBox {

        display: inline-flex;
        align-items: center;
        width: 100%;
        height: 100%;
        overflow: hidden;

        .reviewImg {
            flex:1;
            height: 100%;
            padding-right: 15px;
            position: relative;
            border-radius: 4px;
            overflow: hidden;
            .emp {
                width: 100%;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                color: #ffffff;
                font-size: 16px;
            }
            .name{
                position: absolute;
                left: 0;
                bottom: 0;
                background-color: rgba(0,0,0,0.7);
                height: 30px;
                line-height: 30px;
                padding: 0 20px;
                color: #fff;
                width: 100%;
                em{
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    width: 100%;
                    overflow: hidden;
                }
            }
            .img {
                cursor: pointer;
                width: 100%;
                height: 100%;
            }
        }

        .reviewlist {
            width: 64px;
            height: 100%;
            overflow: hidden;
            position: relative;
            z-index: 1;

            .ctrl {
                position: absolute;
                left: 0;
                width: 100%;
                height: 16px;
                border-radius: 4px;
                background-color: rgba(31, 48, 102, 0.85);
                display: inline-flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;

                &.top {
                    top: 0;
                }

                &.bottom {
                    bottom: 0;
                }

                .iconfont {
                    font-size: 14px;
                    color: #4c79ff;
                }
            }

            .empty {
                width: 100%;
                height: 100%;
                padding: 0 22px;
                display: flex;
                justify-content: center;
                align-items: center;
                color: #ffffff;
                font-size: 16px;
            }

            .reviewItem {
                width: 100%;
                height: 36px;
                margin-bottom: 10px;
                cursor: pointer;
                transition: all .3s;

                &.active {
                    border: 1px solid #ccd9ff;
                }

                img {
                    width: 100%;
                    height: 100%;
                }

                &:last-child {
                    margin-bottom: 0;
                }
            }
        }

    }
</style>
