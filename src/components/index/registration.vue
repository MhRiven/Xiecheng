<template>
<main>
	<div id="Background" v-if="registrationBackgroundShow"></div>
	<!--注册-->
	<header id="registrationBack">
			<router-link to="/login"><div></div></router-link>
			<span>注册&nbsp;&nbsp;1/3</span>
	</header>
	
	<!--注册部分-->
	<section id="registrationPart">
			<p>输入手机号</p>
			<div id="registrationPlace">中国大陆&nbsp;86<div></div></div>
			<input type="text" placeholder="常用手机号" id="registrationNumber">
			<!--<img src="../../assets/53.jpg">-->
			<button @click="registrationVerify">下一步，验证手机号</button>
			
			<!--用户协议-->
			<span id="registrationAgreement">注册即代表您同意我们的
				<span class="registrationService">服务协议</span>
				和
				<span class="registrationService">隐私政策</span>
			</span>
	</section>
	
	
	
	<!--点进页面的弹出框-->
	<section id="registrationAgree" v-if="registrationAlertShow">
		<h3>携程用户注册协议和隐私政策</h3>
		<div id="registrationAgreeFont">
			<p style="width: 93%;left: 3.5%;line-height: 1.7;position: relative;padding-top: 20px;">
				亲爱的用户，在您注册为携程用户的过程中，您需要完成我们的注册流程并通过点击同意的形式在线签署携程《服务协议》和《隐私政策》，
				<b>请您务必仔细阅读、充分理解协议中的条款内容后再点击同意，尤其是加粗字体。</b>
			</p>
			<p style="width: 93%;left: 3.5%;line-height: 1.7;position: relative;">
				<b>【请您注意】如果您不同意上述协议或其中任何条款约定，请您停止注册。如果您按照注册流程提示填写信息、阅读并点击同意上述协议且完成全部注册流程后，即表示您已充分阅读、理解并接受协议的全部内容。</b>
				如果您对以上协内容有疑问，请联系：privacy@ctrip.com。
			</p>
			<p style="width: 93%;left: 3.5%;line-height: 1.7;position: relative;padding-bottom: 25px;">
				<b>点击同意即代表您已阅读并同意携程<span style="text-decoration: underline;color: #2577e3;font-size: 16px;">《服务协议》</span>和<span style="text-decoration: underline;color: #2577e3;font-size: 16px;">《隐私政策》</span>，并同意我们将您的订单信息共享给为完成此订单所必须的第三方合作方。</b>
			</p>
		</div>
		
		<section id="registrationAgreeOrNo">
			<ul>
				<router-link to="/login"><li>不同意</li></router-link>
				<li @click="registrationAgree">同意并继续</li>
			</ul>
		</section>
	</section>
	
	
	
</main>
</template>

<script>
export default{
	data(){
		return{
			registrationAlertShow:true,
			registrationBackgroundShow:true
		};
	},
		methods:{
			registrationAgree(){
				this.registrationAlertShow=!this.registrationAlertShow
				this.registrationBackgroundShow=!this.registrationBackgroundShow
			},
			registrationVerify(){
				alert("手机验证成功~")
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
#Background{
	position: absolute;
	z-index: 1;
	width: 100%;
	height: 100%;
	background: rgba(0,0,0,0.5);
}
#registrationBackground{
	z-index: 998;
	position: fixed;
	width: 100%;
	height: 100%;
}
#registrationBack{
	width: 100%;
	height: 44px;
	/*background: pink;*/
}
#registrationBack div{
	position: absolute;
	top: 17px;
	left: 4%;
	color: black;
	width: 10px;
	height: 10px;
	border-bottom: 2px solid dodgerblue;
	border-left: 2px solid dodgerblue;
	transform: rotate(45deg);
}
#registrationBack span{
	display: block;
	font-size: 17px;
	color: #999;
	line-height: 44px;
	text-align: center;
}
#registrationPart p{
	position: relative;
	top: 50px;
	display: block;
	width: 100%;
	height: 25px;
	font-size: 25px;
	color: #333333;
	line-height: 25px;
	text-align: center;
}
#registrationPlace{
	position: relative;
	top: 100px;
	width: 86%;
	height: 54px;
	margin: 0 auto;
	line-height: 54px;
	font-size: 16px;
	border-bottom: 1px solid lightgray;
}
#registrationPlace div{
	position: absolute;
	top: 22px;
	right: 4%;
	color: black;
	width: 10px;
	height: 10px;
	border-top: 2px solid lightgray;
	border-right: 2px solid lightgray;
	transform: rotate(45deg);
}
#registrationNumber{
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
	background: none;
}
#registrationPart button{
	position: relative;
	width: 86%;
	top: 130px;
	border: none;
	border-radius: 5px;
	left: 7%;
	height: 44px;
	color: white;
	font-size: 17px;
	text-align: center;
	background: #ff9a14;
}
#registrationAgreement{
	font-size: 13px;
	/*z-index: 1;*/
	color: darkgray;
	display: block;
	width: 100%;
	position: relative;
	top: 170px;
	bottom: 0px;
	text-align: center;
}
.registrationService{
	font-size: 13px;
	color: #099fde;
}
#registrationPart img{
	position: absolute;
	top: 242px;
	right: 16%;
}
#registrationAgree{
	z-index: 1;
	border-top: 1px solid whitesmoke;
	position: absolute;
	/*top: 0;*/
	bottom: 0px;
	width: 100%;
	height: 472px;
	background: white;
}
#registrationAgreeFont{
	border-top: 1px solid whitesmoke;
	max-height: 380px;
	overflow-y: scroll;
	/*overflow: hidden;*/
}
#registrationAgreeFont p{
	font-size: 15px;
	padding-bottom: 10px;
}
#registrationAgree h3{
	position: relative;
	text-align: center;
    font-size: 17px;
    font-weight: bold;
    line-height: 48px;
}
#registrationAgreeOrNo{
	position: fixed;
	bottom: 0;
	width: 100%;
}
#registrationAgreeOrNo ul li{
	display: block;
	width: 50%;
	height: 44px;
	line-height: 44px;
	font-size: 16px;
	background: white;
	float: left;
	text-align: center;
}
#registrationAgreeOrNo ul li:nth-child(1){
	color: #666;
	border-top: 0.5px solid lightgray;
}
#registrationAgreeOrNo ul li:nth-child(2){
	color: white;
	background: #FF9913;
}
</style>