<template>
	<div id="news">
		<ul class="mui-table-view" @click="getNews">
			<li class="mui-table-view-cell mui-media" v-for="(item,index) in list" :key=index>
				<router-link :to=" '/home/news/newsInfo/'+item.id ">
					<img class="mui-media-object mui-pull-right" :src=item.src>
					<div class="mui-media-body">
						{{ item.name }}
						<p class='mui-ellipsis'>{{ item.msg }}</p>
						<span class="time"><span>发布时间：{{ new Date() | dateFilter("YYYY-MM-DD") }}</span><span>点击数：0</span></span>
					</div>
				</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				name: "news",
				list: [],
				Json: '/static/json/news.json'
			}
		},
		mounted() {
			this.getNews()
		},
		methods: {
			getNews() {
				this.axios.get(this.Json)
					.then(res => {
						this.list = res.data
					})
					.catch(err => {
						console.log(err);
					})
			}
		}

	}
</script>

<style scoped>
	#news {
		margin-top: -15px;
		margin-bottom: 40px;
		color: #ff5500;
	}

	.mui-table-view {}

	#news span {
		color: #6fbcff;
		font-size: 12px;
	}

	.time {
		display: flex;
		justify-content: space-between;
	}

	.mui-table-view .mui-media-object {
		max-width: 60px;
	}
</style>
