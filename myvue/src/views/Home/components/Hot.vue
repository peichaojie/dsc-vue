<template>
	<div class="hot">
		<div class="hot-news">
			<img src="@/assets/news-hot.png" alt="" />
		</div>
		<ul ref='news' :class="{'trans':flag}">
			<li v-for="value in newslist" :key='value.id'>{{value.title}}</li>
		</ul>
	</div>
</template>

<script>
	export default {
		//import引入的组件需要注入到对象中才能使用
		components: {},
		data() {
			//这里存放数据
			return {
				newslist: [{
					id: 1,
					title: '新闻001'
				}, {
					id: 2,
					title: '新闻002'
				}, {
					id: 3,
					title: '新闻003'
				}, {
					id: 4,
					title: '新闻004'
				}, {
					id: 5,
					title: '新闻005'
				}],
				flag:false,
				timer:''
			};
		},
		methods:{
			swipt(){
				let oul = this.$refs.news;
				oul.style.marginTop = '-5rem';
				let that = this;
				that.flag = !that.flag;
				setTimeout(function(){
					that.newslist.push(that.newslist[0]);
					that.newslist.shift();
					oul.style.marginTop =0;
					that.flag = !that.flag;
				},500);
			}
			
		},
		mounted(){
			console.log(this.$refs.news)
			let that = this;
			that.timer = setInterval(function(){
				that.swipt()
			},2000)
		},
		destroyed(){
			clearInterval(this.timer)
		}
	};
</script>

<style lang="less" scoped="scoped">
	.hot {
		height: 5rem;
		border-top: 1px solid #ccc;
		border-bottom: 1px solid #ccc;
		overflow: hidden;
		display: flex;
		margin: 0 10px;
		.hot-news {
			transition: all 0.5s;
			img {
				height: 3rem;
				margin-top: 1rem;
			}
		}
		.trans{
			transition: all 0.5s;
		}
		ul {
			margin-left: 2rem;
			li {
				height: 5rem;
				line-height: 5rem;
				font-size: 1.4rem;
			}
		}
	}
</style>