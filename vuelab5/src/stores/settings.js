import { defineStore } from 'pinia'

export const useSettingsStore = defineStore('settings', {
  state: () => ({ locale: 'ua' }),
  actions: {
    setLocale(l) { this.locale = l }
  },
  persist: {
    key: 'lab5-settings',
    paths: ['locale']
  }
})
