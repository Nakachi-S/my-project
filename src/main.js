// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'onsenui/css/onsenui.css'
import 'onsenui/css/onsen-css-components.css'

import Vue from 'vue'
import VueOnsen from 'vue-onsenui'
import store from './store'
import router from './router'
import App from './App'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import api from './api'  // <---追加
import VueQriously from 'vue-qriously'

Vue.config.productionTip = true

Vue.use(VueOnsen)
Vue.use(Vuetify)
Vue.use(api) // <---追加
Vue.use(VueQriously)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  vuetify: new Vuetify(),
  template: '<App/>',
  components: { App }
})
