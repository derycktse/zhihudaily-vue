<template>
	<div class="newscontent">
		<!--<div v-html="imgProxy(newsDetail.body || 'test')"></div>-->
		<div> detial page</div>
	</div>
</template>

<script>
import axios from 'axios'
import API from '../api/index'
import * as Util from '../common/util'


export default {
	data(){
		 return {
		 	// newsDetailData : {}
		 }
	},
	computed:{
			newsDetail(){
				
				let newsID = this.$route.params.id
				
				return this.$store.state.newsDetail[newsID] 
			}
	},
	created(){
		let newsID = this.$route.params.id
		if(!this.$store.state.newsDetail[newsID]){
					this.$store.dispatch('fetchNewsDetailById',{
						newsID : newsID
					})
				}
	},
	beforeRouteEnter(){
		// debugger
	},
	methods:{
		imgProxy : Util.replaceImageUrl
	}
}
</script>