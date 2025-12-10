<template>
  <div>
    <div style="display:flex; gap:20px; align-items:flex-start;">
      <div style="flex:1">
        <h1>{{ article.title }}</h1>
        <div class="meta">{{ article.date }}</div>
        <img :src="article.image" alt="" style="width:100%; max-height:420px; object-fit:cover; border-radius:8px; margin-top:12px" />
        <div style="margin-top:18px; white-space:pre-wrap;">{{ article.content }}</div>
      </div>

      <aside style="width:300px; display:flex; flex-direction:column; gap:18px;">
        <AdSlot image="https://picsum.photos/seed/ad3/600/300" @open-ad="openAd" />
      </aside>
    </div>

    <ModalAd v-model:open="modalOpen" title="Sponsored" text="Ad content for this article" image="https://picsum.photos/seed/ad-big2/900/400" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { news } from '../data/news'
import AdSlot from '../components/AdSlot.vue'
import ModalAd from '../components/ModalAd.vue'

const route = useRoute()
const router = useRouter()
const id = Number(route.params.id)
const article = news.find(n => n.id === id) || { title: 'Not found', date:'', image:'', content: 'Article not found' }
const modalOpen = ref(false)
function openAd(){ modalOpen.value = true }
</script>

<style scoped>
.meta { color: var(--muted); margin-top:8px }
h1 { font-size: 28px; color:var(--text) }
</style>
