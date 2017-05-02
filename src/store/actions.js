import API from '../api/index'
import axios from 'axios'

function fetchNewsList({ state, commit }) {

    let newsCount = state.zhihuDailyData.length
    let newsApi
    if (!newsCount) {
        newsApi = API.lastest
    } else {
        const lastestNews = state.zhihuDailyData.slice(-1)[0]
        newsApi = API.newsByDate + lastestNews.date
    }

    return axios.get(newsApi).then(response => {
        commit('handleNewsData', response.data)
        return Promise.resolve()
    })
}

function fetchNewsDetailById({ state, commit }, payload) {
    
    let detailAPI = API.newsbyid
    let newsID = payload.newsID

    return axios.get(detailAPI+newsID).then(response => {
        state.newsDetail[newsID] = response.data       
        return Promise.resolve()
    })
}

export default {
    fetchNewsList,
    fetchNewsDetailById
}
