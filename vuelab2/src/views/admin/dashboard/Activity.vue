<script setup>
import { onMounted, onUnmounted } from 'vue'

onMounted(() => console.log("Activity MOUNTED"))
onUnmounted(() => console.log("Activity UNMOUNTED"))
</script>

<template>
  <div>
    <h3>Activity</h3>
    <p>This tab does NOT keep state.</p>
  </div>
</template>

<script>
export default { name: 'Activity' }
</script>
