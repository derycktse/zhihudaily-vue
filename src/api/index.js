let API_ROOT = 'https://derycktse-zhihuapi.herokuapp.com/getdata?url=' + 'https://news-at.zhihu.com/api/'

export default {
	lastest: API_ROOT + '3/stories/latest',
	newsbyid : API_ROOT + '4/news/',
	newsByDate : API_ROOT + '4/news/before/'
}