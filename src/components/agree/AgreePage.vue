<template>
  <div class="agreePage">
    <div class="agreeContent">
      <!-- this is the AgreePage -->
      <div class="qiu1Box">
        <img src="@/assets/qiu1.png" alt="" class="qiu1" />
      </div>
      <div class="rulesBox">
        <img src="@/assets/rules.png" alt="" class="rulesImage" />
        <div class="privacyBox">
          <input
            type="checkbox"
            v-model="isAgree"
            @input="handleInputCheckBox"
          />
          <span class="bottomText" style="color: black">我已同意</span>
          <span
            class="privacySpan"
            @click="toPrivacy"
            style="margin-left: 0; cursor: pointer;color: blue;"
            >《隐私保护条款》</span
          >
        </div>
        <div class="agreeBtnBox">
          <img
            src="@/assets/btn_agree.png"
            alt=""
            class="agreeBtn"
            @click="gotoBookPage"
          />
        </div>
        <img src="@/assets/qiu2.png" alt="" class="qiu2" />
      </div>
    </div>
    <div class="preBox">
      <img
        src="@/assets/btn_back.png"
        alt=""
        class="preButton"
        @click="backToHome"
      />
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  name: "AgreeContent",
  data() {
    return {
      isAgree: false,
      haveBookMess: false,
      isVisible: true,
    };
  },
  created() {
    console.log("this is agreePage");
  },
  methods: {
    backToHome() {
      this.$router.push("/");
    },
    toPrivacy() {
        console.log("gotoPrivacy!");
        this.$router.push("/privacy");
    },
    gotoBookPage() {
      // this.$router.push("/book");
      // console.log(this.isAgree)
      if (!this.isAgree) {
        // Dialog({message:'请先同意《隐私保护条款》！'})
        Toast.fail("请先同意《隐私保护条款》！");
      } else {
        this.$router.push("/book");
      }
    },
    handleInputCheckBox(event) {
      this.isAgree = event.target.checked;
      console.log(this.isAgree);
    },
  },
};
</script>

<style lang="less">
.agreePage::-webkit-scrollbar {
  display: none;
}
.agreePage {
  width: 100%;
  height: 100%;
  overflow: scroll;
}
.agreeContent {
  display: flex;
  justify-content: flex-end;
  overflow: visible;
  .qiu1Box {
    position: absolute;
    z-index: 10;
    width: 2rem;
    // height: 2rem;
    .qiu1 {
      height: 2rem;
    }
  }
}
.preBox {
  width: 2rem;
  // background-color: #29cdb7;
}
.preButton {
  animation: floatBackAndForth 2s ease-in-out infinite;
  transform-origin: center bottom;
  position: relative;
  left: 0.2rem;
  top: 0.1rem;
  width: 1rem;
  // z-index: 10;
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
.rulesBox {
  display: flex;
  position: relative;
  flex-direction: column;
  // justify-content: center;
  align-items: center;
  margin-left: 0.4rem;
  margin-right: 0.4rem;
  width: 100%;
  height: 10rem;
  padding-top: 1rem;
  margin-top: 1rem;
  border-radius: 0.6rem;
  background-color: #57aad1cf;
  .rulesImage {
    width: 6rem;
    height: auto;
  }
  .privacyBox {
    margin-top: 0.6rem;
  }
  .agreeBtnBox {
    margin-top: 0.5rem;
    .agreeBtn {
      width: 3.5rem;
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
.qiu2 {
  width: 1.1rem;
  position: absolute;
  right: -0.2rem;
  bottom: -0.7rem;
}
</style>