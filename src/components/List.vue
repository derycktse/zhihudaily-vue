<template>
	<div>
		<section>
    		<h1> 共 {{ zhihudata.stories.length }} 条结果</h1>
    		<div>{{ zhihudata.date }} </div>
    		<li v-for="item in zhihudata.stories">
    			<a href="javascript:alert(123)" >
    				<img v-bind:src="item.images[0]">
    				<p>{{ item.title }}</p>
    			</a>
    		</li>
    	</section>
	</div>
</template>

<script>
import axios from 'axios'
import API from '../api/index'
import * as Util from '../common/util'

let zhihudata = []




export default {
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