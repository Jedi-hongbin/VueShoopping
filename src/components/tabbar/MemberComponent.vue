<template>
	<div class="member">
		<form class="mui-input-group" style="width: 95%;border: 1px solid #ccc;">
			<div class="mui-input-row">
				<label>用户名</label>
				<input type="text" class="mui-input-clear" placeholder="请输入用户名">
			</div>
			<div class="mui-input-row">
				<label>密码</label>
				<input type="password" class="mui-input-password" placeholder="请输入密码">
			</div>	
		</form>
			
	</div>
</template>

<script>
	export default {
		mounted() {
		}

	}
</script>


<style scoped>
	.mui-input-group {
		position: absolute;
		border-radius: 5px;
		margin: 200px 0 0 9px;
		box-shadow: 0 0 5px #ccc;
		z-index: 10;
	}
	.member img{
		width: 100%;
		height: 650px;
	}
</style>
