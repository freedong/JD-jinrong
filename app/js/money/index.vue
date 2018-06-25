<template lang="html">
	<!-- 公共组件之头部栏 -->
	<Header/>
	<!-- 理财页面组件之轮播图 -->
	<!-- <Slider/> -->
</template>
<script>
	import Header from "../public/header.vue"
	import Navbar from "../public/navbar.vue"
	import Footer from "../public/footer.vue"
	// import Slider from "./mslider.vue"
	export default {
		components:{
			Header,
			Navbar,
			Footer,
			// Slider,
		}
	}
</script>
<style lang="scss" module>
	
</style>