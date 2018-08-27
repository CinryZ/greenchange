<template id="header">
	<main>
		<div class="head">
			<!-- 输入框 -->
			<div class="input">
				<input type="text" >
				<svg class="icon search" aria-hidden="true">
			  		<use xlink:href="#icon-sousuo"></use>
				</svg>				
			</div>
			<!-- 侧边图标 -->
			<div class="aside">
				<router-link to="/login">
					<svg class="icon user" aria-hidden="true">
			  			<use xlink:href="#icon-wode"></use>
					</svg>	
				</router-link>	
				<svg class="icon msg" aria-hidden="true">
					<use xlink:href="#icon-xiaoxi"></use>
				</svg>
			</div>
		</div>
		<div class="other"></div>
	</main>
</template>

<script>
	import '../../assets/js/iconfont.js'
</script>

<style scoped>
	.icon {
	   width: 2em; height: 2em;
	   vertical-align: -0.15em;
	   fill: currentColor;
	   overflow: hidden;
	}
	.icon.user{
		width: 1.5em; height: 2em;
	}
	.other{
		height: 40px;
	}
	.head{
		display: flex;
		background: linear-gradient(to right,#76cadc,#98d9d0, #b9e3cf);
		height: 40px;
		padding: 5px;
		padding-bottom: 0;
		position: fixed;
		z-index: 99;
		width: 100%;
	}
	.head .input{
		width: 70%;	
		height: 30px;
		color: #666;
		margin-left: 10px;
		align-items: center;
		position: relative;
	}
	.head .input .search{
		position: absolute;
		width: 1.2em;
		height: 1.2em;
		top: 5px;
		left: 10px;
		color: #666;
	}
	.head .aside{
		flex: 1;
		display: flex;
	}
	.head .aside svg{
		padding: 3px 10px;
	}
	.head input{
		border-radius: 4px;
		border: none;
		width: 90%;
		height: 100%;
		justify-content: center;	
	}
</style>