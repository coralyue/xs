<!--  -->
<template>
    <div class=''>
      <van-field name="uploader" label="文件上传">
        <template #input>
        <van-uploader v-model="uploader" />
        </template>
      </van-field>
      <div>{{uploader}}</div>
    </div>
</template>

<script>
export default {
  name:"Login",
  data() {
    return {
      uploader: [],
    };
  },
  components: {},
  props:[] ,
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  
  methods: {
      
  },
  filters:{
      
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
      
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
      
  },
}
</script>
<style lang='scss' scoped>
    //@import url(); 引入公共css类
</style>