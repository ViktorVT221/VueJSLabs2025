<template>
  <div class="card">
    <h1>About Us</h1>
    <p style="margin-top:12px">
      This mini news site demonstrates Vue SFC styling: scoped styles, CSS Modules, Transition, Teleport modal and theme switch.
    </p>

    <div style="margin-top:18px">
      <AdSlot image="https://picsum.photos/seed/ad-about/900/200" @open-ad="openAd" />
    </div>

    <ModalAd v-model:open="modalOpen" title="Sponsor" text="Ad on about page" image="https://picsum.photos/seed/ad-big3/900/400" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import AdSlot from '../components/AdSlot.vue'
import ModalAd from '../components/ModalAd.vue'
const modalOpen = ref(false)
function openAd(){ modalOpen.value = true }
</script>

<style scoped>
h1 { font-size: 26px; color:var(--text) }
</style>
