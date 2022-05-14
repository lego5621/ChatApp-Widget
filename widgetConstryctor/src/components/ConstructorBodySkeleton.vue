<template>
	<article class="skeleton">
		<div class="image"></div>
		<p class="line"></p>
		<p class="line"></p>
		<p class="line"></p>
		<p class="line"></p>
		<p class="line"></p>

		<div class="image mt-4"></div>
		<p class="line"></p>
		<p class="line"></p>
		<p class="line"></p>
	</article>
</template>

<style scoped>
* {
	border-radius: 20px;
}
.skeleton {
	width: 100%;
	max-width: 600px;
	margin: 0 auto;
}

.skeleton .image,
.skeleton .line {
	background: rgb(219 238 255);
}

.skeleton .image {
	height: 150px;
	margin-bottom: 10px;
}

.skeleton .line {
	height: 16px;
	margin-bottom: 10px;
}

.skeleton .line:first-child {
	width: 50%;
}

.skeleton .line:last-child {
	width: 80%;
}
</style>
