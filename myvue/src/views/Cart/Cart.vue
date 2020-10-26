<!--  -->
<template>
	<div class='cart'>
		<Head title="购物车页面" :left='left' />
		<!--购物车内容区-->
		<div class="cart-content">
			<ul>
				<li v-for="(item,index) in cartdata" :key='item.goods_id'>
					<!--选择-->
					<div class="select" @click="radioFn(item,index)">
						<i class="iconfont icon-danxuankuang" v-if="!item.isselect"></i>
						<i class="iconfont icon-danxuankuangxuanzhong" style="color: red;" v-else></i>
					</div>
					<!--产品图-->
					<div class="cart-img">
						<img :src=" 'http://192.168.0.101:3000/'+item.goods_img " alt="" />
					</div>
					<!--产品详情-->
					<div class="cart-info">
						<div class="cart-intro">{{item.goods_name}}</div>
						<div class="cart-wrap">
							<span class="cart-price">{{item.shop_price}}</span>
							<div class="cart-num">
								<a href="javascript:;" @click="addnumFn(index)">+</a>
								<input type="number" value="1" v-model="item.value" min="1" ref='input1' @change="changenum(index)"/>
								<a href="javascript:;" @click="delenumFn(index)">-</a>
								<button class="iconfont icon-shanchu dele" @click="removeFn(index)"></button>
							</div>
						</div>
					</div>
				</li>
			</ul>
		</div>
		<!--购物车底部-->
		<div class="cart-footer">
			<div class="selectall" @click="selectallFn()">
				<i class="icon-danxuankuang iconfont" v-if="!selectall"></i>
				<i class="icon-danxuankuangxuanzhong iconfont" v-else style="color: red;"></i>
				<span>全选</span>
			</div>
			<div class="summation">
				合计：
				<span>{{totalprice}}</span>
			</div>
			<div class="settle">
				去结算({{count}})
			</div>
		</div>
		<Footer/>
	</div>
</template>

<script>
	//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
	//例如：import 《组件名称》 from '《组件路径》';
	import Footer from '@/components/Footer.vue';
	import Head from '@/components/Head.vue';

	export default {
		//import引入的组件需要注入到对象中才能使用
		components: {
			Footer,
			Head,
		},
		data() {
			//这里存放数据
			return {
				left: true,
				right: false
			};
		},
		//监听属性 类似于data概念
		computed: {
			//购物车列表
			cartdata() {
				return this.$store.state.cartslist
			},
			//全选
			selectall(){
				return this.$store.state.selectall;
			},
			//总价
			totalprice(){
				let totalprice = 0;
				this.$store.state.cartslist.forEach((item)=>{
					if(item.isselect){
						totalprice+= item.value * item.shop_price
					}
				});
				return totalprice
			},
			//总数量
			count(){
				let count = 0;
				this.$store.state.cartslist.forEach((item)=>{
					if(item.isselect){
						count+= item.value;
					}
				});
				return count
			}
		},
		//监控data中的数据变化
		watch: {},
		//方法集合
		methods: {
			//数量增加
			addnumFn(index) {
				this.$store.commit('addnumFn',index)
			},
			//数量减少
			delenumFn(index){
				this.$store.commit('delenumFn',index)
			},
			//切换选中状态
			radioFn(item,index){
				item.isselect = !item.isselect;
				this.$store.commit('radioFn',{item,index})
			},
			//删除商品
			removeFn(index){
				this.$store.commit('removeFn',index)
			},
			//全选
			selectallFn(){
				this.$store.commit('selectallFn')
			},
			//修改数字
			changenum(index){
				var val = this.$refs.input1[index].value;
				this.$store.commit('changenum',{val,index})
			}


		},
		beforeCreate() {}, //生命周期 - 创建之前
		//生命周期 - 创建完成（可以访问当前this实例）
		created() {

		},
		beforeMount() {}, //生命周期 - 挂载之前
		//生命周期 - 挂载完成（可以访问DOM元素）
		mounted() {
		},
		beforeUpdate() {}, //生命周期 - 更新之前
		updated() {}, //生命周期 - 更新之后
		beforeDestroy() {}, //生命周期 - 销毁之前
		destroyed() {}, //生命周期 - 销毁完成
		activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
	}
</script>
<style lang="less">
	/*购物车底部*/
	
	.cart-footer {
		width: 100%;
		height: 4.4rem;
		position: fixed;
		left: 0;
		bottom: 5rem;
		background-color: #FFFFFF;
		display: flex;
		border-top: 1px solid #EFEFEF;
		justify-content: space-between;
		align-items: center;
		text-align: center;
		line-height: 4.4rem;
		font-size: 1.4rem;
		border-left: 10px solid #FFFFFF;
		border-right: 10px solid #FFFFFF;
		box-sizing: border-box;
		.selectall {
			width: 20%;
		}
		.settle {
			width: 30%;
			height: 4.4rem;
			background-color: #FF5555;
			color: #FFFFFF;
		}
	}
	/*购物车内容区*/
	
	.cart-content {
		width: 100%;
		position: relative;
		padding: 1rem 1rem 0;
		overflow-y: scroll;
		box-sizing: border-box;
		ul{
			overflow-y: scroll;
		}
		li {
			width: 100%;
			height: 10rem;
			border-bottom: 1px solid #ccc;
			margin-bottom: 1rem;
			display: flex;
			.select {
				display: flex;
				flex-direction: column;
				justify-content: center;
				width: 10%;
			}
			.cart-img {
				width: 20%;
				display: flex;
				flex-direction: column;
				justify-content: center;
				img {
					width: 100%;
				}
			}
			.cart-info {
				width: 65%;
				margin: 0 2% 0 3%;
				display: flex;
				justify-content: center;
				flex-direction: column;
				.cart-intro {
					height: 4rem;
					line-height: 2rem;
					overflow: hidden;
					display: -webkit-box;
					-webkit-box-orient: vertical;
					-webkit-line-clamp: 2;
					overflow: hidden;
				}
				.cart-wrap {
					margin-top: 1rem;
					.cart-price {
						color: red;
						float: left;
						font-size: 1.6rem;
						&::before {
							content: '¥';
						}
					}
					.cart-num {
						float: right;
						a {
							float: left;
							width: 2rem;
							height: 2rem;
							background-color: #ccc;
							color: red;
							text-align: center;
							line-height: 2rem;
						}
						input {
							width: 3rem;
							height: 2rem;
							float: left;
							border: 1px solid #ccc;
							box-sizing: border-box;
							text-align: center;
						}
						.dele {
							background-color: transparent;
							margin: 0 2rem 0 2rem;
							font-size: 1.7rem;
							color: #666666;
						}
					}
				}
			}
		}
	}
</style>