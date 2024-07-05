<template>
  <div class="topNav">
    <button
      class="cnBtn"
      @click="selectButton('cnBtn')"
      :class="{ selected: selectedButton === 'cnBtn' }"
      :style="{
        backgroundColor: selectedButton === 'cnBtn' ? '#4bd6fc' : 'white',
        color: selectedButton === 'cnBtn' ? 'white' : '#4bd6fc',
      }"
    >
      中文
    </button>
    <button
      class="enBtn"
      @click="selectButton('enBtn')"
      :class="{ selected: selectedButton === 'enBtn' }"
      :style="{
        backgroundColor: selectedButton === 'enBtn' ? '#4bd6fc' : 'white',
        color: selectedButton === 'enBtn' ? 'white' : '#4bd6fc',
      }"
    >
      EN
    </button>
  </div>
</template>

<script>
export default {
  name: "TopNav",
  data() {
    return {
      selectedButton: "cnBtn",
    };
  },
  methods: {
    selectButton(button) {
      this.selectedButton = button;
    },
  },
};
</script>

<style lang="less">
.topNav {
  width: 100%;
  height: 2rem;
  //   background-color: #49bfd3;
  background-image: url("@/assets/logo.png");
  // background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;

  display: flex;
  justify-content: flex-end;
  align-items: center;
}
</style>