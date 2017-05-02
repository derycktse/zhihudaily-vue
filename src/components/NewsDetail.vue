<template>
	<div class="newscontent">
		<div v-html="imgProxy(data.body || '')"></div>
	</div>
</template>

<script>
import axios from 'axios'
import API from '../api/index'
import * as Util from '../common/util'
import {mapGetters, mapActions} from 'vuex'


export default {
	data(){
		 return {
			 newsID : this.$route.params.id,
			 data : {}
		 }
	},
	computed:{
		...mapGetters(['newsDetailList']),
		newsDetail(){
			let newsID = this.$route.params.id
			return this.newsDetailList[newsID] || {}
		}
	},
	created(){
		if(!this.data.body){
			this.$store.dispatch('fetchNewsDetailById',{
				newsID : this.newsID
			}).then(()=>{
				this.data = this.newsDetail
			}) 
		} else {
			this.data = this.newsDetail
		}
	},
	methods:{
		imgProxy : Util.replaceImageUrl,
	}
}
</script>