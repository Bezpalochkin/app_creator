import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useMockupStore = defineStore('mockupStore', () => {
    const editedComponent = ref(null)

    const history = ref([])
    const currentHistoryIndex = ref(-1)
    const maxHistoryLength = 50

    const hasUnsavedChanges = ref(false)
    
    const screens = ref()

    const navbar = ref()

    const setMockupData = (data) => {
        screens.value = data.screens
        navbar.value = data.navbar
    }

    const editedComponentToggle = (component) => {
        if (editedComponent.value?.name === component?.name) {
            editedComponent.value = null
        } else {
            editedComponent.value = component
        }    
    }

    const isElementUsed = (componentType, variantName) => {
        // Для navbar проверяем variant.name
        if (componentType === 'navbar') {
            return navbar.value?.variant?.name === variantName
        }
        
        // Для screens проверяем наличие элемента в content массиве
        for (const screenKey in screens.value) {
            const screen = screens.value[screenKey]
            if (screen?.content && Array.isArray(screen.content)) {
                const found = screen.content.find(item => item.variant?.name === variantName)
                if (found) {
                    return true
                }
            }
        }
        
        return false
    }

    const getComponentFromMockup = (screen, componentName) => {
        const screenContent = screens?.value[screen]?.content

        if (!screenContent) {
            return null
        }

        return screenContent.find(el => el.name === componentName) 

        // if (componentName === 'navbar' && navbar.value?.name === componentName) {
        //     return navbar.value
        // }
        
        // const screenContent = screens?.value[screen]?.content
    
        // if (!screenContent) {
        //     return
        // }
    
        // return screenContent.find(el => el.name === componentType)
    }

    const deleteComponentFromMockup = (screen, component) => {
        // console.log('Deleting component:', component.name)
        
        // // Если удаляемый компонент сейчас редактируется - сбрасываем editedComponent
        // if (editedComponent.value?.name === component.name) {
        //     editedComponent.value = null
        // }
        
        // // Выполняем удаление
        // if(component.name === 'navbar') {
        //     navbar.value.variant = null
        // } else {
        //     const currentComponent = findComponent(component.name, screen)
        //     if (currentComponent) {
        //         currentComponent.variant = null
        //     }
        // }
    }

    const addComponentToMockup = (component, screen) => {
        const componentIsAdded = findComponent(component.name, screen)

        // console.log('addComponentToMockup', componentIsAdded)
        console.log('addComponentToMockup', component)
        console.log('componentIsAdded', componentIsAdded)
    }

    return {
        navbar,
        getNavbar: computed(() => navbar.value),
        screens,
        getScreens: computed(() => screens.value),
        setMockupData,
        editedComponent,
        getEditedComponent: computed(() => editedComponent.value),
        editedComponentToggle,
        isElementUsed,
        getComponentFromMockup,
        hasUnsavedChanges: computed(() => hasUnsavedChanges.value),
        deleteComponentFromMockup,
        addComponentToMockup
    }
})