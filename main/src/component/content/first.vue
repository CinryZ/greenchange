<template>
	<main id="first">
		
		<transition enter-active-class="animated fadeIn">	
				<div class="animated fadeIn">
					<div class="img"></div>
				</div>	
			<!-- <span class="animated fadeIn">闲置优品</span> -->		 
		</transition>
		<div class="app">
			闲置优品
		</div>
		<transition enter-active-class="animated bounce">
			<router-link to="/index">
			<div class="click animated bounce">
				进入应用
			</div>
		</router-link>
		</transition>
		
		
	</main>
</template>
<script>
	
</script>
<style scoped>
	a{
		color: #666;
		text-decoration: none;
	}
	#first{
		position:relative;
		z-index:99;
		width: 100%;
		min-height: 100vh;
		background:white;
	}
	.img {
		width:100%;
		height: 100vh;
		background: url('../../../static/img/travel3.jpg') no-repeat;
		background-size: 100% 100%;
	}
	.app{
		position: absolute;
		width: 300px;
		top: 30%;
		left: 50%;
		margin-left: -100px;
		font-size: 60px;
		font-family: "方正舒体";
		color: #333;
	}
	.click{
		position: absolute;
		width: 150px;
		height: 50px;
		top: 50%;
		left: 50%;
		margin-left: -75px;
		font-size: 24px;
		background: #fafafa;
		border-radius: 10px;
		text-align: center;
		line-height: 50px;
		font-weight: bold;
		box-shadow: 3px 3px 5px 0px #eee;
	}
</style>