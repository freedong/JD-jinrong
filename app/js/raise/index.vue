<template lang="html">
	<div>
		<!-- 公共组件之顶部栏 -->
		<Header/>
		<!-- 众筹页面组件之头条上下轮播 -->
		<Slider/>
		<!-- 众筹页面组件之每日签到 -->
		<Daily/>
		<!-- 众筹页面组件之in货推荐 -->
		<In/>
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
	import Slider from "./rslider.vue"
	import Daily from "./daily.vue"
	import In from "./in.vue"
	export default {
		components: {
			Header,
			Footer,
			Navbar,
			Slider,
			Daily,
			In,
		}
	}
</script>
<style lang="scss" module>
	
</style>