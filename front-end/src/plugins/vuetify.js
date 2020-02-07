import Vue from "vue";
import Vuetify from "vuetify/lib";
import '@fortawesome/fontawesome-free/css/all.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import theme from "./theme";
Vue.use(Vuetify, {
    iconfont: 'md'
});

export default new Vuetify({
    theme: {
        themes: {
            light: theme,
        }
    }
});
