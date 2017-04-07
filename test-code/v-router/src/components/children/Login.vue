<template>
	<div class="login">
		<h3>{{ msg }}</h3>
		<label>
			<span>账号：</span><input type="text"><br>
			<span>密码：</span><input type="text">
		</label>
		<div class="buts">
			<button>登陆</button>
			<button>忘记密码</button>	
		</div>
	</div>
</template>
<script>
	export default {
		name: 'login',
		data () {
			return {
				msg: '登陆界面'
			}
		}
	}
</script>