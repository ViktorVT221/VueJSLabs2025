<template>
  <div>
    <h1>Latest News</h1>

    <div style="display:flex; gap:20px; margin-top:18px;">
      <div style="flex:1">
        <div style="display:flex; flex-direction:column; gap:14px">
          <NewsCard v-for="n in newsList" :key="n.id" :item="n" />
        </div>
      </div>

      <aside style="width:300px; display:flex; flex-direction:column; gap:18px;">
        <AdSlot image="https://picsum.photos/seed/ad1/600/300" @open-ad="openAd" />
        <AdSlot image="https://picsum.photos/seed/ad2/600/300" @open-ad="openAd" />
      </aside>
    </div>

    <ModalAd v-model:open="modalOpen" title="Sponsored" text="This is a sample ad" image="https://picsum.photos/seed/ad-big/900/400" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { news } from '../data/news'
import NewsCard from '../components/NewsCard.vue'
import AdSlot from '../components/AdSlot.vue'
import ModalAd from '../components/ModalAd.vue'

const newsList = news
const modalOpen = ref(false)
function openAd() { modalOpen.value = true }
</script>

<style scoped>
h1 { font-size: 28px; margin-bottom: 8px; color: var(--text); }
</style>
