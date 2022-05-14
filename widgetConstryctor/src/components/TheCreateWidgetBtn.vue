<template>
	<Teleport to="#teleportTarget">
		<router-link
			:to="{ name: 'constructor' }"
			type="button"
			class="btn btn btn-primary-100 text-primary btn-float mr-3"
			style="min-width: 110px"
		>
			<i class="icon-plus3"></i><span>{{ $t('add') }}</span>
		</router-link>
	</Teleport>
</template>
