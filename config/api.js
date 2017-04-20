const api = {
	lastest : "http://news-at.zhihu.com/api/3/stories/latest",
	beforeDate : 'http://news-at.zhihu.com/api/4/news/before/',
	newsDetail :  'http://news-at.zhihu.com/api/4/news/'	
}


//because of cors issue, use other api temporary

const tempAddr = "http://119.29.68.183:8088/"
const tempApi = {
	lastest : tempAddr + 'news'
}

module.exports = api