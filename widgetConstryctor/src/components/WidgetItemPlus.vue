<script setup>
import { ref, computed, markRaw } from 'vue';
import Modal from './ConstructorBodyModal.vue';
import { openModal } from 'jenesius-vue-modal';
import { useStore } from '../store/state.js';
let store = useStore();

const props = defineProps({
	isShow: Boolean,
	index: Number,
	messenger: Object,
	position: String,
});

const distanceWidgetItem = computed(() => {
	if (props.isShow) {
		let distance = props.index * 60 + 60;
		return distance + 'px';
	} else {
		return 60 + 'px';
	}
});

</script>

<template>
	<a
		href="#"
		class="btn-plus-color"
		:class="'icons-' + props.position"
		@click.prevent="openModal(Modal)"
		v-show="store.settings.listMessengers.length <= 8"
	>
		<i class="fa fa-plus"></i>
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
	opacity: 1;
	text-decoration: none;
	color: #fff;
	background-color: #fff;
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
}

a i {
	text-align: center;
}

.btn-plus-color {
	background: transparent;
	border: 1px dashed #01abe6;
	color: #01abe6;
}

.icons-bottom-right,
.icons-bottom-left {
	bottom: v-bind('distanceWidgetItem');
}

.icons-top-right,
.icons-top-left {
	top: v-bind('distanceWidgetItem');
}
</style>
