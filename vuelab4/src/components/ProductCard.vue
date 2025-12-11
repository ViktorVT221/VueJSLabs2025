<template>
  <div class="card">
    <h3>{{ product.title }}</h3>
    <p>{{ product.price }}$</p>
    <button @click="add(product)">{{ t('addToCart') }}</button>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n"
import { useCartStore } from "../stores/cart.js"

const props = defineProps({ product: Object })

const { t } = useI18n()
const cart = useCartStore()
const { add } = cart
</script>
