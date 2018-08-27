<template>
	<main id="publish">
		<button @click="add()">发布帖子</button>
		<!-- {{this.$store.state.count}} -->
	</main>
	
</template>
<script>
	export default{
		data(){
			return {
			}
		},
		methods:{
			add(){
				this.$store.commit('increment')
				console.log(store.state.count)
			}
		}
	};
</script>
<style scoped>
	.icon {
		   width: 2em; height: 1.5em;
		   vertical-align: -0.15em;
		   fill: currentColor;
		   overflow: hidden;
		   color: #666;
	}
	#publish{
		
	}
	.mint-popup{
		width: 100%;
	}
	.content{
		width: 100%;
		/* height: 100px; */
	}
	.content ul{
		display: flex;
		margin: 20px 10px;
		text-align: center;
	}
	.content ul li{
		width: 25%;
	}
	.content ul li span{
		display: block;
		width: 50px;
		height: 50px;
		border-radius: 50%;
		background: #fe5b7c;
		line-height: 65px;
		margin-left: 20px;
		margin-bottom: 10px;

	}
	.content ul li span svg{
		width: 2em;
		height: 2em;
		color: #fff;
	}
	.content ul li:nth-of-type(2) span{
		background: yellow;
	}
	.content ul li:nth-of-type(3) span{
		background: #149eff;
	}
	.content ul li:nth-of-type(4) span{
		background: #fed114;
	}
	.close span{
		display: block;
		width: 50px;
		margin: 0 auto;
		padding-bottom: 10px;
	}
	.close svg{
		transform: rotate(45deg);
		margin: 0 auto;
	}
</style>