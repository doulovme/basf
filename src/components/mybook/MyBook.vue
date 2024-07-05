<template>
  <div class="myBookContent">
    <div class="preBtnBox">
      <img src="@/assets/btn_back.png" alt="" class="preBtn" @click="gotoBookPage" />
    </div>
  </div>
</template>

<script>
export default {
    name:"MyBook",
    methods: {
        gotoBookPage(){
            this.$router.push('/book')
        }
    }
};
</script>

<style lang="less">
.myBookContent {
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 10rem;
  background-image: url("@/assets/my_title.png");
  background-size: contain;
  background-repeat: no-repeat;
  .preBtnBox {
    position: absolute;
    width: 2rem;
    left: 0.2rem;
    top: 50%;
    transform: translateY(-50%);
  }
  .preBtn{
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
</style>