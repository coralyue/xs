<!--  -->
<template>
  <div class="">
    <div id="mytry" v-html="add"></div>
    <div class="boot">
      <button>上一章</button>
      <button>目录</button>
      <button>下一章</button>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
export default {
  name: "Detail",
  data() {
    return {
      url: {},
      add: null,
      // uu:""
    };
  },
  components: {},
  props: [],
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},

  methods: {
    fn(v) {
      // console.log(v)
      const vv=v.replace("https","http")

      // console.log(vv)
      this.$axios.get(vv).then((res) => {
        // console.log(res.data)
      this.add = $(res.data)
        .find("#content")
        .html();
    });
  },
    },
  
  filters: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.$eventBus.$on("aaa", this.fn);
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeDestory(){
    
  }
};
</script>
<style lang="scss" scoped>
//@import url(); 引入公共css类
#mytry {
  word-wrap: break-word;
  font-size: 0.4rem;
  word-break: normal;
}
.boot{
  font-size:0.4rem;
}
</style>
