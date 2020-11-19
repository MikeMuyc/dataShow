import point from './point.vue'
import shape from './shape.vue'
import route from './route.vue'
import measure from './measure.vue'
import plot from './plot.vue'

function plugin (Vue) {
    if (plugin.installed) {
        return
    }
    plugin.installed = true;

    Vue.component(point.name, point);
    Vue.component(shape.name, shape);
    Vue.component(route.name, route);
    Vue.component(measure.name, measure);
    Vue.component(plot.name, plot);
}

export default plugin;

export {
    point,
    shape,
    route,
    measure,
    plot,
    plugin as install
}
