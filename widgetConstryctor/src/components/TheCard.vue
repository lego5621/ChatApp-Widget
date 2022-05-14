<script setup>
import telegram from './icons/Telegram.vue';
import whatsapp from './icons/WhatsApp.vue';
import viber from './icons/Viber.vue';
import { markRaw } from 'vue';
import { useStore } from '../store/state.js';
import { useIcons } from '../use/useIcons.js';

const icons = useIcons();

const props = defineProps({
	widget: Object,
});

let store = useStore();
</script>

<template>
	<div class="card bg-light">
		<div class="card-header">
			<h5 class="card-title">{{ widget.name }}</h5>
		</div>
		<div class="card-body">
			<ul class="list-inline list-inline-condensed mb-0 mt-2 mt-sm-0">
				<button
					type="button"
					class="btn mr-2 mt-2 text-color-white"
					style="height: 44px"
					:style="'background:' + messenger.backgroundColor"
					data-toggle="tooltip"
					:title="messenger.tooltip"
					v-for="messenger in widget.settings.listMessengers"
					:key="messenger"
				>
					<component :is="icons[messenger.icon]" width="20px"></component>
				</button>
			</ul>
		</div>
		<div
			class="card-footer d-sm-flex justify-content-sm-between align-items-sm-center"
		>
			<router-link
				:to="{ name: 'constructor', params: { id: widget.id } }"
				type="button"
				class="btn btn-primary mr-2 fs-12-px"
			>
				{{ $t('edit') }}
			</router-link>

			<button
				type="button"
				class="btn btn-danger mr-2 fs-12-px"
				@click="store.deleteWidget(widget.id)"
			>
				<i class="fa fa-trash mr-2"></i> {{ $t('remove') }}
			</button>
		</div>
	</div>
</template>

<style scoped>
.text-color-white {
	color: white !important;
}
</style>
