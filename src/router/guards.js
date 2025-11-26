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
    
    // Используем computed значение через .value
    if (mockupStore.hasUnsavedChanges) {
        const confirmed = window.confirm(
            'У вас есть несохраненные изменения. Вы уверены, что хотите покинуть страницу? Все несохраненные изменения будут утеряны.'
        )
        
        if (!confirmed) {
            next(false) // Отменяем переход
            return
        }
    }
    
    next() // Разрешаем переход
}