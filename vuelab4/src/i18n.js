import { createI18n } from "vue-i18n"
import { useSettingsStore } from "./stores/settings"
import ua from "./locales/ua.json"
import en from "./locales/en.json"

const i18n = createI18n({
  legacy: false,
  locale: "ua",
  messages: { ua, en },
  modifiers: {
    upper: str => str.toUpperCase(),
    cap: str => str.charAt(0).toUpperCase() + str.slice(1)
  }
})

export default i18n
