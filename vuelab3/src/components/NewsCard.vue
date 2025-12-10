<template>
  <article :class="$style.card">
    <img :src="item.image" :alt="item.title" :class="$style.thumb" />
    <div :class="$style.content">
      <div :class="$style.title">{{ item.title }}</div>
      <div :class="$style.meta">{{ item.date }}</div>
      <div :class="$style.excerpt">{{ item.excerpt }}</div>
      <div :class="$style.btnGroup">
        <router-link :to="`/article/${item.id}`" :class="$style.readBtn">Read</router-link>
      </div>
    </div>
  </article>
</template>

<script setup>
const props = defineProps({ item: Object })
</script>

<!-- no scoped style here; using CSS Modules file -->
<style module>
.card {
  /* будь-які стилі */
}

.thumb {
  width: 100%;
  display: block;
}

.content {
  padding: 16px;
}

.title {
  font-size: 20px;
  font-weight: bold;
}

.meta {
  margin: 8px 0;
  color: #777;
}

.excerpt {
  margin-bottom: 12px;
}

.btnGroup {
  display: flex;
  justify-content: flex-end;
}

.readBtn {
  color: blue;
  text-decoration: underline;
}
</style>
