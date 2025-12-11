<template>
  <section id="pricing" class="container pricing">
    <h2>Тарифи</h2>

    <div class="plans">
      <div v-for="p in plans" :key="p.id" class="plan-card">
        <h3>{{ p.name }}</h3>
        <p class="price">{{ p.price }} грн</p>
        <ul>
          <li v-for="f in p.features" :key="f">{{ f }}</li>
        </ul>
        <button class="btn primary" @click="selectPlan(p)">Обрати план</button>
      </div>
    </div>

    <div class="calculator">
      <label>Кількість тижнів</label>
      <input type="number" v-model.number="weeks" min="1" />
      <div>Орієнтовна вартість: <strong>{{ total }} грн</strong></div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { usePricingStore } from '@/stores/pricing'
import { useToast } from 'primevue/usetoast'
const toast = useToast()

const pricing = usePricingStore()
const plans = pricing.plans

const weeks = ref(4)
const selected = ref(plans[0])

function selectPlan(p) {
  selected.value = p
  toast.add({severity:'info', summary:'Вибрано', detail:`План ${p.name}`, life:1500})
}

const total = computed(() => selected.value.price * weeks.value)
</script>

<style scoped>
.pricing { padding:40px 24px }
.plans { display:flex; gap:18px; margin-bottom:20px }
.plan-card { background:white; padding:18px; border-radius:12px; box-shadow:0 6px 18px rgba(0,0,0,0.06); width:280px }
.calculator { margin-top:20px; padding:12px; background:#fafafa; border-radius:10px }
</style>
