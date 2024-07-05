<template>
    <div class="bottomNav" v-if="!showAution">
      <div class="bgLayer bgImage">
        <button :style="CN" @click="cnBtn">中文</button>
        <button :style="EN" @click="cnBtn">EN</button>
      </div>
      <div class="bgLayer bg2"></div>
      <div class="btnImage">
        <button class="enter" @click="enterButton"></button>
      </div>
    </div>
    <div v-else>

      <AutionPage/>
    </div>
  </template>
  
  <script>
  import AutionPage from '../components/autionPage.vue';
  export default {
    name:"bottomPage",
      components:{
        AutionPage
      },
    data() {
      return {
        transitionColor: true,
        isDark: true,
        showAution:false
      };
    },
    computed: {
      CN() {
        return {
          backgroundColor: this.isDark ? "#2474c4" : "white",
          color: this.isDark ? "white" : "#2474c4",
          transition: "background-color 0.3s, color 0.3s",
          border: "3px solid #2474c4",
          borderRadius: "10px",
          position: "absolute",
          right: "2rem",
          fontSize: "0.4rem",
          // padding:'0.2rem'
        };
      },
      EN() {
        return {
          backgroundColor: this.isDark ? "white" : "#2474c4",
          color: this.isDark ? "#2474c4" : "white",
          transition: "background-color 0.3s, color 0.3s",
          border: "3px solid #2474c4",
          borderRadius: "10px",
          position: "absolute",
          right: "1rem",
          fontSize: "0.45rem",
          // padding:'0.2rem'
        };
      },
    },
    methods: {
      enterButton() {
        console.log("enter has been clicked!");
        this.showAution = true
        console.log(this.showAution)
      },
      cnBtn() {
        // console.log(document.getElementById.style)
        this.isDark = !this.isDark;
      },
    },
  };
  </script>
  
  <style lang="less">
  .bottomNav {
    position: relative;
    width: 14rem;
    height: 10rem;
    //   padding: 0.4rem;
    //   background-color: #c6e0eb;
    margin: auto;
    .bgLayer {
      position: absolute;
      top: 0;
      left: 0;
      // width: 100%;
      width: 14rem;
      height: 6rem;
      background-size: cover;
    }
    .bgImage {
      background-repeat: no-repeat;
      background-size: contain;
      height: 8rem;
      // width: 100%;
      width: 14rem;
      // padding: 10px;
      overflow: hidden;
      background-image: url("../assets/slogan.png");
      z-index: 2;
    }
    .bg2{
      background-image: url("../assets/hand.png");
      z-index: 1;
    }
    .enter {
      background-image: url('../assets/btn_enter.png');
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
      width: 7rem; 
      height: 2rem; 
      border:none;
      position: absolute;
      bottom: 0.6rem;
      left: 28%;
      animation: floatBackAndForth 2s ease-in-out infinite;
      transform-origin: center bottom;
      z-index: 3;
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