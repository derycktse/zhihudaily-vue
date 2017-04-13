<style type="text/css">
	section .listItem{
		height: 150px;
		padding: 15px;
		border-radius: 20px;
		box-shadow: 0 4px 6px #ccc;
	}

	section .listItem a{
		display: flex;
		justify-content: space-between;
	}
	section ul{
		list-style: none;
	}
</style>
<template>
	<div>
		<carousel>
			<div v-for="(item, index) in zhihudata.top_stories">
				<div>{{ item.title }}</div>
			</div>
		</carousel>
		<section>
    		<h1> 共 {{ zhihudata.stories.length }} 条结果</h1>
    		<div>{{ zhihudata.date }} </div>
    		<ul>
    			<li v-for="item in zhihudata.stories" class="	listItem">
    				<a href="javascript:alert(123)" >
    					<p class="des">{{ item.title }}</p>
    					<img v-bind:src="item.images[0]">
    				</a>
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
					}).catch(function(error) {
						console.log(error);
					});

			}
		}
}
</script>