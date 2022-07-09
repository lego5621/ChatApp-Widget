<script setup>
import { useStore } from '../store/state.js';
import { useIcons } from '../use/useIcons.js';

import Modal from './ConstructorBodyModal.vue';
import { openModal } from 'jenesius-vue-modal';

import { ref } from 'vue';

let store = useStore();
const icons = useIcons();

let formData = ref({
	icon: 'whatsapp',
	link: '',
	tooltip: '',
	backgroundColor: '#43d854',
});
</script>

<template>
	<div class="constructor-wrap">
		<div class="example-viz-widget">
			<p>Подпишись на нас</p>
			<div class="d-flex justify-content-center">
				<div class="d-flex justify-content-start flex-wrap">
					<div
						v-for="(messenger, index) in store.settings.listMessengers"
						:key="
							messenger.link +
							messenger.icon +
							messenger.tooltip +
							messenger.backgroundColor
						"
					>
						<div
							class="icon-viz"
							:style="'background:' + messenger.backgroundColor"
							@click.prevent="openModal(Modal, { SelectItemIndex: index })"
						>
							<component :is="icons[messenger.icon]"></component>
						</div>
					</div>

					<div
						@click.prevent="openModal(Modal)"
						class="icon-viz btn-plus-color"
					>
						<i class="fa fa-plus"></i>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
.constructor-wrap {
	height: 40vh;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	background: aliceblue;
}

.example-viz-widget {
	resize: horizontal;
	background: white;
	padding: 10px;
}

.icon-viz {
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	border-radius: 50%;
	min-width: 48px;
	min-height: 48px;
	margin-right: 14px;
	margin-top: 14px;
}

.btn-plus-color {
	background: transparent;
	border: 1px dashed #01abe6;
	color: #01abe6;
	min-width: 48px;
}

p {
	font-family: 'Inter';
	font-style: normal;
	font-weight: 500;
	font-size: 32px;
	line-height: 39px;
	text-align: center;
	padding-bottom: 33px;
	color: #000000;
	margin: 0;
}
</style>
