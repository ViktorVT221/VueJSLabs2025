<template>
  <header class="site-header">
    <div class="container header-inner">
      <div class="logo">TrainX</div>
      <nav class="nav">
        <a href="#features">Переваги</a>
        <a href="#pricing">Тарифи</a>
        <a href="#faq">FAQ</a>
      </nav>
      <div class="actions">
        <button class="btn primary" @click="scrollTo('#pricing')">Почати</button>
      </div>
    </div>
  </header>
</template>

<script setup>
function scrollTo(hash) {
  document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<style scoped>
.site-header { background: white; border-bottom: 1px solid #eee; position: sticky; top:0; z-index:50 }
.header-inner { display:flex; align-items:center; justify-content:space-between; padding:18px 24px }
.logo { font-weight:800; font-size:20px }
.nav a { margin: 0 12px; color:#333; text-decoration:none }
.btn.primary { background:#3b82f6; color:white; padding:8px 14px; border-radius:8px; border:none }
</style>
