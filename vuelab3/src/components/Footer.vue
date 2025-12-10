<template>
  <footer class="site-footer">
    <div>© 2025 NewsMini</div>
    <div class="footer-links">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </div>
  </footer>
</template>

<script setup></script>

<style scoped>
.site-footer {
  height: 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 36px;
  background: var(--surface);
  border-top: 1px solid var(--muted);
  margin-top: 24px;
}
.footer-links a { margin-left: 12px; color: var(--muted); }
</style>
