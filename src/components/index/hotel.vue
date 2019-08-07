<template>
<main>
	<!--头部-->
	<section id="hotelHead">
		<router-link to="/index"><img src="../../assets/62.png" /></router-link>
		<ul id="hotelHeadUl">
				<li>国内</li>
				<li>海外</li>
				<li>民宿</li>
		</ul>
		<router-link to="/login"><div>登录</div></router-link>
	</section>
	
	<!--主要内容-->
	<section id="hotelBigBackgroundBox">
		<div>
			<!--当前位置-->
			<ul style="width: 94%;left: 3%; position: relative; height: 46px;border-bottom: 1px solid #eeeeee;">
				<li style="display: block;width: 60%;"><span style="position: absolute;font-size: 16px;font-weight: 600;color: #2396FF;top: 13px;">上海</span></li>
				<li style="display: block;width: 39%; position: absolute;right: 2%;top: 7px;"><span style="border-left: 1px solid #EEEEEE; position: absolute; top: 10px;right: 5%;font-size: 12px;">&nbsp;&nbsp;<img src="../../assets/171.jpg" />&nbsp;<span style="position: relative;top: 2px;font-size: 12px;">当前位置</span></span></li>
			</ul>
			<!--入住及离店时间-->
			<ul style="width: 94%;left: 3%; position: relative;height: 57px;margin-top: 5px; border-bottom: 1px solid #eeeeee;">
				<li style="width: 36%;height: 57px;position: relative;float: left;">
					<span style="font-size: 12px;position: absolute;top: 8px;">入住</span>
					<p class="selector selectYear" @click="selectYear" style="display: block; color: #2396FF;font-weight: 600;font-size: 16px;position: absolute;top: 25px;">07月17日</p>
					<span style="font-size: 12px;position: absolute;left: 72%;top: 29px;">今天</span>
				</li>
					<li style="width: 28%;height: 57px;position: relative;float: left;text-align: center;">
						<span style="position: relative;top: 29px;font-size: 12px;">1晚</span>
					</li>
						<li style="width: 36%;height: 57px;position: relative;float: left;">
							<span style="font-size: 12px;position: absolute;top: 8px;">离店</span>
							<p class="selector selectYear" @click="selectYear" style="color: #2396FF;font-weight: 600;font-size: 16px;position: absolute;top: 25px;">07月18日</p>
							<span style="font-size: 12px;position: absolute;left: 72%;top: 29px;">周四</span>
						</li>
			</ul>
			<!--两个搜索框-->
			<input type="text" placeholder="关键字/位置/品牌/酒店名" >
			<input type="text" placeholder="星级/价格" >
			<!--三个图标-->
			<ul style="width: 94%;left: 3%; position: relative;height: 56px; border-bottom: 1px solid #eeeeee;">
				<li style="position: relative;top: 12px; display: block;width: 23%;height: 32px;background: #f4f4f6;border-radius: 15px;text-align: center;float: left;">
					<img style="position: relative;top: 7px;" src="../../assets/172.jpg" />
					<span style="position: relative;top: 8px;font-size: 12px;left: 1px;">出差</span>
				</li>
				<li style="position: relative;top: 12px; display: block;width: 23%;height: 32px;background: #f4f4f6;border-radius: 15px;text-align: center;float: left;margin-left: 5%;">
					<img style="position: relative;top: 7px;" src="../../assets/173.jpg" />
					<span style="position: relative;top: 8px;font-size: 12px;left: 1px;">休闲</span>
				</li>
				<li style="position: relative;top: 12px; display: block;width: 26%;height: 32px;background: #f4f4f6;border-radius: 15px;text-align: center;float: left;margin-left: 5%;">
					<img style="position: relative;top: 7px;" src="../../assets/174.jpg" />
					<span style="position: relative;top: 8px;font-size: 12px;left: 1px;">钟点房</span>
				</li>
			</ul>
			<!--查询按钮-->
			<ul style="width: 94%;left: 3%; position: relative;height: 66px; border-bottom: 1px solid #eeeeee;">
				<button style="outline: none; position: relative;width: 92%;top: 12px;border: none;border-radius: 25px;left: 4%;height: 42px;color: white;font-size: 16px;line-height: 36px;text-align: center;background-image: linear-gradient(-134deg, #FF8100 1%, #FF7100 99%);box-shadow: 0 8px 16px 0 rgba(255,113,0,0.30);">查询</button>
			</ul>
			<!--六个图标-->
			<ul style="width: 94%;left: 3%; position: relative;height: 66px;">
				<li style="position: relative;top: 16px; width: 33.33%;height: 56px;text-align: center;float: left;">
					<img style="width: 35px;height: 35px;" src="../../assets/175.png"/>
					<p style="font-size: 12px;position: relative;top: 1px;">钟点房</p>
					<span style="position: absolute;right: 20px;top: -3px; display: block;width: 28px;height: 14px;background: #F5190A;border-radius: 5px;color: white;font-size: 13px;">HOT</span>
				</li>
				<li style="position: relative;top: 16px; width: 33.33%;height: 56px;text-align: center;float: left;">
					<img style="width: 35px;height: 35px;" src="../../assets/169.png"/>
					<p style="font-size: 12px;position: relative;top: 1px;">行李管家</p>
				</li>
				<li style="position: relative;top: 16px; width: 33.33%;height: 56px;text-align: center;float: left;">
					<img style="width: 35px;height: 35px;" src="../../assets/178.png"/>
					<p style="font-size: 12px;position: relative;top: 1px;">特价酒店</p>
				</li>
			</ul>
			<ul style="width: 94%;left: 3%; position: relative;height: 56px;">
				<li style="position: relative;top: 6px; width: 33.33%;height: 56px;text-align: center;float: left;">
					<img style="width: 35px;height: 35px;" src="../../assets/177.png"/>
					<p style="font-size: 12px;position: relative;top: 1px;">民宿客栈</p>
				</li>
				<li style="position: relative;top: 6px; width: 33.33%;height: 56px;text-align: center;float: left;">
					<img style="width: 35px;height: 35px;" src="../../assets/176.png"/>
					<p style="font-size: 12px;position: relative;top: 1px;">会议·团房</p>
				</li>
				<li style="position: relative;top: 6px; width: 33.33%;height: 56px;text-align: center;float: left;">
					<img style="width: 35px;height: 35px;" src="../../assets/174.png"/>
					<p style="font-size: 12px;position: relative;top: 1px;">发现·特色</p>
				</li>
			</ul>
		</div>
	</section>
	
	<!--10px白色留白-->
	<section style="position: relative;top: 57px; width: 100%;height: 10px;"></section>
	
	<!--轮播图-->
	<section id="hotelSwipe">
		<mt-swipe :auto="3000">
			<mt-swipe-item><img src="../../assets/169.jpg"></mt-swipe-item>
			<mt-swipe-item><img src="../../assets/166.jpg"></mt-swipe-item>
			<mt-swipe-item><img src="../../assets/165.jpg"></mt-swipe-item>
			<mt-swipe-item><img src="../../assets/168.png"></mt-swipe-item>
			<mt-swipe-item><img src="../../assets/170.jpg"></mt-swipe-item>
			<mt-swipe-item><img src="../../assets/167.png"></mt-swipe-item>
		</mt-swipe>
	</section>
	
	<!--专业服务·全程保障-->
	<img style="width: 100%;position: relative;top: 73px;padding-bottom: 41%;" src="../../assets/172.png" />
	
	<!--底部四个小图标-->
	<section id="hotelBottom">
		<ul style="border-top: 0.5px solid whitesmoke; background: white; width: 100%; height: 64px;position: fixed;bottom: 0;">
			<li style="width: 25%;text-align: center;float: left;">
				<img style="position: relative;top: 8px; width: 26px;height: 24px;" src="../../assets/175.jpg" />
				<p style="position: relative;top: 15px;font-size: 12px;width: 100%;text-align: center;">我的订单</p>
			</li>
			<li style="width: 25%;text-align: center;float: left;">
				<img style="position: relative;top: 8px; width: 26px;height: 24px;" src="../../assets/176.jpg" />
				<p style="position: relative;top: 15px;font-size: 12px;width: 100%;text-align: center;">浏览历史</p>
			</li>
			<li style="width: 25%;text-align: center;float: left;">
				<img style="position: relative;top: 8px; width: 26px;height: 24px;" src="../../assets/177.jpg" />
				<p style="position: relative;top: 15px;font-size: 12px;width: 100%;text-align: center;">我的优惠券</p>
			</li>
			<li style="width: 25%;text-align: center;float: left;">
				<img style="position: relative;top: 8px; width: 26px;height: 24px;" src="../../assets/178.jpg" />
				<p style="position: relative;top: 15px;font-size: 12px;width: 100%;text-align: center;">更多</p>
			</li>
		</ul>
	</section>
	
	<!--时间选择框-->
	<mt-datetime-picker 
		v-model="dateValue" 
		type="date" 
		ref="datePicker" 
		year-format="{value} 年" 
		 month-format="{value} 月" 
		date-format="{value} 日" 
		:endDate="new Date()" 
		@confirm="handleConfirm">
	</mt-datetime-picker>
