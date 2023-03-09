import Vue from 'vue'
import App from './App.vue'
//밑에랑  import router from './router/index.js' 랑 똑같다 

import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  // key와 value가 같으면 생략이 가능하다
  router,
  store,
  render: h => h(App)
}).$mount('#app')
