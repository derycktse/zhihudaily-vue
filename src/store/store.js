import Vue from 'vue'
import Vuex from 'vuex'

import actions from './actions'

Vue.use(Vuex)
export const store = new Vuex.Store({
    state: {
        zhihuDailyData: [],
        newsDetailSet: {}
    },
    getters: {
        carouselData: (state) => {
            if (state.carouselSet) {
                return state.carouselSet
            } else {
                state.carouselSet = state.zhihuDailyData[0] && state.zhihuDailyData[0].top_stories
            }
            return state.carouselSet || []
        },
        newsDetailList:(state)=>{
            return state.newsDetailSet
        }
    },
    mutations: {
        handleNewsData(state, data) {
            if (!data) return
            state.zhihuDailyData.push(data)
        }
    },
    actions
})