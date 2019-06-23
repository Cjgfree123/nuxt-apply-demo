<template>
  <section class="container">
    index 页面zz
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  transitions:"name",
  components: {
    Logo
  },
  // 在服务端执行的话，通过服务端获取数据
  // 在客户端执行ajax的话，会把返回的结果，合并到data上
  // asyncData只在页面组件中才有
  async asyncData({$axios}){
    let res = await $axios.get("http://www.fullstackjavascript.cn:8080/api/user");
    console.log(res)
    return {
      name: res.name
    };
  },
  mounted(){
    // alert(process.env.baseUrl);

    // 进度条要等到，加载完成后，才能执行
    this.$nextTick(()=>{
      this.$nuxt.$loading.start();
      setTimeout(() => {
        this.$nuxt.$loading.finish();
      });
    });
  }
}
</script>

<script>
export default {
  middleware:'page',
}
</script>


<style>

</style>
