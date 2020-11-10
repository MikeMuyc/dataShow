<template>
    <div id="reviewBox" @mouseenter="activeEnter" @mouseleave="activeLeave">
        <div class="reviewImg">
            <div v-if="activeImg.length === 0" class="emp">无图片</div>
            <img v-else :src="activeImg[curIndex].img" @click="showImgBox"/>
            <div class="name" v-if="activeImg[curIndex].name">
                <em>{{activeImg[curIndex].name}}</em>
            </div>
        </div>
        <div ref="reviewlist" class="reviewlist">
            <div class="ctrl top" @click="activeMove(3)" v-show="ctrlShow">
                <i class="iconfont iconshouqi"></i>
            </div>
            <div class="ctrl bottom" @click="activeMove(-3)" v-show="ctrlShow">
                <i class="iconfont iconzhankai1"></i>
            </div>
            <div ref="reviewItem" class="reviewItem" :class="{active:activeImg[curIndex] === item}"
                 v-for="(item,index) in activeImg"
                 @click="curIndex = index">
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
                {{activeImg[curIndex].name || `图片`}}
            </div>

            <div class="timgbox">
                <img :src="activeImg[curIndex].img" >
            </div>

        </el-dialog>
    </div>
</template>
<script lang="ts">
    import {Vue, Component, Prop} from "vue-property-decorator";

    import {Button} from 'iview';

    @Component({
        components: {Button}
    })

    export default class reviewBox extends Vue {
        @Prop({
            default: function () {
                return [
                    {
                        img:'',
                        name:'',
                    }
                ]
            }
        })
        activeImg: Array<any>;


        curIndex: number = 0;
        ctrlShow: boolean = false;
        boxHeight: number = 36 + 10;

        showImg: boolean = false;

        interval: any = null;

        mounted() {
            this.$nextTick(() => {
                this.activeLeave();
            })
        }

        activeEnter() {

            clearInterval(this.interval)
            let reviewlist: any = this.$refs.reviewlist;
            let maxHeight = -(this.activeImg.length * this.boxHeight - 10) + reviewlist.clientHeight;
            if (maxHeight < 0) {
                this.ctrlShow = true;
            }
        }

        activeLeave() {
            this.ctrlShow = false;
            if(!this.showImg){
                let reviewItem: any = this.$refs.reviewItem;
                let reviewlist: any = this.$refs.reviewlist;
                let maxHeight = -(this.activeImg.length * this.boxHeight - 10) + reviewlist.clientHeight;

                this.interval = setInterval(() => {
                    if(this.activeImg.length>1){
                        if (this.curIndex >= this.activeImg.length - 1) {
                            this.curIndex = 0
                        } else {
                            this.curIndex++;
                        }
                    }

                    if (maxHeight < 0) {
                        if (this.curIndex < 2) {
                            reviewItem[0].style.marginTop = `0px`;
                        } else if (this.curIndex > this.activeImg.length - 3) {
                            reviewItem[0].style.marginTop = maxHeight + `px`;
                        } else {
                            reviewItem[0].style.marginTop = -(this.curIndex - 1) * this.boxHeight + `px`

                        }
                    }
                }, 3000)
            }


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
        toHome() {
            this.$router.push({name: '未来社区首页'})
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
            width: calc(100% - 64px);
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
            img {
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
