import Vue from 'vue'
import {Button} from 'mint-ui'
import VueScroller from 'vue-scroller'
import 'lib-flexible/flexible.js'
import App from './App.vue'
import router from './router'
import store from './store'
import './filters'
import './mock/mockServer'  // 加载这个模块即可

Vue.use(VueScroller) // 内部定义了一个全局的组件标签<scroller>

// 注册全局组件(映射成标签)
Vue.component(Button.name, Button)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: {App},
  template: '<App/>',
  router,
  store
})
