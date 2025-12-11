<template>
  <section class="hero container">
    <div class="hero-left">
      <h1>Персональні тренувальні програми, що працюють</h1>
      <p>
        Отримай індивідуальну програму на основі твоїх цілей — сила,
        витривалість чи схуднення.
      </p>
      <div class="hero-ctas">
        <button class="btn primary" @click="scrollTo('#pricing')">
          Обрати план
        </button>
        <button class="btn ghost" @click="copyPromo">
          Скопіювати промокод
        </button>
      </div>
    </div>
    <div class="hero-right">
      <div class="hero-card">
        <img
          src="/Users/admin/vuelab5/Снимок экрана 2025-12-11 в 05.32.21.png"
          alt="Hero Man"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { useToast } from "primevue/usetoast";
const toast = useToast();
const promo = "FIT10";

async function copyPromo() {
  const ok = (await window.$copy)
    ? window.$copy(promo)
    : navigator.clipboard
        .writeText(promo)
        .then(() => true)
        .catch(() => false);
  if (ok)
    toast.add({
      severity: "success",
      summary: "Скопійовано",
      detail: "Промокод FIT10 скопійовано",
      life: 2000,
    });
  else
    toast.add({
      severity: "error",
      summary: "Помилка",
      detail: "Не вдалося скопіювати",
      life: 2000,
    });
}

function scrollTo(hash) {
  document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
}
</script>

<style scoped>
.hero-img {
  width: 150px;   /* або 150px, або 30% — як хочеш */
  height: auto;
}
.hero {
  display: flex;
  gap: 30px;
  padding: 60px 24px;
  align-items: center;
}
.hero-left {
  flex: 1;
}
.hero-right {
  flex: 1;
  display: flex;
  justify-content: center;
}
.hero-card {
  width: 320px;
  height: 320px;
  background: #f3f4f6;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.btn.ghost {
  background: transparent;
  border: 1px solid #cbd5e1;
  padding: 8px 12px;
  border-radius: 8px;
}
.hero-ctas {
  margin-top: 18px;
  display: flex;
  gap: 12px;
}
</style>
