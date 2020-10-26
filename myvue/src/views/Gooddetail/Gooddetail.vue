<!-- 商品详情页 -->
<template>
	<div class='gooddetail'>
		<!--轮播图-->
		<div class="detail-swiper">
			<div class="swiper-container">
				<div class="swiper-wrapper">
					<div class="swiper-slide">
						<img :src='`http://192.168.0.101:3000/`+gooddetail.goods_img' />
					</div>
					<div class="swiper-slide">
						<img :src='`http://192.168.0.101:3000/`+gooddetail.goods_img' />
					</div>
				</div>
				<!-- Add Pagination -->
				<div class="swiper-pagination"></div>
			</div>
		</div>
		<!--内容区-->
		<div class="detail-container">
			<div class="detail-price">{{gooddetail.shop_price}}</div>
			<div class="detail-title">{{gooddetail.goods_name}}</div>
			<div v-html="gooddetail.goods_desc" class="imgs"></div>
		</div>
		<!--页脚区-->
		<div class="detail-footer">
			<div class="kefu">
				<i class="iconfont icon-kefu"></i>
				<span>客服</span>
			</div>
			<div class="collect">
				<i class="iconfont icon-shoucang"></i>
				<span>收藏</span>
			</div>
			<div class="cart" @click="tocart">
				<i class="iconfont icon-gouwuche"></i>
				<div :class="{addnum:flag}" v-show="flag">+1</div>
				<em>10</em>
				<span>购物车</span>
			</div>
			<div class="addcart" @click="addcartFn(gooddetail)">加入购物车</div>
			<div class="gobuy">立即购买</div>
		</div>

	</div>
</template>

<script>
	//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
	//例如：import 《组件名称》 from '《组件路径》';
	import Swiper from 'swiper';
	import 'swiper/dist/css/swiper.css';

	export default {
		//import引入的组件需要注入到对象中才能使用
		components: {},
		data() {
			//这里存放数据
			return {
				flag:false,
				timer:''
			};
		},
		//监听属性 类似于data概念
		computed: {
			gooddetail() {
				return this.$store.state.gooddetails
			}
		},
		//监控data中的数据变化
		watch: {},
		//方法集合
		methods: {
			//将商品信息添加至购物车
			addcartFn(data) {
				this.flag = true;
				this.timer = setTimeout(()=>{
					this.flag = false
				},1000)
//				console.log(data)
//				console.log(this.$store.state.cartslist)
				//				判断购物车列表是否有该商品
				//				有的话数量加一
				//				没有的话添加至购物车
				var isCart = this.$store.state.cartslist.findIndex((item) => {
					if(item.goods_id == data.goods_id) {
						item.value++
					}
					//如果有就数量加一 且返回true，没有的话就返回false
					return item.goods_id == data.goods_id
				});
				//如果购物车没有该商品,便往购物车添加该商品信息
				if(!isCart) {
					var cartdata = {
						goods_id: data.goods_id,
						goods_name: data.goods_name,
						shop_price: data.shop_price,
						goods_img: data.goods_img,
						value: 1,
						isselect: false
					}
				}
				this.$store.commit('setcartdata', cartdata)
			},
			tocart() {
				this.$router.push('/cart')
			}
		},
		beforeCreate() {}, //生命周期 - 创建之前
		//生命周期 - 创建完成（可以访问当前this实例）
		created() {},
		beforeMount() {}, //生命周期 - 挂载之前
		//生命周期 - 挂载完成（可以访问DOM元素）
		mounted() {
			this.$store.dispatch('actgetgooddetails', {
				'goods_id': this.$route.query.goods_id
			});
			new Swiper('.swiper-container', {
				autoplay: true,
				loop: true,
				pagination: {
					el: '.swiper-pagination',
				},
			});
		},
		beforeUpdate() {}, //生命周期 - 更新之前
		updated() {}, //生命周期 - 更新之后
		beforeDestroy() {}, //生命周期 - 销毁之前
		destroyed() {}, //生命周期 - 销毁完成
		activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
	}
</script>
<style lang="less">
	.detail-swiper {
		width: 100%;
		height: 37.5rem;
		img {
			width: 100%;
			height: 37.5rem;
		}
	}
	
	.detail-container {
		width: 100%;
		border: 10px solid #FFFFFF;
		width: calc(100% - 20px);
		img {
			width: 90%;
			margin-left: 5%;
		}
		.detail-price {
			font-size: 1.8rem;
			color: red;
			&::before {
				content: '¥';
				font-size: 1.2rem;
			}
		}
		.detail-title {
			margin: 2rem 0;
			font-size: 1.4rem;
			line-height: 2rem;
			color: #333333;
		}
	}
	
	.detail-footer {
		width: 100%;
		height: 4.4rem;
		position: fixed;
		left: 0;
		bottom: 0;
		background-color: #fff;
		z-index: 99;
		display: flex;
		border-top: 1px solid #efefef;
		>div {
			font-size: 1.2rem;
			flex: 1;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			color: #666;
			i {
				font-size: 2rem;
			}
		}
		.addcart {
			flex: 2;
			background-color: #f55;
			color: #FFFFFF;
			font-size: 1.4rem;
		}
		.gobuy {
			flex: 2;
			background-color: #ff976a;
			color: #FFFFFF;
			font-size: 1.4rem;
		}
		.collect {
			border-left: 1px solid #efefef;
			border-right: 1px solid #efefef;
		}
		.cart {
			position: relative;
			em {
				position: absolute;
				right: 0.5rem;
				top: 0.5rem;
				min-width: 1.4rem;
				height: 1.4rem;
				border-radius: 1.4rem;
				background-color: red;
				color: #FFFFFF;
				text-align: center;
				line-height: 1.4rem;
				font-style: normal;
				padding: 0.2rem;
			}
			.addnum{
				position: absolute;
				color: red;
				font-size: 1.4rem;
				top: 1rem;
				opacity: 0;
				width: 100%;
				text-align: center;
				animation: move 1s linear;
			}
			@keyframes move{
				0%{
					top: 1rem;
					opacity: 0;
				}
				50%{
					top: -1rem;
					opacity: 1;
				}
				100%{
					top: -1rem;
					opacity: 0;
				}
			}
		}
	}
</style>