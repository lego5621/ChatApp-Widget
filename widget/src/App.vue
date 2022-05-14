<script setup>
import WidgetItem from './components/WidgetItem.vue';
import Widget from './components/icons/Widget.vue';
import Close from './components/icons/Close.vue';
import { ref } from 'vue';
let settings = window.widgetChatApp;
let isShow = ref(false);
</script>

<template>
	<div id="main-div" :class="settings.configWidget.position">
		<div id="main-button" :class="{ open: isShow }" @click="isShow = !isShow">
			<Widget v-if="!isShow" />
			<Close v-if="isShow" />
		</div>
		<WidgetItem
			v-for="(messenger, index) in settings.listMessengers"
			:key="
				messenger.link +
				messenger.icon +
				messenger.tooltip +
				messenger.backgroundColor
			"
			:index="index"
			:isShow="isShow"
			:messenger="messenger"
			:position="settings.configWidget.position"
		/>
	</div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500;600;700&display=swap');
</style>

<style scoped>
#main-div {
	position: fixed;
	z-index: 1000;
}

#main-div #main-button {
	display: flex;
	align-items: center;
	justify-content: center;
	height: 50px;
	width: 50px;
	font-size: 20px;
	color: white;
	cursor: pointer;
	box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
	border-radius: 50%;
	-webkit-border-radius: 50%;
	-moz-border-radius: 50%;
	-ms-border-radius: 50%;
	-o-border-radius: 50%;

	background: #2fb644;
}

#main-div #main-button i {
	text-align: center;
}

#main-button.open ~ a {
	opacity: 1;
	transition: 0.4s all cubic-bezier(0, 0.01, 0, 1.27);
	-webkit-transition: 0.4s all cubic-bezier(0, 0.01, 0, 1.27);
	-moz-transition: 0.4s all cubic-bezier(0, 0.01, 0, 1.27);
	-ms-transition: 0.4s all cubic-bezier(0, 0.01, 0, 1.27);
	-o-transition: 0.4s all cubic-bezier(0, 0.01, 0, 1.27);
}

.open {
	animation-iteration-count: 1;
}

/* анимация пульсирования */
#main-button svg {
	z-index: 999999;
}

#main-button:after,
#main-button:before {
	content: '';
	position: absolute;
	left: 50%;
	bottom: 0;
	top: 0;
	background-color: #00cc78;
	border-radius: 100%;
	-webkit-animation: pulse 2s infinite ease-in-out;
	animation: pulse 2s infinite ease-in-out;
}
#main-button:before {
	margin: auto 0 auto -32.5px;
	height: 65px;
	width: 65px;
	opacity: 0.5;
	-webkit-animation-delay: 0.6s;
	animation-delay: 0.6s;
}
#main-button:after {
	margin: auto 0 auto -46px;
	height: 92px;
	width: 92px;
	-webkit-animation-delay: 0.2s;
	animation-delay: 0.2s;
	opacity: 0.25;
}

@-webkit-keyframes pulse {
	0% {
		transform: scale(0);
	}
	50% {
		transform: scale(1);
	}
	100% {
		transform: scale(1);
		opacity: 0;
	}
}

@keyframes pulse {
	0% {
		transform: scale(0);
	}
	50% {
		transform: scale(1);
	}
	100% {
		transform: scale(1);
		opacity: 0;
	}
}

.bottom-right {
	right: 25px;
	bottom: 25px;
}

.bottom-left {
	left: 25px;
	bottom: 25px;
}

.top-right {
	right: 25px;
	top: 25px;
}

.top-left {
	left: 25px;
	top: 25px;
}
</style>
