<template>
  <div class="cart-container">

    <h1 class="cart-title">{{ $t("cart") }}</h1>

    <div class="cart-total">
      {{ $t("total") }}: {{ total }}$
    </div>

    <!-- Якщо кошик пустий -->
    <div v-if="cart.length === 0" class="empty-cart">
      {{ $t("emptyCart") }}
    </div>

    <!-- Список товарів -->
    <div v-else>
      <div v-for="(item, index) in cart" :key="item.id || index" class="cart-item">

        <div class="cart-item-info">
          <span class="cart-item-title">{{ item.title }}</span>
          <span class="cart-item-price">{{ item.price }}$</span>
        </div>

        <div class="cart-item-controls">
          <button class="quantity-btn" @click="increase(item)">+</button>
          <span>{{ item.quantity }}</span>
          <button class="quantity-btn" @click="decrease(item)">-</button>

          <button class="remove-btn" @click="removeItem(item)">x</button>
        </div>

      </div>
    </div>

  </div>
</template>

<script>
import { useCartStore } from "../stores/cart.js"
import { computed } from "vue"

export default {
  setup() {
    const cartStore = useCartStore()

    const cart = computed(() => cartStore.items)   
    const total = computed(() => cartStore.total)  

    return {
      cart,
      total,
      increase: cartStore.increase,
      decrease: cartStore.decrease,
      removeItem: cartStore.removeItem,
    }
  },
}
</script>
