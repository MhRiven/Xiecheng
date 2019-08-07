<template>
<main>
	<!--顶部下载广告-->
	<section id="viewheader" v-if="show1">
		<div>
			<img @click="show" id="viewheaderpic1" src="../../assets/86.jpg" />
			<img id="viewheaderpic2" src="../../assets/62.png"/>
			<span id="APP">打开APP查看更多精彩</span>
		</div>
		<span id="see">去看看</span>
	</section>
	
	<!--上海图片-->
	<section id="shanghai">
		<div id="inputback">
			<router-link to="/index"><div id="viewleft"></div></router-link>
			<div id="viewinputbox">
				<span id="viewinputplace"><span>上海&nbsp;<img src="../../assets/87.jpg"></span></span>
				<span id="viewinput">
					<img src="../../assets/42.jpg">
					<span>目的地 景点 酒店 餐馆 游记等</span>
				</span>
			</div>
			<img style="width: 22px;height: 22px;" id="viewhome" src="../../assets/60.png">
		</div>
		<span id="Bigsh"><span>上海</span>&nbsp;&nbsp;Shanghai</span>
		<div id="viewweather">
			<span id="weathermath"><img src="../../assets/66.png">&nbsp;阴&nbsp;22-28℃</span>
			<div id="viewright1"></div>
			<span id="viewpic">94784张照片</span>
			<div id="viewright2"></div>
		</div>
			<!--背景色0.2黑色透明-->
			<div id="sss"></div>	
	</section>
	
	<!--导航四个图标-->
	<section id="viewNavigation">
		<ul>
			<li>
				<img src="../../assets/60.png"/>
				<p>景点·玩乐</p>
			</li>
			<li>
				<img src="../../assets/58.png"/>
				<p>住宿</p>
			</li>
			<li>
				<img src="../../assets/59.png"/>
				<p>美食林</p>
			</li>
			<li>
				<img src="../../assets/61.png"/>
				<p>购物</p>
			</li>
		</ul>
	</section>
	
	<!--8px淡灰色留白-->
	<section class="viewSpace"></section>
	
	<!--旅游攻略-->
	<section id="viewTravel">
		<span>旅游攻略</span>
		<p id="viewIntroduce">上海，被称为“东方的巴黎”，东西方文化在此融汇交织，造就了洋气的海派风情。它是曾经的“十里洋场”老上海，也是如今日新月异的繁华“魔都”。</p>
		<ul>
			<li>第一次来上海</li>
			<li>新年嗨起来</li>
			<li>迪士尼亲子游</li>
		</ul>
		<ul>
			<li>星巴克烘培坊</li>
			<li>老字号小吃店</li>
			<li>周边温泉推荐</li>
		</ul>
		<p id="viewAll">查看全部攻略</p>
	</section>
	
	<!--8px淡灰色留白-->
	<section class="viewSpace"></section>
	
	<!--当地热门-->
	<section id="viewLocalHot">
		<span id="viewLocalHotFont">当地热门</span>
		<ul id="viewLocalHotUL1">
			<li>景点</li>
			<li>酒店</li>
			<li>美食</li>
			<li>购物</li>
		</ul>
		<!--向右滑动的图片-->
		 <ul id="viewLocalHotUL2">
		  	<li>
		  		<img src="../../assets/55.jpg"/>
				<p id="viewLocalHotPlace">上海迪士尼度假区</p>
				<p id="viewLocalHotScore">4.6分</p>
		  	</li>
		  	<li>
		  		<img src="../../assets/58.jpg"/>
				<p id="viewLocalHotPlace">外滩</p>
				<p id="viewLocalHotScore">4.7分</p>
		  	</li>
		  	<li>
		  		<img src="../../assets/56.jpg"/>
				<p id="viewLocalHotPlace">东方明珠</p>
				<p id="viewLocalHotScore">4.6分</p>
		  	</li>
		  	<li>
		  		<img src="../../assets/61.jpg"/>
				<p id="viewLocalHotPlace">南京路步行街</p>
				<p id="viewLocalHotScore">4.6分</p>
		  	</li>
		  	<li>
		  		<img src="../../assets/60.jpg"/>
				<p id="viewLocalHotPlace">城隍庙旅游区</p>
				<p id="viewLocalHotScore">4.5分</p>
		  	</li>
		  	<li style="position: absolute;top:7px; width: 15%;margin-left: 5%;">
		  		<p style="font-size: 15px;">查<br />看<br />更<br />多</p>
		  	</li>
		  	
		</ul>
		
	</section>
	
	<!--8px淡灰色留白-->
	<section class="viewSpace"></section>
	
	<!--必吃特色菜-->
	<section id="viewMust">
		<span id="viewMustFont">必吃特色菜</span>
		<!--向右滑动的图片-->
		 <ul id="viewMustUl">
		  	<li>
		  		<img src="../../assets/65.jpg"/>
				<p id="viewMustName">上海生煎包</p>
		  	</li>
		  	<li>
		  		<img src="../../assets/54.jpg"/>
				<p id="viewMustName">糖醋小排</p>
		  	</li>
		  	<li>
		  		<img src="../../assets/62.jpg"/>
				<p id="viewMustName">本帮红烧肉</p>
		  	</li>
		  	<li>
		  		<img src="../../assets/63.jpg"/>
				<p id="viewMustName">八宝辣酱</p>
		  	</li>
		  	<li>
		  		<img src="../../assets/66.jpg"/>
				<p id="viewMustName">上海小笼包</p>
		  	</li>
		  	<li style="position: absolute;top: -2px; width: 15%;margin-left: 5%;">
		  		<p style="font-size: 15px;">查<br />看<br />更<br />多</p>
		  	</li>
		</ul>

	</section>
	
	<!--8px淡灰色留白-->
	<section class="viewSpace"></section>
	
	<!--推荐住宿区域-->
	<section id="viewSuggestHotel">
		<span id="viewSuggestHotelFont">推荐住宿区域</span>
		<ul>
			<li>
				<p class="viewSuggestHotelP1">迪士尼度假区</p>
				<p class="viewSuggestHotelP2">2205家酒店</p>
				<p class="viewSuggestHotelP3"><span>8.3%用户选择</span></p>
			</li>
			<li>
				<p class="viewSuggestHotelP1">虹桥机场、国家会展中心</p>
				<p class="viewSuggestHotelP2">822家酒店</p>
				<p class="viewSuggestHotelP3"><span>7.1%用户选择</span></p>
			</li>
			<li>
				<p class="viewSuggestHotelP1">人民广场地区</p>
				<p class="viewSuggestHotelP2">546家酒店</p>
				<p class="viewSuggestHotelP3"><span>5.5%用户选择</span></p></li>
		</ul>
		<p id="viewAllHotel">查看全部酒店</p>
	</section>
	
	<!--8px淡灰色留白-->
	<section class="viewSpace"></section>
	
	<!--热门路线-->
	<section id="viewHotLine">
		<span id="viewHotLineFont">热门路线</span>
		<ul>
			<li>
				<img src="../../assets/91.jpg"/>
				<span class="viewHotLineGo"><p>上海出发</p></span>
				<p class="viewHotLinePlay">杭州+苏州+上海3日2晚跟团游·纯玩线--游西湖-雷峰塔-狮子林-虎丘-东方明珠</p>
				<p class="viewHotLinePrice">￥<span>1057</span>起</p>
			</li>
			<li>
				<img src="../../assets/92.jpg"/>
				<span class="viewHotLineGo"><p>上海出发</p></span>
				<p class="viewHotLinePlay">杭州+苏州+上海3日2晚跟团游·纯玩线--游西湖-雷峰塔-拙政园-虎丘-东方明珠</p>
				<p class="viewHotLinePrice">￥<span>1114</span>起</p>
			</li>
		</ul>
		<p id="viewAllLine">查看全部路线</p>
	</section>
	
	<!--8px淡灰色留白-->
	<section class="viewSpace"></section>
	
	<!--当地问答-->
	<section id="viewLocalQuestions">
		<span id="viewLocalQuestionsFont">当地问答</span>
		<ul>
			<li>
				<span><img src="../../assets/93.jpg"/><span>外滩最佳观夜景时间是几点到几点？</span></span>
				<p><img src="../../assets/94.jpg"/><span>一般欣赏外滩夜景都是在8-10点左右，虽然10点后灯也不会全部没有，但是太晚会比较累，周边商店也会关门哦。</span></p>
			</li>
			<li>
				<span><img src="../../assets/93.jpg"/><span>浦东有哪些景点、好玩的地方</span></span>
				<p><img src="../../assets/94.jpg"/><span>滴水湖，野生动物园，周浦花海，迪士尼乐园，世博园，上海科技馆，世纪公园，上海海洋水族馆，东方明珠，东方艺术中心，新国际博览中心，世贸观光厅，昌里路小吃街，小上海步行街等等，希望对您有帮助吧！</span></p>
			</li>
		</ul>
		<p id="viewAllQuestions">查看全部问答</p>
	</section>
	
	<!--8px淡灰色留白-->
	<section class="viewSpace"></section>
	
	<!--热门游记-->
	<section id="viewHotTravel">
		<span id="viewHotTravelFont">热门游记</span>
		<ul>
			<li>
				<span style="padding-top: 0px;">【亲子自驾攻略】暑期“驾”到，带娃周边走走</span>
				<p class="viewHotTravelP1">序言：炎炎夏日，暑期进行时！有没有想过家里的熊孩子除了上各种各样的补习班，还能去哪儿玩</p>
				<p class="viewHotTravelP2">
					<img src="../../assets/95.jpg"/>14.5万
					<img src="../../assets/96.jpg"/>85
				</p>
				<img style="padding-top: 0;" class="viewHotTravelPic" src="../../assets/57.jpg"/>
			</li>
			<li>
				<span>红色旅游搭配黑高科技，打造全新龙华烈士纪念馆</span>
				<p class="viewHotTravelP1">携程地址链接：http://you.ctrip.com/sight/Shanghai2/1832204.html</p>
				<p class="viewHotTravelP2">
					<img src="../../assets/95.jpg"/>5.0万
					<img src="../../assets/96.jpg"/>58
				</p>
				<img class="viewHotTravelPic" src="../../assets/79.jpg"/>
			</li>
			<li>
				<span>陆家餐厅，叁家酒宿，我绮梦的上海味道</span>
				<p class="viewHotTravelP1">上海</p>
				<p class="viewHotTravelP2">
					<img src="../../assets/95.jpg"/>4.2万
					<img src="../../assets/96.jpg"/>743
				</p>
				<img class="viewHotTravelPic" src="../../assets/82.jpg"/>
			</li>
			<li>
				<span>上海自驾 | 这些地方藏着城市旧空间改造的新故事</span>
				<p class="viewHotTravelP1">写在前面的话：</p>
				<p class="viewHotTravelP2">
					<img src="../../assets/95.jpg"/>20.7万
					<img src="../../assets/96.jpg"/>66
				</p>
				<img class="viewHotTravelPic" src="../../assets/74.jpg"/>
			</li>
			<li>
				<span>徒步在中国最美的国道——318国道之流浪记：上海至尼泊尔（上篇）</span>
				<p class="viewHotTravelP1">写在前言——每个人都有自己的梦想 我曾经梦想自己是个魔法师可以帮助更多人 也梦想自己是位</p>
				<p class="viewHotTravelP2">
					<img src="../../assets/95.jpg"/>36.6万
					<img src="../../assets/96.jpg"/>323
				</p>
				<img class="viewHotTravelPic" src="../../assets/72.jpg"/>
			</li>
		</ul>
		<p id="viewAllTravel">查看全部游记</p>
	</section>
	
	<!--8px淡灰色留白-->
	<section class="viewSpace"></section>
	
	<!--经典行程-->
	<section id="viewClassical">
		<span id="viewClassicalFont">经典行程</span>
		<ul>
			<li>
				<span>初访上海必体验！魔都精华2日游</span>
				<button>&nbsp;建筑人文&nbsp;</button><button>&nbsp;经典&nbsp;</button>
				<p>共2天，15个景点</p>
				<img style="width: 110px;height: 85px;" src="../../assets/69.jpg"/>
			</li>
			<li>
				<span>迪士尼畅玩，全家出动3日游！</span>
				<button>&nbsp;亲子&nbsp;</button>
				<p>共3天，29个景点</p>
				<img style="width: 110px;height: 85px;" src="../../assets/81.jpg"/>
			</li>
		</ul>
		<p id="viewAllClassicalTravel">查看全部行程</p>
	</section>
	
	<!--8px淡灰色留白-->
	<section class="viewSpace"></section>
	
	<!--出行超市-->
	<section id="viewShop">
		<span id="viewShopFont">出行超市</span>
		<ul>
			<li>
				<img src="../../assets/83.jpg"/>
				<span>特价机票</span>
				<p>超值低价</p>
			</li>
			<li>
				<img src="../../assets/76.jpg"/>
				<span>自由行</span>
				<p>组合随心</p>
			</li>
			<li>
				<img src="../../assets/77.jpg"/>
				<span>跟团游</span>
				<p>无忧出行</p>
			</li>
		</ul>
		<ul>
			<li>
				<img src="../../assets/80.jpg"/>
				<span>一日游</span>
				<p>当地玩乐</p>
			</li>
			<li>
				<img src="../../assets/85.jpg"/>
				<span>当地向导</span>
				<p>接送自驾</p>
			</li>
			<li>
				<img src="../../assets/78.jpg"/>
				<span>租车用车</span>
				<p>接送自驾</p>
			</li>
		</ul>
	</section>
	
	<!--8px淡灰色留白-->
	<section class="viewSpace"></section>
	
	<!--看了此目的地的人还看了-->
	<section id="viewOther">
		<span id="viewOtherFont">看了此目的地的人还看了</span>
		<!--向右滑动的图片-->
		 <ul id="viewOtherUl">
		  	<li>
		  		<img src="../../assets/71.jpg"/>
		  		<span id="viewOtherPlace">&nbsp;&nbsp;无锡</span>
		  	</li>
		  	<li>
		  		<img src="../../assets/70.jpg"/>
		  		<span id="viewOtherPlace">&nbsp;&nbsp;苏州</span>
		  	</li>
		  	<li>
		  		<img src="../../assets/75.jpg"/>
		  		<span id="viewOtherPlace">&nbsp;&nbsp;南京</span>
		  	</li>
		  	<li>
		  		<img src="../../assets/68.jpg"/>
		  		<span id="viewOtherPlace">&nbsp;&nbsp;乌镇</span>
		  	</li>
		  	<li>
		  		<img src="../../assets/84.jpg"/>
		  		<span id="viewOtherPlace">&nbsp;&nbsp;杭州</span>
		  	</li>
		  	<li>
		  		<img src="../../assets/73.jpg"/>
		  		<span id="viewOtherPlace">&nbsp;&nbsp;迪士尼度假区</span>
		  	</li>
		</ul>
	</section>
	
	
	<!--凑行数-->
	<!--<div style="width: 100%; height: 800px;background: dodgerblue;"></div>-->
