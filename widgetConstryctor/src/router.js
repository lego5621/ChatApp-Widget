import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
	{ path: '/', component: () => import('./page/Index.vue') },
	{
		path: '/constructor/:id?',
		name: 'constructor',
		component: () => import('./page/Constructor.vue'),
	},
];

const router = createRouter({
	history: createWebHashHistory(),
	routes,
});

export default router;
