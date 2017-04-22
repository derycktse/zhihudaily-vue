<template>
    <section>
            <div class="date-desc-box">{{ formatReadableDate(date) }} </div>
            <ul>
                <router-link v-for="item in newsdata" :to="`detail/${item.id}`">
                    <li class="list-item">
                        <div class="news-desc">
                            <p class="des">{{ item.title }}</p>
                        </div>
                        <div class="news-image-box">
                            <img v-bind:src="item.images[0]">
                            <p v-if="item.multipic" class="tip"><i class="iconfont">&#xe61c</i>多图</p> 
                        </div>
                    </li>
                </router-link>
            </ul>
    </section>
</template>

<script >
import * as Util from '../common/util' 
    export default {
       props : {
         newsdata: Array,
         date:String
       },
       methods:{
        formatReadableDate : Util.formatReadableDate
       } 

    }
</script>
<style lang="stylus"  rel="stylesheet/stylus" scoped>

section
    .date-desc-box
        background-color #028fd6
        text-align center
        font-size 35px
        color #fff
    ul 
        padding 0 20px
    .list-item
        position relative
        display flex
        flex-direction row
        padding 1rem 0
        border-bottom 2px solid #eaeaea
        .news-desc
            flex 1
        .news-image-box
            position relative
            img
                width 13rem 
            .tip
                color #ffffff
                position absolute
                bottom 0
                right 0
                background rgba(0,0,0, 0.4) 
                margin 0 !important
                .iconfont
                    font-family "iconfont"
                    color #ffffff

    li
        list-style none
    a
        text-decoration none
        color #000
        font-size 30px
</style>