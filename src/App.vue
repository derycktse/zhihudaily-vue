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
@import "./assets/css/zhihu_base.css";
@font-face {
  font-family: 'iconfont';
  src: url('//at.alicdn.com/t/font_1467357626_5109937.eot'); /* IE9*/
  src: url('//at.alicdn.com/t/font_1467357626_5109937.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('//at.alicdn.com/t/font_1467357626_5109937.woff') format('woff'), /* chrome、firefox */
  url('//at.alicdn.com/t/font_1467357626_5109937.ttf') format('truetype'), /* chrome、firefox、opera、Safari, Android, iOS 4.2+*/
  url('//at.alicdn.com/t/font_1467357626_5109937.svg#iconfont') format('svg'); /* iOS 4.1- */
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 0 auto;
  width: 100%;
  max-width: 1000px;
  box-shadow: 0 0 2.5em #5d656c;
}

header a{
  display: inline-block;
}
</style>
