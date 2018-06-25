<template lang="html">
    <div>
    	<!-- 公共组件之头部栏 -->
        <Header/>
        <!-- 首页组件之轮播图和五个导航入口 -->
        <HSlider/>
        <!-- 首页组件之新手特权 -->
        <Novice/>
        <!-- 首页组件之极速借贷 -->
		<Borrow/>
		<!-- 首页组件之理财精选 -->
		<Money/>
		<!-- 首页组件之新品推荐轮播 -->
		<Product/>
		<!-- 首页组件之 -->
		<Life/>
		<!-- 公共组件之底部栏 -->
		<Footer/>
    </div>
</template>

<script>
import Header from "../public/header.vue"
import HSlider from "./hslider.vue"
import Novice from "./novice.vue"
import Borrow from "./borrow.vue"
import Money from "./money.vue"
import Product from "./product.vue"
import Life from "./life.vue"
import Footer from "../public/footer.vue"
export default {
	components: {
		Header,
		HSlider,
		Novice,
		Borrow,
		Money,
		Product,
		Life,
		Footer,
	},
}
</script>

<style lang="scss" module>
  @import '../../css/reset.scss';
</style>
