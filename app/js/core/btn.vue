<template lang="html">
	<!-- 动态改变class -->
	<div :class="[btnClass,cname]">
		<!-- 插槽  从父组件分发内容 -->
		<slot/>
	</div>
</template>

<script>
	export default{
		// 父组件向子组件传入数据用props
		// 子组件向父组件传入数据用事件
		props:{
			cname:{
				type:String,
				default:"",
			},
		},
		data() {
			return {
				btnClass:"btn",
			}
		},
	}
</script>

<style lang="scss">
@import "../../css/element.scss";
.btn{
	@include btn;
}
</style>