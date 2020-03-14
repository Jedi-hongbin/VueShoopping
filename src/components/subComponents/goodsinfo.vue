<template>
	<div class="goodsinfo">
		<ul class="con" v-for="(item,index) in information" :key=index>
			<div class="wrap">
				<img ref='goodsPicture' :src=item.url>
			</div>
			<div class="mui-card-header">{{ item.title }}</div>
			<div class="mui-card-footer">价格:￥{{item.price}}</div>
		</ul>
		<div class="bottomborder">
		<span class="buysum">购买数量:</span>
		<div class="mui-numbox" data-numbox-min='1' data-numbox-max='9'>
			<button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
			<input id="test" class="mui-input-numbox" type="number" value="1" ref="num" @change="numberchange" />
			<button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
		</div>
		<div class="mui-card-content">
			<transition
			@before-enter="beforeEnter"
			@enter="enter"
			@after-enter="afterEnter"
			>
				<span class="ball" v-show="isActive" ref="littleRedball"></span>
			</transition>
			<mt-button type="danger" class="addcar" @click="addCar">加入购物车</mt-button>
			<mt-button type="primary" class="buy">购买</mt-button>
		</div>
		</div>
		<comment :id="'NULL'"></comment>
	</div>
</template>

<script>
	import comment from '../subComponents/commont.vue'
	import mui from '../../lib/MUI/js/mui.min.js'

	export default {
		data() {
			return {
				information: [],
				id: 0,
				isActive:false,
				scrolltop:198,
				selectNumber:1,
			}
		},
		mounted() {
			mui(".mui-numbox").numbox();
			this.getId();
		},
		methods: {
			getId() {
				this.axios.get("/static/json/goods/goods" + this.id + ".json")
					.then(res => {
						if (this.$route.params.id > res.data.length - 1) {
							this.id = 1;
							this.axios.get("/static/json/goods/goods" + this.id + ".json")
								.then(res => {
									this.information.push(res.data[this.$route.params.id - res.data.length]);
								})
						} else {
							this.information.push(res.data[this.$route.params.id]);
						}
					})
					.catch(err => {
						console.log(err)
					})

			},
			addCar(){
				this.isActive = true;
				//点击将商品信息添加至购物车，将购物车中所需信息整理为一个对象即可
				let goodsInfo = {
					count:parseInt(this.selectNumber),//选择的数量
					id:this.$route.params.id,//选择商品的id
					url:this.information[0].url,
					price:this.information[0].price,//选中商品的单价
					title:this.information[0].title,
					select:'none'//在购物车中是否选中：选中时计算价格
				}
				//将信息添加到vuex state中的car中接收
				this.$store.commit("addCar",goodsInfo);
			},
			numberchange(){
				this.selectNumber = this.$refs.num.value;
			},
			beforeEnter(el){
				el.style.transform = "translate(0,0)";
			},
			enter(el,done){
				el.offsetWidth;
				//getBoundingClientRect()返回一个矩形对象，有对应的x,y,width,height,top,left,right,bottom点的坐标，良心方法
				let littleRedball = this.$refs.littleRedball.getBoundingClientRect();//小球触发的点
				let ball = this.$parent.$refs.ball.getBoundingClientRect();//购物车上小球的点
				let disX = ball.x-littleRedball.x;
				let disY = ball.y-littleRedball.y;
				el.style.transform = `translate(${disX}px,${disY}px)`;
				el.style.transition = "all .6s cubic-bezier(.4,-0.3,1,.68)";
				done();
			},
			afterEnter(){
				this.isActive = false;
			},
		},
		components: {
			comment
		}
	}
</script>

<style scoped>
	.con {
		padding: 5px;
		margin: 0;
	}

	.wrap {
		max-height: 240px;
		border: 1px solid #ccc;
		overflow: hidden;
		box-shadow: 0 0 2px #ccc;

	}

	.wrap img {
		transform: translateX(40px);
		height: 240px;
	}

	.addcar {
		margin: 5px 23px 10px 20px;
	}

	.buy {
		margin-top: 5px;
	}

	.buysum {
		color: #6d6d72;
		margin-left: 20px;
		margin-right: 5px;
	}
	
	.mui-card-footer{
		padding: 0 0 0 20px;
		
	}
	.bottomborder{
		border: 1px solid #ccc;
		transform: translateY(-40px);
		border-top: none;
		width: 97%;
		margin-left: 5px;
		padding-top: 30px;
		box-shadow: 0 0 5px #ccc;
	}
	.ball{
		display: inline-block;
		width: 15px;
		height: 15px;
		border-radius: 50%;
		background-color: #FF0000;
		position: absolute;
		left: 150px;
		top: -25px;
		z-index: 99999;
	}
</style>
