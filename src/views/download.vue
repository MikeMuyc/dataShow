<template>
    <div id="simple">
        <div class="back" @click="$router.push({name:'数据展示'})">返回大屏</div>
        <Button type="primary" @click="download1">视频控件下载</Button>
        <Button type="primary" @click="download2">谷歌浏览器下载</Button>

    </div>
</template>
<script lang="ts">
    import {Vue, Component, Prop} from "vue-property-decorator";

    import {Button} from 'iview';

    @Component({
        components: {Button}
    })

    export default class reviewBox extends Vue {


        download1(){
            window.location.href = `http://111.0.124.231:9988/esayud/basic/download/file?id=5a9e76b706ce4fb4b20c43156d7949e9`
        }
        download2(){
            window.location.href = `http://111.0.124.231:9988/esayud/basic/download/file?id=76ca5e53540b49a986548ede60e3fd9f`
        }



    }
</script>

<style lang="scss" scoped>
    #simple{
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-around;
        position: relative;
        .back{
            position: absolute;
            left: 20px;
            top: 20px;
            cursor: pointer;
            text-decoration: underline;
        }


    }
</style>
