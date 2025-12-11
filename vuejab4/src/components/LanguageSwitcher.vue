<template>
  <select v-model="locale" @change="setLocale(locale)">
    <option value="ua">UA</option>
    <option value="en">EN</option>
  </select>
</template>

<script setup>
import { useSettingsStore } from "../stores/settings"
import { storeToRefs } from "pinia"

const settings = useSettingsStore()
const { locale } = storeToRefs(settings)
const { setLocale } = settings
</script>
