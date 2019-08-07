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
</main>
</template>
<script>
	export default{
		data(){
			return{
				
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
	top: 7px;
	left: 8px;
}
#ticketinput span{
	display: block;
	width: 83%;
	/*height: 33px;*/
	position: relative;
	top: -11px;
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
</style>