<template>
    <div class="leftSideItem" :class="{margin:level===`first`}">
        <div class="itemLabel" :title="routeItem.name" :class="{active:itemClass(routeItem.routeName)}"  @click="itemClick(routeItem.clickFn)">
            <div class="iconbox">
                <img v-if="routeItem.iconSrc" :src="routeItem.iconSrc" >
                <i v-else class="point"></i>
            </div>
            <em class="itemName">{{routeItem.name}}</em>
            <i class="iconfont iconzhankai1 toggle" :class="{close:!showFlag}" v-show="routeItem.children && routeItem.children.length>0" ></i>
        </div>
        <div v-show="routeItem.children && routeItem.children.length>0" class="itemChildren" :style="{height:childrenHeight}">
            <leftSideItem level="second" :routeItem="item" v-for="item in routeItem.children" :key="item.id"></leftSideItem>
        </div>
    </div>
</template>
<script>
    export default {
        name: "leftSideItem",
        props: {
            routeItem: {
                type: Object,
                default: function () {
                    return {
                       /* name:'',
                        routeName:'',
                        iconSrc:'',
                        clickFn:function(){
                        showFlag:false,
                        },
                        children:[],*/
                    }
                }
            },
            level:{
                type: String,
            }
        },
        data() {
            return {
                showFlag:false,
                childrenHeight:`0px`,
            }
        },
        watch:{

            showFlag:function (val) {
                if(val){
                    this.childrenHeight = this.routeItem.children.length * 40 +`px`
                }
                else{
                    this.childrenHeight = 0 +`px`
                }
            }
        },
        mounted() {

            if(this.routeItem.showFlag){
                this.showFlag = true;
            }
        },
        methods: {
            itemClick(fn){
                if(fn){
                    return fn()
                }else{
                    if(this.routeItem.children && this.routeItem.children.length>0){
                        this.showFlag = !this.showFlag;
                        /*if(this.showFlag){
                            this.showFlag = !this.showFlag;
                        }
                        else{
                            this.showFlag = !this.showFlag;
                        }*/
                    }
                    else{
                        this.$router.push({name:this.routeItem.routeName});
                    }
                }
            },

            itemClass(routeName){
                let bool = false;
                if(this.$route.meta.pname){
                    bool =  this.$route.meta.pname.indexOf(routeName) > -1 || routeName === this.$route.name
                }
                else{
                    bool = routeName === this.$route.name
                }
                return bool
            },
        },
    }
</script>

<style lang="scss" scoped>
    .leftSideItem {
        width: 170px;
        &.margin{
            margin-bottom: 15px;
        }
        .itemLabel{
            height: 40px;
            display: flex;
            align-items: center;
            padding-left: 20px;
            width: 170px;
            color: #fff;
            cursor: pointer;
            user-select: none;
            em{
                font-style: normal;
            }
            .point{
                font-style: normal;
                width: 6px;
                height: 6px;
                border-radius: 50%;
                background-color: #fff;
                margin-left: 15px;
            }
            &.active,&:hover{
                background-image: linear-gradient(90deg,
                        #3c71f7 0%,
                        #4959f0 50%,
                        #5541e8 100%);
            }
            .toggle{
                margin: 0 10px;
                transform: rotate(180deg);
                transition: .3s;
                font-size: 14px;
                &.close{
                    transform: rotate(0deg);
                }
            }
            .iconbox{
                width: 40px;
                display: inline-flex;
                img{
                    max-width: 24px;
                }
            }
        }
        .itemChildren{
            background-color: #0a0d37;
            transition: all .3s;
            overflow: hidden;
            .iconbox{
                width: 46px;
            }
            .itemName{
                font-size: 14px;
            }
        }
    }
    .hide{
        width: 64px;
        .leftSideItem{
            .iconbox{
                width: 44px;
            }
            .itemChildren{
                .iconbox{
                    width: 50px;
                }
            }
        }

    }
</style>
