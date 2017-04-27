<template>
	<div>
		<carousel></carousel>
		<news-list :newsdata="value.stories" :date="value.date"  v-for="(value, key) of zhihuDailyData"></news-list>
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

export default {
	components:{
		Carousel,
		NewsList,
		InfiniteLoading
	},
	mounted(){
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
			this.$store.dispatch('fetchNewsList').then(()=>{
				this.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded');
			})
		},
	}
}
</script>