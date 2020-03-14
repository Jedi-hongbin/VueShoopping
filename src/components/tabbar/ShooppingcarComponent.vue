<template>
	<div class="shoppingcar" style="overflow-y: hidden;">
		<div class="mui-card" v-for="(item,index) in list" :key=index>
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
					<div class="checkBox" @click="settlement(index,item)">
						<img :src=mark ref='mark' :style="{display:item.select}">
					</div>
					<img class="goodsPicture" :src=item.url>
					<div class="inner">
						<p class="goodsTitle">{{ item.title }}</p>
						<span class="goodsPrice">￥{{ item.price}}</span>
						<div class="numbox">
							<button class="ins" @click="ins(index,item.id)">-</button>
							<input class="ipt" type="text" ref='ipt' :value=item.count>
							<button class="add" @click="add(index,item.id)">+</button>
						</div>
						<a href="#" class="remove" @click.prevent="removeGoods(item.id)">删除</a>
					</div>
				</div>
			</div>
		</div>
		<footer class="footer" ref='panel'>
			<span class="pu">总计（不含运费）</span><span @click="down" ref='upordown' class="arrow">></span><br>
			<br>
			<span class="acc">共选中了<span class="red">{{ $store.getters.selectNum.number }}</span>件,共<span class="red">￥{{ $store.getters.selectNum.money }}</span>元</span>
			<button class="account">去结算</button>
		</footer>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				list: [],
				mark: 'Checkmark.png',
			}
		},
		mounted() {
			this.getGoods()
		},
		methods: {
			down(){
				if(this.$refs.upordown.innerText == '<'){
					this.$refs.panel.style.bottom = '54px';
					this.$refs.panel.style.transition = 'all 1s ease';
					setTimeout(()=>{this.$refs.upordown.innerHTML = '>';},1000)
				}else{
					this.$refs.panel.style.bottom = '0px';
					this.$refs.panel.style.transition = 'all 1s ease';
					setTimeout(()=>{this.$refs.upordown.innerHTML = '<';},1000)
				}
			},
			getGoods() {
				this.list = this.$store.state.car;
			},
			ins(index, id) {
				if (this.$refs.ipt[index].value <= 1) {
					this.$refs.ipt[index].value = 1;
				} else {
					this.$refs.ipt[index].value--;
				}
				this.$store.commit('changeNum', {
					id: id,
					count: this.$refs.ipt[index].value
				});
			},
			add(index, id) {
				if (this.$refs.ipt[index].value >= 9) {
					this.$refs.ipt[index].value = 9;
				} else {
					this.$refs.ipt[index].value++;
				}
				let count = this.$refs.ipt[index].value;
				this.$store.commit('changeNum', {
					id: id,
					count: count
				})
			},
			removeGoods(index) {
				this.$store.commit('removeGoods', index)
			},
			settlement(index, item) {
				if (this.$refs.mark[index].style.display == 'block') {
					this.$refs.mark[index].style.display = 'none';
					this.$store.commit('makeMark', {
						id: item.id,
						select: this.$refs.mark[index].style.display
					})
				} else {
					this.$refs.mark[index].style.display = 'block';
					this.$store.commit('makeMark', {
						id: item.id,
						select: this.$refs.mark[index].style.display
					})
				}

			}
		}

	}
</script>


<style scoped>
	.arrow{
		display: block;
		width: 30px;
		height: 40px;
		background-color: #ccc;
		text-align: center;
		line-height: 40px;
		font-size: 25px;
		transform: rotate(90deg) translateY(-20px) scale(.5,1) translateX(4px);
		margin: -15px auto;
	}
	.shoppingcar[data-v-2cb56695] {
		margin-bottom: 146px;
	}

	.mui-card {
		animation: carcard 1s linear normal;
	}

	@keyframes carcard {
		from {
			transform: translateY(800px);
		}

		to {
			transform: translateY(0)
		}
	}

	.account {
		float: right;
		width: 150px;
		background-color: #900a73;
		font-weight: bold;
		color: #ffffff;
		transform: translate(-5px, -15px);

	}

	.account:hover {
		background-color: #ff0000;
	}

	.red {
		color: #f00;
	}

	.pu {
		position: absolute;
		font-size: 0.7rem;
		color: #CCCCCC;
		margin-left: 5px;
	}

	.acc {
		font-size: 0.8123rem;
		color: #828282;
		margin-left: 5px;
	}

	.footer {
		background-color: white;
		border: 1px solid #ccc;
		position: fixed;
		margin-left: 3px;
		border-radius: 5px;
		min-height: 80px;
		box-shadow: 0 0 5px #ccc;
		width: 98%;
		bottom: 54px;
		z-index: 10;
		animation: foot 1s linear normal;
	}

	@keyframes foot {
		0% {
			opacity: 0;
			bottom: 0;
		}

		60% {
			opacity: 0;
		}

		100% {
			opacity: 1;
			bottom: 54px;
		}
	}

	.checkBox {
		width: 20px;
		height: 20px;
		border: #000000 1px solid;
		border-radius: 50%;
		display: inline-block;
		transform: translateY(-10px);
	}

	.checkBox img {
		width: 110%;
		height: 100%;
		display: none;
	}

	.numbox {
		display: inline-block;
		margin: 0 2px 0 2px;
		transform: scale(0.8, 0.7);
	}

	.ins {
		background-color: #ccc;
		max-height: 30px;
		border-top-right-radius: 0px;
		border-right-bottom-radius: 0px;
		z-index: 1;
		font-size: 25px;
		font-weight: bold;
		line-height: 20px;
		border: 1px solid #333;
	}

	.add {
		border: 1px solid #333;
		background-color: #ccc;
		max-height: 30px;
		width: 35px;
		border-top-left-radius: 0px;
		border-left-bottom-radius: 0px;
		margin-left: -10px;
		line-height: 20px;
		font-size: 20px;
		font-weight: bold;
	}

	.ipt {
		text-indent: .2em;
		transform: translateX(-10px);
		border-radius: 0px;
		width: 45px;
		text-align: left;
		height: 30px;
		border: 1px solid #ccc;
	}

	.shoppingcar {
		margin-bottom: 70px;
	}

	.goodsPicture {
		margin-left: 20px;
		width: 60px;
		height: 60px;
		transform: translateY(5px);
	}

	.inner {
		display: inline-block;
		max-width: 210px;
		margin-left: 5px;
	}

	.goodsTitle {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		width: 190px;
		font-weight: bold;
		color: #333333;
		text-indent: .5em;
	}

	.goodsPrice {
		color: #f00;
	}

	.mui-numbox {
		width: 100px;
		height: 25px;
		margin-left: 5px;
		margin-right: 5px;
	}

	.remove {
		font-size: 12px;
	}


	.container-border {
		list-style-type: none;
	}
</style>
