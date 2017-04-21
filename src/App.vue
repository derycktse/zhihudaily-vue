<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <header>
      <router-link to="/">
        <img src="./assets/top_logo.png">
      </router-link>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
@import "./assets/css/reset.css";
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

header a{
  display: inline-block;
}
</style>
