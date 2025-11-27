import { ROUTE_NAMES } from '@r/constants'
import { useAppStore } from '@s/appStore'
import { useMockupStore } from '@s/mockupStore'

export const organizationGuard = async (to, from, next) => {
    const organizationId = to.params.organizationId
    const appStore = useAppStore()
    
    if (!organizationId) {
        next({ name: ROUTE_NAMES.ERROR_SCREEN })
        return
    }
    
    try {
        await appStore.initialize(organizationId)
        next()
    } catch (error) {
        console.error('Initialization failed:', error)
        next({ name: ROUTE_NAMES.ERROR_SCREEN })
    }
}

// Guard для проверки несохраненных изменений
export const unsavedChangesGuard = (to, from, next) => {
    const mockupStore = useMockupStore()
    
    if (mockupStore.hasUnsavedChanges) {
        const choice = window.confirm(
            'У вас есть несохраненные изменения. Что вы хотите сделать?\n\n' +
            'OK - перейти без сохранения (изменения будут потеряны)\n' +
            'Cancel - остаться на текущей странице'
        )
        
        if (choice) {
            // Пользователь согласился потерять изменения - сбрасываем их
            mockupStore.resetUnsavedChanges()
            next() // Разрешаем переход
        } else {
            next(false) // Отменяем переход
        }
    } else {
        next() // Разрешаем переход
    }
}