<template>
  <div class="bookDetail">
    <div class="mytitle_1Box">
      <img src="@/assets/mytitle_1.png" alt="" class="mytitle_1" />
    </div>
    <span><strong>场馆位置：</strong></span>
    <strong>松江科技馆 二楼创客工作坊</strong>
    <br />
    <span>
      <strong>地址：</strong>
    </span>
    <strong>上海市松江区中山东路237号</strong>
    <br />
    <span><strong>时间：</strong></span>
    <strong>{{ startDate }} -- {{ endDate }}</strong>
    <div class="swipeBox">
      <van-swipe class="my-swipe" autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="item in images" :key="item.id">
          <van-image :src="item.image" />
        </van-swipe-item>
      </van-swipe>
      <div class="eventRegistrationBox">
        <span><strong>预约报名</strong></span>
      </div>
    </div>
    <div class="regDetailBox">
      <div class="group">
        <span style="color: black"><strong>家长姓名：</strong></span>
        <input type="text" class="pName" v-model="username" />
      </div>
      <div class="group">
        <span style="color: black"><strong>手机号码：</strong></span>
        <input type="text" v-model="mobile" />
      </div>
      <div class="group">
        <span style="color: black"><strong>验证码：</strong></span>
        <input type="text" class="captcha" v-model="code" />
        <button class="postCaptcha" @click="postCaptcha">获取验证码</button>
      </div>
      <div class="group">
        <span style="color: black"><strong>儿童年龄：</strong></span>
        <input type="text" v-model="age" />
      </div>
      <div class="ageGroup" style="margin-top: 0.3rem">
        <span style="color: black"><strong>儿童性别：</strong></span>
        <input type="radio" name="" value="1" v-model="gender" />男
        <input type="radio" name="" value="2" v-model="gender" />女
      </div>
      <span style="color: black; margin-top: 0.3rem">
        <strong>选择日期：{{ date }}</strong>
      </span>

      <div class="dateBox">
        <van-picker
          title="日期"
          show-toolbar
          :columns="columns"
          @confirm="onConfirm"
          @cancel="onCancel"
          @change="onChange"
          :default-index="2"
        />
      </div>
      <span style="color: black"><strong>选择场次：</strong></span>
      <div class="timeBtnBox">
        <button
          v-for="(item, index) in timelist"
          :key="index"
          style="
            width: 2rem;
            height: 2rem;
            border-radius: 100%;
            margin: auto;
            border: 0.02rem solid #67b6dd;
            background-color: #67b6dd;
          "
          :class="{ selectedBtn: selectedIndex === index }"
          @click="selectTime(index)"
        >
          {{ item.timeslot }}
        </button>
      </div>
    </div>
    <div class="confirmBookBox">
      <img
        src="@/assets/btn_submit1.png"
        alt=""
        class="btn_submit1"
        @click="bookConfirm"
      />
    </div>
    <div class="thanksBox">
      <img src="@/assets/thanks.png" alt="" class="thanks" />
    </div>
    <div class="swipeBox">
      <P
        >今年，巴斯夫小小化学家跟随长期合作伙伴上海科技馆走进松江，由上海科技馆开发的“如何复活一只恐龙”专题临展在这里与热爱科学的观众们见面。展览选取1822年至今的27个典型科学案例涉及5大洲的42个属(种)的恐龙，并将相关科研成果进行科普转化，揭开史前巨兽的神秘面纱。</P
      >

      <van-swipe class="my-swipe" autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="item in DImages" :key="item.id">
          <van-image :src="item.image" />
        </van-swipe-item>
      </van-swipe>

      <p>欢迎大家来松江参观生动的恐龙展、做有趣的化学实验！</p>
    </div>
    <div class="footBBox">
      <img src="@/assets/foot_1.png" alt="" class="bFoot_1" />

      <img src="@/assets/qiu2.png" alt="" class="qiu2BD" />
      <div class="preDBox">
        <img
          src="@/assets/btn_back.png"
          alt=""
          class="preDBox"
          @click="backtoBook"
        />
      </div>
    </div>
  </div>
</template>

