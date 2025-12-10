<script setup>
const props = defineProps({
  items: Array
})
</script>

<template>
  <table border="1" cellpadding="5">
    <thead>
      <tr><th>ID</th><th>Title</th><th>Value</th></tr>
    </thead>
    <tbody>
      <template v-for="item in items" :key="item.id">
        <slot name="row" :item="item">
          <tr>
            <td>{{ item.id }}</td>
            <td>{{ item.title }}</td>
            <td>{{ item.value }}</td>
          </tr>
        </slot>
      </template>
    </tbody>
  </table>
</template>
