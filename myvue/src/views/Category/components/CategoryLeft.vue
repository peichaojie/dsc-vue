<template>
	<div class="category-left">
		<div class="category-list">
			<ul>
				<li v-for="value in this.$store.state.datalist" :key='value.category_id'>
					<router-link :to='"/category/"+value.category_id'>
						{{value.menu_name}}
					</router-link>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
	//例如：import 《组件名称》 from '《组件路径》';
	import axios from 'axios';

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
			getdata() {
				axios.get('/api/v1/category').then((res) => {
					if(res.status == 200) {
//						this.datalist = res.data.data
						//console.log(res.data.data)
						this.$store.dispatch('actgetdatalist',res.data.data)
//						this.$store.state.datalist = res.data.data
					}
				})
			}
		},
		beforeCreate() {}, //生命周期 - 创建之前
		//生命周期 - 创建完成（可以访问当前this实例）
		created() {},
		beforeMount() {}, //生命周期 - 挂载之前
		//生命周期 - 挂载完成（可以访问DOM元素）
		mounted() {
			this.getdata()
		},
		beforeUpdate() {}, //生命周期 - 更新之前
		updated() {}, //生命周期 - 更新之后
		beforeDestroy() {}, //生命周期 - 销毁之前
		destroyed() {}, //生命周期 - 销毁完成
		activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
	};
</script>

<style lang="less">
	.category-left {
		width: 20%;
		height: 100%;
		.category-list {
			width: 100%;
			height: 100%;
			overflow-y: scroll;
			background-color: #ccc;
			ul {
				li {
					height: 3.8rem;
					line-height: 3.8rem;
					text-indent: 0.5rem;
					font-size: 1.3rem;
				}
				.router-link-active {
					display: block;
					background-color: #fff;
					color: red;
				}
			}
		}
	}
</style>