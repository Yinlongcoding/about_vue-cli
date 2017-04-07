<template>
	<header class="header">
		<router-link to="/home/login">登陆</router-link>
		<router-link to="/home/reg">注册</router-link>
		<div class="content">
			<router-view></router-view>
		</div>	
	</header>
</template>
<script>
	export default {
		name: 'home'
	}
</script>