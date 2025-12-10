<template>
  <div class="auth-wrapper">
    <header><slot name="header"></slot></header>
    <main><slot></slot></main>
    <footer><slot name="footer"></slot></footer>
  </div>
</template>

<style>
.auth-wrapper {
  padding: 20px;
  max-width: 400px;
  margin: 30px auto;
  border: 1px solid #ddd;
}
</style>
