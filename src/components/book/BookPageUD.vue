<template>
  <div class="bookPageUD">
    <div class="content">
      <div class="SHImageBix">
        <img
          v-if="status[0] == 0"
          src="@/assets/enter_1_0.png"
          alt=""
          class="shanghai"
          @click="bookSH"
        />
        <img
          v-else-if="status[0] == 1"
          src="@/assets/enter_1_1.png"
          alt=""
          class="shanghai"
          @click="bookSH"
        />
        <img
          v-else-if="status[0] == 2"
          src="@/assets/enter_1_2.png"
          alt=""
          class="shanghai"
          @click="bookSH"
        />
      </div>
      <div class="BJImageBox">
        <img
          v-if="status[1] == 0"
          src="@/assets/enter_2_0.png"
          alt=""
          class="beijing"
          @click="bookBJ"
        />
        <img
          v-else-if="status[1] == 1"
          src="@/assets/enter_2_1.png"
          alt=""
          class="beijing"
          @click="bookBJ"
        />
        <img
          v-else-if="status[1] == 2"
          src="@/assets/enter_2_2.png"
          alt=""
          class="beijing"
          @click="bookBJ"
        />
      </div>
      <div class="CQImageBox">
        <img
          v-if="status[2] == 0"
          src="@/assets/enter_3_0.png"
          alt=""
          class="chongqing"
          @click="bookCQ"
        />
        <img
          v-if="status[2] == 1"
          src="@/assets/enter_3_1.png"
          alt=""
          class="chongqing"
          @click="bookCQ"
        />
        <img
          v-if="status[2] == 2"
          src="@/assets/enter_3_2.png"
          alt=""
          class="chongqing"
          @click="bookCQ"
        />
      </div>
      <div class="ZJImageBox">
        <img
          v-if="status[3] == 0"
          src="@/assets/enter_4_0.png"
          alt=""
          class="zhanjiang"
          @click="bookZJ"
        />
        <img
          v-if="status[3] == 1"
          src="@/assets/enter_4_1.png"
          alt=""
          class="zhanjiang"
          @click="bookZJ"
        />
        <img
          v-if="status[3] == 2"
          src="@/assets/enter_4_2.png"
          alt=""
          class="zhanjiang"
          @click="bookZJ"
        />
      </div>
      <div class="textBox">
        <span>点击上方按钮开启预约</span>
      </div>
      <div class="myBookBox">
        <button class="myBookBtn" @click="gotoMyBook">我的预约</button>
      </div>
      <div class="preBox">
        <img
          src="@/assets/btn_back.png"
          alt=""
          class="preBtn"
          @click="backToHome"
        />
      </div>
      <div class="qiu2Box">
        <img src="@/assets/qiu2.png" alt="" class="qiu2" />
      </div>
    </div>
  </div>
</template>

<script>
import { postCityStatus } from "@/request/api/cqApi";
import { Toast } from 'vant';
export default {
  data() {
    return {
      isVisible: "true",
      status: [],
    };
  },
  created() {
    postCityStatus()
      .then((response) => {
        // console.log(response)
        const citys = response.data.data.citys;
        // console.log(citys);
        citys.forEach((item) => {
          this.status.push(item.status);
        });
      })
      .catch((err) => {
        console.error(err);
      });
  },
  methods: {
    bookSH() {
      if(this.status[0]==0){
        Toast('活动未开启！')
      }else if(this.status[0]==1){
        this.$router.push("/bookdetail");
      }else if(this.status[0]==2){
        Toast('活动已结束！')
      }     
    },
    bookBJ() {
      if(this.status[1]==0){
        Toast('活动未开启！')
      }else if(this.status[1]==1){
        this.$router.push("/bookdetail");
      }else if(this.status[1]==2){
        Toast('活动已结束！')
      }     
    },
    bookCQ() {
      if(this.status[2]==0){
        Toast('活动未开启！')
      }else if(this.status[2]==1){
        this.$router.push("/bookdetail");
      }else if(this.status[2]==2){
        Toast('活动已结束！')
      }     
    },
    bookZJ() {
      if(this.status[3]==0){
        Toast('活动未开启！')
      }else if(this.status[3]==1){
        this.$router.push("/bookdetail");
      }else if(this.status[3]==2){
        Toast('活动已结束！')
      }     
    },
    gotoMyBook() {
      console.log("前往我的预约页面！");
      this.$router.push({ path: "/nobook", query: { info: this.isVisible } });
    },
    backToHome() {
      this.$router.push("/");
    },
  },
};
</script>

<style lang="less">
.content {
  display: flex;
  position: relative;
  //   justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 14rem;
  background-image: url("@/assets/foot1.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: 0 bottom;

  //返回按钮
  .preBox {
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
  .qiu2Box {
    position: absolute;
    right: 0;
    bottom: 0.4rem;
    .qiu2 {
      width: 1rem;
      padding: 0.2rem;
    }
  }

  //四张图片
  .shanghai,
  .beijing,
  .chongqing,
  .zhanjiang {
    width: 6rem;
  }
  .textBox {
    margin-top: 1rem;
    color: rgba(8, 117, 164, 0.886);
  }
  .myBookBox {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    right: -40%;
    padding-right: 0.4rem;
    .myBookBtn {
      border-radius: 50%;
      width: 1.3rem;
      height: 1.3rem;
      background-color: #1eb2e3b8;
      border: none;
      text-align: center;
      font-size: 0.4rem;
      color: white;
    }
  }
}
</style>