import { defineStore } from "pinia"

export const useProductsStore = defineStore("products", {
  state: () => ({
    products: [
      { id: 1, title: "Laptop", price: 1000 },
      { id: 2, title: "Phone", price: 600 },
      { id: 3, title: "Headphones", price: 150 }
    ]
  })
})
