<style lang="stylus">
body
  //background-color blue

.header
  img
    color transparent



</style>

<template>
	<div id="app">
   		<header class="header">
   			<nav class="inner">
   				<a href="/"> <img class="logo" src="~public/top_logo.png" alt="logo" /></a>
           <router-link to="/">
          <img src="~public/top_logo.png" alt="" class="zhihu-logo">
        </router-link>
        <router-link to="/user">user</router-link>
   			</nav>
   		</header>
      <transition name="fade" mode="out-in">
      <router-view class="view"></router-view>
    </transition>
	</div>
</template>

