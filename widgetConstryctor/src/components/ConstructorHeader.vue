<script setup>
import { useStore } from '../store/state.js';
let store = useStore();
</script>

<template>
	<div class="row mb-5">
		<div class="col-4 align-items-center">
			<h5 class="font-weight-semibold text-primary align-items-center">
				{{ $t('name') }}
			</h5>
		</div>
		<div class="col-8">
			<input
				type="text"
				:placeholder="$t('superWidget')"
				class="form-control"
				v-model="store.name"
			/>
		</div>
	</div>
	<div class="d-flex justify-content-between mb-3">
		<h5 class="font-weight-semibold text-primary align-items-center">
			{{ $t('settingsWidget') }}
		</h5>
	</div>
</template>

<style scoped>
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
</style>
