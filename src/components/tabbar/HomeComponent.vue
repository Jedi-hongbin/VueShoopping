<template>
	<div class="home">
		<mt-swipe :auto="4000">
			<mt-swipe-item v-for="(item,index) in list" :key=index>
				<a :href="item.url"><img :src="item.src" alt="No"></a>
			</mt-swipe-item>
		</mt-swipe>

		<ul class="mui-table-view mui-grid-view mui-grid-9">
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
				<router-link to="/home/news">
					<img src="../../images/news.png" alt="">
					<div class="mui-media-body">新闻资讯</div>
				</router-link>
			</li>
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
				<router-link to="/home/picture">
					<img src="../../images/share.gif" alt="">
					<div class="mui-media-body">图片分享</div>
				</router-link>
			</li>
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
				<router-link to="/home/goods">
					<img src="../../images/buy.gif" alt="">
					<div class="mui-media-body">商品购买</div>
				</router-link>
			</li>
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
				<router-link to="/home/feedback">
					<img src="../../images/feedback.gif" alt="">
					<div class="mui-media-body">留言反馈</div>
				</router-link>
			</li>
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
				<router-link to="/home/video">
					<img src="../../images/video.gif" alt="">
					<div class="mui-media-body">视频专区</div>
				</router-link>
			</li>
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
				<router-link to="/home/about">
					<img src="../../images/about.gif" alt="">
					<div class="mui-media-body">关于我们</div>
				</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				"Json": "/static/json/swipe.json", //static文件放置静态文件，别的不好使
				list: [], //放请求到的数据
			}
		},
		mounted() {
			this.getSwipe()
			this.$parent.$data.isActive = "none"
		},
		methods: {
			getSwipe() {
				this.axios.get(this.Json)
					.then(res => {
						this.list = res.data
					})
					.catch(err => {
						console.log(err);
					})
			},
			back() {
				this.$parent.$data.isActive = "block"
			}
		}
	}
</script>


<style scoped>
	.mint-swipe {
		height: 200px;
	}

	.mint-swipe-item:nth-child(1) {
		background-color: #5193e2;
	}

	.mint-swipe-item:nth-child(2) {
		background-color: #34153a;
	}

	.mint-swipe-item:nth-child(3) {
		background-color: #9cbf4e;
	}

	.mint-swipe-item img {
		width: 100%;
		height: 100%;
	}

	.mui-table-view {
		background-color: #ffffff;
	}

	.mui-grid-view.mui-grid-9 .mui-table-view-cell {
		border: none;
	}

	.mui-grid-view.mui-grid-9 .mui-table-view-cell img {
		width: 50%;
		height: 50%;
	}
</style>
