<!--  -->
<template>
  <div id="app">
    <router-view class="rootag" />
    <div id="nav" v-show="showHello">
      <van-tabbar class="navv" v-model="active" active-color="orange" inactive-color="#000">
        <van-tabbar-item to="/" icon="home-o">首页</van-tabbar-item>
        <van-tabbar-item to="/fenl" icon="coupon-o">分类</van-tabbar-item>
        <van-tabbar-item to="/shuj" icon="star-o">书架</van-tabbar-item>
        <van-tabbar-item to="/user" icon="friends-o">我的</van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showHello:true,
      active:0
    };
  },
  components: {},
  props: [],
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},

  methods: {},
  filters: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
};
</script>
<style>
html,
body,
#app {
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
}
html {
  font-size: 13.33333333333vw;
}
#app {
  font-size: 13.33333333333vw;
  display:flex;
}
.navv{
background: #70f3ff;
}
.rootag{
  flex:1;
  overflow:auto;
  flex-direction: column;
}
</style>
