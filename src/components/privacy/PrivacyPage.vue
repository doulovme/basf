<template>
  <div class="privacyContent">
    <!-- this is the PrivacyPage -->
    <div class="privacyBox">
      <!-- <img src="@/assets/privacy.png" alt="" class="privacyImage" /> -->
      <div class="privacyText">
        这里是用户隐私条款
      </div>
    </div>
    <div class="agreeBox">
      <input type="checkbox" @click="autoBack" />
        <span style="margin: 0; color: black;">我同意</span>
        
      </div>
    <div class="prePBox">
      <img
        src="@/assets/btn_back.png"
        alt=""
        class="prePButton"
        @click="backToAgree"
      />
    </div>
  </div>
</template>
  
  <script>
export default {
  name: "AgreeContent",
  data() {
    return {
      status: true,
    };
  },
  created() {
    console.log("this is agreePage");
  },
  methods: {
    backToAgree() {
      this.$router.push("/agree");
    },
    autoBack() {
      setTimeout(() => {
        console.log("返回agreePage!");
        this.$emit("update-status", this.status);
        this.$router.push("/agree");
      }, 1000);
    },
  },
};
</script>
  
  <style lang="less">
.privacyContent {
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: column;
  height: 15rem;
}
.prePBox {
  position: absolute;
  top: 100%;
  left: 0;
}
.prePButton {
  margin-left: 0.5rem;
  width: 1rem;
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
.privacyBox::-webkit-scrollbar {
  display: none;
}
.privacyBox {
  display: flex;
  justify-content: center;
  margin-left: 0.4rem;
  margin-right: 0.4rem;
  width: 100%;
  overflow: scroll;
  border-radius: 0.6rem;
  .privacyText {
  }
  .agreeBox {
    position: absolute;
    bottom: 0;
  }
}
</style>