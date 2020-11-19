import flash from './ripples.vue';
import twinkle from './twinkle.vue';
import track from './track.vue';
import migrate from './migrate.vue';
import radar from './radar.vue';

function plugin (Vue) {
    if (plugin.installed) {
        return
    }
    plugin.installed = true;

    Vue.component(flash.name, flash);
    Vue.component(twinkle.name, twinkle);
    Vue.component(track.name, track);
    Vue.component(migrate.name, migrate);
    Vue.component(radar.name, radar);
}

export default plugin;

export {
    flash,
    twinkle,
    track,
    migrate,
    radar,
    plugin as install
}
