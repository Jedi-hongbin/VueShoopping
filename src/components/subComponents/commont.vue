<template>
	<div class="com">
		<h4>评论区</h4>
		<hr>
		<textarea class="inner" v-model="content">
		</textarea>
		<mt-button size="large" type="primary" @click="send">发送评论</mt-button>
		<ul class="con" v-for="(item,index) in list" :key=index>
			<li><span>{{ index+1 }}楼 匿名用户</span><span>2020-01-05</span></li>
			<p class="text">{{ item.content }}</p>
		</ul>
		<mt-button plain size="large" type="danger" @click="load">加载更多。。。</mt-button>
	</div>
</template>

<script>
	import {
		Toast
	} from 'mint-ui';

	export default {
		data() {
			return {
				list: [],
				content: '',
				newContent: [],

			}
		},
		props: ['conid'],
		mounted() {
			if (this.conid == undefined) {
				return
			} else {
				this.getComment();
			}
		},
		methods: {
			send() {
				if (this.conid == undefined) {
					let common = {
						"content": this.content
					};
					this.list.unshift(common);
					this.content = '';
				} else {
					let user = 'content_' + this.conid;
					let common = {
						"content": this.content
					};
					let newContent = JSON.parse(localStorage.getItem(user));
					newContent.unshift(common);
					localStorage.setItem(user, JSON.stringify(newContent));
					this.list = newContent;
					this.content = '';
				}
			},
			getComment() {
				if (JSON.parse(localStorage.getItem('content_' + this.conid)) == null) {
					this.axios.get('/static/json/comment' + this.conid + '.json')
						.then(res => {
							this.list = res.data;
							localStorage.setItem('content_' + this.conid, JSON.stringify(res.data));
						})
						.catch(err => {
							console.log(err)
						})
				} else {
					this.list = JSON.parse(localStorage.getItem('content_' + this.conid));
				}
			},
			load() {
				Toast({
					message: 'Loading...',
					position: 'middle',
					duration: 2000,
					iconClass: 'mui-spinner'
				});
				setTimeout(() => {
					Toast({
						message: '暂时没有更多',
						position: 'middle',
						duration: 1000,
					});
				}, 2000)

			}
		}
	}
</script>

<style scoped>
	.com {
		margin-bottom: 55px;
	}

	.com .inner {
		width: 98%;
		height: 100px;
		margin: 0 3px;
	}

	.com .con {
		padding: 0;
		list-style: none;
		margin: 5px 2px;
	}

	.com .con li {
		border: 1px solid #cccccc;
		display: flex;
		justify-content: space-between;
		background-color: #ccc;
		border-radius: 5px;
	}

	.com .con p {
		margin: 0;
		text-indent: 2em;
		color: #555500;
		border-bottom: 1px solid #000000;
	}

	.mint-button--large {
		max-width: 99%;
		margin: 0 2px;
	}
</style>
