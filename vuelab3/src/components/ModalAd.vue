<template>
  <transition name="modal">
    <teleport to="body">
      <div v-if="open" :class="$style.modalBack" @click.self="close">
        <div :class="$style.modalCard">
          <div style="display:flex; justify-content:space-between; align-items:center; gap:12px;">
            <h3>{{ title }}</h3>
            <button :class="$style.closeBtn" @click="close">✕</button>
          </div>
          <div style="margin-top:12px">
            <img v-if="image" :src="image" style="max-width:100%; border-radius:8px" />
            <p style="margin-top:10px">{{ text }}</p>
          </div>
        </div>
      </div>
    </teleport>
  </transition>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'
const props = defineProps({
  open: Boolean,
  title: String,
  text: String,
  image: String
})
const emit = defineEmits(['update:open'])
function close() { emit('update:open', false) }
</script>

<style module>
/* modal enter/leave (scoped inside module) */
@keyframes modalIn {
  from { transform: translateY(12px); opacity:0 }
  to { transform: translateY(0); opacity:1 }
}
.modalBack { /* defined in CSS Module */ }
.modalCard { }
.closeBtn { }
</style>

<style>
/* transition wrapper classes (global) */
.modal-enter-from { opacity: 0; transform: translateY(8px); }
.modal-enter-active { transition: all 220ms ease; }
.modal-enter-to { opacity: 1; transform: translateY(0); }
.modal-leave-from { opacity: 1; transform: translateY(0); }
.modal-leave-active { transition: all 180ms ease; }
.modal-leave-to { opacity: 0; transform: translateY(8px); }
</style>
