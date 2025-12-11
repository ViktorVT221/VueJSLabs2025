import { defineStore } from "pinia"
import i18n from "../i18n"

export const useSettingsStore = defineStore("settings", {
  state: () => ({
    locale: "ua"
  }),

  actions: {
    setLocale(lang) {
      this.locale = lang
      i18n.global.locale.value = lang
    }
  },

  persist: {
    key: "settingsStore",
    pick: ["locale"]
  }
})
