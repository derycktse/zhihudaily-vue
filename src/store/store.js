import Vue from 'vue'
import Vuex from 'vuex'
import API from '../api/index'
import axios from 'axios'
Vue.use(Vuex)
export const store = new Vuex.Store({
    state: {
        zhihuDailyData: [],
        newsDetail: {}
    },
    getters: {

    },
    mutations: {
        handleNewsData(state, data) {
            if (!data) return
            // debugger
            state.zhihuDailyData.push(data)
        }
    },
    actions: {
        fetchNewsList({ state, commit }) {
            let newsCount = state.zhihuDailyData.length
            let newsApi
            if (!newsCount) {
                newsApi = API.lastest
            } else {
                const lastestNews = state.zhihuDailyData.slice(-1)
                newsApi = API.newsByDate + lastestNews.date
            }

            return axios.get(newsApi).then(response => {
                commit('handleNewsData', response.data)
                return Promise.resolve()
            })


        }
    }
})