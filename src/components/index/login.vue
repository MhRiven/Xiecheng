<template>
<main>
		<!--头部返回箭头和注册-->
		<header id="head">
			<router-link to="/my"><div></div></router-link>
			<router-link to="/registration"><span>注册</span></router-link>
		</header>
		
		<!--登录-->
		<section id="login">
			<span id="loginspan1">携程账号登录</span>
			<input type="text" placeholder="国内手机号/用户名/邮箱/卡号" id="username">
			<input type="text" placeholder="登录密码" id="password">
			<span id="loginspan2">找回密码</span>
			<button @click="loginLogin">登录</button>
			<div>
				<span id="phone">手机快捷登录</span>
				<span id="out">境外手机登录</span>
			</div>
		</section>
		
		<!--空白补充位置-->
		<div id="space"></div>
		
		<!--底部三个图标-->
		<section id="three">
			<ul>
				<li @click="loginApp"><img src="../../assets/50.jpg"></li>
				<li @click="loginApp"><img src="../../assets/51.jpg"></li>
				<li @click="loginApp"><img src="../../assets/52.jpg"></li>
			</ul>
		</section>
		
		<!--用户协议-->
		<span id="loginbottomspan">登录即代表您同意我们的
			<span id="service">服务协议</span>
			和
			<span id="privacy">隐私政策</span>
		</span>
</main>
</template>

<script>
export default{
	data(){
		return{
			
		};
	},
		methods:{
			loginApp(){
				alert('即将前往快速登录页面~')
			},
			loginLogin(){
				alert('登陆成功~');
			}
		}
	}
</script>

<style scoped>
#head{
	width: 100%;
	height: 44px;
	/*background: pink;*/
}
#head div{
	position: absolute;
	top: 17px;
	left: 4%;
	color: black;
	width: 10px;
	height: 10px;
	border-bottom: 2px solid black;
	border-left: 2px solid black;
	transform: rotate(45deg);
}
#head span{
	display: block;
	position: absolute;
	top: 12px;
	right: 3%;
	font-size: 15px;
	color: #099fde;
}
#login{
	position: relative;
	width: 100%;
	height: 389px;
	/*background: lightgreen;*/
}
#judge1{
	position: absolute;
	right: 8%;
	top: 143px;
	/*display: none;*/
}
#judge2{
	position: absolute;
	top: 199px;
	right: 35%;
	/*display: none;*/
}
#loginspan1{
	position: relative;
	top: 50px;
	display: block;
	width: 100%;
	font-size: 25px;
	color: #333333;
	line-height: 25px;
	font-weight: normal;
	text-align: center;
}
#username{
	position: relative;
	left: 7%;
	top: 100px;
	outline-style: none;
	border: 0px;
	border-bottom: 1px solid lightgray;
	width: 86%;
	height: 54px;
	font-size: 17px;
	line-height: 24px;
}
#password{
	position: relative;
	left: 7%;
	top: 100px;
	outline-style: none;
	border: 0px;
	border-bottom: 1px solid lightgray;
	width: 86%;
	height: 54px;
	font-size: 17px;
	line-height: 24px;
}
input::-webkit-input-placeholder{
	color: darkgray;
}
#loginspan2{
	position: absolute;
	top: 195px;
	right: 7%;
	color: #099FDE;
	display: block;
	text-align: center;
	width: 80px;
	height: 28px;
	font-size: 13px;
	line-height: 28px;
}
#login button{
	position: relative;
	width: 90%;
	top: 130px;
	border: none;
	border-radius: 5px;
	left: 5%;
	height: 44px;
	color: white;
	font-size: 17px;
	text-align: center;
	background: #ff9a14;
}
#login div{
	position: relative;
	top: 150px;
	width: 100%;
	height: 17px;
	/*background: green;*/
}
#phone{
	position: absolute;
	left: 5%;
	color: dimgray;
	font-size: 15px;
	width: 90px;
	height: 17px;
	display: block;
}
#out{
	position: absolute;
	right: 5%;
	color: dimgray;
	font-size: 15px;
	width: 90px;
	height: 17px;
	display: block;
}
#space{
	width: 100%;
	height: 300px;
	/*background: green;*/
}
#three{
	position: relative;
	bottom: 20px;
	width: 90%;
	height: 39px;
	/*background: darkgray;*/
	margin: 0 auto;
}
#three ul li{
	display: table;
	float: left;
	width: 33.333%;
	height: 39px;
}
#three img{
	display: table-cell;
	margin: 0 auto;
	width: 39px;
	height: 39px;
}
#loginbottomspan{
	font-size: 12px;
	color: darkgray;
	display: block;
	width: 100%;
	position: relative;
	bottom: 0px;
	text-align: center;
}
#service,#privacy{
	font-size: 12px;
	color: #099fde;
}
</style>