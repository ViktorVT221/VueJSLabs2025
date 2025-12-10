<template>
  <aside class="sidebar">
    <div class="menu">
      <slot name="menu"></slot>
    </div>

    <div class="user">
      <slot name="user"></slot>
    </div>
  </aside>
</template>

<style>
.sidebar {
  width: 200px;
  border-right: 1px solid #ccc;
  padding: 10px;
}
</style>
