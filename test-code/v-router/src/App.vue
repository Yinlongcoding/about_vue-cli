<template>
  <div id="app">
    <router-link to="/home">首页</router-link>
    <router-link to="news">新闻</router-link>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
    name: 'app'
}

</script>

<style>
  body {
    background-color: rgba(0, 0, 0, 0.03);
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    padding:0 5em;
  }
</style>
