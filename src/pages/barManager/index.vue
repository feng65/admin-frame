<template>
	<div>
		<!-- 侧边栏 -->
		<sider-list1 ref=side></sider-list1>
		<!-- 右侧主要内容 -->
		<div class=home-content
		    ref="content">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
// 左侧侧边栏
import SiderList1 from './siderList1'

export default {
	name: 'barManager',
	components: {
		SiderList1
	},
	beforeRouteEnter (to, from, next) {
		next(vm=>{
			vm.$refs.side.init()
		})
	}
}
</script>

<style lang="scss" scoped>
.home-content{
	position: absolute;
	min-width: 940px;
	left:200px;
	right:0;
	top:0;
	bottom: 0;
	overflow: auto;
}
</style>



