<!--  -->
<template>
  <div class="">
    <div class="books">
      <div class="book" v-for="item in images" :key="item.id">
        <img :src="item.coverimg" alt="test"/>
        <button :class="item.choose?'test1':'test2'" @click="heart(item)">收藏</button>
      </div>
    </div>
  </div>
</template>

<script>
import {addFavs} from "../services/heart";
export default {
  name: "User",
  data() {
    return {
      images: [
        {id:1000001,coverimg:"https://z3.ax1x.com/2021/04/10/cazWgU.jpg",choose:true},
        {id:1000002,coverimg:"https://z3.ax1x.com/2021/04/10/cazXvD.jpg",choose:true},
        {id:1000003,coverimg:"https://z3.ax1x.com/2021/04/10/cdSC5t.jpg",choose:true},
        {id:1000004,coverimg:"https://z3.ax1x.com/2021/04/10/cdSk28.jpg",choose:true}
      ],
    };
  },
  components: {},
  props: [],
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},

  methods: {
    heart(item){
      item.choose=!item.choose;
      addFavs(item.id)
    }
  },
  filters: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
};
</script>
<style lang="scss" scoped>
//@import url(); 引入公共css类

.test2{
  background: red;
}
.books{
  display: flex;
  .book{
    width: 2.5rem;
    height:3rem ;
    img{
      width: 90%;
      display: block;
      margin: .3rem;
    }
  }
}
</style>
