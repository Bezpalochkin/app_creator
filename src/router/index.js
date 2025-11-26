import { createRouter, createWebHistory } from 'vue-router'
import routes from '@r/routes'
import { unsavedChangesGuard } from '@r/guards'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

// Добавляем guard для проверки несохраненных изменений при переходе
router.beforeEach((to, from, next) => {
    // Проверяем только переходы внутри creator (где есть screen в meta)
    if (to.matched.some(record => record.meta.screen) || 
        from.matched.some(record => record.meta.screen)) {
        unsavedChangesGuard(to, from, next)
    } else {
        next()
    }
})

export default router