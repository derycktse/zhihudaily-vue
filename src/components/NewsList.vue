<template>
    <section>
            <div>{{ formatReadableDate(date) }} </div>
            <ul>
                <li v-for="item in newsdata" class="   listItem">
                    <router-link :to="`detail/${item.id}`">
                        <p class="des">{{ item.title }}</p>
                        <img v-bind:src="item.images[0]">
                    </router-link>
                </li>
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