<template>
    <div id="dataXbox" :style="{backgroundImage:`url(${background})`}">
        <div class="dataTitle">{{title}}</div>
        <div class="dataContent">
            <slot></slot>
        </div>
    </div>
</template>
<script>
    export default {
        name: "dataXbox",
        props: {
            title:{
                type:String,
            },
            background:{}
        },

    }
</script>

<style lang="scss" scoped>
    #dataXbox{
        width: 100%;
        height: 100%;
        padding: 12px 12px 4px 12px;
        color: #ffffff;

        background-repeat: no-repeat;
        background-size: 100% 100%;
        position: relative;
        .dataTitle{
            background-image: url("../assets/xboxTitle.png");
            background-repeat: no-repeat;
            background-size: 100% 100%;
            padding-left: 28px;
            width: 100%;
            height: 36px;
            line-height: 36px;
            font-size: 16px;
        }
        .dataContent{
            width: 100%;
            height: calc(100% - 36px);
            padding: 5px;
        }

    }

</style>
