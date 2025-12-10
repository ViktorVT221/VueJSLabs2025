import { reactive, readonly } from 'vue'

const state = reactive({
  user: JSON.parse(localStorage.getItem('vuelab_user') || 'null'),
})

function save() {
  localStorage.setItem('vuelab_user', JSON.stringify(state.user))
}

export default {
  state: readonly(state),

  isAuthenticated() {
    return !!state.user
  },

  login({ email, password }) {
    if (!email || !password) return { ok: false, error: "Invalid login" }

    state.user = {
      id: 1,
      name: "Admin",
      email,
    }
    save()
    return { ok: true }
  },

  register({ name, email, password }) {
    if (!name || !email || !password) return { ok: false }

    state.user = {
      id: Date.now(),
      name,
      email,
    }
    save()
    return { ok: true }
  },

  logout() {
    state.user = null
    save()
  }
}
