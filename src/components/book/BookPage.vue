<template>
  <div class="bookContent">
    <!-- this is the AgreePage -->
    <div class="preBox">
      <img
        src="@/assets/btn_back.png"
        alt=""
        class="preButton"
        @click="toAgree"
      />
    </div>
    <div class="bookBox">
      <!-- <img src="@/assets/foot1.png" alt="" class="bookImage" /> -->
      <div class="bookBtnBox">

        <img
          v-if="!isBooked"
          src="@/assets/enter_3_1.png"
          alt="预约中"
          class="cqImage"
          @click="bookCQ"
        />
        <img
          v-else
          src="@/assets/enter_3_0.png"
          alt=""
          class="bookBtn"
          @click="CQhasBooked"
        />
        <br />
        <img
          v-show="isZJBooked"
          src="@/assets/enter_4_0.png"
          alt=""
          class="bookBtn"
          @click="ZJhasBooked"
        />
        <img
          v-show="!isZJBooked"
          src="@/assets/enter_4_1.png"
          alt=""
          @click="bookZJ"
        />
      </div>
      <div class="textBox">
        <span>点击上方按钮开启报名</span>
      </div>
    </div>
    <div class="circleBox">
      <button class="circleBox" @click="gotoMyBook">我的预约</button>
    </div>
  </div>
</template>
  
  <script>
import { getCQBookMess, getZJBookMess } from "@/request/api/cqApi";
import { Toast } from "vant";
export default {
  name: "AgreeContent",
  data() {
    return {
      isBooked:false,
      status:0,
      isZJBooked: false,
    };
  },
  created() {
    console.log("this is agreePage");
    let cqData = getCQBookMess()
    console.log('这是用axios获取的数据')
    console.log(cqData)
    async function fetchCQMess(url, data) {
      const formData = new URLSearchParams();
      for (const key in data) {
        formData.append(key, data[key]);
      }
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formData.toString(data),
      });
      try {
        const resData = await response.json()
        console.log('这是用fetch获取到的数据:')
        console.log(resData);
        // console.log(resData.citys[2].status)
        // this.status = resData.citys[2].status
      } catch (error) {
        console.error(error);
      }
    }
    fetchCQMess(
      "https://www.mahelei.com/index.php/BasfChemistryDev/Index/getUserStatusInfo",
      {
        lang: 0,
        isReservation:0,
        status:0
      }
    );
  },
  methods: {
    toAgree() {
      this.$router.push("/agree");
    },
    gotoBookPage() {
      this.$router.push("/book");
    },
    bookCQ() {
      console.log("重庆预约");
      if (!this.isCQBooked) {
        this.isCQBooked = true;
        let res = getCQBookMess();
        console.log(res);
      } else {
        {
          console.log("预约bug!");
        }
      }
    },
    CQhasBooked() {
      if (this.isCQBooked) {
        Toast.fail("您已预约,无需重复预约！");
      } else {
        console.log("预约bug!");
      }
    },
    bookZJ() {
      console.log("湛江预约");

      if (!this.isCQBooked) {
        this.isZJBooked = true;
        let res = getZJBookMess();
        console.log(res);
      } else {
        {
          console.log("预约bug!");
        }
      }
    },
    ZJhasBooked() {
      if (this.isZJBooked) {
        Toast.fail("您已预约,无需重复预约！");
      } else {
        console.log("预约bug!");
      }
    },
    gotoMyBook() {
      this.$router.push("/mybook");
    },
  },
};
</script>
  
  <style lang="less">
.bookContent {
  display: flex;
  //   overflow: hidden;
}
.preBox {
  display: flex;
  justify-content: center;
  align-items: center;

  width: 0;
  height: 12rem;
  background-color: #29cdb7;
}
.preButton {
  margin-left: 2rem;
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
.bookBox {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 0.4rem;
  margin-right: 0.4rem;
  width: 100%;
  height: 6rem;
  border-radius: 0.6rem;
  background-color: #57aad1cf;

  background-image: url("@/assets/foot1.png");
  background-repeat: no-repeat;
  background-size: contain;
  .bookImage {
    width: 100%;
    height: auto;
  }
  // .privacyBox {
  //   margin-top: 0.6rem;
  // }
  .bookBtnBox {
    .bookBtn {
      width: 3.5srem;
    }
  }
}
.circleBox {
  position: absolute;
  right: 0;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #90dae6;
}
</style>