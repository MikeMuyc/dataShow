import {PluginObject} from "vue";

declare module 'vue-echarts' {
    export interface echartsOptions {
        options: object;
        autoresize: boolean;
    }
}
/*declare module '@suc/vue-ol' {
    import { PluginObject } from 'vue';
    const VueOl: PluginObject<any>;
    export default VueOl;
}*/
/*declare module '@suc/h5-yuv-player' {
    import { PluginObject } from 'vue';
    const h5YuvPlayer: PluginObject<any>;
    export default h5YuvPlayer;
}*/
