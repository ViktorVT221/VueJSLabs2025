<script setup>
defineModel({
  prop: 'modelValue',
  event: 'update:modelValue'
})

const props = defineProps({
  modelValue: String,
  label: String,
  type: { type: String, default: 'text' }
})

const emit = defineEmits(['update:modelValue'])
</script>

<template>
  <label>
    <div v-if="label">{{ label }}</div>
    <input :type="type" :value="modelValue"
           @input="emit('update:modelValue', $event.target.value)" />
  </label>
</template>
