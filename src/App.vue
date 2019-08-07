<template>
  <div id="app">
  
<keep-alive>
  	<router-view></router-view>
</keep-alive>
	</div>
</template>

<script>
export default{
  data(){
    return {
      offsetTop:0
    }
  },
   mounted(){
      var toolbar=document.getElementById("SearchBox") 
      var my=document.getElementById("indexMy")
      var inputBackground=document.getElementById("Input")
      window.addEventListener('scroll',()=>{
        this.offsetTop=window.pageYOffset || document.documentElement.scrollTop ||document.body.scrollTop
        console.log(this.offsetTop);
        if (this.offsetTop>0) {
          my.style.color="black"
          inputBackground.style.background="#ececed"
          toolbar.style.background="#fff"
        }else{
        	my.style.color="white"
        	inputBackground.style.background="white"
          toolbar.style.background="linear-gradient(to bottom,rgba(0,0,0,0.5),rgba(255,255,255,0))"
        }
      },true);
  }
}
</script>
<style>
/*#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}*/
*{
	padding: 0px;
	margin: 0px;
	font-size: 14px;
}
#Navigation{
	width: 100%;
	position: relative;
	top: -25px;
	height: 65px;
	/*background: #fafafc;*/
}
#Navigation ul{
	margin: 0 auto;
	background: white;
	width: 90%;
	height: 60px;
	border-radius: 8px;
  list-style-type: none;
  box-shadow: 0px 13px 28.42px 0.58px rgba(33, 12, 12, 0.05);
}
#Navigation ul li{
	position: relative;
	margin: 0 auto;
	text-align: center;
	float: left;
	width: 20%;
	height: 60px;
	background: white;
	border-radius: 8px;
}
#Navigation img{
	margin: 0 auto;
	position: static;
	margin-top: 5px;
}
#Navigation span{
	position: static;
	width: 100%;
	float: left;
	margin-top: 5px;
	font-size: 12px;
	text-decoration: none;
  color: #222;
}
#SearchBox{
	position: fixed;
	top: 0;
	width: 100%;
	height: 40px;
	/*border-radius: 10px;*/
	background: linear-gradient(to bottom,rgba(0,0,0,0.5),rgba(255,255,255,0));
	/*opacity: 0.4;*/
	z-index: 1;
}
#Search input{
	outline:none;
	position: fixed;
	top: 6px;
	left: 4%;
	width: 73%;
	height: 28px;
	color: gray;
	background: white;
	border: none;
	/*border-style: solid;*/
	border-radius: 15px;
  z-index: 10;
}
#Minebox{
	width: 30px;
	height: 40px;
	/*background: pink;*/	
	position: fixed;
	top: 2px;
	right: 2.5%;
	z-index: 16;
	display: table;
}
#Minebox img{
	display: table-cell;
	position: relative;
	width: 22px;
	height: 22px;
	margin: 0 auto;
}
#SearchBox span{
	position: relative;
	bottom: 2px;
	width: 30px;
	/*background: green;*/
	font-size: 12px;
	color: white;
	text-align: center;
	float: left;
}
#icon{
	background-image: url(../../xiecheng/src/assets/179.png);
  background-repeat: no-repeat;
  position: fixed;
  top: 11px;
  left: 7.5%;
  width: 18px;
  height: 18px;
  z-index: 11;
}
#SearchBox div{
	width: 22px;
	height: 22px;
	right: 5%;
	position: fixed;
	top: 3px;
	color: white;
	z-index: 1;
}
#Swipe .mint-swipe{
	position: relative;
}
#Swipe .mint-swipe-items-wrap{
	width: 100%;
	padding-bottom: 60%;
	position: relative;
}
#Swipe img{
	width: 100%;
	height: 100%;
}
#Swipe .mint-swipe-indicators{
	text-align: center;
	margin-left: 32%;
	bottom: 40px;
	/*background: gold;*/
}
#Swipe .mint-swipe-indicator{
	width: 8px;
	height: 8px;
}
#Ticket{
	width: 100%;
	height: 210px;
	position: relative;
	top: -15px;
	background: #fafafc;
}
#TicketMenu{
	border-radius: 8px;
	margin: 0 auto;
	width: 90%;
	height: 201px;
	/*background: #fafafc;*/
}
#TicketMenuOne ul li{
	text-align: center;
	color: white;
	line-height: 67px;
	width: 25%;
	height: 67px;
	float: left;
	list-style: none;
	position: relative;
}
#TicketMenuOne ul :nth-child(1){
	border-top-left-radius: 8px;
}
#TicketMenuThree ul :nth-child(1){
	border-bottom-left-radius: 8px;
}
#TicketMenuThree ul :nth-child(4){
	border-bottom-right-radius: 8px;
}
#TicketMenuOne ul :nth-child(3){
	text-align: center;
	color: #a05416;
	line-height: 67px;
	width: 50%;
	height: 67px;
	float: left;
	list-style: none;
	position: relative;
	border-top-right-radius: 8px;
}
#TicketMenuOne ul li img{
	width: 100%;
	height: 30px;
	position: absolute;
	left: 0;
	bottom: 0;
}
.TicketMenuTwoandThree ul li{
	text-align: center;
	color: white;
	line-height: 67px;
	width: 25%;
	height: 67px;
	float: left;
	list-style: none;
	position: relative;
}
.TicketMenuTwoandThree ul li img{
	width: 100%;
	height: 30px;
	position: absolute;
	left: 0;
	bottom: 0;
}
#SecNavigation{
	width: 100%;
	border-bottom: 1px solid lightgray;
	height: 115px;
	position: relative;
	top: -18px;
	background: #fafafc;
}
#SecNavigation ul li{
	padding-top: 15px;
	position: relative;
	top: 0px;
	text-align: center;
	float: left;
	width: 20%;
}
#SecNavigation ul li a{
	font-size: 12px;
}
#SecNavigation img{
	width: 20px;
	height: 20px;
	text-align: center;
	/*margin-top: 7px;*/
}
#SecNavigation span{
	width: 100%;
	float: left;
	margin-top: 2px;
	font-size: 12px;
	text-decoration: none;
  color: #222;
}
#Sell{
	width: 100%;
	height:44px;
	background: white;
	position: relative;
	top: -9px;
}
#Sell img{
	position: relative;
	top: 12px;
	left: 9px;
}
#SellSpanOne{
	position: absolute;
	top: 7px;
	left: 20px;
	font-size: 20px;
	font-family: ;
	color: #fd3a51;
}
#SellSpanTwo{
	text-align: center;
	color: white;
	font-size: 14px;
	width: 54px;
	height: 20px;
	background: linear-gradient(to right,#ff4e63,#ff6cc9);
	border-radius: 10px;
	position: relative;
	position: absolute;
	top: 12px;
	right: 10px;
}
#SellSpanTwo div{
	position: absolute;
	top: 4px;
	right: 6px;
	color: white;
	width: 8px;
	height: 8px;
	border-top: 3px solid white;
	border-right: 3px solid white;
	transform: rotate(45deg);
}
#SellPic{
	position: relative;
	top: 0px;
	width: 100%;
	margin: 0 auto;
	height: 215px;
	background: white;
	/*border-bottom: 1px solid lightgray;*/
}
#SellPicOne{
	position: relative;
	left: 2%;
	float: left;
	width: 46%;
	height: 205px;
	background: #f9f9f9;
}
#Hot{
	text-align: center;
	color: white;
	width: 50px;
	height: 20px;
	background: #fd3a51;
	position: absolute;
}
#SellPicOne img{
	width: 100%;
	height: 117px;
}
#SellPicOne p{
	position: relative;
	left: 10px;
	top: 10px;
	width: 89%;
	overflow: hidden;
	text-overflow: ellipsis;
	-webkit-line-clamp: 2;
	white-space: nowrap;
}
#Price{
	font-size: 17px;
	color: #fd3a51;
	position: relative;
	top: 15px;
	left: 8px;
}
#SellPicTwo{
	position: relative;
	float: left;
	left: 3.5%;
	width: 48%;
	height: 88px;
	background: #f9f9f9;
}
#SellPicTwo div{
	position: relative;
	top: 23px;
	left: 7px;
}
#SellPicTwo img{
	position: absolute;
	top: 14px;
	right: 6%;
	width: 54px;
	height: 54px;
}
#SellPicTwoPOne{
	position: relative;
	top: 28px;
	left: 5%;
	color: #fd3a51;
	font-weight: 700;
  font-size: 13px;
}
#SellPicTwoPTwo{
	position: relative;
	top: 28px;
	left: 5%;
	font-size: 12px;
}
.SellPicThree{
	float: left;
	position: relative;
	top: 5px;
	left: 3.5%;
	margin-right: 1%;
	width: 23.5%;
	height: 112px;
	background: #f9f9f9;
	display: table;
}
.SellPicThreePOne{
	position: relative;
	top: 6px;
	text-align: center;
	font-weight: 700;
	color: #7ab4fe;
	font-size: 13px;
}
.SellPicThreePTwo{
	font-size: 12px;
  text-align: center;
	position: relative;
	top: 7px;
}
.SellPicThree img{
	width: 50px;
	height: 50px;
	display: table-cell;
	position: relative;
	top: 15px;
	margin: 0 auto;
}
#AroundPlay{
	color: #53ca72;
}
#HotActivities{
	border-top: 1px solid lightgray;
	border-bottom: 0.5px solid lightgray;
	width: 100%;
	height:44px;
	background: white;
	position: relative;
}
#HotActivities img{
	position: relative;
	top: 13px;
	left: 9px;
}
#HotActivitiesDiv{
	text-align: center;
	color: white;
	font-size: 14px;
	width: 115px;
	height: 20px;
	background: linear-gradient(to right,#ff4e63,#ff6cc9);
	border-radius: 10px;
	position: relative;
	position: absolute;
	top: 13px;
	right: 10px;
}
#HotActivitiesDiv div{
	position: absolute;
	top: 4px;
	right: 6px;
	color: white;
	width: 8px;
	height: 8px;
	border-top: 1px solid white;
	border-right: 2px solid white;
	transform: rotate(45deg);
}
#HotPic{
	position: relative;
	/*top: 10px;*/
	width: 100%;
}
#HotPic ul li{
	border-bottom: 0.5px solid whitesmoke;
	text-align: center;
	position: relative;
	width: 100%;
}
#HotPic ul li img{
	border: 0.5px solid whitesmoke;
	width: 49.5%;
	height: auto;
}
#Bottom{
	border-top: 1px solid lightgray;
	border-bottom: 1px solid lightgray;
	top: ;
	position: relative;
	width: 100%;
	height: 60px;
}
#Bottom ul{
	width: 100%;
	margin: 0 auto;
}
#Bottom ul li{
	width: 33.33%;
	height: 60px;
	float: left;
}
#Bottom ul li img{
	display: table-cell;
	position: relative;
	margin: 0 auto;
	margin-top: 10px;
}
#Bottom ul li span{
	font-size: 12px;
	position: relative;
	top: 5px;
	display: block;
	text-align: center;
}
#BottomList{
	position: relative;
	/*top: 10px;*/
	width: 100%;
	height: 70px;
	background: #fafafc;
}
#BottomList ul li{
	font-size: 13px;
	color: gray;
	width: 32.9%;
	margin: 0 auto;
	text-align: center;
	position: relative;
	top: 15px;
	border-right: 2px solid lightgray;
	border-left: 2px solid lightgray;
	height: 20px;
	float: left;
}
#BottomList ul li:nth-child(1){
	position: relative;
	right: -20px;
	border: none;
}
#BottomList ul li:nth-child(3){
	position: relative;
	left: -17px;
	float: left;
	border: none;
}
#BottomList span{
	position: relative;
	text-align: center;
	display: block;
	top: 20px;
	color: gray;
}
.viewSpace{
	width: 100%;
	height: 8px;
	background: #fafafc;
}
</style>
