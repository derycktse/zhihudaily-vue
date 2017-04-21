<template>
	<div class="swiper-container">
		<div class="swiper-wrapper">
			<div class="swiper-slide" v-for="item in list">

				<router-link :to="`detail/${item.id}`">
					<img :src="item.image" />
					<p>{{ item.title }}</p>
				</router-link>
			</div>	
		</div>
		<div class="swiper-pagination"></div>
	</div>	
</template>

<script >
import 'swiper/dist/css/swiper.min.css'
import Swiper from 'swiper'

export default {
	props:{
		list: Array
	},
  updated () {
      this.$nextTick(() => {
        new Swiper('.swiper-container', {
          direction: 'horizontal',
          loop: true,
          autoplay: 2500,
          pagination: '.swiper-pagination',
          paginationClickable: true,
          autoplayDisableOnInteraction: false,
          preventClicks: false
        })
      })
    }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .swiper-container
    height 640px
    color #000
  .swiper-slide
    position: relative
    cursor: pointer
    img
      width 100%
      height 100%
    p
      width: 70%
      word-wrap: break-word
      position: absolute
      text-align: center
      bottom: 30px
      left: 15%
      color: #000
      cursor: pointer
</style>