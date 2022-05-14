<script setup>
import Popper from 'vue3-popper';
import { Chrome } from '@ckpack/vue-color';
import { computed } from 'vue';

// let colors = '#194D33A8';

const props = defineProps({
	modelValue: String,
});

const emit = defineEmits(['update:modelValue']);

const color = computed({
	get() {
		return props.modelValue;
	},
	set(newValue) {
		emit('update:modelValue', newValue.hex);
	},
});
</script>

<template>
	<Popper>
		<div class="color-block d-flex justify-content-center align-items-center">
			<i class="fa fa-eyedropper" aria-hidden="true"></i>
		</div>
		<template #content>
			<Chrome v-model="color" />
		</template>
	</Popper>
</template>

<style scoped>
.color-block {
	width: 30px;
	height: 30px;
	background: white;
	border-radius: 5px;
	cursor: pointer;
	transition: 0.5s;
	color: #767676;
}

.color-block:hover {
	transform: scale(1.1);
}
</style>
