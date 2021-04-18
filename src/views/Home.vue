<!--  -->
<template>
  <div class="home">
    <div class="top">
      <img src="../assets/shanhu-logo.png" alt="珊瑚LOGO" />
      <span>珊瑚阅读，欢迎您！</span>
    </div>
    <div class="search">
      <input type="text" placeholder="请输入书名" /><button>搜 书</button>
    </div>
    <p class="tips">PS:书名宁可少字也不要错字。</p>
    
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      
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
<style lang="scss" scoped>
.home{
  background: #70f3ff;
}
.top {
  display: flex;
  background: #70f3ff;
  align-items: center;
  img {
    width: 3rem;
    margin: 0.1rem;
    display: block;
    height: 1.2rem;
    margin-left: 0.2rem;
  }
  span {
    font-size: 0.4rem;
    margin: 0.1rem;
    margin-left: 0.3rem;
    vertical-align: middle;
    color: orange;
  }
}

.search {
  width: 6.9rem;
  height: 1.2rem;
  margin: 0.05rem 0.3rem;
  display: flex;
  align-items: center;
  button {
    background: orange;
    font-size: 0.3rem;
    font-weight: 600;
    border: 0;
    // background: none;
    outline: none;
    color: white;
    height: 0.8rem;
    border-radius: 0 50% 50% 0;
  }
  input {
    flex: 1;
    height: 0.7rem;
    border: 0.05rem solid #cecece;
    text-indent: 0.3rem;
    border-radius: 0.35rem 0 0 0.35rem;
    background: none;
    outline: none;
    margin: 0.1rem 0.08rem;
    font-size: 0.3rem;
  }
}
.tips {
  font-size: 0.3rem;
  width: 7.5rem;
  text-align: center;
  text-indent: -0.5rem;
  margin-top: -0.005rem;
  line-height: 0;
  color: orange;
}
</style>
