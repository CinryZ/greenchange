<template>
	<main>
		<v-header></v-header>
		<div class="container">
			<!-- 热门主题 -->
			<div class="theme">
				<div class="head">
						<svg class="icon user" aria-hidden="true">
				  			<use xlink:href="#icon-hot"></use>
						</svg>
					<h3>热门主题</h3>
				</div>
				<ul class="themeCon">
					<li v-for="(v,i) in themeItems">
						{{v | jing}}
					</li>
				</ul>
			</div>
			
			<ul class="title">
				<li :class="{current:cur==i}" v-for="(v,i) in titles" @click="show(i)">
					{{v}}
				</li>
			</ul>
			
			<ul class="article">
				<li v-for="(v,i) in articles">
					<div class="img">
						<img :src="v.pic">
					</div>
					<h4>{{v.title}}</h4>
					<div class="bottom">
						<span class="user"><img :src="v.userpic">{{v.username}}</span>
						<span class="like">{{v.like}}</span>
					</div>
				</li>
			</ul>
		</div>
	</main>
	

</template>
<script >

	import vheader from '../nav/header.vue'
	import '../../assets/js/iconfont.js'
	import Vue from 'vue'
	Vue.filter('jing',function(n){
		return '#'+n;
	})
	export default{
		components:{
			'v-header':vheader
		},
		data(){
			return {
				themeItems:['海淘好货','精致的猪猪女孩','数码发烧友','读书交流','品位家具'],
				titles:['推荐','旅行','美食','护肤','居家','生活'],
				articles:[],
				cur:0
			}
		},
		methods:{
			show(n){
				this.cur=n;

				var url = './static/data/article.json';
				this.$axios.get(url)
		       .then(response=>{
		       	// let a=JSON.parse(response.data)
		        // console.log(typeof a)
		        // console.log(response.data)
		       this.articles=response.data.main[n].recommand;
		      	})
		      	.catch(error=>{
		       	 console.log(error);
		      	})
			}
		},
		mounted:function (){
			var url = './static/data/article.json';
			this.$axios.get(url)
	       .then(response=>{
	        console.log(response)
	        this.articles=response.data.main[0].recommand;
	        this.cur=0;
	      	})
	      	.catch(error=>{
	       	 console.log(error);
	      	})
		}
	};
</script>
<style scoped>
	a{
		text-decoration: none;
		color: #666;
	}
	.icon {
	   width: 2em; height: 1.5em;
	   vertical-align: -0.15em;
	   fill: currentColor;
	   overflow: hidden;
	   color: #666;
	}
	.container{
		padding: 0 10px;
		overflow: hidden;
	}
	.container .theme{
		margin-top:20px;
	}
	.container .theme .head{
		width:150px;
		margin: 0 auto;
		text-align: center;
		position: relative;
	}
	.container .theme .head::before,.container .theme .head::after{
		content: '';
		position: absolute;
		width: 15px;
		height: 2px;
		background: #ddd;
		top: 10px;
	}
	.container .theme .head::before{
		left: 0px;
	}
	.container .theme .head svg{
		margin-left: 5px;
	}
	.theme .head h3{
		display: inline-block;
		width: 80px;
		font-weight: bold;
	}
	.theme .themeCon{
		display: flex;
		flex-wrap: wrap;
		width: 90%;
		margin-top: 10px;
	}

	.themeCon li{
		height: 30px;
		background: #23aeff;
		margin:  10px;
		font-size: 14px;
		line-height:30px;
		padding: 2px 5px;
		border-radius: 5px;
		color: #fff;
	}
	.themeCon li:nth-of-type(1){
		background: #ffb41d;
	}
	.themeCon li:nth-of-type(2){
		background: #fe518a;
	}
	.themeCon li:nth-of-type(3){
		background: #da54bd;
	}
	.themeCon li:nth-of-type(4){
		background: #06c583;
	}
	.container .title{
		display: flex;
	}
	.container .title{
		margin-top: 10px;
		padding: 7px 0;
		border-top: 1px solid #ddd;
		border-bottom: 1px solid #ddd;
	}
	.container .title li{
		width: 20%;
		text-align: center;
		color: #666;
		font-size: 14px;
	}
	.container .title li.current{
		color: #000;
	}
	.container .article{
		margin-top: 10px;
		background: #f4f9fa;
		margin-bottom: 100px;
	}
	/* 清除浮动 */
	.container .article::after{	
		content: "";
		clear: both;	
		display: block;
	}
	.container .article li{
		width: 45%;
		float: left;
		padding-left: 5px;
		padding-right: 12px;
		background: #fff;
		margin-bottom: 10px;
	}
	.container .article li .img{
		width: 100%;
		height: 150px;
	}
	.container .article li .img img{
		width: 100%;
		height: 100%;
	}
	.container .article li{
		font-size: 12px;
		padding-bottom: 5px;
	}
	.container .article li h4{
		margin: 10px 0;
	}
	.container .article li .bottom{
		position: relative;
		color: #333;
	}
	.container .article li .bottom .user img{
		width: 15px;
		height: 15px;
		border-radius: 50%;
		margin-right: 5px;
	}
	.container .article li .bottom .like{
		color: #666;
		position: absolute;
		right: 0;
		bottom: 0;
	}
</style>