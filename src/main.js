//程序的入口
//加载vue模块 commonJS的模块化语法
// const Vue = require('vue')

//ES6中模块化语法，导入模块
import Vue from 'vue'
//根组件
import App from './App.vue'
//引入外部样式
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './assets/css/index.css'

//提示当前处在开发模式，false不提示
Vue.config.productionTip = false
//导入router模块
import router from './router.js'
new Vue({
  //render：渲染
  render: createEkement => createEkement(App),
  router
  //$mount:挂载
}).$mount('#app')
