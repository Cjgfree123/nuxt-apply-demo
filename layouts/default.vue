<template>
  <div>
    <!-- 如果切换tab等，是属于前端跳转，不经过服务端 -->
    <!-- 刷新页面，会通过服务端返回页面 -->
    <nuxt-link to="/">首页</nuxt-link>
    <nuxt-link to="/detail">详情页面</nuxt-link>
    <nuxt-link to="/detail/5">详情页面5</nuxt-link>
    <!-- 类似vue router-view -->
    <nuxt />
  </div>
</template>

<script>
export default {
  middleware:'layout',
};
</script>
