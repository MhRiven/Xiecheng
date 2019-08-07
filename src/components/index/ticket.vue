<template>
<main>
	<!--头部-->
	<section id="ticketHeader">
		<div id="ticketHeaderBox">
			<router-link to="/index"><div id="ticketleft"></div></router-link>
			<div id="ticketinputbox">
				<span id="ticketinputplace"><span>上海&nbsp;<img src="../../assets/87.jpg"></span></span>
				<span id="ticketinput">
					<img src="../../assets/42.jpg">
					<span>上海海昌海洋公园梦幻之旅</span>
				</span>
			</div>
			<img id="ticketRedbag" src="../../assets/93.png">
		</div>
	</section>
	
	<!--轮播-->
	<section id="ticketSwipe">
		<mt-swipe :auto="0">
			<!--轮播第一页-->
			<mt-swipe-item>
				<li>
					<div style="position: relative; width: 43px;height: 43px;background-image: linear-gradient(-70deg,#4adbec 0,#40db73 100%),linear-gradient(#18a1f1,#18a1f1);box-shadow: 0 1px 7px 2px rgba(65,219,137,.5);border-radius: 50%;"><img style="width: 43px;height: 43px;position: absolute;" src="../../assets/69.png"></div>
					<p>景点/门票</p>
				</li>
				<li>
					<span id="ticketDisney">迪士尼</span>
					<div style="position: relative; width: 43px;height: 43px;background-image: linear-gradient(-70deg,#ffd33b 0,#ffb927 35%,#ff9e13 100%),linear-gradient(#18a1f1,#18a1f1);box-shadow: 0 1px 7px 2px rgba(255,174,31,.5);border-radius: 50%;"><img style="width: 43px;height: 43px;position: absolute;" src="../../assets/70.png"></div>
					<p>主题乐园</p>
				</li>
				<li>
					<div style="position: relative; width: 43px;height: 43px;border-radius: 50%;"><img style="width: 43px;height: 43px;margin: 0 auto;" src="../../assets/1.gif"></div>
					<p>水上乐园</p>
				</li>
				<li>
					<div style="position: relative; width: 43px;height: 43px;background-image: linear-gradient(-70deg,#fc7197 0,#fb515e 100%),linear-gradient(#18a1f1,#18a1f1);box-shadow: 0 1px 7px 2px rgba(251,87,130,.5);border-radius: 50%;"><img style="width: 43px;height: 43px;position: absolute;" src="../../assets/68.png"></div>
					<p>海洋馆</p>
				</li>
				<li>
					<div style="position: relative; width: 43px;height: 43px;background-image: linear-gradient(-70deg,#ef66ff 0,#f64fda 35%,#fd38b5 100%),linear-gradient(#18a1f1,#18a1f1);box-shadow: 0 1px 7px 2px rgba(248,71,205,.5);border-radius: 50%;"><img style="width: 43px;height: 43px;position: absolute;" src="../../assets/91.png"></div>
					<p>一日游</p>
				</li>
				<li>
					<div style="position: relative; width: 43px;height: 43px;"><img style="width: 43px;height: 43px;text-align: center;" src="../../assets/80.png"></div>
					<p>亲水避暑</p>
				</li>
				<li>
					<div style="position: relative; width: 43px;height: 43px;"><img style="width: 43px;height: 43px;text-align: center;" src="../../assets/72.png"></div>
					<p>动植物园</p>
				</li>
				<li>
					<div style="position: relative; width: 43px;height: 43px;"><img style="width: 43px;height: 43px;text-align: center;" src="../../assets/89.png"></div>
					<p>高空景观</p>
				</li>
				<li>
					<div style="position: relative; width: 43px;height: 43px;"><img style="width: 43px;height: 43px;text-align: center;" src="../../assets/86.png"></div>
					<p>展馆展览</p>
				</li>
				<li>
					<div style="position: relative; width: 43px;height: 43px;"><img style="width: 43px;height: 43px;text-align: center;" src="../../assets/85.png"></div>
					<p>游轮游船</p>
				</li>
			</mt-swipe-item>
			
			<!--轮播第二页-->
			<mt-swipe-item>
				<li>
					<div style="position: relative; width: 43px;height: 43px;"><img style="width: 43px;height: 43px;text-align: center;" src="../../assets/92.png"></div>
					<p>上海通票</p>
				</li>
				<li>
					<div style="position: relative; width: 43px;height: 43px;"><img style="width: 43px;height: 43px;text-align: center;" src="../../assets/90.png"></div>
					<p>城市观光</p>
				</li>
				<li>
					<div style="position: relative; width: 43px;height: 43px;"><img style="width: 43px;height: 43px;text-align: center;" src="../../assets/71.png"></div>
					<p>城市公园</p>
				</li>
				<li>
					<div style="position: relative; width: 43px;height: 43px;"><img style="width: 43px;height: 43px;text-align: center;" src="../../assets/76.png"></div>
					<p>名胜古迹</p>
				</li>
				<li>
					<div style="position: relative; width: 43px;height: 43px;"><img style="width: 43px;height: 43px;text-align: center;" src="../../assets/87.png"></div>
					<p>自然风光</p>
				</li>
				<li>
					<div style="position: relative; width: 43px;height: 43px;"><img style="width: 43px;height: 43px;text-align: center;" src="../../assets/74.png"></div>
					<p>儿童乐园</p>
				</li>
				<li>
					<div style="position: relative; width: 43px;height: 43px;"><img style="width: 43px;height: 43px;text-align: center;" src="../../assets/84.png"></div>
					<p>影视基地</p>
				</li>
				<li>
					<div style="position: relative; width: 43px;height: 43px;"><img style="width: 43px;height: 43px;text-align: center;" src="../../assets/83.png"></div>
					<p>演出演艺</p>
				</li>
				<li>
					<div style="position: relative; width: 43px;height: 43px;"><img style="width: 43px;height: 43px;text-align: center;" src="../../assets/82.png"></div>
					<p>温泉</p>
				</li>
				<li>
					<div style="position: relative; width: 43px;height: 43px;"><img style="width: 43px;height: 43px;text-align: center;" src="../../assets/78.png"></div>
					<p>农家乐</p>
				</li>
				
			</mt-swipe-item>
			
			<!--轮播第三页-->
			<mt-swipe-item>
				<li>
					<div style="position: relative; width: 43px;height: 43px;"><img style="width: 43px;height: 43px;text-align: center;" src="../../assets/73.png"></div>
					<p>度假村</p>
				</li>
				<li>
					<div style="position: relative; width: 43px;height: 43px;"><img style="width: 43px;height: 43px;text-align: center;" src="../../assets/81.png"></div>
					<p>团队拓展</p>
				</li>
				<li>
					<div style="position: relative; width: 43px;height: 43px;"><img style="width: 43px;height: 43px;text-align: center;" src="../../assets/77.png"></div>
					<p>其他</p>
				</li>
				<li>
					<div style="position: relative; width: 43px;height: 43px;"><img style="width: 43px;height: 43px;text-align: center;" src="../../assets/79.png"></div>
					<p>漂流</p>
				</li>
				<li>
					<div style="position: relative; width: 43px;height: 43px;"><img style="width: 43px;height: 43px;text-align: center;" src="../../assets/75.png"></div>
					<p>滑雪</p>
				</li>
			</mt-swipe-item>
		</mt-swipe>
	</section>
	
	<!--10px留白-->
	<section class="ticketSpace"></section>
	
	<!--景点人气榜-->
	<section id="ticketViewHot">
		<img src="../../assets/94.png"/>
		<ul>
			<li>
				<span>上海迪士尼度假区</span>
				<p>点亮心中奇梦</p>
			</li>
			<li>
				<span>东方明珠</span>
				<p>鸟瞰申城美丽夜景</p>
			</li>
			<li>
				<span>上海海昌海洋公园</span>
				<p>缤纷奇幻海洋之旅</p>
			</li>
		</ul>
		<ul>
			<li>
				<span>上海科技馆</span>
				<p>科普教育殿堂</p>
			</li>
			<li>
				<span>上海海洋水族馆</span>
				<p>畅游梦幻海底隧道</p>
			</li>
			<li>
				<span>上海野生动物园</span>
				<p>亲密接触珍稀动物</p>
			</li>
		</ul>
		<ul>
			<li>
				<span>上海欢乐谷</span>
				<p>畅玩爱豆同款乐园</p>
			</li>
			<li>
				<span>黄浦江游览（十六铺码头）</span>
				<p>尽览黄浦江畔风光</p>
			</li>
			<li>
				<span>上海中心大厦上海之巅观光厅</span>
				<p>全视角观景台</p>
			</li>
		</ul>
	</section>
	
	<!--10px留白-->
	<section class="ticketSpace"></section>
	
	<!--当季必体验-->
	<section id="ticketSeason">
		<span style="display: block;margin: 0 auto;width: 95%;height: 45px;font-size: 17px;line-height: 45px;">当季必体验</span>
		<img src="../../assets/123.jpg" style=" position: relative; width: 95%; left: 2.5%; height: 113px; border-radius: 5px; margin: 0 auto;"/>
		<p style="width: 95%; position: relative; left: 2.5%; font-size: 15px;font-weight: 700;padding-bottom: 8px;padding-top: 10px;">上海游玩指南丨来魔都不可错过的地标美景都在这了！</p>
		<p style="width: 95%; position: relative; left: 2.5%;font-size: 12px;color: #666;">魔都去哪里玩？这份攻略请收好~</p>
	</section>
	
	<!--10px留白-->
	<section class="ticketSpace"></section>
	
	<!--三个不同图标-->
	<section id="ticketThree">
		<ul>
			<li><img src="../../assets/125.jpg"/></li>
			<li><img src="../../assets/126.jpg"/></li>
			<li><img src="../../assets/124.jpg"/></li>
		</ul>
	</section>
	
	<!--10px留白-->
	<section class="ticketSpace"></section>
	
	<!--三个列表-->
	<section id="ticketThreeList" class="page-navbar">
		<!--点击导航栏-->
		<mt-navbar v-model="selected">
		  <mt-tab-item id="1">景点推荐</mt-tab-item>
		  <mt-tab-item id="2">一日游</mt-tab-item>
		  <mt-tab-item id="3">特色体验</mt-tab-item>
		</mt-navbar>
		
		<!-- tab-container -->
		<mt-tab-container v-model="selected">
			<!--景点推荐-->
		  <mt-tab-container-item id="1">
		    <!--<mt-cell v-for="n in 10"/>-->
			    <div class="mint-cell">
			    	<img src="../../assets/127.jpg" style="position: relative;top:10px; width: 95px;height: 95px;border-radius: 5px;"/>
			    	<span style="position: absolute;bottom: 10px;display: block;margin: 0 auto;width: 95px;left: 0;text-align: center;color: white;background: rgba(0,0,0,0.5);">上海</span>
			    	<span style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;font-size: 16px;line-height: 20px;word-break: break-all;position: absolute;top: 10px;left:105px;">上海自然博物馆</span>
			    	<button>&nbsp;可订今日&nbsp;</button><button>&nbsp;亲子同乐&nbsp;</button><button>&nbsp;展馆展览&nbsp;</button>
			    	<span style="display: block; width: 50%; -webkit-line-clamp: 2; position: absolute;left: 106px;top: 60px; font-size: 17px;color: #27a2ed;">4.7<span style="color: #27a2ed;font-size: 12px;">分&nbsp;&nbsp;98%推荐</span><span style="font-size: 12px;color: #999;">&nbsp;&nbsp;已售5.1万+</span></span>
			    	<span style="position: absolute;left: 106px;top: 80px;font-size: 12px;color: #999;">南京西路商业区</span>
			    	<span style="color: #f40;position: absolute;right: 10px;top:80px; font-size: 12px;">￥<span style="font-size: 18px;font-weight: 600;">30</span></span>
			    </div>
			    <div class="mint-cell">
			    	<img src="../../assets/118.jpg" style="position: relative;top:10px; width: 95px;height: 95px;border-radius: 5px;"/>
			    	<span style="position: absolute;bottom: 10px;display: block;margin: 0 auto;width: 95px;left: 0;text-align: center;color: white;background: rgba(0,0,0,0.5);">上海</span>
			    	<span style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;font-size: 16px;line-height: 20px;word-break: break-all;position: absolute;top: 10px;left:105px;">上海动物园<span style="font-size: 12px;">&nbsp;4A景区</span></span>
			    	<button>&nbsp;可订明日&nbsp;</button><button>&nbsp;动植物园&nbsp;</button><button style="border: 1px solid #fd7d2a;color: #fd7d2a;">&nbsp;减&nbsp;</button>
			    	<span style="position: absolute;left: 106px;top: 60px; font-size: 17px;color: #27a2ed;">4.6<span style="color: #27a2ed;font-size: 12px;">分&nbsp;&nbsp;99%推荐</span><span style="font-size: 12px;color: #999;">&nbsp;&nbsp;已售4.3万+</span></span>
			    	<span style="position: absolute;left: 106px;top: 80px;font-size: 12px;color: #999;">虹桥地区</span>
			    	<span style="color: #f40;position: absolute;right: 10px;top:80px; font-size: 12px;">￥<span style="font-size: 18px;font-weight: 600;">30</span></span>
			    </div>
			    <div class="mint-cell">
			    	<img src="../../assets/111.jpg" style="position: relative;top:10px; width: 95px;height: 95px;border-radius: 5px;"/>
			    	<span style="position: absolute;bottom: 10px;display: block;margin: 0 auto;width: 95px;left: 0;text-align: center;color: white;background: rgba(0,0,0,0.5);">上海</span>
			    	<span style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;font-size: 16px;line-height: 20px;word-break: break-all;position: absolute;top: 10px;left:105px;">上海杜莎夫人蜡像馆<span style="font-size: 12px;">&nbsp;4A景区</span></span>
			    	<button>&nbsp;可订明日&nbsp;</button><button style="border: 1px solid #fd7d2a;color: #fd7d2a;">&nbsp;名人蜡像&nbsp;</button><button>&nbsp;亲子同乐&nbsp;</button>
			    	<span style="position: absolute;left: 106px;top: 60px; font-size: 17px;color: #27a2ed;">4.5<span style="color: #27a2ed;font-size: 12px;">分&nbsp;&nbsp;98%推荐</span><span style="font-size: 12px;color: #999;">&nbsp;&nbsp;已售3.8万+</span></span>
			    	<span style="position: absolute;left: 106px;top: 80px;font-size: 12px;color: #999;">静安寺、南京西路</span>
			    	<span style="color: #f40;position: absolute;right: 10px;top:80px; font-size: 12px;">￥<span style="font-size: 18px;font-weight: 600;">189</span></span>
			    </div>
			    <div class="mint-cell">
			    	<img src="../../assets/134.jpg" style="position: relative;top:10px; width: 95px;height: 95px;border-radius: 5px;"/>
			    	<span style="position: absolute;bottom: 10px;display: block;margin: 0 auto;width: 95px;left: 0;text-align: center;color: white;background: rgba(0,0,0,0.5);">上海</span>
			    	<span style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;font-size: 16px;line-height: 20px;word-break: break-all;position: absolute;top: 10px;left:105px;">豫园<span style="font-size: 12px;">&nbsp;4A景区</span></span>
			    	<button>&nbsp;可订今日&nbsp;</button><button style="border: 1px solid #fd7d2a;color: #fd7d2a;">&nbsp;明代园林&nbsp;</button><button style="border: 1px solid #fd7d2a;color: #fd7d2a;">&nbsp;减&nbsp;</button>
			    	<span style="position: absolute;left: 106px;top: 60px; font-size: 17px;color: #27a2ed;">4.6<span style="color: #27a2ed;font-size: 12px;">分&nbsp;&nbsp;99%推荐</span><span style="font-size: 12px;color: #999;">&nbsp;&nbsp;已售3.1万+</span></span>
			    	<span style="position: absolute;left: 106px;top: 80px;font-size: 12px;color: #999;">豫园地区</span>
			    	<span style="color: #f40;position: absolute;right: 10px;top:80px; font-size: 12px;">￥<span style="font-size: 18px;font-weight: 600;">23</span></span>
			    </div>
			    <div class="mint-cell">
			    	<img src="../../assets/102.jpg" style="position: relative;top:10px; width: 95px;height: 95px;border-radius: 5px;"/>
			    	<span style="position: absolute;bottom: 10px;display: block;margin: 0 auto;width: 95px;left: 0;text-align: center;color: white;background: rgba(0,0,0,0.5);">上海</span>
			    	<span style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;font-size: 16px;line-height: 20px;word-break: break-all;position: absolute;top: 10px;left:105px;">上海长风海洋世界<span style="font-size: 12px;">&nbsp;4A景区</span></span>
			    	<button>&nbsp;可订明日&nbsp;</button><button style="border: 1px solid #fd7d2a;color: #fd7d2a;">&nbsp;鱼类天堂&nbsp;</button><button>&nbsp;海洋馆&nbsp;</button><button style="border: 1px solid #fd7d2a;color: #fd7d2a;">&nbsp;减&nbsp;</button>
			    	<span style="position: absolute;left: 106px;top: 60px; font-size: 17px;color: #27a2ed;">4.4<span style="color: #27a2ed;font-size: 12px;">分&nbsp;&nbsp;95%推荐</span><span style="font-size: 12px;color: #999;">&nbsp;&nbsp;已售5.6万+</span></span>
			    	<span style="position: absolute;left: 106px;top: 80px;font-size: 12px;color: #999;">长风公园地区</span>
			    	<span style="color: #f40;position: absolute;right: 10px;top:80px; font-size: 12px;">￥<span style="font-size: 18px;font-weight: 600;">140</span></span>
			    </div>
			    <div class="mint-cell">
			    	<img src="../../assets/110.jpg" style="position: relative;top:10px; width: 95px;height: 95px;border-radius: 5px;"/>
			    	<span style="position: absolute;bottom: 10px;display: block;margin: 0 auto;width: 95px;left: 0;text-align: center;color: white;background: rgba(0,0,0,0.5);">上海</span>
			    	<span style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;font-size: 16px;line-height: 20px;word-break: break-all;position: absolute;top: 10px;left:105px;">上海玛雅海滩水公园</span>
			    	<button>&nbsp;可订今日&nbsp;</button><button>&nbsp;主题公园&nbsp;</button><button style="border: 1px solid #fd7d2a;color: #fd7d2a;">&nbsp;减&nbsp;</button>
			    	<span style="position: absolute;left: 106px;top: 60px; font-size: 17px;color: #27a2ed;">4.6<span style="color: #27a2ed;font-size: 12px;">分&nbsp;&nbsp;98%推荐</span><span style="font-size: 12px;color: #999;">&nbsp;&nbsp;已售9916</span></span>
			    	<span style="color: #f40;position: absolute;right: 10px;top:80px; font-size: 12px;">￥<span style="font-size: 18px;font-weight: 600;">180</span></span>
			    </div>
			    <div class="mint-cell">
			    	<img src="../../assets/130.jpg" style="position: relative;top:10px; width: 95px;height: 95px;border-radius: 5px;"/>
			    	<span style="position: absolute;bottom: 10px;display: block;margin: 0 auto;width: 95px;left: 0;text-align: center;color: white;background: rgba(0,0,0,0.5);">上海</span>
			    	<span style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;font-size: 16px;line-height: 20px;word-break: break-all;position: absolute;top: 10px;left:105px;">上海环球金融中心</span>
			    	<button>&nbsp;随买随用&nbsp;</button><button style="border: 1px solid #fd7d2a;color: #fd7d2a;">&nbsp;俯瞰上海&nbsp;</button><button>&nbsp;高空景观&nbsp;</button>
			    	<span style="position: absolute;left: 106px;top: 60px; font-size: 17px;color: #27a2ed;">4.7<span style="color: #27a2ed;font-size: 12px;">分&nbsp;&nbsp;98%推荐</span><span style="font-size: 12px;color: #999;">&nbsp;&nbsp;已售2.4万+</span></span>
			    	<span style="position: absolute;left: 106px;top: 80px;font-size: 12px;color: #999;">浦东陆家嘴金融贸易区</span>
			    	<span style="color: #f40;position: absolute;right: 10px;top:80px; font-size: 12px;">￥<span style="font-size: 18px;font-weight: 600;">115</span></span>
			    </div>
			    <div class="mint-cell">
			    	<img src="../../assets/132.jpg" style="position: relative;top:10px; width: 95px;height: 95px;border-radius: 5px;"/>
			    	<span style="position: absolute;bottom: 10px;display: block;margin: 0 auto;width: 95px;left: 0;text-align: center;color: white;background: rgba(0,0,0,0.5);">上海</span>
			    	<span style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;font-size: 16px;line-height: 20px;word-break: break-all;position: absolute;top: 10px;left:105px;">上海外滩星空错觉艺术馆</span>
			    	<button>&nbsp;随买随用&nbsp;</button><button style="border: 1px solid #fd7d2a;color: #fd7d2a;">&nbsp;超现实情景&nbsp;</button><button>&nbsp;亲子同乐&nbsp;</button>
			    	<span style="position: absolute;left: 106px;top: 60px; font-size: 17px;color: #27a2ed;">4.2<span style="color: #27a2ed;font-size: 12px;">分&nbsp;&nbsp;91%推荐</span><span style="font-size: 12px;color: #999;">&nbsp;&nbsp;已售1.6万+</span></span>
			    	<span style="position: absolute;left: 106px;top: 80px;font-size: 12px;color: #999;">外滩地区</span>
			    	<span style="color: #f40;position: absolute;right: 10px;top:80px; font-size: 12px;">￥<span style="font-size: 18px;font-weight: 600;">57</span></span>
			    </div>
			    <div class="mint-cell">
			    	<img src="../../assets/98.jpg" style="position: relative;top:10px; width: 95px;height: 95px;border-radius: 5px;"/>
			    	<span style="position: absolute;bottom: 10px;display: block;margin: 0 auto;width: 95px;left: 0;text-align: center;color: white;background: rgba(0,0,0,0.5);">上海</span>
			    	<span style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;font-size: 16px;line-height: 20px;word-break: break-all;position: absolute;top: 10px;left:105px;">世纪公园<span style="font-size: 12px;">&nbsp;4A景区</span></span>
			    	<button>&nbsp;可订今日&nbsp;</button><button>&nbsp;亲子同乐&nbsp;</button><button>&nbsp;城市公园&nbsp;</button>
			    	<span style="position: absolute;left: 106px;top: 60px; font-size: 17px;color: #27a2ed;">4.7<span style="color: #27a2ed;font-size: 12px;">分&nbsp;&nbsp;99%推荐</span><span style="font-size: 12px;color: #999;">&nbsp;&nbsp;已售6.6万+</span></span>
			    	<span style="position: absolute;left: 106px;top: 80px;font-size: 12px;color: #999;">浦东新国际博览中心</span>
			    	<span style="color: #f40;position: absolute;right: 10px;top:80px; font-size: 12px;">￥<span style="font-size: 18px;font-weight: 600;">8</span></span>
			    </div>
			    <div class="mint-cell">
			    	<img src="../../assets/129.jpg" style="position: relative;top:10px; width: 95px;height: 95px;border-radius: 5px;"/>
			    	<span style="position: absolute;bottom: 10px;display: block;margin: 0 auto;width: 95px;left: 0;text-align: center;color: white;background: rgba(0,0,0,0.5);">上海</span>
			    	<span style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;font-size: 16px;line-height: 20px;word-break: break-all;position: absolute;top: 10px;left:105px;">中国航海博物馆<span style="font-size: 12px;">&nbsp;4A景区</span></span>
			    	<button>&nbsp;随买随用&nbsp;</button><button style="border: 1px solid #fd7d2a;color: #fd7d2a;">&nbsp;航海文明&nbsp;</button><button>&nbsp;亲子同乐&nbsp;</button>
			    	<span style="position: absolute;left: 106px;top: 60px; font-size: 17px;color: #27a2ed;">4.7<span style="color: #27a2ed;font-size: 12px;">分&nbsp;&nbsp;99%推荐</span><span style="font-size: 12px;color: #999;">&nbsp;&nbsp;已售7935</span></span>
			    	<span style="position: absolute;left: 106px;top: 80px;font-size: 12px;color: #999;">滴水湖临港地区</span>
			    	<span style="color: #f40;position: absolute;right: 10px;top:80px; font-size: 12px;">￥<span style="font-size: 18px;font-weight: 600;">25</span></span>
			    </div>
			    <div class="mint-cell">
			    	<img src="../../assets/133.jpg" style="position: relative;top:10px; width: 95px;height: 95px;border-radius: 5px;"/>
			    	<span style="position: absolute;bottom: 10px;display: block;margin: 0 auto;width: 95px;left: 0;text-align: center;color: white;background: rgba(0,0,0,0.5);">上海</span>
			    	<span style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;font-size: 16px;line-height: 20px;word-break: break-all;position: absolute;top: 10px;left:105px;">磁浮列车</span>
			    	<button>&nbsp;随买随用&nbsp;</button><button style="border: 1px solid #fd7d2a;color: #fd7d2a;">&nbsp;国内首辆&nbsp;</button><button>&nbsp;城市观光&nbsp;</button>
			    	<span style="position: absolute;left: 106px;top: 60px; font-size: 17px;color: #27a2ed;">4.7<span style="color: #27a2ed;font-size: 12px;">分&nbsp;&nbsp;98%推荐</span><span style="font-size: 12px;color: #999;">&nbsp;&nbsp;已售1.4万+</span></span>
			    	<span style="position: absolute;left: 106px;top: 80px;font-size: 12px;color: #999;">浦东新国际博览中心</span>
			    	<span style="color: #f40;position: absolute;right: 10px;top:80px; font-size: 12px;">￥<span style="font-size: 18px;font-weight: 600;">40</span></span>
			    </div>
			    <div class="mint-cell">
			    	<img src="../../assets/120.jpg" style="position: relative;top:10px; width: 95px;height: 95px;border-radius: 5px;"/>
			    	<span style="position: absolute;bottom: 10px;display: block;margin: 0 auto;width: 95px;left: 0;text-align: center;color: white;background: rgba(0,0,0,0.5);">上海</span>
			    	<span style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;font-size: 16px;line-height: 20px;word-break: break-all;position: absolute;top: 10px;left:105px;">锦江乐园<span style="font-size: 12px;">&nbsp;4A景区</span></span>
			    	<button>&nbsp;可订今日&nbsp;</button><button>&nbsp;亲子同乐&nbsp;</button><button>&nbsp;主题乐园&nbsp;</button>
			    	<span style="position: absolute;left: 106px;top: 60px; font-size: 17px;color: #27a2ed;">4.4<span style="color: #27a2ed;font-size: 12px;">分&nbsp;&nbsp;96%推荐</span><span style="font-size: 12px;color: #999;">&nbsp;&nbsp;已售4.4万+</span></span>
			    	<span style="position: absolute;left: 106px;top: 80px;font-size: 12px;color: #999;">上海火车南站地区</span>
			    	<span style="color: #f40;position: absolute;right: 10px;top:80px; font-size: 12px;">￥<span style="font-size: 18px;font-weight: 600;">122</span></span>
			    </div>
			    <div class="mint-cell">
			    	<img src="../../assets/128.jpg" style="position: relative;top:10px; width: 95px;height: 95px;border-radius: 5px;"/>
			    	<span style="position: absolute;bottom: 10px;display: block;margin: 0 auto;width: 95px;left: 0;text-align: center;color: white;background: rgba(0,0,0,0.5);">上海</span>
			    	<span style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;font-size: 16px;line-height: 20px;word-break: break-all;position: absolute;top: 10px;left:105px;">金茂大厦</span>
			    	<button>&nbsp;随买随用&nbsp;</button><button>&nbsp;亲子同乐&nbsp;</button><button>&nbsp;高空景观&nbsp;</button>
			    	<span style="position: absolute;left: 106px;top: 60px; font-size: 17px;color: #27a2ed;">4.5<span style="color: #27a2ed;font-size: 12px;">分&nbsp;&nbsp;97%推荐</span><span style="font-size: 12px;color: #999;">&nbsp;&nbsp;已售7443</span></span>
			    	<span style="position: absolute;left: 106px;top: 80px;font-size: 12px;color: #999;">浦东陆家嘴金融贸易区</span>
			    	<span style="color: #f40;position: absolute;right: 10px;top:80px; font-size: 12px;">￥<span style="font-size: 18px;font-weight: 600;">87</span></span>
			    </div>
			    <div class="mint-cell">
			    	<img src="../../assets/99.jpg" style="position: relative;top:10px; width: 95px;height: 95px;border-radius: 5px;"/>
			    	<span style="position: absolute;bottom: 10px;display: block;margin: 0 auto;width: 95px;left: 0;text-align: center;color: white;background: rgba(0,0,0,0.5);">上海</span>
			    	<span style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;font-size: 16px;line-height: 20px;word-break: break-all;position: absolute;top: 10px;left:105px;">上海影视乐园<span style="font-size: 12px;">&nbsp;4A景区</span></span>
			    	<button>&nbsp;可订明日&nbsp;</button><button style="border: 1px solid #fd7d2a;color: #fd7d2a;">&nbsp;仿古建筑群&nbsp;</button><button>&nbsp;影视基地&nbsp;</button>
			    	<span style="position: absolute;left: 106px;top: 60px; font-size: 17px;color: #27a2ed;">4.4<span style="color: #27a2ed;font-size: 12px;">分&nbsp;&nbsp;97%推荐</span><span style="font-size: 12px;color: #999;">&nbsp;&nbsp;已售1.4万+</span></span>
			    	<span style="color: #f40;position: absolute;right: 10px;top:80px; font-size: 12px;">￥<span style="font-size: 18px;font-weight: 600;">55</span></span>
			    </div>
			    <div class="mint-cell">
			    	<img src="../../assets/131.jpg" style="position: relative;top:10px; width: 95px;height: 95px;border-radius: 5px;"/>
			    	<span style="position: absolute;bottom: 10px;display: block;margin: 0 auto;width: 95px;left: 0;text-align: center;color: white;background: rgba(0,0,0,0.5);">上海</span>
			    	<span style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;font-size: 16px;line-height: 20px;word-break: break-all;position: absolute;top: 10px;left:105px;">上海汽车博物馆</span>
			    	<button>&nbsp;可订今日&nbsp;</button><button style="border: 1px solid #fd7d2a;color: #fd7d2a;">&nbsp;古董车&nbsp;</button><button>&nbsp;亲子同乐&nbsp;</button>
			    	<span style="position: absolute;left: 106px;top: 60px; font-size: 17px;color: #27a2ed;">4.7<span style="color: #27a2ed;font-size: 12px;">分&nbsp;&nbsp;99%推荐</span><span style="font-size: 12px;color: #999;">&nbsp;&nbsp;已售1万+</span></span>
			    	<span style="position: absolute;left: 106px;top: 80px;font-size: 12px;color: #999;">南翔、安亭汽车城</span>
			    	<span style="color: #f40;position: absolute;right: 10px;top:80px; font-size: 12px;">￥<span style="font-size: 18px;font-weight: 600;">55</span></span>
			    </div>
			    <div class="mint-cell">
			    	<img src="../../assets/135.jpg" style="position: relative;top:10px; width: 95px;height: 95px;border-radius: 5px;"/>
			    	<span style="position: absolute;bottom: 10px;display: block;margin: 0 auto;width: 95px;left: 0;text-align: center;color: white;background: rgba(0,0,0,0.5);">上海</span>
			    	<span style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;font-size: 16px;line-height: 20px;word-break: break-all;position: absolute;top: 10px;left:105px;">金山城市海滩<span style="font-size: 12px;">&nbsp;4A景区</span></span></span>
			    	<button>&nbsp;可订今日&nbsp;</button><button style="border: 1px solid #fd7d2a;color: #fd7d2a;">&nbsp;海上浮动游泳池&nbsp;</button>
			    	<span style="position: absolute;left: 106px;top: 60px; font-size: 17px;color: #27a2ed;">4.2<span style="color: #27a2ed;font-size: 12px;">分&nbsp;&nbsp;95%推荐</span><span style="font-size: 12px;color: #999;">&nbsp;&nbsp;已售3341</span></span>
			    	<span style="position: absolute;left: 106px;top: 80px;font-size: 12px;color: #999;">金山城市海滩地区</span>
			    	<span style="color: #f40;position: absolute;right: 10px;top:80px; font-size: 12px;">￥<span style="font-size: 18px;font-weight: 600;">26</span></span>
			    </div>
		   <!--</mt-cell>-->
		   <section class="ticketAllView"><span style="display: block;text-align: center;">查看上海全部景点门票</span><div></div></section>
		  </mt-tab-container-item>
		  
		  <mt-tab-container-item id="2">
		    <!--<mt-cell v-for="n in 4" :title="'ddd' + n" />-->
		    <div class="mint-cell ticketMint-cell2">
			    <img src="../../assets/105.jpg" style="position: relative;top:10px; width: 95px;height: 95px;border-radius: 5px;"/>
			    <span style="position: absolute;bottom: 10px;display: block;margin: 0 auto;width: 95px;left: 0;text-align: center;color: white;background: rgba(0,0,0,0.5);">上海出发</span>
			    <span style="width: 67%;-webkit-box-orient: vertical;overflow: hidden;display: -webkit-box;-webkit-line-clamp: 2;font-size: 16px;line-height: 20px;position: absolute;top: 10px;left:105px;">上海东方明珠+浦江游览+城隍庙旅游区+外滩一日游【海陆空游上海  导游贴心陪同 日夜游随心】</span>
			    <button>&nbsp;明日可用&nbsp;</button><button>&nbsp;立即确认&nbsp;</button><button>&nbsp;无购物&nbsp;</button>
			    <span style="position: absolute;left: 106px;top: 72px; font-size: 17px;color: #27a2ed;">5<span style="color: #27a2ed;">分</span><span style="font-size: 12px;color: #999;">&nbsp;&nbsp;月销:4766份</span></span>
			    <span style="color: #f40;position: absolute;right: 10px;top:80px; font-size: 12px;">￥<span style="font-size: 18px;font-weight: 600;">175</span><span style="font-size: 12px;color: #999;">起</span></span>
			</div>
			<div class="mint-cell ticketMint-cell2">
			    <img src="../../assets/101.jpg" style="position: relative;top:10px; width: 95px;height: 95px;border-radius: 5px;"/>
			    <span style="position: absolute;bottom: 10px;display: block;margin: 0 auto;width: 95px;left: 0;text-align: center;color: white;background: rgba(0,0,0,0.5);">上海出发</span>
			    <span style="width: 67%;-webkit-box-orient: vertical;overflow: hidden;display: -webkit-box;-webkit-line-clamp: 2;font-size: 16px;line-height: 20px;position: absolute;top: 10px;left:105px;">上海迪士尼度假区一日游【门票+往返车+园内导览+免费寄存+童车】</span>
			    <button>&nbsp;明日可用&nbsp;</button><button>&nbsp;立即确认&nbsp;</button><button>&nbsp;无购物&nbsp;</button>
			    <span style="position: absolute;left: 106px;top: 72px; font-size: 17px;color: #27a2ed;">4.9<span style="color: #27a2ed;">分</span><span style="font-size: 12px;color: #999;">&nbsp;&nbsp;月销:908份</span></span>
			    <span style="color: #f40;position: absolute;right: 10px;top:80px; font-size: 12px;">￥<span style="font-size: 18px;font-weight: 600;">629</span><span style="font-size: 12px;color: #999;">起</span></span>
			</div>
			<div class="mint-cell ticketMint-cell2">
			    <img src="../../assets/116.jpg" style="position: relative;top:10px; width: 95px;height: 95px;border-radius: 5px;"/>
			    <span style="position: absolute;bottom: 10px;display: block;margin: 0 auto;width: 95px;left: 0;text-align: center;color: white;background: rgba(0,0,0,0.5);">上海出发</span>
			    <span style="width: 67%;-webkit-box-orient: vertical;overflow: hidden;display: -webkit-box;-webkit-line-clamp: 2;font-size: 16px;line-height: 20px;position: absolute;top: 10px;left:105px;">上海东方明珠+浦江游览+外滩+城隍庙旅游区一日游【双登高及日夜游行程随心选】</span>
			    <button>&nbsp;明日可用&nbsp;</button><button>&nbsp;立即确认&nbsp;</button><button>&nbsp;无购物&nbsp;</button>
			    <span style="position: absolute;left: 106px;top: 72px; font-size: 17px;color: #27a2ed;">5<span style="color: #27a2ed;">分</span><span style="font-size: 12px;color: #999;">&nbsp;&nbsp;月销:2839份</span></span>
			    <span style="color: #f40;position: absolute;right: 10px;top:80px; font-size: 12px;">￥<span style="font-size: 18px;font-weight: 600;">175</span><span style="font-size: 12px;color: #999;">起</span></span>
			</div>
			<div class="mint-cell ticketMint-cell2">
			    <img src="../../assets/112.jpg" style="position: relative;top:10px; width: 95px;height: 95px;border-radius: 5px;"/>
			    <span style="position: absolute;bottom: 10px;display: block;margin: 0 auto;width: 95px;left: 0;text-align: center;color: white;background: rgba(0,0,0,0.5);">上海出发</span>
			    <span style="width: 67%;-webkit-box-orient: vertical;overflow: hidden;display: -webkit-box;-webkit-line-clamp: 2;font-size: 16px;line-height: 20px;position: absolute;top: 10px;left:105px;">上海迪士尼度假区一日游【门票+快速入园+8项快+导游+演出+烟花】</span>
			    <button>&nbsp;明日可用&nbsp;</button><button>&nbsp;立即确认&nbsp;</button><button>&nbsp;无购物&nbsp;</button>
			    <span style="position: absolute;left: 106px;top: 72px; font-size: 17px;color: #27a2ed;">5<span style="color: #27a2ed;">分</span><span style="font-size: 12px;color: #999;">&nbsp;&nbsp;月销:624份</span></span>
			    <span style="color: #f40;position: absolute;right: 10px;top:80px; font-size: 12px;">￥<span style="font-size: 18px;font-weight: 600;">1160</span><span style="font-size: 12px;color: #999;">起</span></span>
			</div>
			<div class="mint-cell ticketMint-cell2">
			    <img src="../../assets/103.jpg" style="position: relative;top:10px; width: 95px;height: 95px;border-radius: 5px;"/>
			    <span style="position: absolute;bottom: 10px;display: block;margin: 0 auto;width: 95px;left: 0;text-align: center;color: white;background: rgba(0,0,0,0.5);">上海出发</span>
			    <span style="width: 67%;-webkit-box-orient: vertical;overflow: hidden;display: -webkit-box;-webkit-line-clamp: 2;font-size: 16px;line-height: 20px;position: absolute;top: 10px;left:105px;">苏州周庄一日游【四季周庄 纯玩 夜游/日游 随订随走】</span>
			    <button>&nbsp;明日可用&nbsp;</button><button>&nbsp;立即确认&nbsp;</button><button>&nbsp;无购物&nbsp;</button>
			    <span style="position: absolute;left: 106px;top: 72px; font-size: 17px;color: #27a2ed;">4.9<span style="color: #27a2ed;">分</span><span style="font-size: 12px;color: #999;">&nbsp;&nbsp;月销:1247份</span></span>
			    <span style="color: #f40;position: absolute;right: 10px;top:80px; font-size: 12px;">￥<span style="font-size: 18px;font-weight: 600;">119</span><span style="font-size: 12px;color: #999;">起</span></span>
			</div>
			<div class="mint-cell ticketMint-cell2">
			    <img src="../../assets/109.jpg" style="position: relative;top:10px; width: 95px;height: 95px;border-radius: 5px;"/>
			    <span style="position: absolute;bottom: 10px;display: block;margin: 0 auto;width: 95px;left: 0;text-align: center;color: white;background: rgba(0,0,0,0.5);">上海出发</span>
			    <span style="width: 67%;-webkit-box-orient: vertical;overflow: hidden;display: -webkit-box;-webkit-line-clamp: 2;font-size: 16px;line-height: 20px;position: absolute;top: 10px;left:105px;">上海杜莎夫人蜡像馆+东方明珠+浦江游览+上海城隍庙+外滩一日游【网红导游接待+杜莎入园免排队+精品纯玩】</span>
			    <button>&nbsp;明日可用&nbsp;</button><button>&nbsp;无购物&nbsp;</button><button>&nbsp;无自费&nbsp;</button>
			    <span style="position: absolute;left: 106px;top: 72px; font-size: 17px;color: #27a2ed;">5<span style="color: #27a2ed;">分</span><span style="font-size: 12px;color: #999;">&nbsp;&nbsp;月销:1105份</span></span>
			    <span style="color: #f40;position: absolute;right: 10px;top:80px; font-size: 12px;">￥<span style="font-size: 18px;font-weight: 600;">268</span><span style="font-size: 12px;color: #999;">起</span></span>
			</div>
			<div class="mint-cell ticketMint-cell2">
			    <img src="../../assets/117.jpg" style="position: relative;top:10px; width: 95px;height: 95px;border-radius: 5px;"/>
			    <span style="position: absolute;bottom: 10px;display: block;margin: 0 auto;width: 95px;left: 0;text-align: center;color: white;background: rgba(0,0,0,0.5);">上海出发</span>
			    <span style="width: 67%;-webkit-box-orient: vertical;overflow: hidden;display: -webkit-box;-webkit-line-clamp: 2;font-size: 16px;line-height: 20px;position: absolute;top: 10px;left:105px;">嘉兴乌镇+西塘风景区一日游【畅游双古镇 赏乌镇夜景 可选西塘自助美食】</span>
			    <button>&nbsp;明日可用&nbsp;</button><button>&nbsp;立即确认&nbsp;</button><button>&nbsp;无购物&nbsp;</button>
			    <span style="position: absolute;left: 106px;top: 72px; font-size: 17px;color: #27a2ed;">5<span style="color: #27a2ed;">分</span><span style="font-size: 12px;color: #999;">&nbsp;&nbsp;月销:1317份</span></span>
			    <span style="color: #f40;position: absolute;right: 10px;top:80px; font-size: 12px;">￥<span style="font-size: 18px;font-weight: 600;">269</span><span style="font-size: 12px;color: #999;">起</span></span>
			</div>
			<div class="mint-cell ticketMint-cell2">
			    <img src="../../assets/106.jpg" style="position: relative;top:10px; width: 95px;height: 95px;border-radius: 5px;"/>
			    <span style="position: absolute;bottom: 10px;display: block;margin: 0 auto;width: 95px;left: 0;text-align: center;color: white;background: rgba(0,0,0,0.5);">上海出发</span>
			    <span style="width: 67%;-webkit-box-orient: vertical;overflow: hidden;display: -webkit-box;-webkit-line-clamp: 2;font-size: 16px;line-height: 20px;position: absolute;top: 10px;left:105px;">苏州拙政园+狮子林+虎丘+寒山寺+山塘古街一日游【纯玩线路  天天开班  上海出发】</span>
			    <button>&nbsp;明日可用&nbsp;</button><button>&nbsp;立即确认&nbsp;</button><button>&nbsp;无购物&nbsp;</button>
			    <span style="position: absolute;left: 106px;top: 72px; font-size: 17px;color: #27a2ed;">4.9<span style="color: #27a2ed;">分</span><span style="font-size: 12px;color: #999;">&nbsp;&nbsp;月销:536份</span></span>
			    <span style="color: #f40;position: absolute;right: 10px;top:80px; font-size: 12px;">￥<span style="font-size: 18px;font-weight: 600;">208</span><span style="font-size: 12px;color: #999;">起</span></span>
			</div>
			<div class="mint-cell ticketMint-cell2">
			    <img src="../../assets/136.jpg" style="position: relative;top:10px; width: 95px;height: 95px;border-radius: 5px;"/>
			    <span style="position: absolute;bottom: 10px;display: block;margin: 0 auto;width: 95px;left: 0;text-align: center;color: white;background: rgba(0,0,0,0.5);">上海出发</span>
			    <span style="width: 67%;-webkit-box-orient: vertical;overflow: hidden;display: -webkit-box;-webkit-line-clamp: 2;font-size: 16px;line-height: 20px;position: absolute;top: 10px;left:105px;">上海东方明珠+浦江游览+外滩一日游【送外滩观光隧道景点】</span>
			    <button>&nbsp;明日可用&nbsp;</button><button>&nbsp;无购物&nbsp;</button><button>&nbsp;无自费&nbsp;</button>
			    <span style="position: absolute;left: 106px;top: 72px; font-size: 17px;color: #27a2ed;">5<span style="color: #27a2ed;">分</span><span style="font-size: 12px;color: #999;">&nbsp;&nbsp;月销:1402份</span></span>
			    <span style="color: #f40;position: absolute;right: 10px;top:80px; font-size: 12px;">￥<span style="font-size: 18px;font-weight: 600;">175</span><span style="font-size: 12px;color: #999;">起</span></span>
			</div>
			<div class="mint-cell ticketMint-cell2">
			    <img src="../../assets/104.jpg" style="position: relative;top:10px; width: 95px;height: 95px;border-radius: 5px;"/>
			    <span style="position: absolute;bottom: 10px;display: block;margin: 0 auto;width: 95px;left: 0;text-align: center;color: white;background: rgba(0,0,0,0.5);">上海出发</span>
			    <span style="width: 67%;-webkit-box-orient: vertical;overflow: hidden;display: -webkit-box;-webkit-line-clamp: 2;font-size: 16px;line-height: 20px;position: absolute;top: 10px;left:105px;">上海迪士尼度假区一日游【全程不排队线与升级贵宾线任您选择】</span>
			    <button>&nbsp;明日可用&nbsp;</button><button>&nbsp;中文服务&nbsp;</button><button>&nbsp;立即确认&nbsp;</button>
			    <span style="position: absolute;left: 106px;top: 72px; font-size: 17px;color: #27a2ed;">4.9<span style="color: #27a2ed;">分</span><span style="font-size: 12px;color: #999;">&nbsp;&nbsp;月销:534份</span></span>
			    <span style="color: #f40;position: absolute;right: 10px;top:80px; font-size: 12px;">￥<span style="font-size: 18px;font-weight: 600;">608</span><span style="font-size: 12px;color: #999;">起</span></span>
			</div>
			<section class="ticketAllView"><span style="display: block;text-align: center;">查看上海全部一日游</span><div></div></section>
		  </mt-tab-container-item>
		  
		  <mt-tab-container-item id="3">
		    <!--<mt-cell v-for="n in 6" :title="'kkk' + n" />-->
		    <div class="mint-cell ticketMint-cell2" >
			    <img src="../../assets/107.jpg" style="position: relative;top:10px; width: 95px;height: 95px;border-radius: 5px;"/>
			    <span style="position: absolute;bottom: 10px;display: block;margin: 0 auto;width: 95px;left: 0;text-align: center;color: white;background: rgba(0,0,0,0.5);">上海</span>
			    <span style="width: 67%;-webkit-box-orient: vertical;overflow: hidden;display: -webkit-box;-webkit-line-clamp: 2;font-size: 16px;line-height: 20px;position: absolute;top: 10px;left:105px;">【立省348元】【魔都必打卡】上海城市通票19选3/4/5（含东方明珠、浦江游览等人气热门景点，懒人自由行省心必选）【Shanghai Pass】</span>
			    <button>&nbsp;今日可用&nbsp;</button>
			    <span style="position: absolute;left: 106px;top: 72px; font-size: 17px;color: #27a2ed;">3.3<span style="color: #27a2ed;">分</span><span style="font-size: 12px;color: #999;">&nbsp;&nbsp;月销:97份</span></span>
			    <span style="color: #f40;position: absolute;right: 10px;top:80px; font-size: 12px;">￥<span style="font-size: 18px;font-weight: 600;">269</span><span style="font-size: 12px;color: #999;">起</span></span>
			</div>
			<div class="mint-cell ticketMint-cell2" >
			    <img src="../../assets/114.jpg" style="position: relative;top:10px; width: 95px;height: 95px;border-radius: 5px;"/>
			    <span style="position: absolute;bottom: 10px;display: block;margin: 0 auto;width: 95px;left: 0;text-align: center;color: white;background: rgba(0,0,0,0.5);">上海</span>
			    <span style="width: 67%;-webkit-box-orient: vertical;overflow: hidden;display: -webkit-box;-webkit-line-clamp: 2;font-size: 16px;line-height: 20px;position: absolute;top: 10px;left:105px;">【带娃优选】上海城市通票【12选3/4/5】（上野、海洋水族馆、浦江游船等，一票玩转亲子游）【Shanghai Pass】</span>
			    <button>&nbsp;今日可用&nbsp;</button>
			    <span style="position: absolute;left: 100px;top: 74px;font-size: 12px;color: #999;">&nbsp;&nbsp;月销:67份</span></span>
			    <span style="color: #f40;position: absolute;right: 10px;top:80px; font-size: 12px;">￥<span style="font-size: 18px;font-weight: 600;">206</span><span style="font-size: 12px;color: #999;">起</span></span>
			</div>
			<div class="mint-cell ticketMint-cell2" >
			    <img src="../../assets/119.jpg" style="position: relative;top:10px; width: 95px;height: 95px;border-radius: 5px;"/>
			    <span style="position: absolute;bottom: 10px;display: block;margin: 0 auto;width: 95px;left: 0;text-align: center;color: white;background: rgba(0,0,0,0.5);">上海</span>
			    <span style="width: 67%;-webkit-box-orient: vertical;overflow: hidden;display: -webkit-box;-webkit-line-clamp: 2;font-size: 16px;line-height: 20px;position: absolute;top: 10px;left:105px;">《美女与野兽》音乐剧</span>
			    <span style="position: absolute;left: 106px;top: 33px; font-size: 17px;color: #27a2ed;">4.8<span style="color: #27a2ed;">分</span><span style="font-size: 12px;color: #999;">&nbsp;&nbsp;月销:281份</span></span>
			    <span style="color: #f40;position: absolute;right: 10px;top:80px; font-size: 12px;">￥<span style="font-size: 18px;font-weight: 600;">180</span><span style="font-size: 12px;color: #999;">起</span></span>
			</div>
			<div class="mint-cell ticketMint-cell2" >
			    <img src="../../assets/113.jpg" style="position: relative;top:10px; width: 95px;height: 95px;border-radius: 5px;"/>
			    <span style="position: absolute;bottom: 10px;display: block;margin: 0 auto;width: 95px;left: 0;text-align: center;color: white;background: rgba(0,0,0,0.5);">上海</span>
			    <span style="width: 67%;-webkit-box-orient: vertical;overflow: hidden;display: -webkit-box;-webkit-line-clamp: 2;font-size: 16px;line-height: 20px;position: absolute;top: 10px;left:105px;">【立省57%】【总价超4000元】上海城市通票1/2/3日（含东方明珠、浦江游览等50多热门景点）【Shanghai Pass】</span>
			    <button>&nbsp;今日可用&nbsp;</button>
			    <span style="position: absolute;left: 100px;top: 74px;font-size: 12px;color: #999;">&nbsp;&nbsp;月销:43份</span></span>
			    <span style="color: #f40;position: absolute;right: 10px;top:80px; font-size: 12px;">￥<span style="font-size: 18px;font-weight: 600;">299</span><span style="font-size: 12px;color: #999;">起</span></span>
			</div>
			<div class="mint-cell ticketMint-cell2" >
			    <img src="../../assets/121.jpg" style="position: relative;top:10px; width: 95px;height: 95px;border-radius: 5px;"/>
			    <span style="position: absolute;bottom: 10px;display: block;margin: 0 auto;width: 95px;left: 0;text-align: center;color: white;background: rgba(0,0,0,0.5);">上海</span>
			    <span style="width: 67%;-webkit-box-orient: vertical;overflow: hidden;display: -webkit-box;-webkit-line-clamp: 2;font-size: 16px;line-height: 20px;position: absolute;top: 10px;left:105px;">上海野生动物园中文语音讲解（由美景听听提供）</span>
			    <button>&nbsp;今日可用&nbsp;</button><button>&nbsp;立即确认&nbsp;</button>
			    <span style="position: absolute;left: 100px;top: 74px;font-size: 12px;color: #999;">&nbsp;&nbsp;月销:1份</span></span>
			    <span style="color: #f40;position: absolute;right: 10px;top:80px; font-size: 12px;">￥<span style="font-size: 18px;font-weight: 600;">2</span><span style="font-size: 12px;color: #999;">起</span></span>
			</div>
			<div class="mint-cell ticketMint-cell2" >
			    <img src="../../assets/122.jpg" style="position: relative;top:10px; width: 95px;height: 95px;border-radius: 5px;"/>
			    <span style="position: absolute;bottom: 10px;display: block;margin: 0 auto;width: 95px;left: 0;text-align: center;color: white;background: rgba(0,0,0,0.5);">上海</span>
			    <span style="width: 67%;-webkit-box-orient: vertical;overflow: hidden;display: -webkit-box;-webkit-line-clamp: 2;font-size: 16px;line-height: 20px;position: absolute;top: 10px;left:105px;">上海豫园中文语音讲解（由美景听听提供）</span>
			    <button>&nbsp;今日可用&nbsp;</button><button>&nbsp;立即确认&nbsp;</button>
			    <span style="position: absolute;left: 106px;top: 72px; font-size: 17px;color: #27a2ed;">4.3<span style="color: #27a2ed;">分</span><span style="font-size: 12px;color: #999;">&nbsp;&nbsp;月销:87份</span></span>
			    <span style="color: #f40;position: absolute;right: 10px;top:80px; font-size: 12px;">￥<span style="font-size: 18px;font-weight: 600;">2</span><span style="font-size: 12px;color: #999;">起</span></span>
			</div>
			<div class="mint-cell ticketMint-cell2" >
			    <img src="../../assets/137.jpg" style="position: relative;top:10px; width: 95px;height: 95px;border-radius: 5px;"/>
			    <span style="position: absolute;bottom: 10px;display: block;margin: 0 auto;width: 95px;left: 0;text-align: center;color: white;background: rgba(0,0,0,0.5);">上海</span>
			    <span style="width: 67%;-webkit-box-orient: vertical;overflow: hidden;display: -webkit-box;-webkit-line-clamp: 2;font-size: 16px;line-height: 20px;position: absolute;top: 10px;left:105px;"> 【百元游上海】【立省455】上海城市通票20景点（含金茂大厦、浦江游览等人气热门景点，自由行省心必选）【Shanghai Pass】</span>
			    <button>&nbsp;今日可用&nbsp;</button>
			    <span style="position: absolute;left: 100px;top: 74px;font-size: 12px;color: #999;">&nbsp;&nbsp;月销:6份</span></span>
			    <span style="color: #f40;position: absolute;right: 10px;top:80px; font-size: 12px;">￥<span style="font-size: 18px;font-weight: 600;">189</span><span style="font-size: 12px;color: #999;">起</span></span>
			</div>
			<div class="mint-cell ticketMint-cell2" >
			    <img src="../../assets/97.jpg" style="position: relative;top:10px; width: 95px;height: 95px;border-radius: 5px;"/>
			    <span style="position: absolute;bottom: 10px;display: block;margin: 0 auto;width: 95px;left: 0;text-align: center;color: white;background: rgba(0,0,0,0.5);">上海</span>
			    <span style="width: 67%;-webkit-box-orient: vertical;overflow: hidden;display: -webkit-box;-webkit-line-clamp: 2;font-size: 16px;line-height: 20px;position: absolute;top: 10px;left:105px;">上海科技馆中文语音讲解（由小鹿导游提供）</span>
			    <button>&nbsp;今日可用&nbsp;</button><button>&nbsp;立即确认&nbsp;</button>
			    <span style="position: absolute;left: 106px;top: 72px; font-size: 17px;color: #27a2ed;">3.3<span style="color: #27a2ed;">分</span><span style="font-size: 12px;color: #999;">&nbsp;&nbsp;月销:170份</span></span>
			    <span style="color: #f40;position: absolute;right: 10px;top:80px; font-size: 12px;">￥<span style="font-size: 18px;font-weight: 600;">3</span><span style="font-size: 12px;color: #999;">起</span></span>
			</div>
			<div class="mint-cell ticketMint-cell2" >
			    <img src="../../assets/100.jpg" style="position: relative;top:10px; width: 95px;height: 95px;border-radius: 5px;"/>
			    <span style="position: absolute;bottom: 10px;display: block;margin: 0 auto;width: 95px;left: 0;text-align: center;color: white;background: rgba(0,0,0,0.5);">上海</span>
			    <span style="width: 67%;-webkit-box-orient: vertical;overflow: hidden;display: -webkit-box;-webkit-line-clamp: 2;font-size: 16px;line-height: 20px;position: absolute;top: 10px;left:105px;">上海海洋水族馆中文语音讲解（由三毛游手机提供）</span>
			    <button>&nbsp;今日可用&nbsp;</button><button>&nbsp;立即确认&nbsp;</button>
			    <span style="position: absolute;left: 106px;top: 72px; font-size: 17px;color: #27a2ed;">2<span style="color: #27a2ed;">分</span><span style="font-size: 12px;color: #999;">&nbsp;&nbsp;月销:17份</span></span>
			    <span style="color: #f40;position: absolute;right: 10px;top:80px; font-size: 12px;">￥<span style="font-size: 18px;font-weight: 600;">5</span><span style="font-size: 12px;color: #999;">起</span></span>
			</div>
			<div class="mint-cell ticketMint-cell2" >
			    <img src="../../assets/138.jpg" style="position: relative;top:10px; width: 95px;height: 95px;border-radius: 5px;"/>
			    <span style="position: absolute;bottom: 10px;display: block;margin: 0 auto;width: 95px;left: 0;text-align: center;color: white;background: rgba(0,0,0,0.5);">上海</span>
			    <span style="width: 67%;-webkit-box-orient: vertical;overflow: hidden;display: -webkit-box;-webkit-line-clamp: 2;font-size: 16px;line-height: 20px;position: absolute;top: 10px;left:105px;">上海迪士尼度假区中文语音讲解（由小鹿导游提供）</span>
			    <button>&nbsp;今日可用&nbsp;</button><button>&nbsp;立即确认&nbsp;</button>
			    <span style="position: absolute;left: 100px;top: 74px;font-size: 12px;color: #999;">&nbsp;&nbsp;月销:8份</span></span>
			    <span style="color: #f40;position: absolute;right: 10px;top:80px; font-size: 12px;">￥<span style="font-size: 18px;font-weight: 600;">3</span><span style="font-size: 12px;color: #999;">起</span></span>
			</div>
			<section class="ticketAllView"><span style="display: block;text-align: center;">查看上海全部特色体验</span><div></div></section>
		  </mt-tab-container-item>
		</mt-tab-container>
	</section>
	
	<!--10px留白-->
	<section class="ticketSpace"></section>
	
	<!--携程门店-->
	<section id="ticketLocalCity" style="width: 100%;height: 42px;position: relative;">
		<img src="../../assets/76.png" style="width: 15px;height: 15px;position: absolute;left: 20px;top: 11px;"/>
		<span style="position: absolute;font-size: 13px;line-height: 18px; left:40px;top: 12px;">当前城市有<span style="color: rgb(255, 125, 19);">114</span>家携程门店</span>
		<div></div>
	</section>
	
	<!--10px留白-->
	<section class="ticketSpace" style="margin-bottom: 50px;"></section>
	
	<!--底部固定菜单-->
	<section id="ticketBottom" style="width: 100%; height: 50px;position:fixed;bottom: 0px;background: white;">
		<ul>
			<li>
				<img src="../../assets/139.jpg" />
				<p>浏览历史</p>
			</li>
			<li>
				<img src="../../assets/140.jpg" />
				<p>收藏</p>
			</li>
			<li>
				<img src="../../assets/141.jpg" />
				<p>订单</p>
			</li>
			<li>
				<img src="../../assets/142.jpg" />
				<p>优惠券</p>
			</li>
		</ul>
	</section>
	
