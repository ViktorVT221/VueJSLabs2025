
useSeoMeta({
  title: 'Blog',
  description: 'Blog posts',
  ogTitle: 'Blog',
  ogDescription: 'Blog posts'
})

<script setup lang="ts">
const { data, pending, error } = await useFetch('/api/posts')

useSeoMeta({
  title: 'Blog | Nuxt Course',
  description: 'List of articles about Nuxt 4',
  ogTitle: 'Nuxt Course Blog',
  ogDescription: 'Articles about Nuxt 4'
})
</script>

<template>
  <div>
    <h1>Блог</h1>

    <p v-if="pending">Завантаження...</p>
    <p v-else-if="error">Помилка завантаження</p>

    <ul v-else>
      <li v-for="post in data" :key="post.slug">
        <NuxtLink :to="`/blog/${post.slug}`">
          <strong>{{ post.title }}</strong>
        </NuxtLink>
        <p>{{ post.description }}</p>
      </li>
    </ul>
  </div>
</template>
