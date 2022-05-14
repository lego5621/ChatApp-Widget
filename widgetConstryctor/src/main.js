import { createApp, markRaw } from 'vue';
import App from './App.vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import Notifications from '@kyvg/vue3-notification';

import pinia from './store/pinia.js';
import router from './router.js';
import i18nInstance from './translator/index.js';

const app = createApp(App);

app
	.use(Notifications)
	.use(pinia)
	.use(router)
	.use(i18nInstance)
	.mount('#widgetConstructor');
