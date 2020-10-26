<template>
	<div class="category1">
		<div class="category-header">
			<div class="back" @click="change"> &lt;
			</div>
			<form>
				<input type="text" placeholder="请输入关键字" v-on:focus="focus">
				<i class="iconfont icon-sousuo"></i>
			</form>
		</div>
	</div>
</template>

<script>
	//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
	//例如：import 《组件名称》 from '《组件路径》';

	export default {
		//import引入的组件需要注入到对象中才能使用
		components: {},
		data() {
			//这里存放数据
			return {};
		},
		//监听属性 类似于data概念
		computed: {},
		//监控data中的数据变化
		watch: {},
		//方法集合
		methods: {
			change(){
//				this.$router.push('/home/index')
				window.history.back()
			},
			focus(){
				this.$router.push('/search')
			}
		},
		beforeCreate() {}, //生命周期 - 创建之前
		//生命周期 - 创建完成（可以访问当前this实例）
		created() {},
		beforeMount() {}, //生命周期 - 挂载之前
		//生命周期 - 挂载完成（可以访问DOM元素）
		mounted() {},
		beforeUpdate() {}, //生命周期 - 更新之前
		updated() {}, //生命周期 - 更新之后
		beforeDestroy() {}, //生命周期 - 销毁之前
		destroyed() {}, //生命周期 - 销毁完成
		activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
	};
</script>

<style lang="less" scoped="scoped">
	.category1{
		z-index: 99;
		height: 4.4rem;
	}
	.category-header {
		background-color: #FFFFFF;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 99;
		height: 4.4rem;
		width: 100%;
		display: flex;
		box-sizing: border-box;
		border-bottom: 1px solid #ccc;
		.back {
			width: 10%;
			height: 4.4rem;
			text-align: center;
			line-height: 4.4rem;
			color: #333333;
			font-size: 2rem;
		}
		form{
			position: relative;
			width: 90%;
			height: 4.4rem;
			box-sizing: border-box;
			padding: 0 1rem;
			input{
				box-sizing: border-box;
				width: 100%;
				border: 1px solid #ccc;
				height: 3rem;
				margin-top: 0.7rem;
				border-radius: 1.5rem;
				text-indent: 1.5rem;
			}
			i{
				height: 4.4rem;
				width: 4.4rem;
				text-align: center;
				line-height: 4.4rem;
				font-size: 1.4rem;
				display: block;
				position: absolute;
				right: 1rem;
				top: 0;
			}
		}
	}
</style>