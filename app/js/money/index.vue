<template lang="html">
	<div>
		<!-- 公共组件之头部栏 -->
		<Header/>
		<!-- 理财页面组件之轮播图 -->
		<Slider/>
		<!-- 理财页面组件之神卷满 -->
		<Sjm/>
		<!-- 理财页面组件之理财精选 -->
		<Finance/>
		<!-- 理财页面组件之理财专享 -->
		<Lczx/>
		<!-- 理财页面组件之年度理财 -->
		<Money/>
		<!-- 理财页面组件之京东智投 -->
		<Jdzt/>
		<!-- 公共组件之底部栏 -->
		<Footer cname="mfooter"/>
		<!-- 公共组件之导航栏 -->
		<Navbar/>
	</div>
</template>
<script>
	import Header from "../public/header.vue"
	import Navbar from "../public/navbar.vue"
	import Footer from "../public/footer.vue"
	import Slider from "./mslider.vue"
	import Sjm from "./sjm.vue"
	import Finance from "./finance.vue"
	import Lczx from "./lczx.vue"
	import Money from "./money.vue"
	import Jdzt from "./jdzt.vue"
	export default {
		components:{
			Header,
			Navbar,
			Footer,
			Slider,
			Sjm,
			Finance,
			Lczx,
			Money,
			Jdzt,
		}
	}
</script>
<style lang="scss">
	.mfooter{
		margin-top: 0px!important;
		ul{
			li:first-child{
				display: none;
			}
		}
	}
</style>