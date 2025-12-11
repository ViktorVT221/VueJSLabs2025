<template>
  <footer class="site-footer">
    <div class="container">
      <div>© TrainX 2025</div>
      <div>
        <button class="btn ghost" @click="copyIBAN">Скопіювати IBAN</button>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { useToast } from 'primevue/usetoast'
const toast = useToast()
const IBAN = 'UA00 0000 0000 0000 0000 0000 000'
async function copyIBAN(){
  const ok = await (window.$copy ? window.$copy(IBAN) : navigator.clipboard.writeText(IBAN).then(()=>true).catch(()=>false))
  if (ok) toast.add({severity:'success', summary:'Скопійовано', detail:'IBAN скопійовано', life:1500})
  else toast.add({severity:'error', summary:'Помилка', detail:'Не скопійовано', life:1500})
}
</script>

<style scoped>
.site-footer { padding:20px 0; border-top:1px solid #eee; margin-top:40px }
.container { display:flex; justify-content:space-between; align-items:center }
.btn.ghost { background:transparent; border:1px solid #e5e7eb; padding:6px 10px; border-radius:8px }
</style>
