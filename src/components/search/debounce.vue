<template>
	<div class="throttle">
		<h5>target:鼠标移入侧边栏，出现对应二级菜单，迅速移到另外一个菜单栏，中间路过的侧边栏不动 函数防抖</h5>
		<hr>
		<ul>
			<li @mouseenter="enter" @mouseleave="leave" v-for="(item,index) in list" :key=index>{{item}}</li>
		</ul>
		<div class="panel">0</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				list:[1,2,3,4,5,6,7,8]
			}
		},
		mounted() {
			//var time;
			//let $ = this.$
			
			// $("ul li").hover(a, function() {
			// 	console.log(this)
			// 	$(this).css({
			// 		backgroundColor: 'white'
			// 	})
			// });
			
			// function a(e) {
			// 	clearTimeout(time);
			// 	time = setTimeout(() => {
			// 		e.target.style.backgroundColor = 'pink';
			// 		document.querySelector('.panel').innerHTML = e.target.innerHTML
			// 	}, 300)
			// }
		},
		methods: {
			enter(e){
				var time;
				clearTimeout(time);
				time = setTimeout(() => {
					e.target.style.backgroundColor = 'pink';
					document.querySelector('.panel').innerHTML = e.target.innerHTML
				}, 300)
				
			},
			leave(){
				let $ = this.$
				$(this).css({
					backgroundColor: 'white'
				})
			}
		}
	}
</script>

<style scoped>
	* {
		padding: 0;
		margin: 0;
	}

	ul {
		display: inline-block;
	}

	li {
		list-style: none;
		text-align: center;
		cursor: pointer;
		border-bottom: 1px solid #333;
		width: 100px;
		padding: 10px 0 10px 10px;
	}

	.panel {
		display: inline-block;
		width: 200px;
		height: 330px;
		border: 50px solid #333;
		box-sizing: border-box;
		border-image: linear-gradient(red, pink, blue) 30 30 stretch;
		position: absolute;
		top: 90px;
		text-align: center;
		font-size: 120px;
		line-height: 250px;
	}
</style>
