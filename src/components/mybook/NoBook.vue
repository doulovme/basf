<template>
  <div class="noBookContent">
    <div class="myTitleBox"></div>
    <div class="textBox">
        <h2>未找到预约信息</h2>
        <img src="@/assets/gzh.png" alt="" class="gzh">
    </div>
    <div class="preBtnBox">
      <img src="@/assets/btn_back.png" alt="" class="preBtn" @click="backToBook" />
    </div>
    <div class="qiu2Box">
      <img src="@/assets/qiu2.png" alt="" class="qiu2" />
    </div>
  </div>
</template>

<script>
export default {
  created() {
    const info = this.$route.query.info;
    console.log(info);
  },
  methods:{
    backToBook(){
      this.$router.push('/book')
    }
  }
};
</script>

<style lang="less">
.noBookContent {
  display: flex;
  flex-direction: column;
  //   justify-content: center;
  // align-items: center;
  position: relative;
  //   background-color: #73bae9;
  width: 100%;
  height: 14rem;
  padding: 0;
  margin: 0;
  background-image: url("@/assets/foot_1.png");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center bottom;
  .myTitleBox {
    width: 100%;
    height: 4rem;
    // background-color: #fff;
    background-image: url("@/assets/my_title.png");
    background-repeat: no-repeat;
    background-size: cover;
  }
  .textBox {
    margin-top: 1rem;
    width: 100%;
    // height: 8rem;
    // background-color: #5bb4cc;
    // left: 50%;
    text-align: center;
    .gzh{
        width: auto;
        height: 4rem;
    }
  }
  .qiu2Box {
    position: absolute;
    bottom: 0.4rem;
    right: 0;
    .qiu2 {
      width: 1.5rem;
      height: 1.5rem;
    }
  }
  .preBtnBox {
    position: absolute;
    left: 0;
    bottom: 0;
    .preBtn {
      width: 1rem;
      padding: 0.2rem;
      animation: floatBackAndForth 2s ease-in-out infinite;
      transform-origin: center bottom;
    }
    @keyframes floatBackAndForth {
      0%,
      100% {
        transform: scale(1);
      }
      50% {
        transform: scale(1.05);
      }
    }
  }
}
</style>