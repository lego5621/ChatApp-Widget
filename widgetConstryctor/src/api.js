import { notify } from '@kyvg/vue3-notification';
import { i18n } from './translator/index.js';

let api = {
	baseUrl: 'https://dev2cabinet.chatapp.online',
	async fetchData(url, method, data) {
		let body = {
			method: method,
			headers: {
				'Content-Type': 'application/json;charset=utf-8',
			},
		};

		if (data) body.body = JSON.stringify(data);

		let response = await fetch(`${this.baseUrl}${url}`, body).catch((error) => {
			notify({
				type: 'error',
				title: 'Error',
				text: i18n.t('alert.error.ifInternetProblem'),
			});
		});

		if (!response.ok) {
			notify({
				type: 'error',
				title: 'Error',
				text: i18n.t('alert.error.ifInternetProblem'),
			});
		}

		return await response.json();
	},
};

export default api;
