<template>
	<div class="swiper-container">
		<div class="swiper-wrapper">
			<div class="swiper-slide" v-for="item in list">

				<router-link :to="item.image">
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
    mounted () {
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

<style>
	.swiper-container{
		max-width: 640px;
		height: 640px;
	}
	.swiper-slide{
		position: relative;
		cursor: pointer;
	}
	.swiper-slide p{
		width: 70%;
		word-wrap: break-word;
		position: absolute;
		text-align: center;
		bottom: 30px;
		left: 15%;
		color: #fff;
		cursor:pointer;
	}
</style>