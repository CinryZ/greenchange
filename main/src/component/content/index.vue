	<template id="index">
		<main class="container">
			<v-header></v-header>
			<div class="content">
				<!-- 轮播图 -->
				<div class="wrap">
					 <mt-swipe :auto="2000">
						  <mt-swipe-item v-for="item in items" :key="item.id">
							    <a :href="item.href" rel="external nofollow" >
								   <img :src="item.url">
								   <span class="desc"></span>
							    </a>
						  </mt-swipe-item>
					 </mt-swipe>
				</div>
				<!-- 分类 -->
				<div class="category">
					<ul>
						<li>
							<span>
								<svg class="icon search" aria-hidden="true">
						  			<use xlink:href="#icon-edit"></use>
								</svg>
							</span>
							<p>发布闲置</p>
						</li>
						<li>
							<span>
								<svg class="icon search colorBlue" aria-hidden="true">
						  			<use xlink:href="#icon-fushilei"></use>
								</svg>
							</span>
							<p>购物</p>
						</li>
						<li>
							<span>
								<svg class="icon search" aria-hidden="true">
						  			<use xlink:href="#icon-zulinfuwu"></use>
								</svg>
							</span>
							<p>时尚租赁</p>
						</li>
						<li>
							<span>
								<svg class="icon search" aria-hidden="true">
						  			<use xlink:href="#icon-aixin"></use>
								</svg>
							</span>
							<p>爱心捐献</p>
						</li>
						<li>
							<span>
								<svg class="icon search" aria-hidden="true">
						  			<use xlink:href="#icon-qiu"></use>
								</svg>
							</span>
							<p>拍卖</p>
						</li>
						<li>
							<span>
								<svg class="icon search" aria-hidden="true">
						  			<use xlink:href="#icon-yijianzhuanmai"></use>
								</svg>
							</span>
							<p>一键转卖</p>
						</li>
						<li>
							<span>
								<svg class="icon search" aria-hidden="true">
						  			<use xlink:href="#icon-tree"></use>
								</svg>
							</span>
							<p>环保贡献</p>
						</li>
						<li>
							<span>
								<svg class="icon search" aria-hidden="true">
						  			<use xlink:href="#icon-all"></use>
								</svg>
							</span>
							<p>闲置分类</p>
						</li>
					</ul>
				</div>
				<div class="hotAct">
					<h3>特 · 色 · 频 · 道</h3>
					<div class="trannel">
						<div class="tranleft">
							<h4>达人说</h4>
							<span>带你帅性入秋</span>
							<img src="../../../static/img/travel1.jpg" alt="">
						</div>
						<div class="tranright">
							<h4>值爆料</h4>
							<span>含泪甩卖</span>
							<img src="../../../static/img/travel2.jpg" alt="">
						</div>
						
					</div>
				</div>
				<productList></productList>
				<div class="tips">这一页没有东西咯，去浏览其他吧~</div>
			</div>
			<div class="gotop" @click="goback">
				<svg class="icon search" aria-hidden="true">
					<use xlink:href="#icon-huidingbu"></use>
				</svg>
			</div>
			<v-footer></v-footer>	
		</main>
		
	</template>
	<script>
			
		import '../../assets/js/iconfont.js'
		import vheader from '../nav/header.vue'
		import vfooter from '../nav/footer.vue'
		import productList from '../content/productList.vue'
		import 'mint-ui/lib/style.css'
		export default{
			components:{
				'v-header':vheader,
				'v-footer':vfooter,
				'productList':productList
			},
			mounted:function(){
				$(window).scroll(function(){
					this.height = $(this).scrollTop();
					if(this.height>100){
						$('.gotop').css('display','block');
					}
				})
			},
			data(){
				return {
					items:[
						{href:'/detail',url:'./static/img/wrap1.jpg'},
						{href:'/detail',url:'./static/img/wrap2.jpg'},
					],
					height:0
				}
			},
			methods:{
				goback(){
					$('html,body').scrollTop(0)
				}
			}
		};
		
	</script>
	<style scoped>
		a{
			color: #666;
			text-decoration: none;
		}
		.icon {
		   width: 2em; height: 2em;
		   vertical-align: -0.15em;
		   fill: currentColor;
		   overflow: hidden;
		}
		.container{
			display: -webkit-box;
			display: -webkit-flex;
			flex-direction: column;
			min-height: 100vh;
			justify-content: space-between;
			padding:0;
		}
		.content{
			-webkit-box-flex: 1;
			-webkit-flex: 1;
			-ms-flex: 1;
			flex: 1;
			width: 100%;
			overflow: auto;
			-webkit-overflow-scrolling: touch; 
			/* flex-grow: 1; */
			/* align-self: center; */
		}
		.content>div{
			padding: 0 10px;
		}
		.icon.colorBlue{
			color: blue;
		}
		.content .wrap{
			padding: 0;
		}
		.wrap img{
			width: 100%;
		}
		.mint-swipe{
			height: 145px;
		}
		.content .category{
			margin-top: 10px;
		}
		.content .category ul{
			display: flex;
			flex-wrap: wrap;
		}
		.content .category ul li{
			width: 25%;
			text-align: center;
			margin-top: 10px;
			color: #666;
		}
		.content .category ul li span{
			display: inline-block;
			/* background: pink; */
			border-radius: 10px;
			padding: 2px;
			margin-bottom: 5px;
		}
		.content .category ul li p{
			margin-top: 5px;
			font-size: 14px;
		}
		.content .category ul li:nth-child(8) .icon,.content .category ul li:nth-child(6) .icon{
			width: 1.7em;
		}
		.content .category ul li:nth-child(2) .icon{
			width: 3em;
		}
		.tips{
			margin: 20px 0;
		}
		.gotop{
			position: fixed;
			width: 40px;
			height: 40px;
			border-radius: 50%;
			background: #fff;
			bottom: 50px;
			right: 10px;
			border: 1px solid #666;
			display: none;
		}
		.gotop svg{
			color: #666;
			width: 1.8em;
			height: 1.8em;
			margin-left: 5px;
			margin-top: 5px;
		}
		.content .hotAct{
			margin: 15px 0;
			padding: 10px;
			padding-bottom: 15px;
			border-top: 1px solid #ddd;
			border-bottom: 1px solid #ddd;
		}
		.content .hotAct h3{
			margin: 0 auto;
			margin-bottom: 15px;
			background: linear-gradient(to left,#76cadc,#98d9d0, #b9e3cf); 
			width: 120px;
			text-align: center;
		}
		.content .trannel{
			display: flex;
			width: 100%;
		}
		.content .trannel>div{
			width: 50%;
			text-align: center;
			border-right: 1px solid #ddd;
		}
		.content .trannel .tranleft{
			padding-right: 10px;
		}
		.content .trannel .tranright{
			border: none;
			padding-left: 20px;
		}
		.content .trannel h4{
			font-weight: bold;
			text-align: left;
		}
		.content .trannel span{
			text-align: left;
			float: left;
			margin-top: 10px;
		}
		.content .trannel img{
			width: 50px;
			height: 50px;
			border-radius: 50%;
			float: right;
		}
	</style>