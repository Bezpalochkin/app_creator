import { ROUTE_NAMES } from '@r/constants'
import { useAppStore } from '@s/appStore'

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