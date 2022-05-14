<script setup>
import { useStore } from '../store/state.js';
import { useRoute } from 'vue-router';

const route = useRoute();
let store = useStore();
</script>

<template>
	<div class="row mt-3">
		<div
			class="col-10 text-center text-primary"
			v-if="store.urlSettings.length"
		>
			{{ $t('pasteScript') }} &lt;/body&gt;
		</div>
		<div class="col-10 d-flex rounded-lg" style="background: aliceblue">
			<div class="d-flex w-100 d-none" v-if="store.urlSettings.length">
				<code
					class="d-flex justify-content-center w-100 align-items-center flex-column text-center text-primary"
					style="background: aliceblue"
				>
					<div>
						&lt;script src="<span>{{ store.urlSettings }}</span
						>" defer &gt;&lt;/script&gt;
					</div>
					<div>
						&lt;script src="<span>{{ store.urlWidgetCode }}</span
						>" defer &gt;&lt;/script&gt;
					</div>
				</code>
			</div>
		</div>
		<div class="col-2 justify-content-end d-flex">
			<button
				class="btn btn-primary-100 text-primary btn-float"
				@click="store.saveWidget(route.params.id)"
				style="min-width: 110px"
			>
				<i class="icon-plus3"></i><span>{{ $t('save') }}</span>
			</button>
		</div>
	</div>
</template>
