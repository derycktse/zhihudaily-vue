<template>
	<div class="newscontent">
		<div v-html="imgProxy(newsDetailData.body || '')"></div>
	</div>
</template>

<script>
import axios from 'axios'
import API from '../api/index'
import * as Util from '../common/util'

const fetchNewsDetail = (newsID,callback) =>{
	axios.get(API.newsbyid,{
		params : {
			id : newsID
		}
	}).then(callback)
}
export default {
	data(){
		 return {
		 	newsDetailData : {}
		 }
	},
	mounted(){
		let self = this
		axios.get(API.newsbyid, {
			params : {
				id : this.$route.params.id
			}
		}).then((res)=>{
			self.newsDetailData = res.data
		})
	},
	methods:{
		imgProxy : Util.replaceImageUrl
	}
}
</script>