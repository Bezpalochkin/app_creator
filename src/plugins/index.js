import primevue from '@p/prime-vue'
import inlineStyles from '@p/inlineStyles'

export default {
  install(app) {
    app.use(primevue),
    app.use(inlineStyles)
  }
}