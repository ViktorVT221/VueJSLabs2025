<template>
  <div>
    <Header @toggle-theme="toggleTheme" :currentTheme="theme" />

    <!-- Transition around router-view -->
    <main class="page-container">
      <router-view v-slot="{ Component }">
        <transition name="page" mode="out-in">
          <component :is="Component" :key="$route.fullPath" />
        </transition>
      </router-view>
    </main>

    <Footer />
  </div>
</template>

<script setup>
import { ref, provide, onMounted } from "vue";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

const theme = ref("light");

function applyTheme(t) {
  document.documentElement.setAttribute("data-theme", t);
}

onMounted(() => {
  // load theme from localStorage
  const saved = localStorage.getItem("lab3_theme");
  if (saved === "dark" || saved === "light") {
    theme.value = saved;
  }
  applyTheme(theme.value);
});

// provide theme to components if they want it
provide("theme", theme);

function toggleTheme() {
  theme.value = theme.value === "light" ? "dark" : "light";
  applyTheme(theme.value);
  localStorage.setItem("lab3_theme", theme.value);
}
</script>

<style>
/* Transition classes for RouterView */
.page-enter-from,
.page-leave-to {
  opacity: 0;
  transform: translateY(12px);
}
.page-enter-active,
.page-leave-active {
  transition: all 300ms ease;
}
.page-enter-to,
.page-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.page-container {
  padding: 36px;
  min-height: calc(100vh - 120px);
}
</style>
