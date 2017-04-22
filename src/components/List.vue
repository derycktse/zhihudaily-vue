<template>
	<div>
		<carousel :list="newsDataList[0] && newsDataList[0].top_stories"></carousel>
		<news-list :newsdata="value.stories" :date="value.date"  v-for="(value, key) of newsDataList"></news-list>
		<infinite-loading :on-infinite="onInfinite" ref="infiniteLoading"></infinite-loading>

	</div>
</template>

<script>
import axios from 'axios'
import API from '../api/index'
import * as Util from '../common/util'
import Carousel from '../components/Carousel.vue'
import NewsList from '../components/NewsList.vue'
import InfiniteLoading from 'vue-infinite-loading'

let zhihudata = []




export default {
	components:{
		Carousel,
		NewsList,
		InfiniteLoading
	},
	data() {
		return {
			zhihudata: {
				date: '',
				stories: [],
				top_stories : []
			},
			datePointer : null
			,
			newsDataList  : [],
			fetchNewestFlag : false
		}
	},
	methods: {
		onInfinite(){
			let api 

			if(!this.fetchNewestFlag){
				api = API.lastest
			} else {
				api = API.newsByDate + Util.formatDateWithFormat(this.datePointer, 'yyyyMMdd')
			}
			axios.get(api).then(response => {
				if(!response.data) return

				let zhihudata  = response.data

					zhihudata.stories = zhihudata.stories.map(val => {
						val.images = val.images.map(imageUrl => {
							return Util.replaceImageUrl(imageUrl)
						})
						return val
					})

					if(zhihudata.top_stories){
						zhihudata.top_stories = zhihudata.top_stories.map(val=>{
						 val.image = Util.replaceImageUrl(val.image)
						 return val
						})
					}
					
					if(!this.datePointer){
						this.datePointer = new Date()
					} else {
						this.datePointer.setDate(this.datePointer.getDate()-1)
					}
					this.newsDataList.push(zhihudata)
					this.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded');
					if(!this.fetchNewestFlag) this.fetchNewestFlag=true
			})

		}	
	}
}
</script>