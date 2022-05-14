<script setup>
import Card from '../components/TheCard.vue';
import { onMounted } from 'vue';
import { useStore } from '../store/state';

let store = useStore();
store.fetchWidgets();
</script>

<template>
	<Card v-for="widget in store.listWidget" :key="widget.id" :widget="widget" />
	<div v-if="!store.listWidget.length">{{ $t('ifNotWidget') }}</div>
</template>
