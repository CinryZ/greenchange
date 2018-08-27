import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import vueRouter from 'vue-router'
import mintUI from 'mint-ui'
import router from './js/router.js'
import axios from 'axios'
import './assets/css/cssreset.css'
import './assets/css/animate.min.css'
import './assets/css/mint.css'
import $ from 'zepto'

Vue.use(vueRouter)
Vue.use(mintUI)
// 保存组件之间共享数据
Vue.use(Vuex)

Vue.prototype.$axios=axios;

const store = new Vuex.Store({
	// state相当于data
	// 使用数据 this.$store.state.数据名
  state: {
    count: 0
  },
  // mutations相当于method
  // this.$store.commit('方法名',参数)
  mutations: {
    increment (state) {
      state.count++
    },
    jian(state){
    	state.count--
    }
  },
  // 相当于对数据做一些处理，再使用this.$store.
  getters:{

  }
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
