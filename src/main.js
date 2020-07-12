import Vue from 'vue'
import App from './App.vue'

import UUID from "vue-uuid";
import router from './router'

Vue.use(UUID)

Vue.config.productionTip = false

new Vue({
  router,
  render: z => z(App)
}).$mount('#app')
