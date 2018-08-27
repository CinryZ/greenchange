<template>
	<main>
		<ul class="title">
			<li :class="{current:cur==i}" v-for="(v,i) in items" @click="show(i)">
				{{v}}
			</li>
		</ul>
		<ul class="product">
			<router-link to="/detail">
				<li v-for="(v,i) in products">
				<div class="img">
					<img :src="v.pic">
				</div>
				<div class="right">
					<p>{{v.detail}}</p>
					<span class="money">
							{{v.price | symbol}}
					</span>
					<div class="bottom">		
						<a href="/" class="user">
							<img :src="v.userpic">
							<span>{{v.username}}</span>
						</a>
						<span class="time">发布于{{v.time}}</span>
					</div>
				</div>
			</li>
			</router-link>
			
		</ul>
	</main>
</template>

<script>
	import Vue from 'vue'
	Vue.filter('symbol',function(n){
		return '￥'+n;
	})
	export default{
		components:{
		},
		data(){		
			return {
				items:['新鲜','服装','居家','美妆','运动','玩具'],
				products:[],
				cur:0
			}
		},
		methods:{
			show(i){
				this.cur=i;
				var url = './static/data/product.json';
				this.$axios.get(url)
		       .then(response=>{
		        console.log(response)
		        this.products=response.data.main[i].product;
		      	})
		      	.catch(error=>{
		       	 console.log(error);
				})
			}
		},
		mounted:function(){
			this.cur=0;
			var url = './static/data/product.json';
			this.$axios.get(url)
	       .then(response=>{
	        console.log(response)
	        this.products=response.data.main[0].product;
	      	})
	      	.catch(error=>{
	       	 console.log(error);
	      	})
		}
	};

</script>


<style scoped>
	a{
		color: #666;
		text-decoration: none;
	}
	ul.title{
		display:flex;
	}
	ul.title{
		padding-bottom: 5px;
		border-bottom:1px solid #ddd;
		margin-top:10px;
		text-align:center;
	}
	ul.title li{
		width: 25%;
		font-size:14px;
		padding: 5px 0;
		color: #666;
	}
	ul.title li.current{
		color: purple;
	}
	ul.product{
		display: flex;
		flex-direction: column;
		margin-top: 10px;
		padding: 0 10px;
	}
	ul.product li{
		display: flex;
	}
	ul.product li {
		margin-top: 10px;
		border-bottom: 1px solid #999;
		padding-bottom: 5px;
		padding-left: 5px;
		padding-right: 5px;
		overflow: hidden;
	}
	ul.product li .img{
		width: 30%;
		padding: 5px;

	}
	ul.product li .img img{
		width: 100px;
		height: 100px;
		border-radius: 5px;
	}
	ul.product .right{
		flex: 1;
		position: relative;
	}
	ul.product .right p{
		font-size: 14px;
	}
	.right .money{
		font-size: 16px;
		color: red;
		display: block;
		width: 100%;
		text-align: right;
		margin-top: 5px;
	}
	.right .bottom{
		font-style: normal;
		color: #666;
		font-size: 14px;
		position: absolute;
		bottom: 10px;
		width: 100%;
		display: flex;
	}
	.right .bottom .user{
		text-decoration: none;
		font-size: 14px;
		color: #666;
		display: inline-block;
		width: 50%;
	}
	.right .bottom .user img{
		width: 25px;
		height: 25px;
		border-radius: 50%;
	}
	.right .bottom .time{
		display: inline-block;
		text-align: right;
		flex: 1;
		line-height: 30px;
		font-size: 12px;
	}
	
</style>