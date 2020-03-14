<template>
	<div id="app">
		<!-- 顶部 Header 区域 - mint UI -->
		<mt-header fixed title="Super Market">
			<router-link to="#" slot="left">
				<mt-button icon="back" v-show="path != '/home'" @click="Back">返回</mt-button>
			</router-link>
		</mt-header>

		<transition>
			<router-view></router-view>
		</transition>
		<!-- 底部 Tabbar 区域 - MUI-->
		<nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item-hb" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item-hb" to="/mrmber">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item-hb" to="/shoopcar">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart">
					<span class="mui-badge" ref="ball"> {{ $store.getters.total }}</span>
				</span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item-hb" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
	</div>
</template>

<script>
	export default {
		computed: {
			path() {
				return this.$route.path
			}
		},
		methods: {
			Back() {
				this.$router.go(-1);
			},
		}

	}
</script>

<style scoped>
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		color: #2c3e50;
		margin-top: 60px;
		overflow-x: hidden;
	}

	.v-enter {
		opacity: 0;
		transform: translateX(100%);
	}

	.v-leave-to {
		opacity: 0;
		transform: translateX(-100%);
		position: absolute;
	}

	.v-enter-active,
	.v-leave-active {
		transition: all 0.5s ease;
	}

	.mui-bar-tab .mui-tab-item-hb.mui-active {
		color: #007aff;
	}

	.mui-bar-tab .mui-tab-item-hb {
		display: table-cell;
		overflow: hidden;
		width: 1%;
		height: 50px;
		text-align: center;
		vertical-align: middle;
		white-space: nowrap;
		text-overflow: ellipsis;
		color: #929292;
	}

	.mui-bar-tab .mui-tab-item-hb .mui-icon~.mui-tab-label {
		font-size: 11px;
		display: block;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.mui-bar-tab .mui-tab-item-hb {
		display: table-cell;
		overflow: hidden;
		width: 1%;
		height: 50px;
		text-align: center;
		vertical-align: middle;
		white-space: nowrap;
		text-overflow: ellipsis;
		color: #929292;
	}

	.mui-bar .mui-icon {
		padding-bottom: 0;
	}

	.mui-icon .mui-badge {
		font-size: 10px;
		line-height: 1.4;
		position: absolute;
		top: 0px;
		left: 100%;
		margin-left: -10px;
		padding: 1px 5px;
		color: #fff;
		background: red;
	}

	.mint-header.is-fixed {
		top: 0;
		right: 0;
		left: 0;
		position: fixed;
		z-index: 5;
		overflow: hidden;
	}

	::-webkit-scrollbar {
		width: 4px;
		background-color: #9d9d9d;
		border-radius: 2px;
		/* display: none; */
	}

	::-webkit-scrollbar-thumb {
		/* border: 1px solid #4da650; */
		border-radius: 2px;
		background: linear-gradient(60deg,yellow,green,red,white);
		/* display: none; */
	}
</style>
