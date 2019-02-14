<template>
	<div>
		<!-- 顶部栏 -->
		<div ref=header>
			<home-header></home-header>
		</div>
		<div class=container>
			<!-- 左侧侧边栏 -->
			<div ref=sider>
				<home-sider></home-sider>
			</div>
			<!-- 右侧主要内容 -->
			<div class=content
			    ref="content">
				<router-view></router-view>
			</div>
		</div>
		<!-- <fade-down-modal :show="true">
			<div style="width:400px;height:400px;background:#fff;">
			</div>
		</fade-down-modal> -->
	</div>
</template>

<script>
import HomeHeader from './homeHeader'
import HomeSider from './homeSider'
// import FadeDownModal from '_c/modals/fadeDown'

import {loginSubmit} from '@/requests/user'

export default {
	name: 'home',
	components: {
		HomeHeader,
		HomeSider
		// FadeDownModal
	},
	mounted() {
		this.$domFn.addAnimateClass(this.$refs.header, 'animated fadeInDownBig')
		this.$domFn.addAnimateClass(this.$refs.content, 'animated fadeInRightBig')

		// var ws = new WebSocket("ws://localhost:8001/msg")

		// ws.onopen = function (evt) {
		// 	console.log("Connection open ...")
		// 	ws.send("Hello WebSockets!")
		// }

		// ws.onmessage = function (evt) {
		// 	console.log("Received Message: " + evt.data)
		// }

		// ws.onclose = function (evt) {
		// 	console.log("Connection closed.")

		// }

		// setTimeout(()=>{
		// 	ws.send("这是测试的信息")
		// },5000)

		// 关闭
		// ws.close()

	},
	beforeRouteEnter:((to, from, next) => {
		next((vm)=>{
			vm.submit({
				username:'1234',
				password:'abc#123'
			})
		})
		
	}),
	methods:{
		async submit(obj){
			let res =await loginSubmit(obj)
		}
	}
}
</script>

<style lang="scss" scoped>
.container {
    position: absolute;
    left: 0;
    right: 0;
    top: 60px;
    bottom: 0;
}
.content {
    position: absolute;
    left: 60px;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 80;
}
</style>

