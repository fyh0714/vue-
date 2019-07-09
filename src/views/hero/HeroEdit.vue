<template>
    <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
        <h2 class="sub-header">编辑英雄</h2>
        <form>
          <div class="form-group">
            <label for="txtName">姓名</label>
            <input type="text" class="form-control" id="txtName" placeholder="姓名" v-model="formData.name">
          </div>
          <div class="form-group">
            <label for="gender">性别</label>
            <!-- <input type="file" id="exampleInputFile"> -->
            <select class="form-control" id="gender" v-model="formData.gender">
                <option value="男">男</option>
                <option value="女">女</option>
            </select>
          </div>
          <!-- button是提交按钮 -->
          <!-- prevent 事件修饰符，阻止默认行为 -->
          <button @click.prevent="update" class="btn btn-success">提交</button>
        </form>
      </div>
</template>

<script>
//组件中获取动态路由中的id --> $router.params.id
//路由规则设置props:true,路由自动把id数据传递给组件
//组件中接收props:['id']
export default {
    props:['id'],
    data() {
        return {
            //封装表单数据
            formData: {
                name:'',
                gender:'男'
            }
        }
    },
    mounted() {
        this.getDataById()
    },
    methods:{
        //组件加载完成，查询数据
        getDataById() {
            this.axios
            .get(`heroes/${this.id}`)
            .then( (res) => {
                const { data,status } = res
                if (status == 200) {
                    this.formData = data
                }else {
                    alert('查询失败')
                }
            })
        },
        update () {
            this.axios
            .put(`heroes/${this.id}`,this.formData)
            .then( (res) => {
                const status = res.status
                if( status ==200 ) {
                    //修改成功跳回列表
                    this.$router.push('/hero')
                }else{
                    alert('修改失败')
                }
            })
        }

    }
}
</script>

<style>
    
</style>
