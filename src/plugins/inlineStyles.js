import { setStyles } from '@u/applyInlineStyles'

export default {
  install(app, options) {
    app.provide('setStyles', setStyles)
    
    app.config.globalProperties.$setStyles = setStyles
    
    app.config.globalProperties.$styles = {
      set: setStyles,
    }
  }
}