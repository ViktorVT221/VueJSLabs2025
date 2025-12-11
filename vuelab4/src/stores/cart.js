import { defineStore } from "pinia"

export const useCartStore = defineStore("cart", {
  state: () => ({
    items: []
  }),

  getters: {
    total: state =>
      state.items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  },

  actions: {
    add(product) {
      const f = this.items.find(i => i.id === product.id)
      if (f) f.quantity++
      else this.items.push({ ...product, quantity: 1 })
    },

    increase(item) {
      const f = this.items.find(i => i.id === item.id)
      if (f) f.quantity++
    },

    decrease(item) {
      const f = this.items.find(i => i.id === item.id)
      if (!f) return

      if (f.quantity > 1) f.quantity--
      else this.items = this.items.filter(i => i.id !== item.id)
    },

    removeItem(item) {
      this.items = this.items.filter(i => i.id !== item.id)
    }
  },

  persist: true
})
