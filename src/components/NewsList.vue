<template>
    <section>
            <div>{{ formatReadableDate(date) }} </div>
            <ul>
                <router-link v-for="item in newsdata" :to="`detail/${item.id}`">
                    <li class="list-item">
                        <div class="news-desc">
                            <p class="des">{{ item.title }}</p>
                        </div>
                        <div class="news-avatar">
                            <img v-bind:src="item.images[0]">
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
    .list-item
        position relative
        border-radius 0.133rem
</style>