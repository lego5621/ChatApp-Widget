import { createApp } from 'vue';
import App from './App.vue';

let widget = document.createElement('div');

let idStr = `wrapWidgetChatApp${Math.floor(Math.random() * 10000) + 1}`;

widget.setAttribute('id', idStr);
widget.innerHTML = `
<div>
    <div id="WidgetChatApp${idStr}"></div>
</div>`;

document.body.append(widget);

createApp(App).mount(`#WidgetChatApp${idStr}`);
