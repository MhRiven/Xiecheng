<template>
<main>
	<!--更多服务-->
	<section id="moreMore">
		<router-link to="/index"><div></div></router-link>
		<span>更多服务</span>
	</section>
	
	<!--四个ul>li-->
	<section id="moreUlOne" class="moreUl">
		<span>金融服务</span>
		<ul>
			<li>
				<img src="../../assets/157.jpg" />
				<p>拿去花</p>
			</li>
			<li>
				<img src="../../assets/158.jpg" />
				<p>信用卡</p>
			</li>
			<li>
				<img src="../../assets/156.png" />
				<p>闪游卡</p>
			</li>
			<li></li>
		</ul>
	</section>
	
	<!--5px浅灰色留白-->
	<section class="moreSpace"></section>
	
	<!--四个ul>li-->
	<section class="moreUl">
		<span>会员权益</span>
		<ul>
			<li>
				<img src="../../assets/158.png" />
				<p>超级会员</p>
			</li>
			<li>
				<img src="../../assets/159.jpg" />
				<p>携程优品</p>
			</li>
			<li>
				<img src="../../assets/160.jpg" />
				<p>会员特权</p>
			</li>
			<li></li>
		</ul>
	</section>
	
	<!--5px浅灰色留白-->
	<section class="moreSpace"></section>
	
	<!--四个ul>li-->
	<section class="moreUl">
		<span>旅行工具</span>
		<ul>
			<li>
				<img src="../../assets/157.png" />
				<p>微领队</p>
			</li>
			<li>
				<img src="../../assets/161.jpg" />
				<p>紧急支援</p>
			</li>
			<li>
			</li>
			<li></li>
		</ul>
	</section>
	
	<!--5px浅灰色留白-->
	<section class="moreSpace"></section>
	
	<!--四个ul>li-->
	<section class="moreUl">
		<span>特色服务&产品</span>
		<ul>
			<li>
				<img src="../../assets/159.png" />
				<p>加盟合作</p>
			</li>
			<li>
				<img src="../../assets/162.jpg" />
				<p>公司会务</p>
			</li>
			<li>
				<img src="../../assets/163.jpg" />
				<p>携程小诗机</p>
			</li>
			<li></li>
		</ul>
	</section>
	
	<!--5px浅灰色留白-->
	<section class="moreSpace"></section>
	
	<!--最后一个UL-->
	<section id="moreUlLast">
		<span>应用推荐</span>
		<ul>
			<li>
				<img src="../../assets/164.jpg" />
				<p>携程企业商旅</p>
			</li>
			<li>
				<img src="../../assets/155.png" />
				<p style="top: 9px;">Trip.com</p>
			</li>
			<li>
			</li>
			<li></li>
		</ul>
	</section>
	
	<!--底部灰色留白-->
	<section style="background: #efeff4;width: 100%;padding-bottom: 73%;"></section>
	
<!--<router-view></router-view>-->
</main>
</template>

<script>
</script>

<style scoped>
*{
	padding: 0px;
	margin: 0px;
	font-size: 14px;
}
.moreSpace{
	width: 100%;
	height: 5px;
	background: #efeff4;
}
#moreMore{
	width: 100%;
	height: 44px;
	background: white;
	position: fixed;
	top: 0;
	z-index: 1;
}
#moreMore div{
	position: fixed;
	top: 16px;
	left: 4%;
	color: white;
	width: 11px;
	height: 11px;
	border-bottom: 2px solid black;
	border-left: 2px solid black;
	transform: rotate(45deg);
}
#moreMore span{
	width: 100%;
	height: 44px;
	display: block;
	text-align: center;
	font-size: 18px;
	line-height: 44px;
}
#moreUlOne{
	position: relative;
	width: 100%;
	height: 107px;
	margin-top: 44px;
}
.moreUl{
	position: relative;
	width: 100%;
	height: 107px;
	/*background: palegreen;*/
}
.moreUl span{
	position: absolute;
	top: 10%;
	left: 4%;
	font-size: 12px;
    color: #999;
    font-weight: 400;
    line-height: 1.1;
}
.moreUl ul{
	width: 93%;
	position: absolute;
	left: 3.5%;
	bottom: 15px;
}
.moreUl ul li{
	text-align: center;
	float: left;
	width: 25%;
	position: relative;
	height: 54px;
	/*background: dodgerblue;*/
}
.moreUl ul li img{
	position: relative;
	top: 0px;
	width: 30px;
	height: 30px;
}
.moreUl ul li p{
	position: relative;
	top: 7px;
	text-align: center;
	font-size: 12px;
    color: #333;
}
#moreUlLast{
	position: relative;
	width: 100%;
	height: 127px;
	/*background: palegreen;*/
}
#moreUlLast span{
	position: absolute;
	top: 9%;
	left: 4%;
	font-size: 12px;
    color: #999;
    font-weight: 400;
    line-height: 1.1;
}
#moreUlLast ul{
	width: 93%;
	position: absolute;
	left: 3.5%;
	bottom: 35px;
}
#moreUlLast ul li{
	text-align: center;
	float: left;
	width: 25%;
	position: relative;
	height: 54px;
	/*background: dodgerblue;*/
}
#moreUlLast ul li img{
	position: relative;
	top: 0px;
	width: 46px;
	height: 47px;
}
#moreUlLast ul li p{
	position: relative;
	top: 7px;
	text-align: center;
	font-size: 12px;
    color: #333;
}
</style>