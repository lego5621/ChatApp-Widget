import { createPinia } from 'pinia';
import { notify } from '@kyvg/vue3-notification';
import router from '../router.js';
import { markRaw } from 'vue';

import { i18n } from '../translator/index.js';

const pinia = createPinia();

pinia.use(({ store }) => {
	store.$notify = notify;
});

pinia.use(({ store }) => {
	store.$router = markRaw(router);
});

pinia.use(({ store }) => {
	store.$i18n = markRaw(i18n);
});

export default pinia;
