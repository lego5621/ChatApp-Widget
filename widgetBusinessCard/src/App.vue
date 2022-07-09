<script setup>
import QRCodeStyling from 'qr-code-styling';
import ArrowVue from './components/icons/Arrow.vue';

import { useIcons } from './use/useIcons.js';
import { ref, onMounted } from 'vue';

const open = ref(false);

let config = window.widgetChatApp;

const icons = useIcons();

const qrBlok = ref(null);
const linkPC = ref(null);

let openModal = (link, event) => {
	while (qrBlok.value.firstChild) {
		qrBlok.value.removeChild(qrBlok.value.firstChild);
	}

	linkPC.value.setAttribute('href', link.link);

	let targetIcons = event.currentTarget.getElementsByTagName('svg')[0];

	targetIcons.setAttribute('fill', link.backgroundColor);

	let serializedSVG = new XMLSerializer().serializeToString(targetIcons);

	// let base64Data = window.btoa(serializedSVG);

	let image = 'data:image/svg+xml;base64,' + window.btoa(serializedSVG);

	let qrCode = new QRCodeStyling({
		width: 300,
		height: 300,
		type: 'svg',
		data: link.link,
		image,
		dotsOptions: {
			color: link.backgroundColor,
			type: 'classy',
		},
		imageOptions: {
			margin: 1,
			imageSize: 0.4,
		},
	});
	qrCode.append(qrBlok.value);

	open.value = true;
};
</script>

<template>
	<div class="winget-chatApp">
		<p>{{ config.configWidget.titleBusinessCard }}</p>
		<div class="wrap-winget-chatApp">
			<div
				v-for="link in config.listMessengers"
				:key="link"
				class="icon-viz"
				:style="'background:' + link.backgroundColor"
				@click="openModal(link, $event)"
			>
				<component :is="icons[link.icon]"></component>
			</div>
		</div>
	</div>

	<Teleport to="body">
		<Transition>
			<div class="modal-chatApp-wrap" v-show="open" @click.self="open = false">
				<div class="modal-chatApp">
					<div class="modal-chatApp-exit-btn">
						<span @click="open = false"> Закрыть </span>
					</div>
					<div ref="qrBlok" style="margin: 0 auto">sdf</div>
					<div class="modal-chatApp-description">
						QR-Code для авторизации на мобильном устройстве
					</div>
					<a class="modal-chatApp-footer" href="#" ref="linkPC" target="_blank">
						<div>Продолжить на ПК</div>
						<ArrowVue />
					</a>
				</div>
			</div>
		</Transition>
	</Teleport>
</template>

<style scoped>
.wrap-winget-chatApp {
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	padding-bottom: 10px;
}

.icon-viz {
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	border-radius: 50%;
	min-width: 48px;
	min-height: 48px;
	margin: 0 7px;
	margin-bottom: 14px;
}

p {
	font-family: 'Inter';
	font-style: normal;
	font-weight: 500;
	font-size: 32px;
	line-height: 39px;
	text-align: center;
	margin: 0;
	padding: 0;

	margin-top: 21px;
	margin-bottom: 33px;

	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
}

p::first-letter {
	text-transform: uppercase;
}
</style>

<style>
/* @font-face {
	font-family: 'Inter', sans-serif;
	font-weight: 500;
	src: url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700&display=swap');
} */

.modal-chatApp {
	font-family: 'Inter' !important;
	display: flex !important;
	flex-direction: column !important;
	width: 320px !important;
	background: white !important;
	padding: 10px !important;
	border-radius: 20px !important;
	box-sizing: border-box !important;
}

.modal-chatApp-wrap {
	position: fixed !important;
	top: 0% !important;
	left: 0% !important;
	min-height: 100vh !important;
	min-width: 100% !important;
	background-color: rgba(93, 93, 93, 0.7) !important;
	z-index: 999 !important;
	display: flex;
	align-items: center;
	justify-content: center;
}

.v-enter-active,
.v-leave-active {
	transition: opacity 0.5s ease !important;
}

.v-enter-from,
.v-leave-to {
	opacity: 0 !important;
}

.modal-chatApp-description {
	margin-bottom: 100px !important;
	padding: 0 10px !important;
	margin-top: 10px !important;
}

.modal-chatApp-exit-btn {
	text-align: right !important;
	margin-bottom: 14px !important;
}

.modal-chatApp-exit-btn span {
	cursor: pointer !important;
}

.modal-chatApp-footer {
	padding: 0 10px !important;
	margin-bottom: 19px !important;
	font-family: 'Inter' !important;
	font-style: normal !important;
	font-weight: 500 !important;
	font-size: 15px !important;
	line-height: 18px !important;
	color: #252b36 !important;
	cursor: pointer !important;
	display: flex !important;
	justify-content: space-between !important;
	text-decoration: none !important;
}
</style>
