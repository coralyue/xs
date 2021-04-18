<!--  -->
<template>
    <div class=''><div class="swout">
      <van-swipe :autoplay="3000" class="swpts">
        <van-swipe-item class="swpt">
          <img src="../assets/banner/banner-005.jpg" />
        </van-swipe-item>
        <van-swipe-item class="swpt">
          <img src="../assets/banner/banner-006.jpg" />
        </van-swipe-item>
        <van-swipe-item class="swpt">
          <img src="../assets/banner/banner-003.jpg" />
        </van-swipe-item>
        <van-swipe-item class="swpt">
          <img src="../assets/banner/banner-004.jpg" />
        </van-swipe-item>
        <van-swipe-item class="swpt">
          <img src="../assets/banner/banner-007.jpg" />
        </van-swipe-item>
        <van-swipe-item class="swpt">
          <img src="../assets/banner/banner-008.jpg" />
        </van-swipe-item>
      </van-swipe>
    </div>
    </div>
</template>

<script>
export default {
  name:"Fenl",
  data() {
    return {
            images: [
        "../assets/banner/banner-005.jpg",
        "../assets/banner/banner-006.jpg",
        "../assets/banner/banner-003.jpg",
        "../assets/banner/banner-004.jpg",
        "../assets/banner/banner-007.jpg",
        "../assets/banner/banner-008.jpg",
      ],
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

.swout {
  width: 100vw;
  height: 18vh;
  padding: 0.3rem 0;
  background: #70f3ff;
  .swpts {
    width: 96vw;
    margin: auto;

    height: 18vh;
    .swpt {
      display: block;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>