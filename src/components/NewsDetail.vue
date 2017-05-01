<template>
	<div class="newscontent">
		<div v-html="imgProxy(newsDetailData.body || '')"></div>
	</div>
</template>

<script>
import axios from 'axios'
import API from '../api/index'
import * as Util from '../common/util'


export default {
	data(){
		 return {
		 	newsDetailData : {}
		 }
	},
	computed(){
		return {
			newsDetail : this.$store.getters
		}
	},
	mounted(){
		let self = this
		let url  = API.newsbyid + this.$route.params.id
		axios.get(url).then((res)=>{
			self.newsDetailData = res.data
		})
	},
	methods:{
		imgProxy : Util.replaceImageUrl
	}
}
</script>