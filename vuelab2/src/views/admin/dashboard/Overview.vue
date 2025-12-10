<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const counter = ref(0)

onMounted(() => console.log("Overview MOUNTED"))
onUnmounted(() => console.log("Overview UNMOUNTED"))
</script>

<template>
  <div>
    <h3>Overview</h3>
    <p>Counter (saved by KeepAlive): {{ counter }}</p>
    <button @click="counter++">+</button>
  </div>
</template>

<script>
export default { name: 'Overview' }
</script>
