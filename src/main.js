//程序的入口
//加载vue模块 commonJS的模块化语法
// const Vue = require('vue')

//ES6中模块化语法，导入模块
import Vue from 'vue'
//根组件
import App from './App.vue'

import axios from 'axios'
//让所有vue实例都具有一个属性axios，给vue构造函数的原型增加成员
Vue.prototype.axios = axios
//配置axios基地址，调用请求方式的时候get(url)，会自动把请求方法中的路径拼接到基地址后面
axios.defaults.baseURL ='http://localhost:3000/'
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
