<template>
  <div class="products-container">
    <h1 class="products-title">{{ $t("products") }}</h1>

    <div class="products-grid">
      <div
        v-for="product in products"
        :key="product.id"
        class="product-card"
      >
        <div>
          <div class="product-title">{{ product.title }}</div>
          <div class="product-price">{{ product.price }}$</div>
        </div>

        <button class="add-btn" @click="add(product)">
          {{ $t("add") }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useProductsStore } from "../stores/products.js"
import { useCartStore } from "../stores/cart.js"

const productsStore = useProductsStore()
const cartStore = useCartStore()

const products = productsStore.products
const add = cartStore.add
</script>