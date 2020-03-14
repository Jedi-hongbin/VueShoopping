<template>
	<div class="picture">
		<div id="slider" class="mui-slider">
			<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
				<div class="mui-scroll">
					<a class="mui-control-item" v-for="(item,index) in list" :key="index" :class="[item.id==0?'mui-active':'']" @click=getPicture(index)>
						{{ item.title }}
					</a>
				</div>
			</div>
		</div>
		<!-- 缩略图 -->
		<ul class="pic">
			<li v-for="(item,index) in thumbsList" :key=index>
				<div class="thumbs">
					<vue-preview :slides=item class="imgPrev"></vue-preview>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	//MUI的js文件，解决顶部滑块无法滑动问题
	import mui from '../../lib/MUI/js/mui.min.js'
	//初始化要在dom渲染后初始化

	export default {
		data() {
			return {
				list: [],
				pictureItem: [],
				thumbsList: []
			}
		},
		mounted() {
			//初始化初始化scroll控件,在mounted时初始化控件，因为要等dom元素加载完毕后再能初始化组件
			mui('.mui-scroll-wrapper').scroll({
				deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
			});
			this.getTitle();
			this.getPicture(0);
		},
		methods: {
			getTitle() {
				this.axios.get("/static/json/picturetab.json")
					.then(res => {
						this.list = res.data
					})
					.catch(err => {
						console.log(err)
					})
			},
			getPicture(id) {
				this.thumbsList = [];
				this.axios.get("/static/json/pictureitem" + id + ".json")
					.then(res => {
						res.data.forEach((item) => {
							item.w = 600,
								item.h = 400,
								item.src = item.url,
								item.msrc = item.url
						})
						this.thumbsList.push(res.data);

					})
					.catch(err => {
						console.log(err)
					})
			}
		}
	}
</script>

<style>
	* {
		touch-action: pan-y;
		/* 顶部滑动时会报错，原因如下： */
		/* 值为none，表示什么不做 */
		/* y轴启用单指垂直滑动 */
		/* 谷歌浏览器为例提高滑动流畅度弄出的一个东西，某个区域用户可操作，如何让操作*/
	}

	.pic {
		list-style: none;
		margin: 0;
		padding-inline-start: 0px;
		margin-bottom: 50px;
		margin-top: 20px;
	}

	.pic li div img {
		width: 100%;
		margin-bottom: 5px;
		vertical-align: middle;
		box-shadow: 0 0 3px #001227;
	}

	/* 懒加载已经去掉了，纪念下吧 */
	/* .pic li img[lazy=loading] {
		width: 40px;
		height: 300px;
		margin: auto;
	} */
</style>
