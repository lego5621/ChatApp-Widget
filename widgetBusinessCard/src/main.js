import { createApp } from 'vue';
import App from './App.vue';

createApp(App).mount(`#${window.widgetChatApp.configWidget.idBlok}`);

let link = document.createElement('link');
link.rel = 'stylesheet';
link.href =
	'https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700&display=swap';
document.head.appendChild(link);
