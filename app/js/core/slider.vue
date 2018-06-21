<template lang="html">
	<section :class="[cname]">
		<swiper :options="options" :not-next-tick="options.notNextTick">
			<swiper-slide v-for="item in items" :key="item.href">
				<router-link :to="{name:item.href}">
					<img :src="item.src" alt="">
				</router-link>
			</swiper-slide>
		</swiper>
	</section>
</template>
<script>
	import { swiper, swiperSlide } from "vue-awesome-swiper"
	export default {
		components: {
			swiper,
			swiperSlide,
		},
		props: {
			 options: {
			 	type: Object,
			 	default() {
			 		return {
			 			autoplay: true,
			 			loop:true,
			 			pagination:{
			 				el: ".swiper-pagination",
			 			},
			 			notNextTick:false,
			 		}
			 	},
			 },
			 items: {
			 	type: Array,
			 	default() {
			 		// [{href:'',src:''}]
			 		return []
			 	}
			 }
		},
	}
</script>
<style lang="scss">
// ~这个符号可以找到路径
	@import "~swiper/dist/css/swiper.css";
</style>