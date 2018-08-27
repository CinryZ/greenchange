<template>
	<main>
		<back></back>
		<div class="container">
			<div class="userInfo">
				<div class="userPic">
					<img src="../../../static/img/travel1.jpg" height="33" width="33">
				</div>
				<div class="info">
					<span class="name">s壮壮</span>
					<span>1小时前</span>来过 发布于宁波
				</div>
			</div>
			<div class="content">
				<div class="price">
					<span class="new">￥<strong>80</strong></span>
					<span class="original"><s>￥169.99</s></span>
				</div>
				<div class="describe">
					<p>[转卖]小宜定制YESWOMEN蓬蓬百褶裙雪纺半身裙春秋… 颜色分类:杏粉色预售15天,尺码:M全新带吊牌</p>
					<img src="../../../static/img/detail1.jpg" alt="">
				</div>
				<div class="others">
					<a><i></i>担保交易</a>
					<span>浏览39</span>
				</div>
			</div>
			<div class="message">
				<h4>留言 2</h4>
				<ul class="msgCon">
					<li>
						<div class="user">
							<img src="../../../static/img/travel2.jpg" alt="">
							<span>米兔米兔</span>
						</div>
						<p>我想要这个商品~</p>
						<span class="time">1个月前</span>
					</li>
					<li>
						<div class="user">
							<img src="../../../static/img/travel2.jpg" alt="">
							<span>米兔米兔</span>
						</div>
						<p>我想要这个商品~</p>
						<span class="time">1个月前</span>
					</li>
				</ul>
			</div>
			
		</div>
		<div class="guessLike">
				<h4>猜你喜欢</h4>
				<ul class="product">
					<li v-for="v in proItems">
						<img :src="v.pic" alt="">
						<p class="title">{{v.title}}</p>
						<span>￥{{v.price}}</span>
					</li>
				</ul>
			</div>
	</main>
</template>
<script>
	import back from '../nav/back.vue'
	export default{
		components:{
			'back':back
		},
		data(){
			return {
				proItems:[]
			}
		},
		mounted:function (){
			var url = './static/data/product.json';
			this.$axios.get(url)
	       .then(response=>{
	        console.log(response)
	        this.proItems=response.data.main;
	        this.cur=0;
	      	})
	      	.catch(error=>{
	       	 console.log(error);
	      	})
		}
	};
</script>
<style scoped>
	.container{
		padding: 0 10px;
		/* margin-bottom: 50px; */
	}
	.userInfo{
		display: flex;
	}
	.userInfo{
		margin-top: 15px;
	}
	.userInfo .userPic img{
		border-radius: 5px;
	}
	.userInfo .info{
		font-size: 12px;
		color: #888;
		margin-left: 10px;
	}
	.userInfo .info .name{
		display: block;
		font-size: 14px;
		color: #000;
		font-weight: bold;
	}
	.content{
		width: 100%;
		margin-top: 10px;
		padding: 15px 0;
		border-top: 1px solid #eee;
		border-bottom: 1px solid #eee;
	}
	.content .price{
		font-size: 12px;
		margin-bottom: 10px;
	}
	.content .price .new{
		color: red;
	}
	.content .price .new>strong{
		font-size: 16px;
		font-weight: bold;
	}
	.content .price .original{
		color: #666;
	}
	.describe img{
		max-width: 100%;
		max-height: 100%;
		margin: 0 auto;	
	}
	.others{
		font-size: 13px;
		color: #666;
		display: flex;
		justify-content: space-between;
		margin-top: 10px;
		line-height: 35px;
	}
	.others a{
		color: blue;
		padding-left: 10px;
		line-height: 25px;
	}
	.others a i{
		width: 25px;
		height: 25px;
		display: inline-block;
		background: url('../../../static/img/pay.png') no-repeat;
		background-position: 5px 8px;
	}
	.others span{
		padding-right: 10px;
	}
	.message{
		width: 100%;	
		margin-top: 10px;
	}
	.message h4{
		font-weight: bold;
		font-size: 15px;
	}
	.message .msgCon li{
		padding: 0 10px;
		margin-top: 10px;
	}
	.message .msgCon .user{
		font-size: 14px;
		font-weight: bold;
		margin-bottom: 10px;
	}
	.message .msgCon .user span{
		display: inline-block;
		height: 20px;
	}
	.message .msgCon img{
		width: 20px;
		height: 20px;
		border-radius: 5px;
		margin-top: 5px;
	}
	.message .msgCon p{
		margin-left: 25px;
		font-size: 14px;
		margin-bottom: 5px;
	}
	.message .msgCon .time{
		font-size: 12px;
		color: #666;
		margin-left: 25px;

	}
	.guessLike{
		margin-top: 20px;
		background: #f4f4f5;
		padding: 5px;
		padding-bottom: 70px;
	}
	.guessLike h4{
		font-size: 14px;
		color: #999;
		text-align: center;
		position: relative;
		margin-bottom: 10px;
	}
	.guessLike h4::before,.guessLike h4::after{
		content: '';
		width: 70px;
		height: 1px;
		background: #eee;
		position: absolute;
		top: 10px;
		margin-left: 20px;
	}
	.guessLike h4::before{
		margin-left: -90px;
	}
	.guessLike .product{
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		font-size: 13px;
	}
	.guessLike .product li{
		width: 48%;
		border-radius: 5px;
		background: #fff;
		margin-right: 5px;
		margin-bottom: 5px;
	}
	.guessLike .product li img{
		width: 100%;
		height: 200px;
		border-radius: 5px;
		margin-bottom: 5px;
	}
	.guessLike .product li .title{
		display: block;
		height: 20px;
		overflow-y: hidden;
		padding: 0 5px;
	}
	.guessLike .product li span{
		display: block;
		margin: 10px 0;
		color: red;
		font-weight: bold;
	}
</style>