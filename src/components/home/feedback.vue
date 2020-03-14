<template>
	<div class="feedback">
		<el-button type="primary" icon="el-icon-search">搜索</el-button>
		<el-button type="primary" icon="el-icon-delete">删除</el-button>
		<el-button type="primary" icon="el-icon-search" round>搜索</el-button>
		<el-button type="primary" icon="el-icon-delete" circle></el-button>
		<hr>
		<el-button>默认按钮</el-button>
		<el-button size="medium">中等按钮</el-button>
		<el-button size="small">小型按钮</el-button>
		<el-button size="mini">超小按钮</el-button>
		<hr>
		<el-button-group>
			<el-button type="primary" icon="el-icon-arrow-left">上一页</el-button>
			<el-button type="primary">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
		</el-button-group>
		<el-button-group>
			<el-button type="info" icon="el-icon-edit"></el-button>
			<el-button type="success" icon="el-icon-share"></el-button>
			<el-button type="warning" icon="el-icon-delete"></el-button>
		</el-button-group>
		<hr>
		<el-button type="primary" :loading="true">加载中</el-button>
		<el-link target="_blank">默认链接</el-link>
		<el-link type="primary">primary</el-link>
		<el-link type="success">success</el-link>
		<el-link type="primary" disabled>disabled禁用</el-link>
		<el-link type="success" :underline="false">无下划线链接</el-link>
		<el-input placeholder="要绑定v-model属性"></el-input>
		<el-input placeholder="带删除按钮" clearable></el-input>
		<el-input placeholder="不绑定v-model无法正常输入" show-password></el-input>
		<el-input placeholder="suffix-icon设置标签" suffix-icon="el-icon-date"></el-input>










	</div>
</template>

<script>
</script>

<style>
	.feedback {
		margin: 0 auto;
		width: 95%;
	}
</style>
