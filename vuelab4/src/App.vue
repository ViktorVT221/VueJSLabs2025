<template>
  <header>
    <LanguageSwitcher />
    <nav>
      <router-link to="/">Products</router-link> |
      <router-link to="/cart">Cart</router-link> |
      <router-link to="/profile">Profile</router-link>
    </nav>
  </header>

  <main>
    <router-view />
  </main>
</template>

<script setup>
import LanguageSwitcher from "./components/LanguageSwitcher.vue"
</script>

<style>
nav a {
  margin-right: 10px;
}
</style>
