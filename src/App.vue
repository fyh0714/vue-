<template>
  <div id="app">
    <!-- 使用AppHeader组件-->
    <app-header></app-header>
    <!-- 使用AppSilder组件 -->
    <app-silderbar></app-silderbar>
    <!-- 使用AppList组件 -->
    <router-view></router-view>
  </div>
</template>

<script>
//1.导入组件
import AppHeader from './components/AppHeader.vue'
import AppSilderbar from './components/AppSilderbar.vue'

export default {
  name: 'app',
  //2.注册局部组件
  components: {
    AppHeader,
    AppSilderbar,
  }
}
</script>

<style>

</style>
