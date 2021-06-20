import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),//vue的包不需要带编译器的，整体的打包文件更小
}).$mount('#app')
