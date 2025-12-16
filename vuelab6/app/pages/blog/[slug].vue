
useSeoMeta({
  title: 'Post',
  description: 'Blog post',
  ogTitle: 'Post',
  ogDescription: 'Blog post'
})

<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()

const { data, pending, error } = await useFetch(
  () => `/api/posts/${route.params.slug}`
)

useSeoMeta({
  title: () => data.value?.title ?? 'Post',
  description: () => data.value?.content ?? '',
  ogTitle: () => data.value?.title ?? 'Post',
  ogDescription: () => data.value?.content ?? ''
})
</script>

<template>
  <div>
    <p v-if="pending">Завантаження...</p>
    <p v-else-if="error">Статтю не знайдено</p>

    <article v-else>
      <h1>{{ data.title }}</h1>
      <p>{{ data.content }}</p>
    </article>
  </div>
</template>
