<template>
	<div>
		<div class="seckill">
			<div class="seckill-list" :style="styleobj2">
				<div class="seckill-item" v-for="value in datalist" :key='value.id'>
					<img :src="value.imgsrc" alt="" />
					<span>{{value.title}}</span>
				</div>
			</div>
		</div>
		<div class="progress">
			<div class="progress-bar" :style="styleobj"></div>
		</div>
	</div>
</template>

<script>
	//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
	//例如：import 《组件名称》 from '《组件路径》';

	export default {
		props: {
			datalist: Array
		},
		//import引入的组件需要注入到对象中才能使用
		components: {},
		data() {
			//这里存放数据
			return {
				bgbar: 100, //背景长度
				bar: 0, //滚动条长度
				barmove: 0, //滚动条移动距离
				content: 1000, //内容长度
				box: document.documentElement.clientWidth, //盒子长度
				contentmove: 0, //内容移动距离
				startx: 0, //内容移动开始距离
				endx: 0, //内容移动结束距离
				contentmoveX:0//上一次移动的left值
			};
		},
		
		//监控data中的数据变化
		watch: {},
		//方法集合
		methods: {
			touchstartFn(e) {
				let touch = e.touches[0];
				this.startx = touch.pageX;
			},
			touchmoveFn(e) {
				//获取内容移动的距离
				let touch = e.touches[0];
				let movex = touch.pageX - this.startx;
//				console.log(movex)
				//获取滚动条移动距离
				this.barmove = -((movex / this.content) * this.bgbar-this.endx);				
				
				if(this.barmove<=0){
					this.barmove = 0
				}else if(this.barmove >= this.bgbar - this.bar){
					this.barmove = this.bgbar - this.bar;
				}
				
				this.contentmoveX = movex+this.contentmove;
				console.log(this.contentmoveX)
				if(this.contentmoveX>=0){
					this.contentmoveX=0
				}else if(this.contentmoveX<= this.box-this.content){
					this.contentmoveX = this.box-this.content
				}
				

			},
			touchendFn(){
				this.endx = this.barmove;
				this.contentmove = this.contentmoveX;
			},
			bind() {
				this.$el.addEventListener('touchstart', this.touchstartFn, false);
				this.$el.addEventListener('touchmove', this.touchmoveFn, false);
				this.$el.addEventListener('touchend', this.touchendFn, false);
			},
			//计算滚动条宽度
			getbarwidth() {
				this.bar = this.box / this.content * this.bgbar
			}
		},
		beforeCreate() {}, //生命周期 - 创建之前
		//生命周期 - 创建完成（可以访问当前this实例）
		created() {},
		beforeMount() {}, //生命周期 - 挂载之前
		//生命周期 - 挂载完成（可以访问DOM元素）
		mounted() {
			//			console.log(this)
			this.bind();
			this.getbarwidth();
		},
		beforeUpdate() {}, //生命周期 - 更新之前
		updated() {}, //生命周期 - 更新之后
		beforeDestroy() {}, //生命周期 - 销毁之前
		destroyed() {}, //生命周期 - 销毁完成
		activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
		//监听属性 类似于data概念
		computed: {
			styleobj() {
				return {
					width: `${this.bar}px`,
					left: `${this.barmove}px`
				}
			},
			styleobj2() {
				return {
					left: `${this.contentmoveX}px`
				}
			}
		},
	};
</script>

<style lang="less">
	.seckill {
		height: 19rem;
		overflow-x: scroll;
		position: relative;
		.seckill-list {
			width: 100rem;
			height: 19rem;
			position: absolute;
			top: 0;
			left: 0;
			.seckill-item {
				float: left;
				width: 10rem;
				height: 19rem;
				display: flex;
				flex-direction: column;
				align-items: center;
				text-align: center;
				img {
					width: 9rem;
					height: 9rem;
				}
			}
		}
	}
	
	.progress {
		position: absolute;
		bottom: 0;
		left: 50%;
		width: 100px;
		height: 10px;
		margin-left: -50px;
		background-color: #ccc;
		.progress-bar {
			position: absolute;
			top: 0;
			left: 0;
			width: 20px;
			height: 10px;
			background-color: red;
		}
	}
	
	.seckill::-webkit-scrollbar {
		display: none
	}
</style>