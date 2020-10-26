<template>
	<div class="home-header">
		<div class="header">
			<form>
				<input type="text" placeholder="请输入关键字" />
				<i class="iconfont icon-sousuo"></i>
			</form>
			<a>登陆</a>
		</div>

	</div>
</template>

<script>
</script>

<style lang="less" scoped="scoped">
	.home-header {
		width: 100%;
		height: 4.4rem;
		position: fixed;
		background-color: red;
		z-index: 99;
		top: 0;
		left: 0;
		.header {
			display: flex;
			form {
				width: 85%;
				position: relative;
				margin-left: 0.5rem;
				input {
					width: 100%;
					height: 3rem;
					border: 1px solid #efefef;
					border-radius: 1.5rem;
					margin-top: 0.7rem;
					box-sizing: border-box;
					font-size: 1.2rem;
					text-indent: 1.5rem;
				}
				i{
					position:absolute;
					right: 0;
					width: 4.4rem;
					height: 4.4rem;
					text-align: center;
					line-height: 4.4rem;
					top: 0;
					color: #999;
				}
			}
			a {
				display: block;
				font-size: 1.4rem;
				color: #fff;
				line-height: 4.4rem;
				width: 15%;
				text-align: center;
			}
		}
	}
</style>