<template>
	<div class="search">
		<div class="mui-input-row mui-search">
			<input style="width: 98%;margin-left: 3px;" type="search" class="mui-input-clear" placeholder="serach">
			<div class="debounce">
				<router-link to="/search/debounce">
					<img src="../../images/js_icon.jpg">
					<span>函数防抖实现淘宝侧边导航栏</span>
				</router-link>
			</div>
			<div class="debounce">
				<router-link to="/search/scrollbar">
					<img src="../../images/js_icon02.jpg">
					<span>浏览器自带滚动条样式</span>
				</router-link>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'search',
		data() {
			return {
			}
		},

	}
</script>


<style scoped>
.debounce{
	width: 250px;
	height: 200px;
	border: #ccc;
	margin: 0 auto;
}
.debounce img{
	width: 100%;
	height: 150px;
}
</style>
