<!--  -->
<template>
  <div id="mytry">
    <div v-html="add"></div>
    <div>
      <button>上一章</button>
      <button>目录</button>
      <button>下一章</button>
    </div>
    
  </div>
</template>

<script>
import $ from "jquery";
// import { loadBooks } from "../services/books";
export default {
  name: "Hello",
  data() {
    return {
      add: null,
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
  created() {
    // loadBooks({ _id: "606ff8e8fe7f9e4b98d829bf" }).then((res) =>
    //   console.log(res)
    // );
    this.$axios
      .get("https://www.yq-888.com/xiaoshuo/1/138293/13031647.html")
      .then((res) => {
        this.add = $(res.data)
          .find("#content")
          .html();

        console.log(this.add);
      });
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    // var afff=document.getElementById("mytry")
    // console.log(this.add)
    // afff.innerHTML=this.add
  },
};
</script>
<style lang="scss" scoped>
//@import url(); 引入公共css类
#mytry {
  word-wrap: break-word;
  font-size: 0.4rem;
  word-break: normal;
}
</style>