</main>
</template>

<script>
export default{
		data(){
			return{
				year:'',
				dataValue:'',
				isClicked:false
			};
		},
		methods:{
			selectYear () {
		      this.$refs.datePicker.open();
		    },
		    handleConfirm (value) {
		      console.log(value);
		      this.year = value.getFullYear();
		      this.month = value.getMonth() + 1;
		      this.date = value.getDate();
		      this.isClicked = true;
		    },
		}
}
</script>

<style scoped>
*{
	padding: 0px;
	margin: 0px;
	font-size: 14px;
}
#hotelHead{
	z-index: 1;
	position: fixed;
	top: 0;
	width: 100%;
	height: 56px;
	background-image: url(../../assets/171.png);
}
#hotelHead img{
	width: 30px;
	height: 30px;
	position: absolute;
	left: 3%;
	top: 13px;
}
#hotelHeadUl{
	position: absolute;
	top: 13.5px;
	left: 25%;
	display: block;
	width: 50%;
	height: 29px;
	/*padding-bottom: 10%;*/
	margin: 0 auto;
	/*position: relative;
	bottom: -20px;*/
	background: rgba(255,255,255,0.1);
	border-radius: 15px;
}
#hotelHeadUl li{
	text-align: center;
	float: left;
	width: 33.3333%;
	height: 29px;
	line-height: 28px;
	/*background: palegreen;*/
	color: white;
	font-size: 15px;
}
#hotelHeadUl li:nth-child(1){
	background: white;
	border-radius: 15px;
	color: rgb(66, 137, 255);
}
#hotelHead div{
	text-align: center;
	line-height: 22px;
	font-size: 12px;
	color: white;
	width: 48px;
	height: 22px;
	position: absolute;
	right: 4%;
	top: 16px;
	border: 1px solid white;
}
#hotelBigBackgroundBox{
	position: relative;
	top: 56px;
	width: 100%;
	height: auto;
	background-image: url(../../assets/170.png);
	background-size: 100%;
	background-repeat: no-repeat;
}
#hotelBigBackgroundBox div{
	box-shadow: 0 3px 4px 0 rgba(0,0,0,0.50);
	position: relative;
	width: 91%;
	left: 4.5%;
	padding-bottom: 5%;
	background: white;
}
#hotelBigBackgroundBox input{
	outline: none;
	position: relative;
	left: 3%;
	border: 0px;
	border-bottom: 1px solid #EEEEEE;
	width: 94%;
	height: 44px;
	font-size: 16px;
}
#hotelSwipe{
	position: relative;
	top: 58px;
}
#hotelSwipe .mint-swipe-items-wrap{
	width: 91.5%;
	left: 4.25%;
	padding-bottom: 30%;
}
#hotelSwipe img{
	width: 100%;
	height: 100%;
}
#hotelSwipe .mint-swipe-indicators{
	position: absolute;
	bottom: 0;
	/*background: gold;*/
}
#hotelSwipe .mint-swipe-indicator{
	width: 4px;
	height: 4px;
}
</style>