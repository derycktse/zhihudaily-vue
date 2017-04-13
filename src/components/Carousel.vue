<template>
	<div class="swiper-container">
		<div class="swiper-wrapper">
			<div class="swiper-slide" v-for="item in list">

				<router-link :to="item.image">
					<img :src="item.image" />
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