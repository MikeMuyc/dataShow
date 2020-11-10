<template>
    <div id="dataShow">
        <div class="bodyMain">
            <router-view></router-view>
        </div>
    </div>
</template>

<script lang="ts">
    import {Vue, Component, Watch, Provide} from "vue-property-decorator"
    import images from './images'


    @Component({
        components: {

        }
    })

    export default class dataShow extends Vue {


        mounted() {

        }


    }
</script>
<style lang="scss">
    @import "../../styles/variables";
    #dataShow {
        width: 100%;
        height: 100%;
        .bodyMain {
            width: 100%;
            height: 100%;
            background-image: url("../../images/dataBackground.jpg");
            background-color: #000;
            background-size: 100% 100%;
            background-repeat: no-repeat;
        }

        .date_show {
            position: fixed;
            right: 2%;
            top: 3%;
            width: 200px;
            height: 32px;
            display: flex;
            align-items: center;
            .date_num {
                font-size: 24px;
                font-weight: bold;
                color: $second-color;
            }
            i {
                font-size: 13px;
                font-weight: bold;
                color: $unit-color;
                margin: 0 6px;
            }
        }
        .back_home {
            position: fixed;
            left: 1.3%;
            top: 3%;
            z-index: 9;
            width: 120px;
            height: 30px;
            cursor: pointer;
            background-image: url("../../images/base/返回首页.png");
            background-repeat: no-repeat;
            background-position: center center;
        }


        .logoTitle {
            position: absolute;
            top: 0;
            z-index: 9;
            text-align: center;
            left: 16%;
            width: 68%;
            height: 70px;
            line-height: 64px;
            display: flex;
            justify-content: center;
            background-image: url("../../images/base/二级页面标题.png");
            background-repeat: no-repeat;
            background-size: 100% 100%;
            text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
            font-size: 28px;
            font-weight: 700;
            letter-spacing: 8px;
            color: #d9e2ff;
            text-indent: 8px;
            text-shadow: 0 0 25px #CCFAFE;
        }
        .boxTitle {
            width: 100%;
            height: 32px;
            line-height: 32px;
            background-image: url("../../images/base/标题.png");
            background-repeat: no-repeat;
            background-size: auto 100%;
            color: white;
            padding-left: 24px;
            font-weight: bold;
            font-size: 15px;
            &.more{
                cursor: pointer;
            }
        }

        .secondTitle {
            height: 28px;
            border-radius: 14px;
            background-color: rgba(31, 48, 102, 0.6);
            color: $second-color;
            font-size: 14px;
            font-weight: bold;
            padding:0 16px;
            margin: 12px 10px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            .right{
                color: $second-color;
                font-size: 12px;
                &.more{
                    cursor: pointer;
                }
            }
        }
        .secondTitle_column {
            width: 28px;
            border-radius: 14px;
            background-color: rgba(31, 48, 102, 0.6);
            color: $second-color;
            font-size: 14px;
            font-weight: bold;
            padding: 12px 6px;
            display: flex;
            margin: 0 10px;
            text-align: center;
            line-height: 16px;
            min-height: 100px;
            align-items: center;
        }

        .colist {
            width: 100%;
            height: 60px;
            display: flex;
            padding: 0 10px;
            align-items: center;
            &.borderR{
                .splitItem,.splitImg{
                    border-right: 1px solid rgba(102, 166, 255, 0.6);
                    height: 30px;
                    &:last-child{
                        border-right: 0;
                    }
                }
            }
            .splitItem {
                display: inline-flex;
                flex-direction: column;
                align-items: center;
                flex: 1;
                justify-content:center;

                &.splitItemx {
                    .text {
                        i {
                            padding-left: 0;
                        }
                    }

                    .more {
                        cursor: pointer;
                        position: relative;
                        padding-right: 10px;
                        white-space: nowrap;

                        .iconfont {
                            position: absolute;
                            right: 6px;
                            bottom: 2px;
                            font-size: 12px;
                            color: #409fff;
                            width: 14px;
                            height: 14px;
                            line-height: 12px;
                        }
                    }
                }
                .label {
                    color: $label-color;
                    font-weight: bold;
                    margin-bottom: 6px;
                    width: 100%;
                    text-align: center;
                    height: 20px;
                    line-height: 20px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    flex:none;
                }

                .text {
                    color: #fff;
                    font-size: 24px;
                    font-weight: bold;
                    width: 100%;
                    text-align: center;
                    &.red{
                        color: #ff5757;
                    }
                    i {
                        font-size: 14px;
                        font-weight: bold;
                        color: $unit-color;
                        padding-left: 8px;
                    }
                }



            }

            .splitImg{
                display: inline-flex;
                align-items: center;
                flex: 1;
                justify-content:center;
                .left{
                    width: 20px;
                    height: 100%;
                    display: inline-flex;
                    align-items: center;
                    margin-right: 10px;
                    img{
                        width: 100%;
                    }
                }
                .right{
                    display: inline-flex;
                    flex-direction: column;
                    .label {
                        color: $label-color;
                        font-weight: bold;
                        width: 100%;
                        height: 20px;
                        line-height: 20px;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                        flex:none;
                    }
                    .text {
                        color: #fff;
                        font-size: 24px;
                        font-weight: bold;
                        width: 100%;
                        i {
                            font-size: 14px;
                            font-weight: bold;
                            color: $unit-color;
                            padding-left: 8px;
                        }
                    }
                }
            }
        }

        .activeinfo{
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
            padding: 20px 24px;
            .right{
                color: $second-color;
                text-align: right;
                &.more{
                    cursor: pointer;
                }
            }
        }
        .infotext {
            display: inline-flex;
            justify-content: center;
            align-items: flex-end;
            .name {
                color: $label-color;
                font-size: 15px;
                font-weight: bold;
            }

            .num {
                color: white;
                font-size: 24px;
                line-height: 26px;
                height: 26px;
                padding: 0 15px 0 10px;
                font-weight: bold;

                &.more {
                    cursor: pointer;
                    position: relative;
                    padding-right: 18px ;
                }

                .iconfont {
                    position: absolute;
                    right: 4px;
                    bottom: 1px;
                    font-size: 12px;
                    color: $label-color;
                    width: 14px;
                    height: 14px;
                    line-height: 12px;
                }
            }

            .unit {
                color: $unit-color;
                font-weight: bold;
            }
        }

        .normalcalSpl {
            display: flex;
            align-items: center;
            margin: 2vh 0;

            .half {
                width: calc(50% - 1px);
                display: inline-flex;
                justify-content: center;
                height: 30px;
                align-items: center;

                .center {
                    display: inline-flex;
                    img{
                        width: 60px;
                    }
                    .right {
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        padding-right: 6px;

                        .em {
                            color: #409fff;
                        }

                        .epc {
                            color: #fff;
                            font-size: 24px;
                            font-weight: bold;

                            line-height: 1;
                            display: inline-flex;
                            width: 100%;
                            align-items: baseline;
                            padding-top: 4px;
                            i{
                                font-size: 16px;
                                color: $unit-color;
                                padding-left: 6px;
                            }
                        }
                    }
                }
            }
        }
        .messageHover {
            position: absolute;
            z-index: 99;
            width: 100%;
            height: 100%;
            right: 0;
            top: 0;
            background-color: rgba(0, 0, 0, 0.3);

            .outsideClose{
                width: 100%;
                height: 100%;
                right: 0;
                top: 0;
                z-index: 1;
            }
            .close {
                position: absolute;
                z-index: 3;
                right: 2.6vw;
                top: 2.2vw;
                color: #ffffff;
                cursor: pointer;
            }
            .title {
                line-height: 24px;
                height: 24px;
                letter-spacing: 2px;
                text-align: center;
                margin:6px 0 10px ;
                color: #e5eeff;
                font-size: 16px;
                font-weight: bold;

                &.flat-title {
                    font-size: 16px;
                    font-weight: normal;
                }
            }
            .desc {
                width: 100%;
                background-color: rgba(0, 0, 0, .7);
                position: absolute;
                bottom: 0;
                left: 0;
                color: #ffffff;
                padding: 20px 20px;
                .dstitle{
                    font-size: 16px;
                    line-height: 24px;
                }
                .text{
                    font-size: 14px;
                    line-height: 24px;
                }
            }
            .centerbox {
                position: absolute;
                z-index: 3;
                left: 26vw;
                top: 14vh;
                width: 48vw;
                height: 36vw;
                background-image: url("../../images/health/健身小屋弹窗.png");
                background-repeat: no-repeat;
                background-size: 100% 100%;
                padding: 2vw 2.5vw;

                >.title {
                    margin: 6px 0 10px;
                }
            }

        }
        .redbox{
            position: absolute;
            z-index: 4;
            width: 15.28vh;
            height: 7.56vh;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #ffffff;
            background-image: url("../../images/building/北苑北组团.png");
            background-repeat: no-repeat;
            background-size: 100% 100%;
            font-size: 15px;
            animation: bounce-in2 .5s ease;
            cursor: pointer;
            img{
                margin-right: 4px;
            }
            &:hover{
                background-image: url("../../images/building/北苑北组团选中.png");
            }
        }
        .yellowbox{
            position: absolute;
            z-index: 4;
            width: 15.28vh;
            height: 7.56vh;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #ffffff;
            background-image: url("../../images/building/东苑组团.png");
            background-repeat: no-repeat;
            background-size: 100% 100%;
            font-size: 15px;
            animation: bounce-in2 .5s ease;
            cursor: pointer;
            img{
                margin-right: 4px;
            }
            &:hover{
                background-image: url("../../images/building/东苑组团框选中.png");
            }
        }
        .greenbox{
            position: absolute;
            z-index: 4;
            width: 15.28vh;
            height: 7.56vh;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #ffffff;
            background-image: url("../../images/building/北苑南组团.png");
            background-repeat: no-repeat;
            background-size: 100% 100%;
            font-size: 15px;
            animation: bounce-in2 .5s ease;
            cursor: pointer;
            img{
                margin-right: 4px;
            }
            &:hover{
                background-image: url("../../images/building/北苑南组团框选中.png");
            }
        }
        .xinbox{
            position: absolute;
            z-index: 4;
            width: 15.28vh;
            height: 7.56vh;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #ffffff;
            background-image: url("../../images/building/新苑组团.png");
            background-repeat: no-repeat;
            background-size: 100% 100%;
            font-size: 15px;
            animation: bounce-in2 .5s ease;
            cursor: pointer;
            img{
                margin-right: 4px;
            }
            &:hover{
                background-image: url("../../images/building/新苑组团框选中.png");
            }
        }
        @keyframes slide-left {
            0% {
                transform: translateX(-100px);
                opacity: 0;
            }
            85% {
                transform: translateX(15px);
                opacity: 1;
            }
            100% {
                transform: translateX(0px);
                opacity: 1;
            }
        }
        @keyframes slide-right {
            0% {
                transform: translateX(100px);
                opacity: 0;
            }
            85% {
                transform: translateX(-15px);
                opacity: 1;
            }
            100% {
                transform: translateX(0px);
                opacity: 1;
            }
        }
        @keyframes bounce-in {
            0% {
                transform: scale(0);
            }
            50% {
                transform: scale(1.2);
            }
            100% {
                transform: scale(1);
            }
        }
        @keyframes bounce-in2 {
            0% {
                transform-origin:left center 0;
                transform: rotateY(90deg);
            }
            100% {
                transform-origin:left center 0;
                transform: rotateY(0deg);
            }
        }
        .bounce-enter-active {
            animation: bounce-in .5s;
        }
        .bounce-leave-active {
            animation: bounce-in .3s reverse;
        }

        .toggle-enter, .toggle-leave-to
        {
            transform: translateY(-80px);
            opacity: 0;
        }
        .toggle-enter-active {
            transition: all .3s ease;
        }
        .toggle-leave-active{
            transition: all .3s ease;

        }

        .fade-enter, .fade-leave-to
        {
            opacity: 0;
        }
        .fade-enter-active {
            transition: all .1s ease;
        }
        .fade-leave-active{
            transition: all .1s ease;

        }

    }

</style>
