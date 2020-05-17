<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import './assets/css/style.css';
*{
  box-sizing:border-box;
}
html,body{
  /* font-size: 23.4375px; */
  margin:0;
  padding:0;
}
#app {
  width:100vw;
  /* height:100vh;
  overflow-y:scroll; */
}
#app>div{
  position:relative;
}
#app>div>img{
  width:100%;
}
</style>
