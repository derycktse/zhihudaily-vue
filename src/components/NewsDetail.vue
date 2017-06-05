<template>
	<div class="newscontent">
		<div class="news-detail-brief-box">
			<img class="news-detail-poster" :src="imgProxy(data.image || '')">
			<p class="news-detail-desc">{{ data.title || "" }}</p>
			<span class="span-from">图片：{{ data.image_source || "" }}</span>
		</div>
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
<style lang="stylus" rel="stylesheet/stylus">
.news-detail-brief-box
	position relative
	color #fff
	.news-detail-poster
		width 100%
	.news-detail-desc
		position absolute
		bottom 30px
		font-size 30px
    .span-from
		position absolute
		bottom 0
		right 0
.headline .img-place-holder
	height 0
</style>