import telegram from '../components/icons/Telegram.vue';
import whatsapp from '../components/icons/WhatsApp.vue';
import viber from '../components/icons/Viber.vue';
import facebook from '../components/icons/FaceBook.vue';
import vk from '../components/icons/Vk.vue';
import instagram from '../components/icons/Instagram.vue';
import pelephone from '../components/icons/Pelephone.vue';
import envelope from '../components/icons/Envelope.vue';
import robot from '../components/icons/Robot.vue';
import pinterest from '../components/icons/Pinterest.vue';
import youtube from '../components/icons/Youtube.vue';
import skype from '../components/icons/Skype.vue';
import tiktok from '../components/icons/Tiktok.vue';
import twitter from '../components/icons/Twitter.vue';

import { markRaw } from 'vue';

export function useIcons() {
	return markRaw({
		whatsapp,
		telegram,
		viber,
		facebook,
		vk,
		skype,
		instagram,
		pinterest,
		tiktok,
		twitter,
		youtube,
		pelephone,
		envelope,
		robot,
	});
}
