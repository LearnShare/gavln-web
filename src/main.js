import Vue from 'vue';
import Element from 'element-ui';
import vClickOutside from 'v-click-outside';

import router from './router';
import store from './store';
import filters from './filters/index';

import App from './app/index.vue';

import './style/base.scss';
// Element-UI custom theme
import './style/theme/index.css';
// Element-UI reset styles
import './style/reset/index.scss';
// VueContext custom style
import './style/vue-context.scss';

Vue.use(Element);
Vue.use(vClickOutside);
Vue.use(filters);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
