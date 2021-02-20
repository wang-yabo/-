<template>
  <router-view></router-view>
  <Tabbar/>
</template>

<script>

import Tabbar from "./components/Tabber"
// import { useStore } from "vuex";
export default {
  name: 'App',
  components: {
    Tabbar
  },
  setup(){
    // const store = useStore();
    // store.dispatch("asyncChangeTabFlag")
  }
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
