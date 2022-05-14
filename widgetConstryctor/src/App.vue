<script>
import CreateWidgetBtn from './components/TheCreateWidgetBtn.vue';
import { container } from 'jenesius-vue-modal';

export default {
	components: { CreateWidgetBtn, WidgetContainerModal: container },
	setup() {},
};
</script>

<template>
	<router-view></router-view>
	<CreateWidgetBtn />
	<WidgetContainerModal />
	<notifications position="bottom right" max="2" />
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500;600;700&display=swap');
.modal-container {
	z-index: 9999;
}

.vc-chrome-toggle-btn {
	display: none !important;
}

#app {
	font-family: 'Comfortaa', cursive;
}
</style>
