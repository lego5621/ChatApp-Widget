<script setup>
import ConstructorBodySkeleton from '../components/ConstructorBodySkeleton.vue';
import { useStore } from '../store/state.js';
import Widget from '../components/Widget.vue';

let store = useStore();

let arrowList = [
	{
		id: 'A',
		position: 'top-left',
		style: 'transform: rotate(45deg)',
	},
	{
		id: 'B',
		position: 'top-right',
		style: 'transform: rotate(130deg)',
	},
	{
		id: 'C',
		position: 'bottom-left',
		style: 'transform: rotate(310deg)',
	},
	{
		id: 'D',
		position: 'bottom-right',
		style: 'transform: rotate(230deg)',
	},
];
</script>

<template>
	<div class="constructor-wrap">
		<div
			v-for="arrow in arrowList"
			:key="arrow.id"
			:id="arrow.id"
			class="btn-widget-nav d-flex align-items-center justify-content-center"
			@click="store.settings.position = arrow.position"
			:class="store.settings.position == arrow.position ? 'd-none' : ''"
		>
			<i class="fa fa-arrow-left" :style="arrow.style"></i>
		</div>
		<ConstructorBodySkeleton id="P" />
		<Widget />
	</div>
</template>

<style scoped>
.constructor-wrap {
	display: grid;
	height: 70vh;
	width: 100%;
	background: aliceblue;
	position: relative;
	border-radius: 10px;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	grid-template-rows: 1fr 1fr 1fr;
	grid-template-areas:
		'A P P B'
		'. P P .'
		'C P P D';
}

#A {
	grid-area: A;
	justify-self: start;
}
#B {
	grid-area: B;
	justify-self: end;
}
#C {
	grid-area: C;
	justify-self: start;
	align-self: end;
}
#D {
	grid-area: D;
	justify-self: end;
	align-self: end;
}

#P {
	grid-area: P;
	justify-self: center;
	align-self: center;
}

.btn-widget-nav {
	background: rgb(219 238 255);
	width: 100px;
	height: 100px;
	color: white;
	border-radius: 10px;
	cursor: pointer;
}

.d-none {
	display: none !important;
}
</style>
