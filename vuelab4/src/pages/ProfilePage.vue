<template>
  <div class="profile-wrapper">
    <h1>Профіль</h1>

    <form @submit.prevent="saveProfile">
      
      <!-- Ім’я -->
      <div class="form-group">
        <label>Ім’я</label>
        <input v-model="name" type="text" />
        <span v-if="errors.name" class="error-text">{{ errors.name }}</span>
      </div>

      <!-- Email -->
      <div class="form-group">
        <label>Ел. пошта</label>
        <input v-model="email" type="email" />
        <span v-if="errors.email" class="error-text">{{ errors.email }}</span>
      </div>

      <!-- Дата -->
      <div class="form-group">
        <label>Дата народження</label>
        <input v-model="birthday" type="date" />
      </div>

      <!-- Адреса -->
      <div class="form-group">
        <label>Адреса</label>
        <input v-model="address" type="text" />
      </div>

      <!-- Телефони -->
      <label style="font-weight:600; margin-bottom:6px; display:block;">
        Телефони
      </label>

      <div
        v-for="(phone, index) in phones"
        :key="index"
        class="phone-row"
      >
        <input v-model="phones[index]" type="text" />

        <button
          type="button"
          class="remove-btn"
          @click="removePhone(index)"
        >
          X
        </button>
      </div>

      <button type="button" class="btn add-phone-btn" @click="addPhone">
        + Додати телефон
      </button>

      <!-- КНОПКИ -->
      <div class="btn-row">
        <button class="btn btn-save" type="submit">Зберегти</button>
        <button class="btn btn-reset" type="button" @click="resetForm">
          Скинути
        </button>
      </div>

    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      birthday: "",
      address: "",
      phones: [""],
      errors: {},
    }
  },

  methods: {
    addPhone() {
      this.phones.push("")
    },
    removePhone(i) {
      this.phones.splice(i, 1)
    },
    resetForm() {
      this.name = ""
      this.email = ""
      this.address = ""
      this.birthday = ""
      this.phones = [""]
      this.errors = {}
    },
    saveProfile() {
      this.errors = {}

      if (!this.name) this.errors.name = "Поле обов’язкове"
      if (!this.email) this.errors.email = "Поле обов’язкове"

      if (Object.keys(this.errors).length === 0) {
        alert("Збережено!")
      }
    },
  },
}
</script>
