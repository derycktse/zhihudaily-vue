<template>
	<div class="swiper-container">
		<div class="swiper-wrapper">
			<div class="swiper-slide" v-for="item in list">

				<router-link :to="`detail/${item.id}`">
          <div class="swiper-mask"></div>
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
      swiperInitFlag = true
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .swiper-container
    height 640px
    color #000
  .swiper-slide
    position relative
    cursor pointer
    .swiper-mask
      width 100%
      height 100%
      position absolute
      top 0
      left 0
      background-image: linear-gradient(bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.1) 40%, rgba(0,0,0,0.1) 100%);
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
      color #fff
      cursor pointer
      font-size 30px
</style>