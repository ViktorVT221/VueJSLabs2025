<template>
  <header class="site-header">
    <div class="header-left">
      <div class="logo">NewsMini</div>
      <nav class="nav">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
      </nav>
    </div>

    <div class="header-right">
      <button class="theme-toggle" @click="$emit('toggle-theme')">
        {{ currentTheme === 'dark' ? '🌙 Dark' : '☀️ Light' }}
      </button>
    </div>
  </header>
</template>

<script setup>
import { inject, computed } from 'vue'
const props = defineProps({ currentTheme: { type: String, default: 'light' } })
</script>

<style scoped>
.site-header {
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 36px;
  background: var(--surface);
  border-bottom: 1px solid var(--muted);
  box-shadow: 0 2px 8px rgba(0,0,0,0.03);
}
.logo {
  font-weight: 700;
  font-size: 20px;
  color: var(--text);
}
.nav {
  margin-left: 18px;
  display: inline-flex;
  gap: 12px;
}
.nav a {
  color: var(--muted);
  padding: 8px 10px;
  border-radius: 8px;
}
.nav a.router-link-active {
  color: var(--text);
  background: var(--accent-soft);
}
.header-right { display:flex; align-items:center; gap:12px; }
.theme-toggle {
  padding: 8px 12px;
  border-radius: 8px;
  border: 1px solid var(--muted);
  background: transparent;
  cursor: pointer;
}
</style>
