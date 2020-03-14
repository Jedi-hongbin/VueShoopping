<template>
	<div class="goods">
		<div class="con" v-for="(item,index) in list" :key=index @click="jump(index)">
			<img :src=item.url class="good">
			<p class="name">{{item.title}}</p>
			<div class="foot">
				<p class="price">${{ item.price }}</p>
				<p class="state">{{ item.state }}</p>
				<p class="state1" v-if="index % 3 == 0">自营</p>
				<p class="state2" v-if="index % 4 == 0">宏斌推荐</p>
			</div>
		</div>
		<mt-button plain size="large" type="danger" @click="load">加载更多</mt-button>
	</div>
</template>

<script>
	// //创建一个新vue实例用来进行商品和商品信息的传递
	// var dus = new vue();
	
	import {
		Toast
	} from 'mint-ui';
	export default{
		data(){
			return{
				list:[],
				id:0,
				information:[],
			}
		},
		mounted() {
			this.getGoods();
		},
		methods:{
			getGoods(){
				this.axios.get("/static/json/goods/goods"+this.id+".json")
					.then(res=>{
						this.list = this.list.concat(res.data);
					})
					.catch(err=>{
						console.log(err)
					})
			},
			load(){
				Toast({
					message: 'Loading...',
					position: 'middle',
					duration: 1500,
					iconClass: 'mui-spinner'
				});
				setTimeout(() => {
					this.id++
					if(this.id>1){
						this.id=0
					}
					Toast({
						message: '加载成功',
						position: 'middle',
						duration: 1000,
					});
					this.getGoods()
				}, 1600)
			},
			jump(index){
				this.$router.push("/home/goodsinfo/"+index);
			}
		}
	}
</script>

<style scoped>
	*{
		padding: 0;
		margin: 0;
	}
	.goods{
		display: flex;
		flex-flow: row wrap;
		margin: 0 auto;
		margin-bottom: 60px;
	}
	.con{
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		width: 150px;
		border: 1px solid #ccc;
		margin: 1%;
		flex-grow: 1;
		box-shadow: 0 0 2px #ccc;
		min-height: 250px;
	}
	.goods .con .good{
		width: 100%;
	}
	.goods .con .name{
		font-size: 15px;
		font-weight: 600;
		font-family: "bookshelf symbol 7";
		color:black;
		word-break:break-all;
		padding: 0 2px;
	}
	.goods .con .price{
		font-weight: bold;
		color:black;
		font-weight: 600;
	}
	.goods .con .state{
		color: #ffffff;
		display: inline-block;
		border-radius: 5px;
		background-color: #f00;
		font-size: 12px;
		margin-right: 5px;
		height: 18px;
		line-height: 18px;
	}
	.goods .con .state1{
		color: #0000FF;
		display: inline-block;
		border-radius: 5px;
		border: 1px solid #00f;
		font-size: 12px;
		margin-right: 5px;
		box-sizing: border-box;
		height: 18px;
		line-height: 18px;
	}.goods .con .state2{
		color: #ff0000;
		display: inline-block;
		border-radius: 5px;
		border: 1px solid #f00;
		font-size: 12px;
		margin-right: 5px;
		box-sizing: border-box;
		height: 18px;
		line-height: 18px;
	}
	.foot{
		background-color: #ccc;
	}
</style>
