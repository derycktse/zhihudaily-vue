<template>
	<div>
		hello {{ name }}
    		<li v-for="story in stories">
      			{{ story.title }}
    		</li>
	</div>
</template>

<script>
const fetchedData = {
	date: "20170410",
	stories: [{
		images: [
			"https://pic1.zhimg.com/v2-f23283645f86245a656e89938505ed40.jpg"
		],
		type: 0,
		id: 9346434,
		ga_prefix: "041013",
		title: "为什么宇宙是 11 维，而不是 12 或 13 维？"
	}, { images: [ "https://pic3.zhimg.com/v2-09aa7f508c62897e786d8ebfba7d117a.jpg" ], type: 0, id: 9347484, ga_prefix: "041012", title: "大误 · 嫦娥对羿的爱，我们恐怕都不理解" }, { images: [ "https://pic1.zhimg.com/v2-82c28d2f2188a53d98211888d468cc0c.jpg" ], type: 0, id: 9347253, ga_prefix: "041011", title: "过去两个月里，世界经济发生了哪些变化？" }, { title: "表面布满裂纹的饼干，吃起来酥脆香甜", ga_prefix: "041010", images: [ "https://pic3.zhimg.com/v2-32699e6d2ae33ea1c4b4da747e9ad2ea.jpg" ], multipic: true, type: 0, id: 9347739 }, { images: [ "https://pic1.zhimg.com/v2-5453bba17f9bed4bdf82b2d7a2b3b0a0.jpg" ], type: 0, id: 9347676, ga_prefix: "041009", title: "没有工作怎么会幸福呢？嗯……我可以打游戏啊" }, { title: "无论怎样形容南极，都比不上一句：「若不是亲眼所见」", ga_prefix: "041008", images: [ "https://pic2.zhimg.com/v2-a7765d1109c9865a4c96e476c51815a9.jpg" ], multipic: true, type: 0, id: 9347100 }, { images: [ "https://pic1.zhimg.com/v2-f26330bf13525ed21cf5a81e26599090.jpg" ], type: 0, id: 9346661, ga_prefix: "041007", title: "常出现在签名档的 MBTI 的测试，其实早就被学界抛弃了" }, { images: [ "https://pic4.zhimg.com/v2-125c030cdd854e07af42903a10f64463.jpg" ], type: 0, id: 9347686, ga_prefix: "041007", title: "手机里的很多 app 都请了大明星代言，这在过去可不常见" }, { images: [ "https://pic2.zhimg.com/v2-899419634502aa31036e3479ab77b61d.jpg" ], type: 0, id: 9337747, ga_prefix: "041007", title: "未来给你做手术的，会有张医生、李医生和人工智能医生" }, { images: [ "https://pic4.zhimg.com/v2-d4c9c60c23bab741f5f4605268b7f71b.jpg" ], type: 0, id: 9347635, ga_prefix: "041006", title: "瞎扯 · 如何正确地吐槽" }], top_stories: [{
		image: "https://pic3.zhimg.com/v2-e394bd233c8dc6438ff7a7df6903ed4a.jpg",
		type: 0,
		id: 9346661,
		ga_prefix: "041007",
		title: "常出现在签名档的 MBTI 的测试，其实早就被学界抛弃了"
	}]
}

export default {
	data(){
		return {
			name : 'deryck',
			stories : fetchedData.stories
		}
	}
}

</script>