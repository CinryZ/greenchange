<template>
	<main>
		<div class="top">
			<div class="goback" @click="goback">
				<span></span>
			</div>
			<div class="bag">
				<div><img src="../../../static/img/templogo.jpg"  alt=""></div>
				<div>闲置优品</div>
			</div>
			
		</div>
		<div class="inputs">
			<!-- 可设置校验状态：state="" success成功 error错误 warning警告 -->
			<ul>
				<li>
					<mt-field  state="success" placeholder="username" ></mt-field>
				</li>
				<li>
					<mt-field  placeholder="password" type="password" ></mt-field>
				</li>
			</ul>	
			<!-- <mt-field label="验证码" v-model="captcha">
			  <img src="" height="45px" width="100px">
			</mt-field> -->
			<div class="btns">
				<router-link to="/index"><mt-button type="primary">登录</mt-button></router-link>
				
			</div>
		</div>
		<router-link to="/register">
			<div class="jump">还没有账号？点此注册</div></router-link>
		
	</main>
</template>
<script>
	export default{
		methods:{
			goback(){
				this.$router.go(-1)
			}
		}
	};
</script>
<style scoped>
	main{
		position:relative;
		z-index:99;
		width: 100%;
		min-height: 100vh;
		background:white;
	}
	ul.foot{
		display: none;
	}
	.top{
		width: 100%;
		height: 200px;
	}
	.bag{
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}
	.bag>div{
		padding: 10px 0;
	}
	.bag img{
		width: 100px;
		height: 100px;
		border-radius: 50%;
	}
	.top .goback span{
		display: block;
		width: 10px;
		height: 10px;
		background: transparent;
		border-top: 1px solid #666;
		border-left: 1px solid #666;
		transform: rotate(-45deg);
		position: absolute;
		margin-top: 15px;
		margin-left: 20px;
	}
	.inputs ul li{
		margin: 0 auto;
	}
	.inputs ul li>a {
		border-bottom: 1px solid #eee;
		margin: 0 30px;
	}
	.inputs ul li .mint-cell-wrapper{
		background-image: none;
	}
	.inputs .btns{
		width: 100%;
		margin-top: 20px;
	}
	.inputs .btns button{
		width: 200px;
		margin-left: 90px;
		/* margin: 5px; */
		/* padding: 22px 75px; */
	}
	button{
		 background: linear-gradient(to left,#76cadc,#98d9d0, #b9e3cf); 
	}
	.jump{
		text-align: right;
		margin-top: 30px;
	}
</style>