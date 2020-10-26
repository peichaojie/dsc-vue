<template>
	<div class="category-right">
		<div class="category-list">
			<a href="javascript:;">
				<img :src="this.ad" alt="" />
			</a>
			<div class="category-item" v-for="value in datalist" :key=value.cat_id>
				<h2>{{value.cat_name}}</h2>
				<div v-for="list in value.child" :key=list.cat_id>
					<router-link :to=" '/listdata?cat_id='+list.cat_id ">
						<img src="https://x.dscmall.cn/storage/images/202008/thumb_img/1153_thumb_G_1598580446008.jpg" alt="" />
						<span>{{list.cat_name}}</span>
					</router-link>
				</div>
			</div>
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
			return {
				datalist: [],
				ad: ''
			};
		},
		//监听属性 类似于data概念
		computed: {},
		//监控data中的数据变化
		watch: {
			$route(to) {
				//				console.log(to)
				let cid = to.params.cid;
				this.getdata(cid)
				let arr = this.$store.state.datalist.filter((item) => {
					return item.category_id == cid;
				});
				this.ad = arr[0].menu_img
			}
		},
		//方法集合
		methods: {
			getdata(cid) {
				axios.get(`/api/v1/category/categorylist/${cid}`).then((res) => {
					if(res.status == 200) {
						this.datalist = res.data.data;
						let arr = this.$store.state.datalist.filter((item) => {
							return item.category_id == cid;
						});
						console.log(arr)
						this.ad = arr[0].menu_img
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
			//			console.log(this)
			this.getdata('858')

		},
		beforeUpdate() {}, //生命周期 - 更新之前
		updated() {}, //生命周期 - 更新之后
		beforeDestroy() {}, //生命周期 - 销毁之前
		destroyed() {}, //生命周期 - 销毁完成
		activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
	};
</script>

<style lang="less">
	.category-right {
		width: 80%;
		height: 100%;
		padding: 1rem 1rem 0;
		box-sizing: border-box;
		overflow-y: scroll;
		.category-list {
			overflow-y: scroll;
			a {
				img {
					width: 100%;
				}
			}
			.category-item {
				display: flex;
				flex-direction: row;
				flex-wrap: wrap;
				h2 {
					width: 100%;
					height: 2.5rem;
					padding: 1.1rem 0;
					text-align: center;
					line-height: 2.5rem;
				}
				div {
					text-align: center;
					width: 33.33%;
					height: 8.2rem;
					margin-bottom: 1rem;
					img {
						height: 5.2rem;
						width: 5.2rem;
					}
					span {
						display: block;
						line-height: 3rem;
					}
				}
			}
		}
	}
</style>