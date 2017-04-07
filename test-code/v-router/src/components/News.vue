<template>
	<div class="news">
		<h2>{{ msg }}</h2>
		<router-link to="/news/new">点击查看</router-link>
		<div>
			<router-view></router-view>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'news',
		data () {
			return {
				msg: '奇葩新闻报道'
			}
		}
	}
</script>