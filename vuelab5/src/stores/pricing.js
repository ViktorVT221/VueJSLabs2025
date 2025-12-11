import { defineStore } from 'pinia'

export const usePricingStore = defineStore('pricing', {
  state: () => ({
    plans: [
      { id: 'basic', name: 'Basic', price: 290, features: ['Програма на тиждень','PDF план','Початкові вправи','Email підтримка'] },
      { id: 'strong', name: 'Strong', price: 490, features: ['4-тижнева програма','Харчування','Відео вправи','1 сесія з тренером'] },
      { id: 'pro', name: 'Pro', price: 890, features: ['Індивідуальний план','Щотижневий фідбек','Пріоритет','Доступ у додаток'] }
    ]
  })
})
