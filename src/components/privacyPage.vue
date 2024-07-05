<template>
    <div v-if="!pPre && showPrivacyPage" class="container">
      <h1>this is privacyPage!</h1>
      <img
        src="../assets/btn_back.png"
        alt=""
        class="preBtn"
        @click="preButton"
      />
      <img src="../assets/privacy.png" alt="" />
    </div>
    <div v-else>
      <AutionPage/>
    </div>
  </template>
  
  <script>
  import AutionPage from "../components/autionPage.vue";
  export default {
    comments: {
      AutionPage,
    },
    props:[
      'message'
    ],
    data() {
      return {
        pPre: false,
        showPrivacyPage:''
      };
    },
    created(){
      console.log('是否显示privacy'+this.message)
      this.showPrivacyPage = this.message
    },
    methods: {
      preButton() {
        this.pPre = true;
        this.showPrivacyPage = false
      },
    },
  };
  </script>
  
  <style lang="less">
  .container {
    overflow: scroll;
  }
  .container::-webkit-scrollbar {  
    display: none;  
  }
  .preBtn {
    position: fixed;
    bottom: 0;
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
  </style>