//路由模块


import Vue from 'vue'
//导入vue-router
import VueRouter from 'vue-router'
//注册vuerouter插件
Vue.use(VueRouter)

//导入HeroList组件
import HeroList from './views/hero/HeroList.vue'
import WeaponList from './views/weapon/WeaponList.vue'
import EquipList from './views/equip/EquipList.vue'
import HeroAdd from './views/hero/HeroAdd.vue'
import HeroEdit from './views/hero/HeroEdit.vue'

//创建路由对象
const router = new VueRouter({
  //linkActiveClass:当浏览器路由地址#/hero/add 包含router-link生成的a标签的href地址，添加类样式
  linkActiveClass:'active',
  //linkExactActiveClass:当浏览器路由地址#/hero和router-link生成的a标签的href 精确匹配的时候会添加类样式
  // linkExactActiveClass:'active',
  routes:[
    //redirect:重定向
    {path:'/',redirect:'/hero'},
    {name:'hero',path:'/hero',component:HeroList},
    {name:'weapon',path:'/weapon',component:WeaponList},
    {name:'equip',path:'/equip',component:EquipList},
    {name:'heroadd',path:'/hero/add',component:HeroAdd},
    {name:'heroedit',path:'/hero/edit/:id',component:HeroEdit},
  ]
})
export default router