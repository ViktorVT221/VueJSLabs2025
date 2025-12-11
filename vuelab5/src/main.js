import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'

import PrimeVue from 'primevue/config'
import ToastService from 'primevue/toastservice'

// ✔ ПРАВИЛЬНЕ підключення теми Aura (без .css)
import Aura from '@primevue/themes/aura';

import CopyToClipboardPlugin from './plugins/copyToClipboard'
import i18n from './i18n'
import './styles.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

// ✔ Правильне підключення PrimeVue + теми Aura
app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },
})
import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';

app.component('Accordion', Accordion);
app.component('AccordionTab', AccordionTab);

app.use(ToastService)
app.use(CopyToClipboardPlugin)
app.use(i18n)

app.mount('#app')
