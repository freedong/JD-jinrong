<template lang="html">
	<div>
		<!-- 公共组件之头部栏 -->
		<Header/>
		<!-- 白条页面组件之轮播图 -->
		<Slider/>
		<!-- 白条页面组件之白条福利 -->
		<Welfare/>
		<!-- 白条页面组件之更多服务 -->
		<Service/>
		<!-- 公共组件之底部栏 -->
		<Footer/>
		<!-- 公共组件之导航栏 -->
		<Navbar/>
	</div>
</template>
<script>
	import Header from "../public/header.vue"
	import Footer from "../public/footer.vue"
	import Navbar from "../public/navbar.vue"
	import Slider from "./islider.vue"
	import Welfare from "./welfare.vue"
	import Service from "./service.vue"
	export default {
		components: {
			Header,
			Footer,
			Navbar,
			Slider,
			Welfare,
			Service,
		}
	}
</script>
<style lang="scss">
	
</style>