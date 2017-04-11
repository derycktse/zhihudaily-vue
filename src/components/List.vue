<template>
	<div>
		hello {{ name }}
    		<h1>{{ zhihudata.stories.length }}</h1>
    		<a v-for="item in zhihudata.stories">
    			<img v-bind:src="item.images[0]">
    			<p>{{ item.title }}</p>
    		</a>
	</div>
</template>

<script>
 
// let api = 'http://news-at.zhihu.com/api/3/stories/latest'
let api = "http://119.29.68.183:8088/news"
// let api = "http://119.29.68.183:8088/newsByDate?time=20170410"

import axios from 'axios'

let zhihudata = []


function replaceImageUrl (str) {
  let reg = /https?:(\\?\/){2}(pic\d*\.zhimg\.com\\?\/)/g
  return str.replace(reg, 'https://images.weserv.nl/?url=$2')
}


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
				axios.get(api)
					.then(response => {
						self.zhihudata = response.data
						self.zhihudata.stories = self.zhihudata.stories.map(val=> {
							val.images = val.images.map(imageUrl=>{return replaceImageUrl(imageUrl)})
								return val
						})
					}).catch(function(error) {
						console.log(error);
					});

			}
		}
}

</script>