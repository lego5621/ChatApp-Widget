<script setup>
import { closeModal } from 'jenesius-vue-modal';
import { ref, toRaw, markRaw } from 'vue';
import ColorBlock from './ConstructorBodyModalColorBlock.vue';
import ColorPicker from './ConstructorBodyModalColorPicker.vue';

import { useStore } from '../store/state.js';
import { useIcons } from '../use/useIcons.js';

let store = useStore();
const icons = useIcons();

const props = defineProps({ SelectItemIndex: Number });

const colors = [
	'#ed5353',
	'#ffa154',
	'#ffe16b',
	'#9bdb4d',
	'#43d6b5',
	'#64baff',
	'#cd9ef7',
	'#f4679d',
	'#8a715e',
	'#667885',
	'#d4d4d4',
];

let formData = ref({
	icon: 'whatsapp',
	link: '',
	tooltip: '',
	backgroundColor: '#43d854',
});

if (props.SelectItemIndex >= 0) {
	// убираем реактивность
	formData.value = { ...store.settings.listMessengers[props.SelectItemIndex] };
}

let saveWidgetItem = () => {
	if (props.SelectItemIndex >= 0) {
		store.settings.listMessengers[props.SelectItemIndex] = {
			// убираем реактивность
			...formData.value,
		};
	} else {
		store.settings.listMessengers.push({
			// убираем реактивность
			...formData.value,
		});
	}
	closeModal();
};

let deleteWidgetItem = () => {
	store.settings.listMessengers.splice(props.SelectItemIndex, 1);
	closeModal();
};
</script>

<template>
	<div class="card modalWidget">
		<div class="modalWidget-close" @click="closeModal">
			<i class="fas fa-times"></i>
		</div>
		<div class="card-body">
			<h5 class="mt-3">{{ $t('icon') }}</h5>
			<div class="d-flex flex-wrap justify-content-between">
				<span
					v-for="(icon, nameIcon) in icons"
					:key="icon"
					:class="
						nameIcon == formData.icon
							? 'select-icon ml-1 mr-1 mb-2'
							: 'ml-1 mr-1  mb-2'
					"
					@click="formData.icon = nameIcon"
				>
					<component :is="icon"></component>
				</span>
			</div>

			<h5 class="mt-3">{{ $t('color') }}</h5>
			<div class="d-flex justify-content-around">
				<ColorBlock
					v-for="color in colors"
					:key="color"
					:color="color"
					@click="formData.backgroundColor = color"
				/>
				<ColorPicker v-model="formData.backgroundColor" />
			</div>

			<div class="d-flex"></div>
			<h5 class="mt-3">{{ $t('link') }}</h5>
			<div>
				<input
					type="text"
					class="form-control"
					placeholder="https://wa.me/7495xxxxxxx"
					maxlength="300"
					v-model="formData.link"
				/>
			</div>
			<h5 class="mt-3">{{ $t('tooltip') }}</h5>
			<div>
				<input
					type="text"
					class="form-control"
					placeholder="Поддержка в WhatsApp"
					maxlength="30"
					v-model="formData.tooltip"
				/>
			</div>
			<div class="d-flex justify-content-between">
				<button
					type="button"
					class="btn btn-primary mt-4"
					@click="saveWidgetItem"
				>
					{{ $t('save') }}
				</button>

				<button
					type="button"
					class="btn btn-danger mt-4"
					@click="deleteWidgetItem"
					v-show="props.SelectItemIndex >= 0"
				>
					{{ $t('remove') }}
				</button>
			</div>
		</div>
	</div>
</template>

<style scoped>
.modalWidget {
	margin: 0;
	position: absolute;
	top: 50%;
	left: 50%;
	margin-right: -50%;
	transform: translate(-50%, -50%);
	width: 500px;
	border-radius: 10px;
}

.modalWidget-close {
	position: absolute;
	top: 15px;
	right: 15px;
	border-radius: 20px;
	cursor: pointer;
	background: white;
	width: 25px;
	height: 25px;
	display: flex;
	align-items: center;
	justify-content: center;
}

.modalWidget-close i {
	text-align: center;
}

.celect-icons {
	box-shadow: none;
	filter: grayscale(0%);
}

.error-message {
	padding: 5px;
	border-radius: 5px;
	margin: 0.5rem auto;
	text-align: center;
}

.form-control {
	font-weight: 400;
	line-height: 1.5715;
	color: #333;
	background-color: #fff;
	background-clip: padding-box;
	border: 1px solid #ddd;
	border-radius: 0.25rem;
	transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

span {
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	height: 50px;
	width: 50px;
	font-size: 20px;
	text-decoration: none;
	color: #fff;
	box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
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
	background: #848484;
}

span:hover {
	transform: scale(1.05);
}

.select-icon {
	background: v-bind('formData.backgroundColor');
}

i {
	text-align: center;
}
</style>
