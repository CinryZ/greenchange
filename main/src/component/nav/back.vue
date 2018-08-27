<template>
	<main>
		<mt-header fixed >
		  <span @click="back()" slot="left">
		    <mt-button icon="back">返回</mt-button>
		  </span>
		  <mt-button icon="more" slot="right"></mt-button>
		</mt-header>
		<div class="other"></div>
	</main>
</template>
<script>
	export default{
		methods:{
			back(){
				this.$router.go(-1);
			}
		}
	};
</script>
<style scoped>
	.other{
		height: 30px;
	}
	main .mint-header{
		width: 100%;
		background-color: #f4f4f5;
		color:#666;
	}
	.arrow{
		width: 9px;
		height: 9px;
		background:transparent ;
		border-left: 1px solid #333;
		border-top: 1px solid #333;
		transform: rotate(-45deg);
		position: absolute;
		left: 20px;
		top: 10px;
	}
	.dot{
		position: absolute;
		right: 20px;
		color: #333;
	}
</style>