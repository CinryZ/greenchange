<template id="footer">
	<main>
		<ul class="foot">
			<li>
				<router-link to="/index">
					<svg class="icon user" aria-hidden="true">
			  			<use xlink:href="#icon-zhuye"></use>
					</svg>
					<span>首页</span>
				</router-link>
			</li>
			
			<li>
				<router-link to="/discover">
					<svg class="icon user" aria-hidden="true">
			  			<use xlink:href="#icon-faxian"></use>
					</svg>
					<span>发现</span>
				</router-link>
			</li>
			
			<li class="send" @click="flag=true">
				<!-- <router-link to="/publish"> -->
					<div class="circle">
						<svg class="icon" aria-hidden="true">
			  				<use xlink:href="#icon-iconjia"></use>
						</svg>
					</div>
					<span>发布</span>
				<!-- </router-link> -->
				<!-- <router-view></router-view> -->
			</li>

			<li>
				<router-link to="/message">
					<svg class="icon user" aria-hidden="true">
			  			<use xlink:href="#icon-xiaoxi1"></use>
					</svg>
					<span>消息</span>
				</router-link>
			</li>
			<li>
				<router-link to="/personInfo">
					<svg class="icon user" aria-hidden="true">
			  			<use xlink:href="#icon-wode"></use>
					</svg>
					<span>我的</span>
				</router-link>
			</li>
		</ul>
		<div class="other"></div>	

		<mt-popup
		  v-model="flag"
		  position="bottom" popup-transition="popup-fade">
					<div class="content">
				<ul>
					<li><span>
						<svg class="icon" slot="icon" aria-hidden="true">  	
						<use xlink:href="#icon-bianji"></use>
					</svg>
					</span>发布闲置</li>
					<li><span>
						<svg class="icon" slot="icon" aria-hidden="true">  	
						<use xlink:href="#icon-discovery"></use>
					</svg>
					</span>共享物品</li>
					<li><span>
						<svg class="icon" slot="icon" aria-hidden="true">  	
						<use xlink:href="#icon-xiaoxi1"></use>
					</svg>
					</span>发布文章</li>
					<li><span>
						<svg class="icon" slot="icon" aria-hidden="true">  	
						<use xlink:href="#icon-Icon_xin"></use>
					</svg>
					</span>提出问题</li>
				</ul>
			</div>
			<div class="close">
				<span @click="close">
					<svg class="icon" slot="icon" aria-hidden="true">  	
						<use xlink:href="#icon-iconjia"></use>
					</svg>
				</span>
			</div>
		</mt-popup>

	</main>
	
</template>
<script>
	import '../../assets/js/iconfont.js'
export default{
		data(){
			return {
				flag:false
			}
		},
		methods:{
			close(){
				this.flag=false;
			}
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
	ul.foot{
		display: flex;
		position:fixed;
		bottom: -1px;
	}
	ul.foot{
		background: linear-gradient(to right,#76cadc,#98d9d0, #b9e3cf); 
		color: #666;
		width: 100%;
		height: 49px;
	}
	.foot li{
		width: 20%;
		text-align: center;
	}
	.foot li svg{
		display: block;
		margin: 0 auto;
		padding-top: 2px;
	}
	.foot li span{
		font-size: 9px;
	}
	.foot .send{
		position: relative;
		margin-bottom: 5px;
	}
	.foot .send span{
		display: block;
		margin-top: 28px;
	}
	.foot .send .circle{
		width: 45px;
		height: 45px;
		background: #fff;
		position: absolute;
		border-radius: 50%;
		bottom: 17px;
		left: 14px;
		border: 2px solid #aaa;
	}
	.foot .send .circle .icon{
		width: 2.5em;
		height: 2.5em;
		padding-top: 2px;
		color: #888;

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
		font-size: 14px;
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