</main>
</template>

<script>

export default{
	data(){
		return{
			show1:true
		};
	},
		methods:{
			show(){
				this.show1=!this.show1
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
#sss{
	position: absolute;
	/*top: 50px;*/
	width: 100%;
	padding-bottom: 50%;
	background: black;
	opacity: 0.2;
}
#viewheader{
	width: 100%;
	height: 50px;
	background: #e8f2f9;
}
#viewheader div{
	float: left;
	position: absolute;
	width: 80%;
	height: 50px;
}
#viewheaderpic1{
	position: relative;
	top: 5px;
	margin-left: 8.5px;
}
#viewheaderpic2{
	position: relative;
	top: 5.5px;
	margin-left: 6px;
	width: 38px;
	height: 38px;
}
#APP{
	position: relative;
	top: 9px;
	left: 4px;
	font-size: 16px;
	line-height: 19px;
	max-width: 210px;
}
#see{
	position: absolute;
	display: block;
	top: 10px;
	right:10px;
	width: 66px;
    height: 30px;
    font-size: 14px;
	color: white;
	line-height: 30px;
	background: #2094F5;
	text-align: center;
    border-radius: 50px;
}
#shanghai{
	position: relative;
	background-size: 100% 100%;
	width: 100%;
	padding-bottom: 50%;
	background-image: url(../../assets/64.jpg);
	background-repeat: no-repeat;
}
#inputback{
	width: 100%;
	position: relative;
	background: dodgerblue;
	z-index: 1;
}
#viewleft{
	position: absolute;
	top: 16px;
	left: 6%;
	color: white;
	width: 9px;
	height: 9px;
	border-bottom: 2px solid white;
	border-left: 2px solid white;
	transform: rotate(45deg);
}
#viewinputbox{
	position: absolute;
	top: 6px;
	left: 13%;
	width: 74%;
	height: 33px;
	background: white;
	margin: 0 auto;
	border-radius: 2px;
}
#viewinputplace{
	line-height: 23px;
	font-size: 15px;
	display: block;
	width: 62px;
	height: 33px;
	float: left;
	/*background: pink;*/
}
#viewinputplace span{
	position: absolute;
	top: 5.5px;
	display: block;
	width: 52px;
	height: 22px;
	margin-left: 10px;
	/*background: gray;*/
	border-right: 1px solid lightgray;
}
#viewinput{
	display: block;
	width: 77%;
	height: 33px;
	/*background: green;*/
	position: absolute;
	left: 62px;
}
#viewinput img{
	position: relative;
	top: 5px;
	left: 8px;
}
#viewinput span{
	display: block;
	width: 85%;
	/*height: 33px;*/
	position: relative;
	bottom: 13px;
	color: #a3a8ab;
	left: 31px;
    overflow: hidden;
	text-overflow: ellipsis;
	-webkit-line-clamp: 2;
	white-space: nowrap;
}
#viewhome{
	position: absolute;
	top: 10px;
	right: 4%;
}
#Bigsh{
	position: absolute;
	left: 4%;
	bottom: 23%;
	display: block;
	width: 92%;
	height: 32px;
	color: white;
	z-index: 1;
}
#Bigsh span{
	color: white;
	font-size: 28px;
}
#viewweather{
	position: absolute;
	left: 4%;
	bottom: 8%;
	display: block;
	width: 92%;
	height: 22px;
	color: white;
	z-index: 1;
}
#weathermath{
	position: relative;
	float: left;
}
#viewright1{
	position: relative;
	left: 2px;
	top: 5px;
	float: left;
	color: white;
	width: 7px;
	height: 7px;
	border-top: 2px solid white;
	border-right: 2px solid white;
	transform: rotate(45deg);
}
#viewpic{
	position: relative;
	left: 10px;
	/*float: left;*/
}
#viewright2{
	position: relative;
	left: 100px;
	top: 5px;
	float: left;
	color: white;
	width: 7px;
	height: 7px;
	border-top: 2px solid white;
	border-right: 2px solid white;
	transform: rotate(45deg);
}
#viewNavigation{
	position: relative;
	width: 100%;
	height: 91px;
	/*background: pink;*/
}
#viewNavigation ul{
	position: absolute;
	bottom: 8px;
	width: 94%;
	left: 3%;
	height: 67px;
	/*background: lightcyan;*/
}
#viewNavigation ul li{
	position: relative;
	float: left;
	text-align: center;
	width: 25%;
	height: 67px;
	/*background: gray;*/
}
#viewNavigation ul li img{
	width: 42px;
	height: 42px;
}
#viewNavigation ul li p{
	width: 100%;
	position: absolute;
	bottom: 0px;
}
.viewSpace{
	width: 100%;
	height: 8px;
	background: #f0f3f6;
}
#viewTravel{
	/*background: lightgray;*/
	position: relative;
	width: 100%;
	height: 243px;
}
#viewTravel span{
	display: block;
	margin: 0 auto;
	width: 88%;
	height: 50px;
	line-height: 50px;
	font-size: 17px;
	text-align: center;
}
#viewIntroduce{
	width: 88%;
	margin: 0 auto;
	font-size: 15px;
	-webkit-box-orient: vertical;
	overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-height: 23px;
    margin-bottom: 12px;
}
#viewTravel ul{
	width: 88%;
	margin: 0 auto;
}
#viewTravel ul li{
	float: left;
	/*white-space: nowrap;*/
    font-size: 13px;
	display: block;
	width: 30%;
	height: 34px;
	line-height: 34px;
	background: #f5f5f5;
	text-align: center;
	margin-bottom: 8px;
}
#viewTravel ul li:nth-child(1){
	margin-right: 5%;
}
#viewTravel ul li:nth-child(2){
	margin-right: 5%;
}
#viewAll{
	border-top: 1px solid lightgray;
	display: block;
	width: 88%;
	left: 6%;
	text-align: center;
	color: #0099f7;
	font-size: 15px;
	line-height: 47px;
	position: absolute;
	bottom: 0px;
	height: 47px;
	/*background: lightcyan;*/
}
#viewLocalHot{
	width: 100%;
	height: auto;
	position: relative;
	/*background: black;*/
}
#viewLocalHotFont{
	display: block;
	width: 100%;
	height: 53px;
	line-height: 53px;
	text-align: center;
	font-size: 17px;
}
#viewLocalHotUL1{
	position: relative;
	width: 100%;
	margin: 0 auto;
	text-align: center;
}
#viewLocalHotUL1 li{
	border-radius: 2px;
	float: left;
	width: 21.6%;
	height: 28px;
	line-height: 28px;
	text-align: center;
	border: 0.5px solid lightgray;
}
#viewLocalHotUL1 li:nth-child(1){
	color: white;
	border: none;
	background: #4CB7F9;
	margin-left: 3%;
	margin-right: 2%;
}
#viewLocalHotUL1 li:nth-child(2){
	margin-right: 2%;
}
#viewLocalHotUL1 li:nth-child(3){
	margin-right: 2%;
}
#viewLocalHotUL1 li:nth-child(4){
	margin-right: 3%;
}
#viewLocalHotUL2{
	overflow-x: auto;
	white-space: nowrap;
	position: relative;
	width: 100%;
	padding-bottom: ;
	height: auto;
}
#viewLocalHotUL2 li{
	/*height: auto;*/
	position: relative;
	width: 30%;
	margin-left: 1.5%;
	display: inline-block;
}
#viewLocalHotUL2 li:nth-child(1){
	margin-left: 2.5%;
}
#viewLocalHotUL2 li img{
	margin-top: 10px;
	width: 100%;
}
#viewLocalHotPlace{
	position: relative;
	margin-top: 8px;
	width: 93%;
	overflow: hidden;
	text-overflow: ellipsis;
	-webkit-line-clamp: 2;
	white-space: nowrap;
}
#viewLocalHotScore{
	position: relative;
	margin-top: 5px;
	margin-bottom: 10px;
	/*top: 3px;*/
	color: #0099f7;
    font-size: 12px;
}
#viewLocalHotMore{
	width: 15px;
	float: left;
	font-size: 15px;
	position: relative;
	display: block;
}
#viewMust{
	width: 100%;
	height: auto;
	position: relative;
	/*background: greenyellow;*/
}
#viewMustFont{
	display: block;
	width: 100%;
	height: 53px;
	line-height: 53px;
	text-align: center;
	font-size: 17px;
}
#viewMustUl{
	overflow-x: auto;
	white-space: nowrap;
	position: relative;
	width: 100%;
	height: auto;
}
#viewMustUl li{
	/*height: auto;*/
	position: relative;
	width: 30%;
	margin-left: 1.5%;
	display: inline-block;
}
#viewMustUl li:nth-child(1){
	margin-left: 2.5%;
}
#viewMustUl li img{
	/*margin-top: 10px;*/
	width: 100%;
}
#viewMustName{
	position: relative;
	margin-top: 8px;
	margin-bottom: 15px;
	width: 93%;
	overflow: hidden;
	text-overflow: ellipsis;
	-webkit-line-clamp: 2;
	white-space: nowrap;
}
#viewSuggestHotel{
	width: 100%;
	height: auto;
	position: relative;
	/*background: greenyellow;*/
}
#viewSuggestHotelFont{
	display: block;
	width: 100%;
	height: 53px;
	line-height: 53px;
	text-align: center;
	font-size: 17px;
}
#viewSuggestHotel ul{
	position: relative;
	display: block;
	width: 92%;
	height: 200px;
	height: 101px;
	margin: 0 auto;
	/*background: pink;*/
}
#viewSuggestHotel ul li{
	display: block;
	background-image: url(../../assets/88.jpg);
	background-size: 100% 100%;
	background-repeat: no-repeat;
	width: 32%;
	float: left;
}
#viewSuggestHotel ul li:nth-child(2){
	background-image: url(../../assets/89.jpg);
	margin-left: 2%;
	margin-right: 2%;
}
#viewSuggestHotel ul li:nth-child(3){
	background-image: url(../../assets/90.jpg);
}
.viewSuggestHotelP1{
	color: white;
	text-align: center;
	position: relative;
	padding-top: 12px;
	width: 100%;
	overflow: hidden;
	text-overflow: ellipsis;
	-webkit-line-clamp: 2;
	white-space: nowrap;
}
.viewSuggestHotelP2{
	color: white;
	font-size: 11px;
	text-align: center;
	position: relative;
	width: 100%;
}
.viewSuggestHotelP3{
	margin-top: 6px;
	padding-bottom: 12px;
	position: relative;
	width: 100%;
}
.viewSuggestHotelP3 span{
	display: block;
	width: 80%;
	opacity: 0.7;
	background: white;
	font-size: 11px;
	line-height: 20px;
	margin:  0 auto;
	text-align: center;
}
#viewAllHotel{
	border-top: 1px solid lightgray;
	display: block;
	width: 92%;
	left: 4%;
	text-align: center;
	color: #0099f7;
	font-size: 15px;
	line-height: 47px;
	position: relative;
	bottom: 0px;
	height: 47px;
	/*background: lightcyan;*/
}
#viewHotLine{
	width: 100%;
	height: auto;
	position: relative;
}
#viewHotLineFont{
	display: block;
	width: 100%;
	height: 53px;
	line-height: 53px;
	text-align: center;
	font-size: 17px;
}
#viewHotLine ul li{
	position: relative;
	margin: 0 auto;
	width: 92%;
	height: 100px;
}
#viewHotLine ul li img{
	width: 112px;
	height: 84px;
}
.viewHotLineGo{
	background-color:rgba(0,0,0,0.6);
	color: white;
	width: 112px;
	position: absolute;
	bottom: 16px;
	left: 0;
}
.viewHotLineGo p{
	line-height: 18px;
	font-size: 11px;
	text-align: center;
}
.viewHotLinePlay{
	position: absolute;
	left: 120px;
	font-size: 16px;
	line-height: 20px;
	top: 12px;
	/*width: 63%;*/
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 2;
}
.viewHotLinePrice{
	color: #ff6912;
	position: absolute;
	top: 58px;
	right: 0;
	font-size: 11px;
	line-height: 20px;
}
.viewHotLinePrice span{
	font-size: 21px;
	line-height: 21px;
}
#viewAllLine{
	border-top: 1px solid lightgray;
	display: block;
	width: 92%;
	left: 4%;
	text-align: center;
	color: #0099f7;
	font-size: 15px;
	line-height: 47px;
	position: relative;
	bottom: 0px;
	height: 47px;
	/*background: lightcyan;*/
}
#viewLocalQuestions{
	width: 100%;
	height: auto;
	position: relative;
}
#viewLocalQuestionsFont{
	display: block;
	width: 100%;
	height: 53px;
	line-height: 53px;
	text-align: center;
	font-size: 17px;
}
#viewLocalQuestions ul li{
	display: block;
	position: relative;
	width: 100%;
	height: 58px;
}
#viewLocalQuestions ul li span{
	position: relative;
	font-size: 15px;
	display: block;
	width: 92%;
	margin: 0 auto;
}
#viewLocalQuestions ul li span span{
	top: 0;
	left: 22px;
	position: absolute;
	overflow: hidden;
	text-overflow: ellipsis;
	-webkit-line-clamp: 2;
	white-space: nowrap;
}
#viewLocalQuestions ul li p{
	position: relative;
	top: 5px;
	font-size: 15px;
	display: block;
	width: 92%;
	margin: 0 auto;
}
#viewLocalQuestions ul li p span{
	position: absolute;
	left: 22px;
	top: 0;
	overflow: hidden;
	text-overflow: ellipsis;
	-webkit-line-clamp: 2;
	white-space: nowrap;
}
#viewAllQuestions{
	border-top: 1px solid lightgray;
	display: block;
	width: 92%;
	left: 4%;
	text-align: center;
	color: #0099f7;
	font-size: 15px;
	line-height: 47px;
	position: relative;
	bottom: 0px;
	height: 47px;
	/*background: lightcyan;*/
}
#viewHotTravel{
	width: 100%;
	height: auto;
	position: relative;
}
#viewHotTravelFont{
	display: block;
	width: 100%;
	height: 53px;
	line-height: 53px;
	text-align: center;
	font-size: 17px;
}
#viewHotTravel ul li{
	padding-top: 10px;
	padding-bottom: 20px;
	border-bottom: 1px solid lightgray;
	width: 92%;
	height: 125px;
	position: relative;
	margin: 0 auto;
}
#viewHotTravel ul li:nth-child(1){
	padding-top: 0;
	width: 92%;
	height: 125px;
	padding-bottom: 15px;
	/*background: pink;*/
	margin: 0 auto;
}
#viewHotTravel ul li span{
	padding-top: 10px;
	width: 60%;
	line-height: 23px;
    font-size: 17px;
    font-family: 'PingFangSC-Medium';
    margin-bottom: 8px;
    -webkit-box-orient: vertical;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    overflow: hidden;
}
.viewHotTravelP1{
	width: 65%;
	font-size: 13px;
	color: #666;
	-webkit-box-orient: vertical;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    overflow: hidden;
    margin-bottom: 13px;
}
.viewHotTravelP2{
	line-height: 20px;
	color: #a3a8ab;
	font-size: 11px;
}
.viewHotTravelPic{
	padding-top: 15px;
	position: absolute;
	top: 0;
	right: 0;
	width: 110px;
	height: 125px;
}
#viewAllTravel{
/*	border-top: 1px solid lightgray;*/
	display: block;
	width: 92%;
	left: 4%;
	text-align: center;
	color: #0099f7;
	font-size: 15px;
	line-height: 47px;
	position: relative;
	bottom: 0px;
	height: 47px;
	/*background: lightcyan;*/
}
#viewClassical{
	width: 100%;
	height: auto;
	position: relative;
}
#viewClassicalFont{
	display: block;
	width: 100%;
	height: 53px;
	line-height: 53px;
	text-align: center;
	font-size: 17px;
}
#viewClassical ul li{
	width: 92%;
	margin: 0 auto;
	height: 101px;
	position: relative;
}
#viewClassical ul li span{
	display: block;
	padding-top: 12px;
	width: 60%;
	line-height: 23px;
    font-size: 17px;
    font-family: 'PingFangSC-Medium';
    margin-bottom: 5px;
    overflow: hidden;
	text-overflow: ellipsis;
	-webkit-line-clamp: 2;
	white-space: nowrap;
}
#viewClassical img{
	position: absolute;
	right: 0;
	top: 0;
}
#viewClassical ul li button{
	border: 1px solid #4cb7f9;
	background: white;
	color: #4cb7f9;
	font-size: 12px;
	margin-right: 5px;
	border-radius: 2px;
}
#viewClassical ul li p{
	font-size: 11px;
    line-height: 15px;
    color: #a3a8ab;
    margin-top: 4px;
}
#viewAllClassicalTravel{
	border-top: 1px solid lightgray;
	display: block;
	width: 92%;
	left: 4%;
	text-align: center;
	color: #0099f7;
	font-size: 15px;
	line-height: 47px;
	position: relative;
	bottom: 0px;
	height: 47px;
	/*background: lightcyan;*/
}
#viewShop{
	width: 100%;
	height: auto;
	position: relative;
	margin-bottom: 15px;
}
#viewShopFont{
	display: block;
	width: 100%;
	height: 53px;
	line-height: 53px;
	text-align: center;
	font-size: 17px;
}
#viewShop ul{
	position: relative;
	display: block;
	width: 94%;
	height: 75px;
	left: 3%;
	/*background: pink;*/
}
#viewShop ul li{
	margin-bottom: 8px;
	box-sizing: content-box;
	border: 1px solid #e5e5e5;
	display: block;
	float: left;
	width: 31%;
	height: 65px;
	padding-bottom: 1%;
	background: white;
	position: relative;
}
#viewShop ul li img{
	padding-top: 15px;
	position: relative;
	left: 5px;
	width: 32px;
	height: 32px;
}
#viewShop ul li span{
	display: block;
	overflow: hidden;
	position: absolute;
	top: 0;
	width: 60%;
	left: 45px;
	padding-top: 13px;
	line-height: 20px;
	overflow: hidden;
	text-overflow: ellipsis;
	-webkit-line-clamp: 2;
	white-space: nowrap;
}
#viewShop ul li p{
	position: relative;
	margin-top: -13px;
	padding-bottom: 13px;
	left: 45px;
	width: 60%;
	color: #a3a8ab;
    font-size: 11px;
    line-height: 15px;
}
#viewShop ul li:nth-child(2){
	margin-left: 2.5%;
	margin-right: 2.5%;
}
#viewOther{
	width: 100%;
	height: auto;
	position: relative;
}
#viewOtherFont{
	display: block;
	width: 100%;
	height: 53px;
	line-height: 53px;
	text-align: center;
	font-size: 17px;
}
#viewOtherUl{
	overflow-x: auto;
	white-space: nowrap;
	position: relative;
	width: 100%;
	height: auto;
}
#viewOtherUl li{
	margin-bottom: 10px;
	position: relative;
	width: 30%;
	margin-left: 0.7%;
	display: inline-block;
}
#viewOtherUl li:nth-child(1){
	margin-left: 2.5%;
}
#viewOtherUl li:nth-child(6){
	margin-right: 2%;
}
#viewOtherUl li img{
	/*margin-top: 10px;*/
	width: 100%;
}
#viewOtherPlace{
	/*text-align: center;*/
	display: block;
	height: 28px;
	width: 100%;
	/*background: green;*/
	font-size: 16px;
    line-height: 29px;
    color: white;
    position: absolute;
    bottom: 0;
    left: 0;
}
</style>