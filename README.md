# vue-zhihudaily

> 使用Vue2 + vue-router + vuex 开发的知乎日报

### 代码结构 ###

代码结构(使用工具[treer](https://www.npmjs.com/package/treer)生成):
```
src
├─App.vue
├─main.js
├─store
|   └store.js
├─router
|   └index.js
├─components
|     ├─Carousel.vue
|     ├─List.vue
|     ├─NewsDetail.vue
|     └NewsList.vue
├─common
|   └util.js
├─assets
|   ├─logo.png
|   ├─top_logo.png
|   ├─css
|   |  ├─reset.css
|   |  └zhihu_base.css
├─api
|  └index.js
```


## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

### 参考 ###
[知乎API分析](https://github.com/izzyleung/ZhihuDailyPurify/wiki/%E7%9F%A5%E4%B9%8E%E6%97%A5%E6%8A%A5-API-%E5%88%86%E6%9E%90)