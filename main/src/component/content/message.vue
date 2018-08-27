<template>
	<main class="message">
		<mt-navbar v-model="active" fixed>
		  <mt-tab-item id="1">提醒</mt-tab-item>
		  <mt-tab-item id="2">私信</mt-tab-item>
		</mt-navbar>

		<mt-tab-container v-model="active" swipeable>
		  <mt-tab-container-item id="1" class="remind">
		    <mt-cell v-for="n in 5" class="remindCell">
				<img src="../../../static/img/travel1.jpg" alt="">
		    	<span>一位用户关注了您！</span>  		
		    </mt-cell>
		  </mt-tab-container-item>
		  <mt-tab-container-item id="2" class="msgItem">
		    <mt-cell v-for="n in 5" class="msgCell">
		    	<div class="img">
		    		<img src="../../../static/img/travel3.jpg" alt="">
		    	</div>
		    	<div class="right">
		    		<span class="nickname">小左</span>
		    		<p>你好，我想咨询下你的商品</p>
		    		<time>2018/08/19</time>
		    	</div>
		    </mt-cell>
		  </mt-tab-container-item>
		</mt-tab-container>
	</main>
</template>
<script>

	export default{
		data(){
			return{
				active:"1"
			}
			
		}
	};
</script>
<style scoped>
	.mint-navbar .mint-tab-item.is-selected{
		border-bottom:3px solid #26a2ff;
	}
	.mint-navbar{
		width: 50%;	
		padding: 0 100px;
	}
	.mint-navbar .tab-item{		
		margin-bottom:10px;
	}
	.remind img{
		width: 30px;
		height: 30px;
	}
	.remind{
		padding: 0 10px;
		margin-top: 50px;
	}
	.remind .mint-cell-value{
		width: 100%;
	}
	.remind span{
		font-size: 14px;
		padding: 0 10px;
	}
	.remindCell{
		padding: 10px 0;
	}
	.msgItem{
		padding: 0 10px;
		margin-top: 60px;
	}
	.msgCell{
		position: relative;
		margin-bottom: 15px;
		display: flex;
		padding: 8px 0;
	}
	.msgCell img{
		width: 40px;
		height: 40px;
		border-radius: 50%;
	}
	.msgCell .right{
		flex: 1;
		margin-left: 10px;
		border-bottom: 1px solid #eee;
		padding-bottom: 15px;
	}
	.msgCell .right span{
		color: #000;
		font-size: 14px;
		display: block;
		margin-bottom: 5px;
	}
	.msgCell .right p{
		font-size: 12px;
	}
	.msgCell .right time{
		position: absolute;
		right: 20px;
		top: 8px;
		font-size: 12px;
		color: #999;
	}
</style>