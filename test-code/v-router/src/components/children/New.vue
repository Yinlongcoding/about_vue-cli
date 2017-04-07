<template>
	<section class="news">
		<div v-for="things in titles">
			<h4>{{ things.title }}</h4>
			<p>{{ things.content }}</p>
		</div>
	</section>
</template>

<script>
	export default {
		name: 'new',
		data () {
			return {
				titles: [
					{
						title: '白宫炸了！',
						content: '据外媒报道，特朗普在白宫玩二踢脚，导致白宫被炸毁！'
					},
					{  
						title: '金字塔倒了！',
						content: '据外媒报道，三大文明之埃及文明的象征-金字塔，今日倒塌，从内部走出一个殇之木乃伊-阿木木！'
					},
					{
						title: '比赛而斜塔直了!',
						content: '比赛儿斜塔最近腰间盘突出，直了直老腰。'
					},
					{
						title: '牛顿棺材板压不住了！',
						content: '近期在天朝，总是出现各种作死党叫嚣着要上天！牛顿的棺材板终于压不住了，跑啊。。。'
					},
					{
						title: '碰瓷的又来了！',
						content: '在天朝，由这样一群毒瘤，她们以碰瓷为生，碰到豪车可以一辈子，大多年龄在50以上，请广大网友小心！'
					}
				]
			}
		}
	}
</script>