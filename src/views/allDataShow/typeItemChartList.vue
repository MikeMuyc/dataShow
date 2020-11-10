<template>
    <vue-perfect-scrollbar style="height: 100%" :settings="{minScrollbarLength:20}">
        <div class="typeItemChartList" :class="{both:both}">
            <div class="itembox" v-for="(item,index) in chartList">
                <div v-if="rank" class="name">
                    <img src="../../images/govern/top1_s.png" v-if="index === 0">
                    <img src="../../images/govern/top2_s.png" v-else-if="index === 1">
                    <img src="../../images/govern/top3_s.png" v-else-if="index === 2">
                    {{item.name}}
                </div>
                <div v-else class="name">{{item.name}}</div>
                <div class="dd">
                    <div class="bar">
                        <div class="line" :class="item.color" :style="calcWidth(item.per)"></div>
                    </div>
                    <div class="num">{{item.count}} <i class="unit">{{unit}}</i></div>

                </div>
            </div>
        </div>
    </vue-perfect-scrollbar>
</template>
<script lang="ts">
    import {Vue, Component, Prop, Watch} from "vue-property-decorator";

    import {Button} from 'iview';

    @Component({
        components: {Button}
    })

    export default class typeItemChartList extends Vue {
        @Prop({
            default: function () {
                return {
                    name:'项目',
                    count:12,
                    per:'100%',
                }
            }
        })
        chartList!: Array<any>;
        @Prop({
            default: false,
        })
        both?: boolean;
        @Prop({
            default: '',
        })
        unit?: string;
        @Prop({
            default: false,
        })
        rank?: boolean;
        max:number = 0;

        @Watch(`chartList`)
        listchange(){
            this.max = 0;
            for(let i=0;i<this.chartList.length;i++){
                if(this.chartList[i].count > this.max){
                    this.max = this.chartList[i].count
                }
                this.chartList[i].per = `0%`
            }

            setTimeout(()=>{
                this.chartList.forEach(item =>{
                    let tw:any = item.count/this.max*100;
                    if(tw < 2){
                        tw = 2
                    }
                    item.per = `${tw}%`;
                })
            },1000)
        }

        calcWidth(per:string){
            if(per){
                return `width:${per}`
            }
            else{
                return `width:2%`
            }
        }


        mounted() {
            this.max = 0;
            for(let i=0;i<this.chartList.length;i++){
                if(this.chartList[i].count > this.max){
                    this.max = this.chartList[i].count
                }
                this.chartList[i].per = `0%`
            }

            setTimeout(()=>{
                this.chartList.forEach(item =>{
                    let tw:any = item.count/this.max*100;
                    if(tw<2){
                        tw = 2
                    }
                    item.per = `${tw}%`;
                })
            },1000)
        }
    }
</script>

<style lang="scss" scoped>
    .typeItemChartList{
        display: flex;
        flex-wrap: wrap;
        &.both{
            .itembox{
                width: 100%;
            }
        }
        .itembox{
            width: 50%;
            height: 40px;
            color: #fff;
            padding: 0 10px;
            margin-bottom: 4px;

            .name{
                font-size: 12px;
                height: 20px;
                display: flex;
                align-items: center;
                img{
                    width: 20px;
                    display: inline-block;
                }
            }
            .dd{
                display: flex;
                align-items: center;
                height: 20px;
                .bar{
                    flex:1;
                    margin-right: 5px;
                    .line {
                        height: 6px;
                        border-radius: 4px;
                        width: 0%;
                        transition: .3s;
                        background-image: linear-gradient(90deg,
                                #3344ff 0%,
                                #2d63ff 37%,
                                #2681ff 73%,
                                #409fff 100%);
                        &.red{
                            background-image: linear-gradient(90deg,
                                    #e3292e 0%,
                                    #f35c5e 50%,
                                    #fe8282 100%);
                        }
                        &.green{
                            background-image: linear-gradient(90deg,
                                    #029a8d 0%,
                                    #7bfddf 100%);
                        }
                        &.black{
                            background-image: linear-gradient(90deg,
                                    #626262 0%,
                                    #9499a0 50%,
                                    #bbc3cf 100%);
                        }
                    }
                }
                .num{
                    min-width: 20px;
                    text-align: right;
                    line-height: 20px;
                    white-space: nowrap;
                }
            }
        }
    }
</style>
