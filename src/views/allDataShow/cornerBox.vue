<template>
    <div id="cornerBox">
        <div class="corner1"></div>
        <div class="corner2"></div>
        <div class="corner3"></div>
        <div class="corner4"></div>
        <slot></slot>
    </div>
</template>
<script lang="ts">
    import {Vue, Component} from "vue-property-decorator";


    @Component({
        components: {

        }
    })

    export default class cornerBox extends Vue {


    }
</script>

<style lang="scss" scoped>
    #cornerBox {
        width: calc(100% - 48px);
        position: relative;
        z-index: 1;
        height: 60px;
        margin: 0 24px;
        .corner1 {
            position: absolute;
            z-index: 1;
            background-image: url("../../images/base/边角-1.png");
            top: 0;
            left: 0;
            width: 10px;
            height: 10px;
        }

        .corner2 {
            position: absolute;
            z-index: 1;
            background-image: url("../../images/base/边角-2.png");
            top: 0;
            right: 0;
            width: 10px;
            height: 10px;
        }

        .corner3 {
            position: absolute;
            z-index: 1;
            background-image: url("../../images/base/边角-3.png");
            bottom: 0;
            left: 0;
            width: 10px;
            height: 10px;
        }

        .corner4 {
            position: absolute;
            z-index: 1;
            background-image: url("../../images/base/边角-4.png");
            bottom: 0;
            right: 0;
            width: 10px;
            height: 10px;
        }
    }
</style>
