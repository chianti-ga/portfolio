import App from './App.vue';
import './assets/main.css';

import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';
import {createApp} from "vue";

const app = createApp(App);

app.use(PrimeVue, {
    theme: {
        preset: Aura,
        options: {
            prefix: 'p',
            darkModeSelector: '.p-app-dark',
            cssLayer: false
        }
    }
});

app.mount('#app');