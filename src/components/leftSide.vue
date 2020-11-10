<template>
    <div class="leftSide" :class="{hide:hideFlag}">
        <div class="fold-bar" @click="closeMenu">
            <i class="iconfont iconcaidan"></i>
        </div>
        <vue-perfect-scrollbar style="width:170px;height: calc(100% - 40px)">
            <leftSideItem level="first" :routeItem="item" v-for="item in routeMenuOpen" :key="item.id"></leftSideItem>
        </vue-perfect-scrollbar>
    </div>
</template>
<script>
    import leftSideItem from './leftSideItem'
    export default {
        name: "leftSide",
        components:{
            leftSideItem
        },
        props: {
            routeMenu: {
                type: Array,
                default: function () {
                    return []
                }
            },
        },
        watch:{
            routeMenu:function () {
                this.setOpen();
            }
        },
        data() {
            return {
                routeMenuOpen:[],
                hideFlag:false,
            }
        },
        mounted() {
            this.setOpen();
        },
        methods: {
            setOpen(){
                this.routeMenuOpen = this.routeMenu;
                let routeName = this.$route.name;
                let pName = this.$route.meta.pname;
                this.routeMenuOpen.forEach((item) => {
                    if (item.children) {
                        item.showFlag = this.getRouteParent(item.children,routeName,pName);
                    } else {
                        item.showFlag = false
                    }
                })
            },
            getRouteParent(arr,routeName,pName) {
                let bool = false;
                arr.forEach((item) => {
                    if (item.children && !bool) {
                        bool = this.getRouteParent(item.children,routeName,pName);
                    }
                    else if(!bool){
                        if(pName){
                            bool = item.routeName === routeName || item.routeName === pName
                        }
                        else{
                            bool = item.routeName === routeName
                        }
                    }
                })
                return bool
            },
            closeMenu(){
                this.hideFlag = !this.hideFlag;
                this.$emit(`hideFlag`,this.hideFlag);
            }
        },
    }
</script>

<style lang="scss" scoped>
    .leftSide {
        width: 170px;
        overflow: hidden;
        height: 100%;
        font-size: 16px;
        background-color: #050619;
        box-shadow: 6px 0 38px 0 rgba(52, 57, 87, 0.33);
        transition: all .3s;

        .fold-bar {
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            .iconfont{
                color: #ffffff;
                font-size: 16px;
                transition: all .3s;
            }
        }
        &.hide{
            width: 64px;
            .fold-bar{
                .iconfont{
                    transform: rotate(-90deg);
                }
            }
        }


    }
</style>
