<template lang="html">
    <div>
        <Header/>
        <HSlider/>
        <Novice/>
    </div>
</template>

<script>
import Header from "../public/header.vue"
import HSlider from "./hslider.vue"
import Novice from "./novice.vue"
export default {
	components: {
		Header,
		HSlider,
		Novice,
	},
}
</script>

<style lang="scss" module>
  @import '../../css/reset.scss';
</style>
