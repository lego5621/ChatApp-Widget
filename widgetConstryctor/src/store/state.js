import { defineStore } from "pinia";
import actions from "./actions.js";

export const useStore = defineStore("main", {
    state: () => ({
        listWidget: [],
        name: "",
        settings: {
            position: "bottom-right",
            delayTime: 0,
            listMessengers: [
                {
                    icon: "whatsapp",
                    link: "https://api.whatsapp.com/send/?phone=79675553103&text&app_absent=0",
                    tooltip: "whatsapp for business",
                    backgroundColor: "#25D366",
                },
            ],
        },
        urlWidgetCode: "https://dev2cabinet.chatapp.online/",
        urlSettings: "",
    }),

    actions,
});
