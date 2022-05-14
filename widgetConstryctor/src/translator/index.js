import { createI18n } from 'vue-i18n';
import messages from './translator.js';

let i18nInstance = createI18n({
	locale: document.documentElement.lang,
	fallbackLocale: 'en',
	messages,
});

export default i18nInstance;

export const i18n = i18nInstance.global;
