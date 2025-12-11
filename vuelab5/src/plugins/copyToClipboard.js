// simple plugin: provides $copy(text) -> Promise<boolean>
export default {
  install(app) {
    app.config.globalProperties.$copy = async (text) => {
      try {
        await navigator.clipboard.writeText(String(text))
        return true
      } catch (e) {
        return false
      }
    }
    // also provide as injection token
    app.provide('copy', async (text) => {
      try {
        await navigator.clipboard.writeText(String(text))
        return true
      } catch {
        return false
      }
    })
  }
}
