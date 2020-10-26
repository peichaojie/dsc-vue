<!--  -->
<template>
	<div>
		<div class="search">
			<a href="javascript:;" onclick="window.history.back()">&lt;</a>
			<form>
				<input type="text" placeholder="请输入搜索商品" v-model="keywords" />
				<i class="iconfont icon-sousuo"></i>
				<input type="button" value="搜索" @click="search" />
			</form>
		</div>
		<div class="search-wrap">
			<div class="search-wrap-title">
				<div class="search-title">最近搜索</div>
				<div class="iconfont icon-shanchu" @click="dele"></div>
			</div>
			<ul class="search-list">
				<li v-for="(item,index) in keywd" :key='index'>{{item}}</li>
			</ul>
		</div>

		<div class="search-wrap">
			<div class="search-wrap-title">
				<div class="search-title">热搜</div>
			</div>
			<ul class="search-list">
				<li>手机</li>
				<li>手机</li>
				<li>手机</li>
				<li>手机</li>
				<li>手机</li>
			</ul>
		</div>
		<Footer></Footer>
	</div>
</template>

<script>
	//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
	//例如：import 《组件名称》 from '《组件路径》';
	import Footer from '@/components/Footer.vue';

	export default {
		//import引入的组件需要注入到对象中才能使用
		components: {
			Footer,
		},
		data() {
			//这里存放数据
			return {
				keywords: ''
			};
		},
		//监听属性 类似于data概念
		computed: {
			keywd(){
				return this.$store.state.keywd
			},
		},
		//监控data中的数据变化
		watch: {},
		//方法集合
		methods: {
			search() {
				if(this.keywords) {
					this.$store.dispatch('searchlist', {keywords: this.keywords});
					this.$store.commit('getkeywd',this.keywords)
					this.$router.push('/searchlist')					
				}
			},
			dele(){
				this.$store.commit('dele')
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
	.search {
		width: 100%;
		height: 4.4rem;
		display: flex;
		a {
			width: 15%;
			height: 4.4rem;
			text-align: center;
			line-height: 4.4rem;
			font-size: 1.3rem;
			color: #333333;
		}
		form {
			width: 85%;
			position: relative;
			height: 4.4rem;
			display: flex;
			input[type='text'] {
				height: 3rem;
				margin-top: 0.7rem;
				box-sizing: border-box;
				border: 1px solid #ccc;
				border-radius: 1.5rem;
				width: 80%;
				text-indent: 1.5rem;
			}
			i {
				width: 4.4rem;
				height: 4.4rem;
				text-align: center;
				line-height: 4.4rem;
				font-size: 1.4rem;
				position: absolute;
				top: 0;
				right: 20%;
			}
			input[type='submit'] {
				width: 20%;
				height: 4.4rem;
				text-align: center;
				line-height: 4.4rem;
				font-size: 1.6rem;
				background-color: #fff;
			}
		}
	}
	
	.search-wrap {
		/*margin-top: 6rem;*/
		.search-wrap-title {
			display: flex;
			height: 4.4rem;
			line-height: 4.4rem;
			justify-content: space-between;
			margin: 0 10px;
		}
		.search-list {
			display: flex;
			flex-wrap: wrap;
			justify-content: flex-start;
			li {
				width: 20%;
				margin: 1% 2.5%;
				height: 3rem;
				line-height: 3rem;
				border: 1px solid #CCCCCC;
				box-sizing: border-box;
				background-color: #efefef;
				text-align: center;
			}
		}
	}
</style>