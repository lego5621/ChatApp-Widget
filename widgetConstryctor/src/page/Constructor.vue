<script setup>
import { watch, ref } from 'vue';
import { useRoute } from 'vue-router';
import ConstructorFooter from '../components/ConstructorFooter.vue';
import ConstructorHeader from '../components/ConstructorHeader.vue';
import ConstructorBody from '../components/ConstructorBody.vue';
import ConstructorBodyBusinCard from '../components/ConstructorBodyBusinCard.vue';

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

const currentBody = ref('ConstructorBody');

if (store.settings.typeWidget === 'business-card') {
	currentBody.value = 'ConstructorBodyBusinCard';
}

const body = {
	ConstructorBody,
	ConstructorBodyBusinCard,
};

let chengeType = (type) => {
	if (type === 'ConstructorBody') {
		store.settings.typeWidget === '';
	}
	if (type === 'ConstructorBodyBusinCard') {
		store.settings.typeWidget === 'business-card';
	}
	currentBody.value = type;
};
</script>

<template>
	<div class="card rounded-left-0 wrap">
		<ConstructorHeader />
		<div class="mb-3">
			<button
				type="button"
				class="btn btn-primary mr-3"
				@click="chengeType('ConstructorBody')"
			>
				Виджет конструктор
			</button>
			<button
				type="button"
				class="btn btn-primary"
				@click="chengeType('ConstructorBodyBusinCard')"
			>
				Визитка конструктор
			</button>
		</div>
		<component :is="body[currentBody]"></component>
		<ConstructorFooter />
	</div>
</template>

<style scoped>
.wrap {
	padding: 1.5rem;
	min-height: 70vh;
}
</style>
