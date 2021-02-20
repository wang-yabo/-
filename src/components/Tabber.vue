<template>
  <div class="tabber">
    <van-tabbar v-model="active">
        <van-tabbar-item icon="home-o">
            <router-link to="/">首页</router-link>
        </van-tabbar-item>
        <van-tabbar-item icon="search">
            <router-link to="/classify">分类</router-link>
        </van-tabbar-item>
        <van-tabbar-item icon="friends-o">
            <router-link to="/mine">我的</router-link>
        </van-tabbar-item>
    </van-tabbar>
  </div> 
</template>

<script>
export default {
    
}
</script>
<style scoped>

</style>