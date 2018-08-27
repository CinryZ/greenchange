<template>
	<main>
		<div class="header">	
			<div class="others">
				<img src="../../../static/img/travel1.jpg" alt="">
				<span class="nickname">春风十里不如你</span>
				<span class="word">诚信交易，绝无欺诈</span>
				<a href="/"></a>
			</div>
		</div>
		<div class="total">
			<ul>
				<li class="zan">
					<span>8756</span><p>获赞</p>	
				</li>
				<li class="attend">
					<span>21</span><p>关注</p>	
				</li>
				<li class="fans">
					<span>18</span><p>粉丝</p>	
				</li>
				<li class="info">
					<span>
						<svg class="icon" aria-hidden="true">  	
						<use xlink:href="#icon-bianji1"></use>
						</svg>
					</span>
					<p>个人资料</p>	
				</li>
			</ul>
		</div>
		<div class="someList">
			<mt-cell title="我的发布" to="" is-link>
			<span>9</span>
			<!-- 加上 slot="icon"会识别在标题前的图标 -->
			<svg class="icon" slot="icon" aria-hidden="true">  	
				<use xlink:href="#icon-tongxunlu"></use>
			</svg>
			</mt-cell>
			<mt-cell title="我的售出" to="" is-link>
				<span>9</span>
				<svg class="icon" slot="icon" aria-hidden="true">  	
				<use xlink:href="#icon-shangdian"></use>
			</svg>
			</mt-cell>
			<mt-cell title="我的收藏" to="" is-link>
				<span>9</span>
				<svg class="icon" slot="icon" aria-hidden="true">  	
				<use xlink:href="#icon-gongwenbao"></use>
			</svg>
			</mt-cell>
			<mt-cell title="我的拍卖" to="" is-link>
				<span>9</span>
				<svg class="icon" slot="icon" aria-hidden="true">  	
				<use xlink:href="#icon-kafei"></use>
			</svg>
			</mt-cell>
			</div>
			<div class="otherList">
				<mt-cell title="推荐给好友" to="" is-link>
					<svg class="icon" slot="icon" aria-hidden="true">  	
				<use xlink:href="#icon-xiangce"></use>
			</svg>
				</mt-cell>
				<mt-cell title="设置" to="" is-link>
					<svg class="icon" slot="icon" aria-hidden="true">  	
				<use xlink:href="#icon-shezhi"></use>
			</svg>
				</mt-cell>
			</div>
			
		
		
	</main>
	
</template>
<script>
</script>
<style scoped>
	a{
		color: #666;
		text-decoration: none;
	}
	.icon {
	   width: 2em; height: 1.5em;
	   vertical-align: -0.15em;
	   fill: currentColor;
	   overflow: hidden;
	   color: #666;
	}
	.header{
		background: url('../../../static/img/travel3.jpg');
		width: 100%;
		height: 200px;
		background-size: 100%;
	}
	.header img{
		display: block;
		width: 45px;
		height: 45px;
		border-radius: 50%;
		border: 2px solid #fff;
	}
	.others{
		width: 100%;
		height: 50%;
		padding: 80px 15px 20px 15px;
		position: relative;
		color: #fff;
	}
	.others>span,.others>a{
		display: block;
		padding: 5px 0;
		padding-left: 10px;
	}
	.others .word{
		font-size: 13px;
	}
	.others a{
		width: 5px;
		height: 5px;
		border-top: 2px solid #fff;
		border-left: 2px solid #fff;
		background: transparent;
		position: absolute;
		bottom: 30px;
		right: 60px;
		transform: rotate(135deg)
	}
	.total ul{
		display: flex;
		padding: 10px 20px;
		text-align: center;
	}
	.total ul li{
		width: 25%;
	}
	.total ul li p{
		font-size: 12px;
		color: #666;
	}
	.total ul li span{
		font-size:17px;
		display:inline-block;
		height: 30px;
		line-height:30px;
	}
	.info .icon{
		width: 1.5em;
		height: 1.5em;
	}
	.someList{
		border-top: 3px solid #eee;
		border-bottom: 3px solid #eee;
	}
	.otherList{
		/* border-top: 5px solid #eee; */
	}
	.someList,.otherList{
		padding:0 8px;
	}
	
</style>