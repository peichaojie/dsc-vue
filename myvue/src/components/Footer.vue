<!-- 公共的底部-标签栏 -->
<template>
	<div class="footer">
		<ul>
			<router-link to='/home' tag='li'>
				<div class="nav-img">
					<i class="iconfont icon-shouyex" v-if="active=='home'"></i>
					<i class="iconfont icon-1" v-else></i>
				</div>
				<span>首页</span>
			</router-link>
			<router-link to='/category/858' tag='li'>
				<div class="nav-img">
					<i class="iconfont icon-leimupinleifenleileibie2" v-if="active=='category'"></i>
					<i class="iconfont icon-leimupinleifenleileibie" v-else></i>
				</div>
				<span>分类</span>
			</router-link>
			<router-link to='/search' tag='li'>
				<div class="nav-img">
					<i class="iconfont icon-sousuo2" v-if="active=='search'"></i>
					<i class="iconfont icon-sousuo2" v-else></i>
				</div>
				<span>搜索</span>
			</router-link>
			<router-link to='/cart' tag='li'>
				<div class="nav-img">
					<i class="iconfont icon-gouwucheman" v-if="active=='cart'"></i>
					<i class="iconfont icon-gouwuche" v-else></i>
				</div>
				<span>购物车</span>
			</router-link>
			<router-link to='/mine' tag='li'>
				<div class="nav-img">
					<i class="iconfont icon-wodedangxuan" v-if="active=='mine'"></i>
					<i class="iconfont icon-profile" v-else></i>
				</div>
				<span>我的</span>
			</router-link>
		</ul>
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
			return {
				active: "home",
			};
		},
		mounted() {
			this.active = this.$route.path.slice(1);
		},
	};
</script>
<style lang="less">
	.footer {
		position: fixed;
		left: 0;
		bottom: 0;
		width: 100%;
		height: 4.9rem;
		background-color: #fff;
		border-top: 1px solid #ccc;
		z-index: 99;
		ul {
			display: flex;
			height: 100%;
			justify-content: center;
			align-items: center;
			li {
				width: 20%;
				text-align: center;
				/*line-height: 4.9rem;*/
				.nav-img{
					i{
						font-size: 2.2rem;
					}
				}
			}
		}
	}
	.router-link-active{
		color: #f20e28;
	}
</style>