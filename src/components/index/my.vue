<template>
<main>
	<!--头部-->
	<section id="header">
			<router-link to="/index"><div></div></router-link>
			<span id="span1">登录携程，开启旅程</span>
			<img src="../../assets/45.jpg" />
			<router-link to="/login"><span id="span2">登录/注册</span></router-link>
			<router-link to="/more"><span id="span3">手机号查单</span></router-link>
	</section>
	
	<!--钱包-->
	<section id="money">
		<img src="../../assets/46.jpg" />
		<span id="moneybag">钱包</span>
		<ul>
			<li>礼品卡</li>
			<li>现金</li>
			<li>返现</li>
		</ul>
	</section>
	
	<!--三个盒子-->
	<section id="cheap">
		<ul>
			<li>
				<div>
					<img src="../../assets/47.jpg" />
					<span class="coupon1">优惠券</span>
				</div>
				<span class="coupon2">领券</span>
			</li>
			<li>
				<div>
					<img src="../../assets/48.jpg" />
					<span class="coupon1">攒积分</span>
				</div>
				<span class="coupon2">兑好礼</span>
			</li>
			<li>
				<div>
					<img src="../../assets/49.jpg" />
					<span class="coupon1">拿去花</span>
				</div>
				<span class="coupon2">分期付款</span>
			</li>
		</ul>
	</section>
	
	<!--底部列表-->
	<section id="list">
		<ul>
			<li>
				<span id="listSpan1">常用信息</span>
				<span id="listSpan2">旅客/地址/发票抬头</span>
				<div></div>
			</li>
			<li>
				<span id="listSpan1">我的收藏</span>
				<span id="listSpan2">降价产品有提醒</span>
				<div></div>
			</li>
			<li>
				<span id="listSpan1">浏览历史</span>
				<span id="listSpan2">近15天访问记录</span>
				<div></div>
			</li>
			<li>
				<span id="listSpan1">我要合作</span>
				<span id="listSpan2">供应商加盟/代理合作</span>
				<div></div>
			</li>
		</ul>
	</section>
	
	<!--出行工具-->
	<section id="bottom">
		<ul>
			<li>
				<span id="listSpan1">出行工具</span>
				<span id="listSpan2">航班动态/翻译助手等</span>
				<div></div>
			</li>
		</ul>
	</section>
		
<router-view></router-view>
</main>
</template>
	
<script>
export default{
	data(){
		return{
			msg:"我的~"
		}
	}
}
</script>

<style scoped>
*{
	padding: 0px;
	margin: 0px;
	font-size: 14px;
}
#header{
	background-image: url(../../assets/44.jpg);
	background-repeat: no-repeat;
	width: 100%;
	background-size: 100% 100%;
	padding-bottom: 35.1%;
}
#span1{
	position: relative;
	top: 60px;
	display: block;
	width: 100%;
	color: white;
	font-size: 18px;
	text-align: center;
}
#header div{
	position: absolute;
	top: 15px;
	left: 5%;
	color: white;
	width: 9px;
	height: 9px;
	border-bottom: 2px solid white;
	border-left: 2px solid white;
	transform: rotate(45deg);
}
#header img{
	position: absolute;
	top: 12px;
	right: 3%;
}
#span2{
	position: absolute;
	top: 100px;
	left: 15%;
	display: block;
	width: 31.5vw;
	height: 36px;
	font-size: 16px;
	color: white;
	border-radius: 25px;
	background: #ff9a14;
	text-align: center;
	line-height: 36px;
}
#span3{
	position: absolute;
	top: 100px;
	right: 15%;
	display: block;
	width: 31.5vw;
	color: white;
	height: 34px;
	font-size: 16px;
	border-radius: 25px;
	background: rgba(177, 175, 175, 0.15);
	text-align: center;
	border: 1px solid rgba(255,255,255,0.5);
	line-height: 34px;
}
#money{
	width: 100%;
	height: 72px;
	/*background: dodgerblue;*/
	border-bottom: 1px solid lightgray;
	position: relative;
}
#money img{
	position: relative;
	top: 14px;
	left: 6%;
}
#moneybag{
	position: relative;
	top: 14px;
	left: 6%;
	font-size: 16px;
}
#money ul{
	margin-left: 9%;
	position: absolute;
	top: 45px;
	width: 60%;
}
#money ul li{
	font-size: 13px;
	padding-left: 4%;
	padding-right: 4%;
	line-height: 14px;
	color: #999;
	/*width: 20%;*/
	height: 12px;
	float: left;
}
#money ul li:nth-child(2){
	border-right: 1px solid lightgray;
	border-left: 1px solid lightgray;
}
#cheap{
	position: relative;
	width: 100%;
	height: 73px;
	border-bottom: 1px solid lightgray;
}
#cheap ul li{
	position: relative;
	float: left;
	width: 33%;
	height: 73px;
	border-right: 1px solid lightgray;
}
#cheap div{
	position: relative;
	top: 12px;
	margin: 0 auto;
	width: 70px;
	height: 20px;
}
#cheap ul li:nth-child(3){
	border: none;
}
.coupon1{
	font-size: 15px;
}
.coupon2{
	font-size: 13px;
	color: #999;
	width: 100%;
	display: block;
	text-align: center;
	position: relative;
	top: 20px;
}
#list{
	position: relative;
	width: 100%;
	height: 215px;
	background: #efefef;
}
#list ul{
	position: relative;
	top: 10px;
}
#list li{
	display: block;
	position: relative;
	width: 100%;
	height: 48px;
	background: white;
	border-top: 1px solid lightgray;
}
#list li:nth-child(1){
	border: none;
}
#listSpan1{
	font-size: 16px;
	line-height: 48px;
	position: relative;
	left: 5%;
}
#listSpan2{
	color: #999;
	font-size: 13px;
	line-height: 48px;
	position: absolute;
	right: 8%;
}
#list div{
	position: relative;
	top: -30px;
	left: 94%;
	color: white;
	width: 7px;
	height: 7px;
	border-top: 1px solid #999;
	border-right: 1px solid #999;
	transform: rotate(45deg);
}
#bottom{
	width: 100%;
	padding-bottom: 70%;
	background: #f5f5f5;
}
#bottom div{
	position: relative;
	top: -30px;
	left: 94%;
	color: white;
	width: 7px;
	height: 7px;
	border-top: 1px solid #999;
	border-right: 1px solid #999;
	transform: rotate(45deg);
}
#bottom li{
	/*border-bottom: 1px solid lightgray;*/
	height: 49px;
	background: white;
}
</style>