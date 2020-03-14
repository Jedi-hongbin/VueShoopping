<template>
	<div id="newsInfo">
		<h4 class="tit">{{ title }}</h4>
		<p class="p">
			<span>{{ time | dateFilter("YYYY-MM-DD") }}</span>
			<span>点击数：{{ id }}</span>
		</p>
		<hr>
		<div class="content" v-html="content"></div>
		<comment :conid="id"></comment>
	</div>
</template>

<script>
	//引入评论子组件
	import comment from '../subComponents/commont.vue'
	//在使用的组件中注册组件
	
	export default {
		data() {
			return {
				name: "newsInfo",
				id: this.$route.params.id,
				title: "",
				// time: new Date(),
				time:'',
				content: "",
				json:'/static/json/newsContent.json'
			}
		},
		mounted() {
			this.getNewsContent()
		},
		methods: {
			getNewsContent() {
				this.axios.get(this.json)
					.then(res => {
						this.title = res.data[this.id - 1].title;
						this.content = res.data[this.id - 1].content;
						this.time = res.data[this.id - 1].time;
					})
					.catch(err => {
						console.log(err)
					})
			}
		},
		components:{
			comment
		}
	}
</script>

<style>
	#newsInfo .tit {
		color: #ff0000;
		text-align: center;

	}
	#newsInfo .p {
		display: flex;
		justify-content: space-between;
	}

	#newsInfo span {
		font-size: 11px;
		padding: 2px 5px;
	}

	#newsInfo hr {
		border: 0;
		height: 1px;
		background-color: #ccc;
	}

	#newsInfo .content {
		padding: 2px 5px;
		margin-bottom: 15px;
	}

	#newsInfo .content img {
		width: 100%;
		/* 这要让width生效，就要将style标签的 scoped属性去掉，不到为啥，这么干就对了，为例防止这，没了scoped属性，造成环境污染，每一个样式写的都严谨点，防止别处的样式重名干扰*/
	}
</style>
