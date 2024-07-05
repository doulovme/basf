<template>
  <div class="home">
    
    <div class="changeContent">
      <div class="sloganBox">
        <!-- <img src="@/assets/slogan.png" alt="" class="slogan" /> -->
        <!-- <img src="@/assets/hand.png" alt="" class="hand" /> -->
        <img src="@/assets/slogan.png" alt="" class="sloganImage">
      </div>

      <div class="enterBox">
        <img
          src="@/assets/btn_enter.png"
          alt=""
          class="enterIBtn"
          @click="enterAgree"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  data() {
    return {};
  },
  methods: {
    enterAgree() {
      console.log("进入agreePage");
      this.$router.push("/agree");
    },
  },
};
</script>

<style lang="less">
.home {
  // overflow: visible;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  //背景图
  background-image: url("@/assets/bg_index.png");
  background-size: cover;
  background-position: 25% 0;
  background-repeat: no-repeat;
  // background-color: #ebf1dc;
}
.cnBtn,
.enBtn {
  width: 1rem;
  height: 0.5rem;
  font-size: 0.2rem;
  margin: 0.02rem;
  text-align: center;
  border-radius: 0.6rem;
}
.changeContent {
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  width: 100%;
  height: 15rem;
    // background-color: #88fa88;

  .sloganBox {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 9rem;
      //背景图
  // background: url('@/assets/slogan.png') no-repeat 50% 0 ;
    // background-color: #2fc42c;
    // opacity: 0.2;
    .sloganImage{
      position: absolute;
      top: 45%;
      width: 80%;
    }
  }
  .slogan {
    position: absolute;
    width: 100%;
    height: auto;
    // display: block;
  }
  .hand {
    width: 100%;
    height: auto;
  }
  .enterIBtn {
    width: 4rem;
    height: 2rem;
    // margin-bottom: 1rem;

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
.enterBox{
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>