<!--  -->
<template>
	<div class="home">
		<HomeHeader/>
		<div class="nav-list">
			<ly-tab v-model="selectedId" :items="items" :options="options" @change='changeFn'></ly-tab>
			<div class="category-link">
				<i class="iconfont icon-leimupinleifenleileibie"></i>
				<span>分类</span>
			</div>
		</div>
		<div style="height: 8.8rem;"></div>
		<router-view></router-view>
		<Footer></Footer>
	</div>
</template>

<script>
	//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
	//例如：import 《组件名称》 from '《组件路径》';
	import Footer from '@/components/Footer.vue';
	import HomeHeader from './components/HomeHeader.vue';
	
	export default {
		//import引入的组件需要注入到对象中才能使用
		components: {
			Footer,
			HomeHeader,
		},
		data() {
			//这里存放数据
			return {
				selectedId: 0,
				items: [{
						label: '首页'
					},
					{
						label: '家用电器'
					},
					{
						label: '男装女装'
					},
					{
						label: '鞋靴箱包'
					},
					{
						label: '手机数码'
					},
					{
						label: '电脑办公'
					},
					{
						label: '家居家纺'
					},
					{
						label: '个人化妆'
					}
				],
				options: {
					activeColor: '#fff'
					// 可在这里指定labelKey为你数据里文字对应的字段名
				},
				ChildrenRouter: [
					'/home/index',
					'/home/ele',
					'/home/clothes',
					'/home/shoes',
					'/home/phone',
					'/home/computer',
					'/home/house',
					'/home/person'
				],
				ele:[{
					id:1,
					imgsrc:'https://x.dscmall.cn/storage/data/touch_icon/15985734207245.jpg',
					title:'大家电1'
				},{
					id:2,
					imgsrc:'https://x.dscmall.cn/storage/data/touch_icon/15985734207245.jpg',
					title:'大家电2'
				},{
					id:3,
					imgsrc:'https://x.dscmall.cn/storage/data/touch_icon/15985734207245.jpg',
					title:'大家电3'
				},{
					id:4,
					imgsrc:'https://x.dscmall.cn/storage/data/touch_icon/15985734207245.jpg',
					title:'大家电4'
				},{
					id:5,
					imgsrc:'https://x.dscmall.cn/storage/data/touch_icon/15985734207245.jpg',
					title:'大家电5'
				}]
			};
		},
		//监听属性 类似于data概念
		computed: {},
		//监控data中的数据变化
		watch: {},
		//方法集合
		methods: {
			changeFn(item, index) {
				//				console.log(item)//指的是组件
				//				console.log(index)//指代的是索引下标
				this.$router.push(this.ChildrenRouter[index])
			}
		},
		beforeCreate() {}, //生命周期 - 创建之前
		//生命周期 - 创建完成（可以访问当前this实例）
		created() {},
		beforeMount() {}, //生命周期 - 挂载之前
		//生命周期 - 挂载完成（可以访问DOM元素）
		mounted() {
		},
		beforeUpdate() {}, //生命周期 - 更新之前
		updated() {}, //生命周期 - 更新之后
		beforeDestroy() {}, //生命周期 - 销毁之前
		destroyed() {}, //生命周期 - 销毁完成
		activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
	};
</script>
<style lang="less">
	.nav-list {
		z-index: 99;
		position: fixed;
		margin-top: 4.4rem;
		display: flex;
		.ly-tab{
			width: 85%;
			.ly-tabbar{
				background-color: red;
				border: 0;
				box-shadow: 0 0px 0px 0px #eee;
				.ly-tab-list{
					padding: 0;
					height: 4.4rem;
				}
				a{
					color: #fff;
				}
			}
		}
	}
	.category-link{
		background-color: red;
		width: 15%;
		line-height: 4.4rem;
		height: 4.4rem;
		color: #fff;
		text-align: center;
		i{
			font-size: 1.6rem;
			padding-left: 5px;
			box-shadow: -6px 0 4px -4px rgba(0, 0, 0, 0.4);
		}
		span{
			font-size: 1.4rem;
		}
	}
</style>