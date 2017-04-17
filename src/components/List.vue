 <style lang="stylus"  rel="stylesheet/stylus">
	section
		text-align:center
		ul
			list-style:none
		.listItem
			height:150px
			padding:15px
			border-radius: 20px
			box-shadow: 0 4px 6px #ccc
			a
				display: flex
				justify-content: space-between


</style>
<template>
	<div>
		<carousel :list="zhihudata.top_stories"></carousel>
		<section>
    		<h1> 共 {{ zhihudata.stories.length }} 条结果</h1>
    		<div>{{ zhihudata.date }} </div>
    		<ul>
    			<li v-for="item in zhihudata.stories" class="	listItem">
    				<router-link :to="`detail/${item.id}`">
    					<p class="des">{{ item.title }}</p>
    					<img v-bind:src="item.images[0]">
    				</router-link>
    			</li>
    		</ul>
    	</section>
	</div>
</template>

<script>
import axios from 'axios'
import API from '../api/index'
import * as Util from '../common/util'
import Carousel from '../components/Carousel.vue'
import CarouselItem from '../components/Carousel-item.vue'

let zhihudata = []




export default {
	components:{
		Carousel,
		CarouselItem
	},
	data() {
		return {
			name: 'deryck',
			zhihudata: {
				date: '',
				stories: []
			}
		}
	},
	created() {
		this.fetchData()
	},
	beforeCreate() {

	},
	computed:{
		sliderList(){
			let arr = []
			arr.push({title:"deryck"})
			return arr
		}
	},
	methods: {
		fetchData() {
			let self = this
			axios.get(API.lastest)
				.then(response => {
					if(!response.data) return 

					let zhihudata =	self.zhihudata = response.data

					if(zhihudata.date){
						zhihudata.date = Util.formatReadableDate(zhihudata.date)
					}

					self.zhihudata.stories = self.zhihudata.stories.map(val => {
						val.images = val.images.map(imageUrl => {
							return Util.replaceImageUrl(imageUrl)
						})
						return val
					})

					self.zhihudata.top_stories = self.zhihudata.top_stories.map(val=>{
						 val.image = Util.replaceImageUrl(val.image)
						 return val
					})
				}).catch(function(error) {
					console.log(error);
				});

		}
	}
}
</script>