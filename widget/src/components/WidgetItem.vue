<script setup>
import { computed } from 'vue';
import { useIcons } from '../use/useIcons.js';
const icons = useIcons();

const props = defineProps({
	isShow: Boolean,
	index: Number,
	messenger: Object,
	position: String,
});

const positionWidgetItem = computed(() => {
	if (props.isShow) {
		let a = props.index * 60 + 60;
		return a + 'px';
	} else {
		return 0 + 'px';
	}
});

let tooltip = computed(() => {
	if (props.messenger.tooltip) return props.messenger.tooltip;
	return '';
});
</script>

<template>
	<a
		:href="props.messenger.link"
		:class="'icons-' + props.position"
		class="tooltip-wrap"
		target="_blank"
	>
		<component :is="icons[props.messenger.icon]"></component>
		<span
			class="tooltip-text"
			v-show="tooltip.length > 0"
			:class="'tooltip-' + props.position"
		>
			{{ tooltip }}
		</span>
	</a>
</template>

<style scoped>
a {
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	position: absolute;
	right: 0;
	z-index: -1;
	height: 50px;
	width: 50px;
	font-size: 20px;
	opacity: 0;
	text-decoration: none;
	color: #fff;
	background-color: #fff;
	box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
	border-radius: 50%;
	-webkit-border-radius: 50%;
	-moz-border-radius: 50%;
	-ms-border-radius: 50%;
	-o-border-radius: 50%;
	transition: 0.2s all linear;
	-webkit-transition: 0.2s all linear;
	-moz-transition: 0.2s all linear;
	-ms-transition: 0.2s all linear;
	-o-transition: 0.2s all linear;

	background: v-bind('props.messenger.backgroundColor');
}

a i {
	text-align: center;
}

.icons-bottom-right,
.icons-bottom-left {
	bottom: v-bind('positionWidgetItem');
}

.icons-top-right,
.icons-top-left {
	top: v-bind('positionWidgetItem');
}

.tooltip-text {
	visibility: hidden;
	background-color: v-bind('props.messenger.backgroundColor');
	color: #fff;
	white-space: nowrap;
	font-size: 14px;
	border-radius: 10px;
	padding: 7px 10px;
	position: absolute;
	z-index: 1;
	font-family: 'Comfortaa', cursive;
}

.tooltip-wrap:hover .tooltip-text {
	visibility: visible;
}

.tooltip-top-left,
.tooltip-bottom-left {
	left: 120%;
}

.tooltip-top-right,
.tooltip-bottom-right {
	right: 120%;
}
</style>
