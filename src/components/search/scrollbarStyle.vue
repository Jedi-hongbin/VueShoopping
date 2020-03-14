<template>
	<div class="scrollbar">
		<div class="scroll">
			Chrome<hr>
			<span>
			1. ::-webkit-scrollbar 滚动条整体部分，其中的属性: width,height,background,border等。
			2. ::-webkit-scrollbar-button 滚动条两端的按钮，可以用display:none让其不显示，也可以添加背景图片，颜色改变显示效果。
			3. ::-webkit-scrollbar-track 外层轨道。可以用display:none让其不显示，也可以添加背景图片，颜色改变显示效果。
			4. ::-webkit-scrollbar-track-piece 内层滚动槽/轨道，需要注意的就是它会覆盖第三个属性的样式。
			5. ::-webkit-scrollbar-thumb 滚动的滑块
			6. ::-webkit-scrollbar-corner 边角，两个滚动条交汇处
			7. ::-webkit-resizer 定义右下角拖动块的样式/两个滚动条交汇处用于拖动调整元素大小的小控件（基本用不上）</span><br>
			IE8<hr>
			IE8设置滚动条
			scrollbar-arrow-color: color; /*三角箭头的颜色*/
			scrollbar-face-color: color; /*立体滚动条的颜色（包括箭头部分的背景色）*/
			scrollbar-3dlight-color: color; /*立体滚动条亮边的颜色*/
			scrollbar-highlight-color: color; /*滚动条的高亮颜色（左阴影？）*/
			scrollbar-shadow-color: color; /*立体滚动条阴影的颜色*/
			scrollbar-darkshadow-color: color; /*立体滚动条外阴影的颜色*/
			scrollbar-track-color: color; /*立体滚动条背景颜色*/
			scrollbar-base-color:color; /*滚动条的基色*/

		</div>
	</div>
</template>

<script>
</script>

<style scode>
	.scrollbar {
		margin: 0 auto;
		width: 95%;
		height: 600px;
		border: 1px solid #333333;
	}

	.scroll {
		margin: 0 auto;
		width: 90%;
		height: 800px;
		background: #ccc;
	}
	
	
	::-webkit-scrollbar {
		width: 20px;
		background-color: #9d9d9d;
		border-radius: 2px;
		/* display: none;*/
	}
	
	::-webkit-scrollbar-thumb {
		/* border: 1px solid #4da650; */
		border-radius: 2px;
		background: linear-gradient(60deg,yellow,green,red,white);
		/* display: none; */
	}
</style>
