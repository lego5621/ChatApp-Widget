<script setup>
import { watch } from 'vue';
import { useRoute } from 'vue-router';
import ConstructorFooter from '../components/ConstructorFooter.vue';
import ConstructorHeader from '../components/ConstructorHeader.vue';
import ConstructorBody from '../components/ConstructorBody.vue';
import { useStore } from '../store/state.js';
import Widget from '../components/Widget.vue';

const route = useRoute();
let store = useStore();

store.fetchOrCreateWidget(route.params.id);

watch(
	() => route.params.id,
	async (newId) => {
		store.fetchOrCreateWidget(route.params.id);
	}
);
</script>

<template>
	<div class="card rounded-left-0 wrap">
		<ConstructorHeader />
		<ConstructorBody />
		<ConstructorFooter />
	</div>
</template>

<style scoped>
.wrap {
	padding: 1.5rem;
	min-height: 70vh;
}
</style>
