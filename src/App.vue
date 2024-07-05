<template>
  <div id="app">
    <!-- <nav>
      <router-link to="/">Home</router-link> | 
      <router-link to="/about">About</router-link>
    </nav> -->
    <div class="topBox">
      <TopNav />
    </div>
    <router-view />
  </div>
</template>


<script>
import TopNav from "@/components/top/topNav.vue";
export default {
  name: "App",
  data(){
    return{
    }
  },
  components: {
    TopNav,
  },
};
</script>

<style lang="less">
.app{
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
}
</style>
