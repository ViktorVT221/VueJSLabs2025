<template>
  <div class="ad-slot" @click="$emit('open-ad')">
    <img :src="image" :alt="alt" />
  </div>
</template>

<script setup>
const props = defineProps({
  image: { type: String, required: true },
  alt: { type: String, default: 'Ad' }
})
</script>

<style scoped>
.ad-slot {
  cursor: pointer;
  border-radius: 10px;
  overflow: hidden;
  display: block;
  box-shadow: 0 6px 18px rgba(0,0,0,0.06);
}
.ad-slot img { width: 100%; display:block; height: 150px; object-fit:cover; }
</style>
