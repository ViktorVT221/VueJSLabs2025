<template>
  <div class="home-container">
    <h1>Home</h1>

    <nav class="home-nav">
      <router-link to="/login">Login</router-link>
      <router-link to="/register">Register</router-link>
      <router-link to="/admin">Admin</router-link>
    </nav>
  </div>
</template>

<style>
.home-container {
  padding: 40px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto;
}

h1 {
  font-size: 40px;
  margin-bottom: 20px;
  color: #222;
}

.home-nav {
  display: flex;
  gap: 20px;
  font-size: 18px;
}

.home-nav a {
  text-decoration: none;
  color: #4f46e5;
  font-weight: 500;
  transition: 0.2s ease;
}

.home-nav a:hover {
  color: #3b36c8;
  text-decoration: underline;
}
</style>
