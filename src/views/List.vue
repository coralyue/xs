<!--  -->
<template>
  <div class="">
    <div v-for="item in chapters" @click="pp(item)" :key="item._id">
      {{ item.title }}
    </div>
    <button @click="more">加载更多</button>
  </div>
</template>

<script>
export default {
  name: "List",
  data() {
    return {
      chapters: [],
      id: 1,
    };
  },
  components: {},
  props: [],
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},

  methods: {
    more() {
      this.id++;
    },
    pp(item) {
      this.$eventBus.$emit("aaa", item.url);
      this.$router.push({ name: "Detail" });
    },
  },
  filters: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.$axios
      .get(
        `http://localhost:3009/api/v1/book_chapters?book=606ff8e8fe7f9e4b98d829c1&page=${this.id}`
      )
      .then((res) => {
        this.chapters = res.data.chapters;
      });
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeDestory() {
    this.pp()
  },
};
</script>
<style lang="scss" scoped>
//@import url(); 引入公共css类
</style>
