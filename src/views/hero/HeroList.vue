<template>
    <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
        <h2 class="sub-header">英雄列表</h2>
        <!-- <a class="btn btn-success" href="{/heroadd}">添加</a> -->
        <router-link class="btn btn-success" :to="{name:'heroadd'}">添加</router-link>
        <div class="table-responsive">
          <table class="table table-striped">
            <thead>
              <tr>
                <th>#</th>
                <th>姓名</th>
                <th>性别</th>
                <th>操作</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item,index) in list" :key="item.id">
                <td>{{ index + 1}}</td>
                <td>{{ item.name }}</td>
                <td>{{ item.gender }}</td>
                <td>
                  <router-link :to="{ name:'heroedit',params: { id: item.id }}">编辑</router-link>
                  &nbsp;&nbsp;
                  <a href="javascript:" @click="del(item.id)">删除</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
</template>

<script>
//1.英雄列表
//1.1发送请求获取列表
//1.2渲染列表
export default {
    data () {
      return {
        //储存获取到的列表数据
        list:[]
      }
    },
    mounted() {
      //组件加载完成之后，发送请求
      this.loadData()
    },
    methods: {
      //加载数据
      loadData(){
        this.axios
        .get('http://localhost:3000/heroes')
        .then( (res) => {
          const { data,status } = res
          if(status === 200) {
            //查询成功
            this.list = data
          }else {
            alert('查询失败')
          }
        })
        .catch( (err) => {
          alert('服务器异常' + err)
        })
      },
      //删除数据
      del(id) {
        if(!confirm('确定删除？')){
          return false
        }
        this.axios
        .delete(`http://localhost:3000/heroes/${id}`)
        .then( (response) => {
          const status = response.status
          if(status === 200) {
            //删除成功，重新加载列表
            this.loadData()
          }else {
            alert('删除失败')
          }
        })
        .catch( (err) => {
          alert('服务器异常' + err)
        })
      }
    }
}
</script>

<style>
    
</style>
