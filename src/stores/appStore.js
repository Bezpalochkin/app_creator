import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { ROUTE_NAMES } from '@r/constants'
import { useMockupStore } from '@s/mockupStore'
import useAxios from '@@/useAxios'

export const useAppStore = defineStore('appStore', () => {
    const { get, data } = useAxios()

    const organizationId = ref(null)
    const isLoading = ref(false)
    const error = ref(null)
    const forbiddenEdit = ref(true)

    const navigation = ref([
        // {
        //     routeName: ROUTE_NAMES.BASE_SETTINGS_SCREEN,
        //     icon: 'pi-sliders-v',
        //     label: 'Основные настройки'
        // },
        // {
        //     routeName: ROUTE_NAMES.SPLASH_SCREEN,
        //     icon: 'pi-hourglass',
        //     label: 'Экран загрузки'
        // },        
        {
            routeName: ROUTE_NAMES.START_SCREEN,
            icon: 'pi-mobile',
            label: 'Главная страница'
        },
        {
            routeName: ROUTE_NAMES.LEFT_MENU_SCREEN,
            icon: 'pi-bars',
            label: 'Боковое меню'
        },
        {
            routeName: ROUTE_NAMES.CATALOG_SCREEN,
            icon: 'pi-objects-column',
            label: 'Каталог'
        },
    ])

    const setOrganizationId = (id) => {
        organizationId.value = id
    }

    const fetchData = async (force = false) => {
        if (!organizationId.value) {
            throw new Error('Organization ID is required')
        }
    
        isLoading.value = true
        error.value = null
    
        try {
            await get(`/app-creator?id=${organizationId.value}`)
    
            // Добавить проверку и логирование
            if (data.value?.success) {
                const mockupStore = useMockupStore()
                console.log('data success')
                // Явно логируем значение
                console.log('forbiddenEdit from response:', data.value?.forbiddenEdit)
                console.log('mockupData from response:', data.value?.mockupData)
                
                forbiddenEdit.value = data.value?.forbiddenEdit
                mockupStore.setMockupData(data.value?.mockupData)
            } else {
                console.warn('Response not successful or data missing')
                forbiddenEdit.value = false // или true, в зависимости от логики
            }
    
        } catch (err) {
            error.value = err
            console.error('Ошибка при загрузке', err)
            throw err
        } finally {
            isLoading.value = false
        }
    }

    // Метод для инициализации
    const isInitialized = ref(false)

    const initialize = async (id, force = false) => {
        if (!id) {
            throw new Error('Organization ID is required')
        }
    
        // Если уже инициализирован тем же ID и не форсируем - пропускаем
        if (isInitialized.value && organizationId.value === id && !force) {
            return
        }
    
        setOrganizationId(id)
        await fetchData()
        isInitialized.value = true
    }

    return {
        organizationId,
        isLoading,
        error,
        forbiddenEdit,
        navigation,
        setOrganizationId,
        fetchData,
        initialize,
        getOrganizationId: computed(() => organizationId.value),
        getForbiddenEdit: computed(() => forbiddenEdit.value),
        getNavigation: computed(() => navigation.value),
        canEdit: computed(() => !forbiddenEdit.value),
        isReady: computed(() => !!organizationId.value && !isLoading.value)
    }
})