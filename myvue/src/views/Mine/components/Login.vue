<!-- 登录页面 -->
<template>
	<div class='login-wrap'>
		<div class="login-inner">
			<div class="logo">
				<img src="@/assets/logo.png" alt="" />
			</div>
			<div class="login-tab">
				<a href="javascript:;" :class="{'active':loginflag}" @click.prevent="changeloginflag">短信登录</a>
				<a href="javascript:;" :class="{'active':!loginflag}" @click.prevent="changeloginflag">账号登录</a>
			</div>
			<div class="login-ctx">
				<!--短信登录-->
				<div v-if="loginflag">
					<div class="select">
						<input type="tel" placeholder="请输入手机号" maxlength="11" v-model="phone" />
						<button v-if="!num" @click="getcode">获取验证码</button>
						<button v-else disabled>已发送{{num}}秒</button>
					</div>
					<div class="select">
						<input type="text" placeholder="请输入验证码"/>
					</div>
				</div>
				<!--账号登录-->
				<div v-else>
					<div class="select">
						<input type="text" placeholder="请输入账号/邮箱" v-model="user_name"/>
					</div>
					<div class="select">
						<input type="password" v-if="hidePass" placeholder="请输入密码" v-model="pass"/>
						<input type="text" v-else placeholder="请输入密码" v-model="pass"/>
						<button v-if="hidePass" class="iconfont icon-yincang" @click="showhidepass"></button>
						<button v-else class="iconfont icon-xianshi" @click="showhidepass"></button>
					</div>
					<div class="select">
						<input type="text" placeholder="验证码" v-model="captcha"/>
						<img src="http://192.168.0.101:3000/api/v1/users/captcha" alt="" ref='captcha' @click="getcaptcha"/>
					</div>
				</div>
			</div>
			<button class="login-btn" @click="login">登录</button>
		</div>

	</div>
</template>

<script>
	//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
	//例如：import 《组件名称》 from '《组件路径》';
	import { Toast } from 'mint-ui';
	import {loginuser} from "@/api/login.js";

	export default {
		//import引入的组件需要注入到对象中才能使用
		components: {},
		data() {
			//这里存放数据
			return {
				loginflag: true,
				phone: '',
				num: 0,
				timer:'',
				user_name:'',
				pass:'',
				hidePass:true,
				captcha:''

			};
		},
		//监听属性 类似于data概念
		computed: {
			identifyPhone(){
				return /^[1][3,5,6,7,8,9][0-9]{9}$/.test(this.phone)
			}
		},
		//监控data中的数据变化
		watch: {},
		//方法集合
		methods: {
			changeloginflag() {
				this.loginflag = !this.loginflag
			},
			getcode(){
				if(this.identifyPhone){
					this.num = 10;
					this.timer = setInterval(()=>{
						this.num--;
						if(this.num == 0){
							clearInterval(this.timer)
						}
					},1000)
				}
			},
			showhidepass(){
				this.hidePass = !this.hidePass
			},
			getcaptcha(){
				this.$refs.captcha.src = "http://192.168.0.101:3000/api/v1/users/captcha?t="+ new Date().getTime();
//				                          http://114.215.173.225:3000/api/users/captcha
//                                         39.101.210.136:3000/
			},
			async login(){
				if(!this.user_name){
					Toast('请输入用户名');
					return
				}else if(!this.pass){
					Toast('请输入密码');
					return
				}else if(!this.captcha){
					Toast('请输入验证码');
					return
				}
				
				const result = await loginuser(this.user_name, this.pass, this.captcha)
				if(result.status == 200){
					this.$store.dispatch('actgetuserinfo',result.data[0]);
					this.$router.push("/home");
				}
			}

		},
		beforeCreate() {}, //生命周期 - 创建之前
		//生命周期 - 创建完成（可以访问当前this实例）
		created() {

		},
		beforeMount() {}, //生命周期 - 挂载之前
		//生命周期 - 挂载完成（可以访问DOM元素）
		mounted() {

		},
		beforeUpdate() {}, //生命周期 - 更新之前
		updated() {}, //生命周期 - 更新之后
		beforeDestroy() {}, //生命周期 - 销毁之前
		destroyed() {}, //生命周期 - 销毁完成
		activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
	}
</script>
<style lang="less" scoped="scoped">
	.login-wrap {
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0;
		left: 0;
		bottom: 0;
		overflow: hidden;
		.login-inner {
			width: 85%;
			height: 100%;
			margin: 0 auto;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			.logo {
				width: 10rem;
				height: 10rem;
				border-radius: 50%;
				border: 1rem solid #ccc;
				overflow: hidden;
				img {
					width: 100%;
				}
			}
			.login-tab {
				height: 4.4rem;
				width: 100%;
				display: flex;
				margin-top: 1rem;
				justify-content: space-between;
				a {
					width: 45%;
					height: 100%;
					background-color: #999999;
					text-align: center;
					line-height: 4.4rem;
					font-size: 1.6rem;
					border-radius: 10px;
				}
				.active {
					background-color: red;
					color: #FFFFFF;
				}
			}
			.login-ctx {
				width: 100%;
				.select {
					width: 100%;
					margin-top: 1rem;
					position: relative;
					input {
						width: 100%;
						height: 4.4rem;
						box-sizing: border-box;
						border: 1px solid #ccc;
						border-radius: 10px;
						text-indent: 1rem;
						&:focus{
							border: 1px solid red;
						}
					}
					button{
						position: absolute;
						right: 10px;
						top: 50%;
						transform: translateY(-50%);
						color: #666;
						font-size: 1.4rem;
					}
					img{
						position: absolute;
						right: 10px;
						top: 50%;
						transform: translateY(-50%);
						color: #666;
						font-size: 1.4rem;
					}
				}
			}
		}
			.login-btn{
				width: 100%;
				height: 4.4rem;
				background-color: red;
				color: #FFFFFF;
				border-radius: 10px;
				margin-top: 10px;
			}
	}
</style>