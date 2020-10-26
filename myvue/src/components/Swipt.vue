<template>
	<div class="swipt">
		<mt-swipe 
			:auto="4000"
			:continuous='true'
			>
			<mt-swipe-item v-for='value in homelist' :key = 'value.swipe_id'>
				<img :src="value.swipe_img" alt="" />
			</mt-swipe-item>
		</mt-swipe>
	</div>
</template>

<script>
	//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
	//例如：import 《组件名称》 from '《组件路径》';


	export default {
		//import引入的组件需要注入到对象中才能使用
		components: {
		},
		data() {
			//这里存放数据
			return {};
		},
		//监听属性 类似于data概念
		computed: {
			homelist(){
				return this.$store.state.homeswiper
			}
		},
		//监控data中的数据变化
		watch: {},
		//方法集合
		methods: {
		},
		beforeCreate() {}, //生命周期 - 创建之前
		//生命周期 - 创建完成（可以访问当前this实例）
		created() {},
		beforeMount() {}, //生命周期 - 挂载之前
		//生命周期 - 挂载完成（可以访问DOM元素）
		mounted() {
			this.$store.dispatch('actgethomeswiper');
//			console.log(this)
		},
		beforeUpdate() {}, //生命周期 - 更新之前
		updated() {}, //生命周期 - 更新之后
		beforeDestroy() {}, //生命周期 - 销毁之前
		destroyed() {}, //生命周期 - 销毁完成
		activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
	};
</script>

<style lang="less">
	.swipt{
		width: 100%;
		height: 15rem;
		img{
			width: 100%;
			height: 15rem;			
		}
	}

</style>