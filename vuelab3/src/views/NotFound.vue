<template>
  <div class="notfound">
    <h1>404</h1>
    <p>Page not found</p>
    <router-link to="/">Go Home</router-link>
  </div>
</template>

<script setup></script>

<style scoped>
.notfound { text-align:center; margin-top:80px }
.notfound h1 { font-size:84px; color:var(--accent) }
</style>