<script>
import {
  postCityMess,
  postCaptchaRequest,
  userBook,
} from "@/request/api/cqApi";
import { Toast } from "vant";
export default {
  data() {
    return {
      startDate: "",
      endDate: "",
      images: [
        { id: 1, image: require("@/assets/slide1_1_1.jpg") },
        { id: 2, image: require("@/assets/slide1_1_2.jpg") },
        { id: 3, image: require("@/assets/slide1_1_3.jpg") },
      ],
      DImages: [
        { id: 1, image: require("@/assets/slide1_2_1.jpg") },
        { id: 2, image: require("@/assets/slide1_2_2.jpg") },
        { id: 3, image: require("@/assets/slide1_2_3.jpg") },
      ],
      lang: "1",
      columns: [],
      username: "测试",
      mobile: "15051594801",
      code: "2922",
      age: "12",
      gender: "1",
      date: "07.16",
      time: "13:45-14:30",
      datelists: [],
      //场次
      timelist: [],
      selectedIndex: "",
    };
  },
  created() {
    //加载前请求城市数据
    postCityMess()
      .then((response) => {
        //获取可选日期
        const datelists = response.data.data.datelists;
        this.datelists = datelists;
        // console.log(this.datelists);
        datelists.forEach((item) => {
          //   console.log(item.date);
          this.columns.push(item.date);
        });
        //起止时间
        this.startDate = datelists[0].date;
        this.endDate = datelists[4].date;
        //获取场次，根据场次创建按钮个数
        // datelists.forEach(item=>{
        //     let data = item.timelist
        //     console.log(item.week,item.date)
        //     console.log(data)
        // })
      })
      .catch((err) => {
        console.error(err);
      });
    // postCaptchaRequest(this.mobile,this.lang).then(()=>{
    //     console.log('请求获取验证码！')
    // }).catch((err)=>{
    //     console.error(err)
    // })
    //测试
    // userBook(this.username,this.mobile,this.code,this.age,this.gender,this.date,this.time).then((response)=>{
    //     console.log('开始测试')
    //     console.log(response)
    // }).catch(err=>{
    //     console.error(err)
    // })
  },
  methods: {
    postCaptcha() {
      postCaptchaRequest(this.mobile, this.lang)
        .then(() => {
          console.log("请求获取验证码！");
        })
        .catch((err) => {
          console.error("请求验证码失败，错误是：" + err);
        });
    },
    //确认
    onConfirm(value, index) {
      Toast(`日期：${value}`);
      console.log("当前索引：" + index);
      this.date = value;
      this.datelists.forEach((item) => {
        if (this.date == item.date) {
          console.log("匹配成功！");
          console.log(item.timelist);
          this.timelist = item.timelist;
        } else {
          console.log("匹配失败！");
        }
      });
    },
    onChange(picker, value) {
      Toast(`当前值：${value}`);
    },
    //取消
    onCancel() {
      Toast("取消");
      this.date = "";
      this.timelist = [];
    },
    bookConfirm() {
      console.log("确定预约！");
      userBook(
        this.username,
        this.mobile,
        this.code,
        this.age,
        this.gender,
        this.date,
        this.time
      )
        .then((response) => {
          console.log("开始测试");
          console.log(response);
        })
        .catch((err) => {
          console.error(err);
        });
    },
    selectTime(index) {
      this.selectedIndex = index;
      console.log(this.selectedIndex);
    },
    backtoBook() {
      console.log("按钮被点击了");
      this.$router.push("/book");
    },
  },
};
</script>

<style lang="less">
.bookDetail {
  position: relative;
}
.mytitle_1Box {
  height: 50%;
  margin-bottom: 0.3rem;
  .mytitle_1 {
    width: 4rem;
    height: auto;
  }
}
span {
  margin-left: 0.5rem;
  color: rgb(59, 114, 242);
  white-space: nowrap;
}
.swipeBox {
  width: 100%;
  height: 100%;
  position: relative;
  align-items: center;
  //   margin: 0.5rem;
}
.my-swipe {
  color: #fff;
  font-size: 0.4rem;
  line-height: 2.5rem;
  text-align: center;
}
.van-image {
  margin-top: 0.4rem;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
.van-image__img {
  width: 80%;
}
.van-swipe__indicator--active {
  background-color: #1989fa !important;
  opacity: 1;
}
.eventRegistrationBox {
  margin-top: 0.4rem;
}
.regDetailBox {
  margin-top: 0.4rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  overflow: scroll;
  .group {
    display: flex;
    align-items: flex-start;
    margin-bottom: 0.2rem;
  }
  input {
    border-radius: 0.1rem;
    border: 0.02rem solid #1989fa;
  }
  .captcha {
    margin-left: 0.3rem;
    width: 2rem;
  }
  .postCaptcha {
    color: white;
    background-color: #1989fa;
    border: none;
    border-radius: 0.1rem;
    margin-left: 0.2rem;
    font-size: 0.25rem;
    height: 0.5rem;
  }
}
.dateBox {
  //   display: flex;
  //   justify-content: space-between;
  margin-left: 0.5rem;
  padding: 0.2rem;
  width: 6rem;
  overflow: scroll;
}
.van-picker {
  height: 4rem;
}
.confirmBookBox {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2rem;
  // width: 4rem;
  .btn_submit1 {
    width: 4rem;
    height: auto;
  }
}
.timeBtnBox {
  width: 7rem;
  height: 3rem;
  // background-color: #30a7b2;
  margin: auto;
  display: flex;
  // justify-content: space-between;
  align-content: center;
  overflow: scroll;
}

  .selectedBtn {
    background-color: orange !important;
    color: white;
  }


.thanksBox {
  width: 100%;
  height: 3rem;
  // background-color: #5493a8;
  display: flex;
  justify-content: center;
  align-items: center;
  .thanks {
    width: 4rem;
    height: auto;
  }
}
.footBBox {
  position: relative;
  .bFoot_1 {
    position: absolute;
    width: 100%;
    height: auto;
    z-index: 1;
  }
  .qiu2BD {
    position: absolute;
    z-index: 2;
    right: 0.2rem;
    height: 1.5rem;
    top: 0.5rem;
  }
}
p {
  padding: 0.4rem;
  text-align: justify;
  font-weight: 500;
}
.preDBox {
  position: absolute;
  width: 1rem;
  z-index: 10;
  .preDBtn {
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
</style>