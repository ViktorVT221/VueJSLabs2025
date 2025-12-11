import { createI18n } from 'vue-i18n'
import ua from './locales/ua.json'
import en from './locales/en.json'
import { useSettingsStore } from './stores/settings'

const messages = { ua, en }

const i18n = createI18n({
  legacy: false,
  locale: 'ua',
  messages,
  globalInjection: true,
  modifiers: {
    uppercase: (val) => String(val).toUpperCase()
  }
})

// sync with settings store (will be set in main App mount)
export default {
  install(app) {
    app.use(i18n)
    // after pinia is available
    // We'll set locale in App.vue mounted using settings store
  }
}
