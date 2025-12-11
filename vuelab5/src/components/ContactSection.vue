<template>
  <div class="form-container">
  <h2>Отримати консультацію</h2>

  <div class="form-group">
    <label>Імʼя</label>
    <input type="text" placeholder="Ваше імʼя">
  </div>

  <div class="form-group">
    <label>Email</label>
    <input type="email" placeholder="example@email.com">
  </div>

  <div class="form-group">
    <label>Телефон</label>
    <input type="text" placeholder="+38 (0__) ___ __ __">
  </div>

  <div class="form-group">
    <label>Повідомлення</label>
    <textarea placeholder="Ваше повідомлення..."></textarea>
  </div>

  <div class="policy-row">
    <input type="checkbox">
    <label>Погоджуюсь з політикою конфіденційності</label>
  </div>

  <button class="submit-btn">Надіслати</button>
</div>


</template>

<script setup>
import { reactive } from 'vue'
import * as yup from 'yup'
import { useToast } from 'primevue/usetoast'
const toast = useToast()

const schema = yup.object({
  name: yup.string().required('Вкажіть імʼя'),
  email: yup.string().email('Невірний email').required('Вкажіть email'),
  message: yup.string().required('Напишіть повідомлення'),
  agree: yup.boolean().oneOf([true], 'Потрібно погодитись')
})

const values = reactive({ name: '', email: '', phone: '', message: '', agree:false })
const errors = reactive({})

async function validate() {
  try {
    await schema.validate(values, { abortEarly: false })
    Object.keys(errors).forEach(k => delete errors[k])
    return true
  } catch (e) {
    // fill errors
    Object.keys(errors).forEach(k => delete errors[k])
    if (e.inner) {
      e.inner.forEach(err => {
        errors[err.path] = err.message
      })
    }
    return false
  }
}

async function onSubmit() {
  const ok = await validate()
  if (!ok) {
    toast.add({severity:'error', summary:'Помилка', detail:'Заповніть форму', life:2000})
    return
  }
  // emulated submit
  toast.add({severity:'success', summary:'Успіх', detail:'Заявку надіслано', life:2500})
  // reset
  values.name=''; values.email=''; values.phone=''; values.message=''; values.agree=false
}
</script>

<style scoped>
.contact-card { background:white; padding:20px; border-radius:10px; box-shadow:0 6px 18px rgba(0,0,0,0.06) }
.row { margin-bottom:12px; display:flex; flex-direction:column }
.row.inline { flex-direction:row; align-items:center; gap:8px }
.invalid { border:1px solid #ff4d4f }
.err { color:#ff4d4f; font-size:13px; margin-top:6px }
</style>
