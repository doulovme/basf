<template>
  <div v-if="!pre" class="container">
    <img
      src="../assets/btn_back.png"
      alt=""
      class="preButton"
      @click="preButton"
      v-if="autionPre"
    />

    <div class="aution" v-if="!toPrivacy && !toPrivacy">
      <img src="../assets/qiu1.png" alt="" class="rightTop" />
      <input
        type="checkbox"
        name=""
        class="checkBox"
        @click="privacyAgreeButton"
        v-model="isChecked"
      />
      <span class="bottomText">我已同意</span>
      <span class="privacy" @click="showPrivacy">《隐私保护条款》</span>
      <button class="btnAgree" @click="btnAgree"></button>
    </div>
    <div class="privacyContent" v-else>
      <PrivacyPage :message="toPrivacy"/>
    </div>
  </div>
  <div v-else>
    <BottomNav/>
  </div>
</template>
  
  <script>
import BottomNav from "./bottomNav.vue";
import PrivacyPage from "../components/privacyPage.vue";
import { Toast } from "vant";
export default {
  name: "autionPage",
  components: {
    BottomNav,
    PrivacyPage,
  },
  data() {
    return {
      pre: false,
      toPrivacy: false,
      autionPre: true,
      isChecked: false,
    };
  },
  beforeCreate(){
    this.toPrivacy = false
  },
  created(){
    console.log('是否前往privacy'+this.toPrivacy)
  },
  methods: {
    preButton() {
      this.pre = true;
    },
    showPrivacy() {
      this.toPrivacy = true;
      this.autionPre = false;
      console.log(this.autionPre);
    },
    privacyAgreeButton() {
      this.isAgreePrivay = true;
    },
    btnAgree() {
      if (!this.isChecked) {
        Toast.fail("请先同意隐私保护条款");
      } else if (this.isChecked) {
        this.isChecked = false;
        console.log("下一步操作");
      }
    },
  },
};
</script>
  
  <style lang="less">
.container {
  position: relative;
  margin: auto;
  width: 14rem;
  height: 14rem;
  //   overflow: hidden;
  // background-color: #eac0c0;
}
.preButton {
  position: absolute;
  bottom: 70%;
  left: 0.1rem;
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
.aution {
  background-image: url("../assets/rules.png");
  background-repeat: no-repeat;
  background-size: contain;
  background-size: 6rem;
  background-position: center top;

  position: relative;
  width: 10rem;
  height: 10rem;
  margin: auto;
  border-radius: 10%;
  background-color: rgba(0, 157, 255, 0.639);
  .btnAgree {
    background-image: url("../assets/btn_agree.png");
    background-size: cover;
    background-repeat: no-repeat;

    background-position: center center;
    width: 6rem;
    height: 2rem;
    border: none;
    border-radius: 0.4rem;
    background-color: rgba(101, 148, 178, 0);
    position: absolute;
    bottom: 0.5rem;
    left: 20%;
    animation: floatBackAndForth 2s ease-in-out infinite;
    transform-origin: center bottom;
  }
  .checkBox {
    position: absolute;
    bottom: 3.1rem;
    left: 30%;
  }
  .bottomText {
    position: absolute;
    bottom: 3rem;
    left: 35%;
    color: #fff;
  }
  .privacy {
    position: absolute;
    bottom: 3rem;
    left: 50%;
    color: #fff;
  }
  .rightTop {
    position: absolute;
    right: 0;
  }
}
</style>