</main>
</template>

<script>
export default {
  name: 'page-navbar',
 
  data() {
    return {
      selected: '1'
    };
  }
};
</script>

<style scoped>
*{
	padding: 0px;
	margin: 0px;
	font-size: 14px;
}
#ticketHeader{
	position: relative;
	background-size: 100%;
	width: 100%;
	padding-bottom: 43.75%;
	background-image: url(../../assets/67.png);
	background-repeat: no-repeat;
}
#ticketHeaderBox{
	position: fixed;
	width: 100%;
	height: 44px;
	background: rgba(0,0,0,0.2);
	z-index: 1;
}
#ticketleft{
	position: fixed;
	top: 17px;
	left: 5.5%;
	color: white;
	width: 9px;
	height: 9px;
	border-bottom: 2px solid white;
	border-left: 2px solid white;
	transform: rotate(45deg);
}
#ticketinputbox{
	position: fixed;
	top: 6px;
	left: 12%;
	width: 76%;
	height: 33px;
	background: white;
	margin: 0 auto;
	border-radius: 15px;
}
#ticketinputplace{
	line-height: 23px;
	font-size: 15px;
	display: block;
	width: 62px;
	height: 33px;
	color: #19a0f0;
	float: left;
	/*background: pink;*/
}
#ticketinputplace span{
	position: absolute;
	top: 5.5px;
	display: block;
	width: 52px;
	height: 22px;
	margin-left: 10px;
	/*background: gray;*/
	border-right: 1px solid lightgray;
}
#ticketinput{
	display: block;
	width: 77%;
	height: 32px;
	/*background: green;*/
	position: absolute;
	left: 62px;
}
#ticketinput img{
	position: relative;
	top: 5px;
	left: 8px;
}
#ticketinput span{
	display: block;
	width: 83%;
	/*height: 33px;*/
	position: relative;
	bottom: 12px;
	color: #a3a8ab;
	left: 31px;
	font-size: 13px;
    overflow: hidden;
	text-overflow: ellipsis;
	-webkit-line-clamp: 2;
	white-space: nowrap;
}
#ticketRedbag{
	width: 20px;
	height: 20px;
	position: fixed;
	top: 13px;
	right: 13px;
}
#ticketSwipe{
	width: 100%;
	height: 190px;
	position: relative;
}
#ticketSwipe .mint-swipe-item li{
	width: 20%;
	height: 82px;
	float: left;
	position: relative;
}
#ticketSwipe .mint-swipe-item li div{
	margin: 0 auto;
	position: relative;
	top: 15px;
}
#ticketSwipe .mint-swipe-item li p{
	display: block;
	width: 100%;
	text-align: center;
	font-size: 13px;
	position: relative;
	padding-top: 20px;
}
#ticketSwipe .mint-swipe-indicators{
	text-align: center;
	bottom: 5px;
	background: white;
}
#ticketDisney{
	position: absolute;
	top: 5px;
	color: white;
	right: 0;
	display: block;
	max-width: 70px;
    font-size: 10px;
    border-radius: 15px;
    line-height: 12px;
    padding: 2px 5px 1px;
   	background: #ff8028;
    z-index: 1;
}
.mint-swipe-indicators{
	/*background: gray;*/
	position: absolute;
	bottom: 7px;
}
.mint-swipe-indicator{
	background: blue;
	color: black;
}
.ticketSpace{
	width: 100%;
	height: 10px;
	position: relative;
	background: #efefef;
}
#ticketViewHot{
	display: table;
	width: 100%;
	height: 257px;
	position: relative;
	/*background: pink;*/
}
#ticketViewHot img{
	display: table-cell;
	margin: 14.5px auto;
	height: 16px;
}
#ticketViewHot ul{
	width: 96%;
	margin: 0 auto;
	height: 62px;
	/*background: lightcyan;*/
}
#ticketViewHot ul li{
	float: left;
	width: 32%;
	height: 62px;
	border: 1px solid whitesmoke;
	border-radius: 5px;
	position: relative;
	margin-bottom: 3px;
}
#ticketViewHot ul li:nth-child(2){
	margin-left: 1%;
	margin-right: 1%;
}
#ticketViewHot ul li span{
	display: block;
	font-size: 15px;
	text-align: center;
	width: 92%;
	position: relative;
	left: 4%;
	top: 11px;
	overflow: hidden;
	text-overflow: ellipsis;
	-webkit-line-clamp: 2;
	white-space: nowrap;
}
#ticketViewHot ul li p{
	display: block;
	font-size: 12px;
    color: #999;
    margin-top: 11px;
	width: 100%;
	position: relative;
	text-align: center;
}
#ticketSeason{
	width: 100%;
	height: 245px;
	position: relative;
	/*background: pink;*/
}
#ticketThree{
	width: 100%;
	height: 80px;
	position: relative;
}
#ticketThree ul li{
	float: left;
	height: 80px;
	width: 27.5%;
}
#ticketThree ul li img{
	width: 100%;
	height: 80px;
}
#ticketThree ul li:nth-child(1){
	width: 43.5%;
}
#ticketThree ul li:nth-child(2){
	border-left: 1px solid lightgray;
	border-right: 1px solid lightgray;
}
#ticketThreeList .mint-navbar{
	height: 55px;
	border-bottom: 1px solid lightgray;
	padding-bottom: 3px;
}
#ticketThreeList .mint-tab-item{
	text-decoration: none;
}
.mint-tab-item-label{
	font-size: 14px;
	line-height: 35px;
}
.mint-cell{
	border-bottom: 0.5px solid lightgray;
	width: 97%;
	left: 3%;
	height: 115px;
}
.mint-cell:nth-child(1){
	border-top: none;
}
.mint-cell button{
	position: relative;
	left: 8px;
	border: 1px solid #4cb7f9;
	background: white;
	color: #4cb7f9;
	font-size: 11px;
	margin-right: 5px;
}
.ticketAllView{
	position: relative;
	color: #666;
	width: 100%;
	height: 42px;
    font-size: 12px;
    line-height: 42px;
}
.ticketAllView div{
	position: absolute;
	top: 18px;
	right: 26%;
	float: left;
	color: white;
	width: 6px;
	height: 6px;
	border-top: 1px solid #666;
	border-right: 1px solid #666;
	transform: rotate(45deg);
}
.ticketMint-cell2 button{
	position: relative;
	top: 15px;
}
#ticketLocalCity div{
	position: absolute;
	right: 20px;
	top: 18px;
	float: left;
	color: white;
	width: 6px;
	height: 6px;
	border-top: 1px solid #999;
	border-right: 1px solid #999;
	transform: rotate(45deg);
}
#ticketBottom ul{
	width: 100%;
	height: 50px;
	position: relative;
}
#ticketBottom ul li{
	float: left;
	position: relative;
	text-align: center;
	width: 25%;
	height: 50px;
}
#ticketBottom ul li img{
	position: relative;
	top: 7px;
}
#ticketBottom ul li p{
	display: block;
	width: 100%;
	position: absolute;
	margin: 0 auto;
	bottom: 5px;
    color: #999;
    font-size: 11px;
}

</style>