<template>
  <div>
    <img src="@/assets/images/index.png" alt="">
    <div class="btn1 home" @click="turnChoose">GET STARTED</div>
  </div>
</template>

<script>
  export default {
    name:'Home',
    methods:{
      turnChoose(){
        this.$router.push({path:'/choose'})
      }
    }
  }
</script>

<style scoped>
  .home{
    left: 3rem;
    top: 20.5rem;
    width: 8rem;
    height: 3rem;
    line-height:3rem;
    font-weight:bold;
    text-align:center;
  }
</style>
