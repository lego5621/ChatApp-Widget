import api from '../api.js';

export default {
	async fetchWidgets() {
		// let data = await api.fetchData('/widgetsChat/ajax/list', 'GET');

		// this.listWidget = data.data.items;
		this.listWidget = [
			{
				id: 14,
				created_at: '2022-04-21T11:46:01.000000Z',
				updated_at: '2022-04-21T11:46:01.000000Z',
				uuid: 'ce04ffa8-a904-453d-bb39-c719780bea3b',
				name: '98-98080-',
				user_id: 4570,
				settings: {
					position: 'top-left',
					delayTime: 0,
					listMessengers: [
						{
							icon: 'viber',
							link: 'https://api.whatsapp.com/send/?phone=79675553103&text&app_absent=0',
							tooltip: 'Viber for business',
							backgroundColor: '#793baa',
						},
						{
							icon: 'telegram',
							link: 'ывФЫВ',
							tooltip: 'Viber for business',
							backgroundColor: '#017AB1',
						},
						{
							icon: 'telegram',
							link: 'ывФЫВ',
							tooltip: 'Telegram for business',
							backgroundColor: '#017AB1',
						},
					],
				},
				file: 'https://s3.wasabisys.com/devcabinet.chatapp.online/widgetsFiles/4570/2022/04/21/ce04ffa8-a904-453d-bb39-c719780bea3b.js',
			},
			{
				id: 1,
				created_at: '2022-04-21T11:46:01.000000Z',
				updated_at: '2022-04-21T11:46:01.000000Z',
				uuid: 'ce04ffa8-a904-453d-bb39-c719780bea3b',
				name: 'oi[poi[po',
				user_id: 4570,
				settings: {
					position: 'top-left',
					typeWidget: 'business-card',
					delayTime: 0,
					listMessengers: [
						{
							icon: 'viber',
							link: 'https://api.whatsapp.com/send/?phone=79675553103&text&app_absent=0',
							tooltip: 'Viber for business',
							backgroundColor: '#793baa',
						},
						{
							icon: 'telegram',
							link: 'ывФЫВ',
							tooltip: 'Viber for business',
							backgroundColor: '#017AB1',
						},
					],
				},
				file: 'https://s3.wasabisys.com/devcabinet.chatapp.online/widgetsFiles/4570/2022/04/21/ce04ffa8-a904-453d-bb39-c719780bea3b.js',
			},
		];
	},

	async fetchOrCreateWidget(id) {
		if (id) {
			// let data = await api.fetchData(`/widgetsChat/ajax/list/${id}`, 'GET');

			// this.settings = data.data.settings;
			// this.name = data.data.name;
			// this.urlSettings = data.data.file;

			this.name = 'Этот виджет уже создан';
			this.urlSettings =
				'https://s3.wasabisys.com/devcabinet.chatapp.online/widgetsFiles/4570/2022/04/21/ce04ffa8-a904-453d-bb39-c719780bea3b.js';

			this.settings = {
				position: 'top-left',
				typeWidget: 'business-card',
				delayTime: 0,
				listMessengers: [
					{
						icon: 'viber',
						link: 'https://api.whatsapp.com/send/?phone=79675553103&text&app_absent=0',
						tooltip: 'Viber for business',
						backgroundColor: '#793baa',
					},
					{
						icon: 'telegram',
						link: 'ывФЫВ',
						tooltip: 'Viber for business',
						backgroundColor: '#017AB1',
					},
				],
			};
		} else {
			this.name = '';
			this.urlSettings = '';
			this.settings = {
				position: 'bottom-right',
				delayTime: 0,
				listMessengers: [
					{
						icon: 'whatsapp',
						link: 'https://api.whatsapp.com/send/?phone=79675553103&text&app_absent=0',
						tooltip: 'Whatsapp for business',
						backgroundColor: '#25D366',
					},
				],
			};
		}
	},

	async deleteWidget(id) {
		let index = this.listWidget.findIndex((widget) => {
			widget.id == id;
		});

		this.listWidget.splice(index, 1);

		this.$notify({
			type: 'success',
			title: 'Okey',
			text: 'Виджет удален',
		});

		await api.fetchData(`/widgetsChat/ajax/delete/${id}`, 'DELETE');
	},

	async saveWidget(id) {
		let widget = {
			name: this.name,
			settings: this.settings,
		};

		if (!this.name) {
			this.$notify({
				type: 'error',
				title: 'Error',
				text: this.$i18n.t('alert.error.ifNoteName'),
			});
			return;
		}

		if (!this.settings.listMessengers.length) {
			this.$notify({
				type: 'error',
				title: 'Error',
				text: this.$i18n.t('alert.error.ifNotLength'),
			});
			return;
		}

		if (id) {
			await api.fetchData(`/widgetsChat/ajax/update/${id}`, 'PATCH', {
				name: this.name,
				settings: this.settings,
			});

			this.$notify({
				type: 'success',
				title: 'Okey',
				text: this.$i18n.t('alert.success.ifChenge'),
			});

			return;
		}

		let data = await api.fetchData(`/widgetsChat/ajax/store`, 'POST', {
			name: this.name,
			settings: this.settings,
		});

		this.urlSettings = data.data.fileUrl;

		this.$router.push({
			name: 'constructor',
			params: {
				id: data.data.id,
			},
			replace: true,
		});

		this.$notify({
			type: 'success',
			title: 'Okey',
			text: this.$i18n.t('alert.success.ifSave'),
		});
	},
};
