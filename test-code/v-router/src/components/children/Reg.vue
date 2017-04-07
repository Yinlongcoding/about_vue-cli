<template>
	<div class="reg">
		<h3>{{ msg }}</h3>
		<label>
			<span>注册账号：</span><input type="text"><br>
			<span>登录密码：</span><input type="text"><br>
			<span>绑定邮箱：</span><input type="text"><br>
			<span>安全问题：</span><input type="text">
		</label>
		<div>
		<button>注册</button>
		<button>重置</button>		
		</div>
	</div>
</template>
<script>
	export default {
		name: 'login',
		data () {
			return {
				msg: '注册界面'
			}
		}
	}
</script>
<style>
	.login,
	.reg {
		width: 30%;	
		display: flex;
		flex-direction: column;	
		margin: 0 auto;	
	}
	.login button,
	.reg button {
		width: 30%;
	}
</style>