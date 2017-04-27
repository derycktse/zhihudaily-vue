<template>
	<div>
		<carousel :list="zhihuDailyData[0] && zhihuDailyData[0].top_stories"></carousel>
		<news-list :newsdata="value.stories" :date="value.date"  v-for="(value, key) of zhihuDailyData"></news-list>
		<!--<infinite-loading :on-infinite="onInfinite2" ref="infiniteLoading"></infinite-loading>-->

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
	mounted(){
		this.$store.dispatch('fetchNewsList')
	},
	data() {
		return {
			zhihuDailyData : this.$store.state.zhihuDailyData
		}
	},
	computed(){
		return {
			
		}
	},
	methods: {
		onInfinite(){
		},
	}
}
</script>