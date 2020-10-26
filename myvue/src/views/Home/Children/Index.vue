<!--  -->
<template>
	<div class="index">
		<div class="swipter">
			<Swipt/>
		</div>
		<QuickNav/>
		<Hot/>
		<Seckill :datalist='datalist'/>
		<div style="height: 10rem;"></div>

		<h2>首页组件</h2>
	</div>
</template>

<script>
	//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
	//例如：import 《组件名称》 from '《组件路径》';
	import Swipt from '@/components/Swipt.vue';
	import QuickNav from '../components/QuickNav.vue';
	import Hot from '../components/Hot.vue';
	import Seckill from '../components/Seckill.vue';

	export default {
		//import引入的组件需要注入到对象中才能使用
		components: {
			Swipt,
			QuickNav,
			Hot,
			Seckill,
		},
		data() {
			//这里存放数据
			return {
				datalist:[{
					id:1,
					imgsrc:'https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1489106749091.jpg?imageView2/2/format/webp',
					title:'实木家具'
				},{
					id:2,
					imgsrc:'https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1489106749091.jpg?imageView2/2/format/webp',
					title:'实木家具'
				},{
					id:3,
					imgsrc:'https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1489106749091.jpg?imageView2/2/format/webp',
					title:'实木家具'
				},{
					id:4,
					imgsrc:'https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1489106749091.jpg?imageView2/2/format/webp',
					title:'实木家具'
				},{
					id:5,
					imgsrc:'https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1489106749091.jpg?imageView2/2/format/webp',
					title:'实木家具'
				},{
					id:6,
					imgsrc:'https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1489106749091.jpg?imageView2/2/format/webp',
					title:'实木家具'
				},{
					id:7,
					imgsrc:'https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1489106749091.jpg?imageView2/2/format/webp',
					title:'实木家具'
				},{
					id:8,
					imgsrc:'https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1489106749091.jpg?imageView2/2/format/webp',
					title:'实木家具'
				},{
					id:9,
					imgsrc:'https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1489106749091.jpg?imageView2/2/format/webp',
					title:'实木家具'
				},{
					id:10,
					imgsrc:'https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1489106749091.jpg?imageView2/2/format/webp',
					title:'实木家具'
				}]
			};
		},
		//监听属性 类似于data概念
		computed: {},
		//监控data中的数据变化
		watch: {},
		//方法集合
		methods: {},
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
<style lang="less">
	.swipter {
		margin: 0 10px;
		div {
			border-radius: 10px;
		}
	}
</style>