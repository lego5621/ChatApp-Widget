<script setup>
const props = defineProps({
	color: String,
});
</script>

<template>
	<div class="color-block"></div>
</template>

<style scoped>
.color-block {
	width: 30px;
	height: 30px;
	background: v-bind('props.color');
	border-radius: 5px;
	cursor: pointer;
	transition: 0.5s;
}

.color-block:hover {
	transform: scale(1.1);
}
</style>
