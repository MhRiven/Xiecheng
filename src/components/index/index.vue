<template>
<main>
	<!--吸顶搜索框-->
	<header id="Search">
		<div id="SearchBox">
			<router-link to="/my"><section id="Minebox">
				<img src="../../assets/77.jpg" />
				<span id="indexMy">我&nbsp;的</span>
			</section></router-link>
		</div>
		<input type="text" id="Input" placeholder="搜索:目的地/酒店/景点/航班号"  style="font-size: 16px;padding-left: 10%;"/>
		<i id="icon"></i>
	</header>
	
	<!--轮播图-->
	<section id="Swipe">
		<mt-swipe :auto="3000">
			<mt-swipe-item><router-link to="/view"><img src="../../assets/6.jpg" style="min-width: 300px;"></router-link></mt-swipe-item>
			<mt-swipe-item><router-link to="/view"><img src="../../assets/7.jpg" style="min-width: 300px;"></router-link></mt-swipe-item>
			<mt-swipe-item><router-link to="/view"><img src="../../assets/8.jpg" style="min-width: 300px;"></router-link></mt-swipe-item>
			<mt-swipe-item><router-link to="/view"><img src="../../assets/9.jpg" style="min-width: 300px;"></router-link></mt-swipe-item>
		</mt-swipe>
	</section>
	
	<!--导航栏-->
	<section id="Navigation" style="min-width: 300px;">
			<ul>
			       	<li><router-link to="/view"><img src="../../assets/19.jpg"><span>攻略·景点</span></router-link></li>
			        <li><router-link to="/ticket"><img src="../../assets/20.jpg"><span>门票·玩乐</span></router-link></li>
			        <li><router-link to="/hotel"><img src="../../assets/21.jpg"><span>美食林</span></router-link></li>
			        <li><router-link to="/view"><img src="../../assets/22.jpg"><span>周边游</span></router-link></li>
			      	<li><router-link to="/ticket"><img src="../../assets/23.jpg"><span>一日游</span></router-link></li>
			</ul>
	</section>
	
	<!--订票菜单-->
	<section id="Ticket">
		<div id="TicketMenu" style="min-width: 300px;">
	
			<div id="TicketMenuOne">
				<router-link to="/hotel"><ul>
					<li style="background: #fa6854;">酒店<img src="../../assets/22.png"></li>
					<li style="background: #fb7f51;">民宿·客栈<img src="../../assets/24.png"></li>
					<li style="background: #ffbf4a;">机票·火车+酒店<img src="../../assets/23.png"></li>
				</ul></router-link>
			</div>
			
	
			<div class="TicketMenuTwoandThree" id="TicketMenuTwo">
				<router-link to="/hotel"><ul>
					<li style="background: #4b91ed;">机票<img src="../../assets/21.png"></li>
					<li style="background: #4ea3ed;">火车票<img src="../../assets/25.png"></li>
					<li style="background: #50aced;">汽车·船票</li>
					<li style="background: #52b7ed;">专车·租车</li>
				</ul></router-link>
			</div>
			
	
			<div class="TicketMenuTwoandThree" id="TicketMenuThree">
				<router-link to="/hotel"><ul>
					<li style="background: #38c3a2;">旅游<img src="../../assets/26.png"></li>
					<li style="background: #4cca87;">高铁游<img src="../../assets/20.png"></li>
					<li style="background: #59cf73;">邮轮游</li>
					<li style="background: #65d260;">定制游</li>
				</ul></router-link>
			</div>
			
		</div>
	</section>
	
	<!--十个图标-->
	<div id="SecNavigation" style="min-width: 300px;">
			<ul>
			       	<li><router-link to="/view"><img src="../../assets/24.jpg"><span>自由行</span></router-link></li>
			        <li><router-link to="/ticket"><img src="../../assets/25.jpg"><span>WiFi电话卡</span></router-link></li>
			        <li><router-link to="/hotel"><img src="../../assets/26.jpg"><span>保险·签证</span></router-link></li>
			        <li><router-link to="/view"><img src="../../assets/27.jpg"><span>换钞·购物</span></router-link></li>
			        <li><router-link to="/ticket"><img src="../../assets/28.jpg"><span>当地向导</span></router-link></li>
			        <li><router-link to="/view"><img src="../../assets/29.jpg"><span>特价机票</span></router-link></li>
			        <li><router-link to="/ticket"><img src="../../assets/30.jpg"><span>礼品卡</span></router-link></li>
			        <li><router-link to="/hotel"><img src="../../assets/31.jpg"><span>申卡·借钱</span></router-link></li>
			        <li><router-link to="/view"><img src="../../assets/32.jpg"><span>旅拍</span></router-link></li>
			        <li><router-link to="/more"><img src="../../assets/33.jpg"><span>更多</span></router-link></li>
			</ul>
	</div>
	
	<!--特卖汇-->
	<div id="Sell">
			<img src="../../assets/35.jpg" style="width: 60px; height: 15px;">
			<router-link to="/more"><span id="SellSpanTwo">更多<div></div></span></router-link>
	</div>
	
	<!--特卖汇四个图片列表-->
	<div id="SellPic">
			<router-link to="/view"><section id="SellPicOne">
				<div id="Hot">爆款</div>
				<img src="../../assets/10.jpg">
				<p>三亚5日自由行(5钻)·</p>
				<p>暑“价”狂欢『冲7W人爆单·年度超人气款』【高星度假酒店4晚连住·酒店随心挑】暑期清凉风暴 亲子游火爆开售！</p>
				<div id="Price">￥1852起</div>
			</section></router-link>
			
			<router-link to="/view"><section id="SellPicTwo">
				<p id="SellPicTwoPOne">千款特价</p>
				<p id="SellPicTwoPTwo">走过路过不错过</p>
				<img src="../../assets/30.png" />
			</section></router-link>
			
			<router-link to="/view"><section class="SellPicThree">
				<p class="SellPicThreePOne">境外精选</p>
				<p class="SellPicThreePTwo">限时抢购</p>
				<img src="../../assets/32.png" />
			</section></router-link>
			
			<router-link to="/view"><section class="SellPicThree">
				<p class="SellPicThreePOne" id="AroundPlay">周边玩乐</p>
				<p class="SellPicThreePTwo">欢乐度周末</p>
				<img src="../../assets/31.png" />
			</section></router-link>
	</div>
	
	<!--8px淡灰色留白-->
	<section class="viewSpace"></section>
	
	<!--热门活动-->
	<section id="HotActivities">
			<img src="../../assets/36.jpg" style="width: 90px; height: 15px;"/>
			<img src="../../assets/29.png" style="width: 36px; height: 15px;"/>
			<router-link to="/more"><span id="HotActivitiesDiv">获取更多福利<div></div></span></router-link>
	</section>
	
	<!--热门活动图片-->
	<section id="HotPic">
		<ul>
			<router-link to="/ticket"><li><img src="../../assets/4.png" /><img src="../../assets/12.png" /></li></router-link>
			<router-link to="/ticket"><li><img src="../../assets/2.jpg" /><img src="../../assets/5.jpg" /></li></router-link>
			<router-link to="/ticket"><li><img src="../../assets/1.jpg" /><img src="../../assets/3.jpg" /></li></router-link>
		</ul>
	</section>
	
	<!--8px淡灰色留白-->
	<section class="viewSpace"></section>
	
	<!--底部三个按钮-->
	<section id="Bottom">
		<ul>
			<li><img src="../../assets/37.jpg"><span>电话预订</span></li>
			<li @click="indexDownload"><img src="../../assets/38.jpg"><span>下载客户端</span></li>
			<router-link to="/my"><li><img src="../../assets/39.jpg"><span>我&nbsp;的</span></li></router-link>
		</ul>
	</section>
	
	<!--底部-->
	<section id="BottomList">
		<ul>
			<li>网站地图</li>
			<li><img src="../../assets/40.jpg">Language<img src="../../assets/41.jpg"></li>
			<li>电脑版</li>
		</ul>
		<span>©2019携程旅行｜沪ICP备08023580号</span>
	</section>
	
	<router-view></router-view>
</main>
</template>
	
<script>
	export default{
		data(){
			return{
				msg:'123'
			};
		},
		methods:{
			indexDownload(){
				alert("确定前往下载页面吗？")
			}
		}
	}
</script>

<style>
</style>