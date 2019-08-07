<template>
<main>
	<ul>
		<ul>
			<li v-for="(item,index) in list">
				<img :src="item.src" alt=""/>
				<p>{{item.title}}</p>
				<p>{{item.price}}</p>
			</li>
		</ul>
	</ul>
</main>
</template>
	
<script>
	export default{
		data(){
			return{
				list:[]
			}
		},
	
	mounted(){
		var _this=this;
		this.$http.get('./data/data.json')
		.then(function(res){
			console.log(_this)
			_this.list=res.data.list
		})
		.catch(()=>{
			
		})
		.finally((f)=>{
			console.log('请求结束~')
		})
	}
}
</script>
	
<style>
</style>