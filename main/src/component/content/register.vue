<template>
	<main>
		<div class="top">
			<div class="goback" @click="goback">
				<span></span>
			</div>
			<div class="bag">
				<div><img src="../../../static/img/templogo.jpg" alt=""></div>
				<div>闲置优品</div>
			</div>
			
		</div>
		<div class="inputs">
			<!-- 可设置校验状态：state="" success成功 error错误 warning警告 -->
			<ul>
				<li>
					<!-- v-model="username" -->
					<mt-field  state="success" placeholder="username" ></mt-field>
					<div id="unameTip"><p>错误</p></div>
				</li>
				<li>
					<mt-field  placeholder="password" type="password" ></mt-field>
					<div id="pwdTip"><p>错误</p></div>
				</li>
				<li>
					<mt-field  placeholder="confirm" type="password" ></mt-field>
					<div id="conTip"><p>错误</p></div>
				</li>
				<!-- <li>
					<mt-field  placeholder="tel" type="tel" v-model="phone"></mt-field>
				</li> -->
			</ul>	
			<!-- <mt-field label="验证码" v-model="captcha">
			  <img src="" height="45px" width="100px">
			</mt-field> -->
			<div class="btns">
				<mt-button type="primary">重置</mt-button>
				<router-link to="/login"><mt-button type="primary">注册</mt-button></router-link>
				
			</div>
		</div>
		
		
	</main>
	
</template>
<script>
	export default{
		methods:{
			goback(){
				this.$router.go(-1)
			}
		},
		mounted(){

		}
	};
</script>
<style scoped type="text/css">
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
		width: 150px;
		margin: 0 auto;
		margin-top: 20px;
	}
	.inputs .btns button{
		margin: 5px;
	}
	button.mint-button--primary{
		 background: linear-gradient(to left,#76cadc,#98d9d0, #b9e3cf); 
	}
	ul li div{
		padding: 5px 40px;
		display: none;
	}
</style>