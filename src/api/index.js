let API_ROOT
	, api

if (/localhost/.test(document.location.hostname)) {
	API_ROOT = '/'
	api = {
		lastest: API_ROOT + 'latest',
		newsbyid: API_ROOT + 'news/',
		newsByDate: API_ROOT + 'before/'
	}

} else {
	API_ROOT = 'https://derycktse-zhihuapi.herokuapp.com/getdata?url=' + 'https://news-at.zhihu.com/api/'

	api = {
		lastest: API_ROOT + '3/stories/latest',
		newsbyid: API_ROOT + '4/news/',
		newsByDate: API_ROOT + '4/news/before/'
	}
}


export default api