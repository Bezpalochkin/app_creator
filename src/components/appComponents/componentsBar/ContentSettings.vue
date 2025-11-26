<template>
<div class="contentbar__content">
    <Draggable
        class="menu__items"
        v-model="contentItems"
        ghost-class="dragged__placeholder"
        item-key="label"
    >              
        <template #item="{element, index}">
            <SelectContentVariant
                :element="element"
                :index="index"
                @update:element="onElementUpdate(index, $event)"
                @delete="onElementDelete"
            />
        </template>
    </Draggable>
</div>
</template>

<script setup>
import { computed } from 'vue'
import { useMockupStore } from '@s/mockupStore'
import Draggable from 'vuedraggable'

const mockupStore = useMockupStore()

const contentItems = computed({
    get: () => {
        return mockupStore.editedComponent?.variant?.content || []
    },
    set: (value) => {
        if (mockupStore.editedComponent?.variant) {
            // Определяем экран для сохранения истории
            const component = mockupStore.editedComponent
            let screenKey = 'mainScreen' // По умолчанию
            
            // Если это navbar, сохраняем историю navbar
            if (component.name === 'navbar') {
                mockupStore.saveNavbarChange()
            } else {
                // Ищем экран, в котором находится компонент
                const screens = mockupStore.screens
                for (const key in screens) {
                    const screen = screens[key]
                    if (screen?.content && Array.isArray(screen.content)) {
                        const found = screen.content.find(item => item.name === component.name)
                        if (found) {
                            screenKey = key
                            break
                        }
                    }
                }
                mockupStore.saveComponentChange(screenKey)
            }
            
            mockupStore.editedComponent.variant.content = value
        }
    }
})

const onElementUpdate = (index, updatedElement) => {
    if (mockupStore.editedComponent?.variant?.content) {
        const component = mockupStore.editedComponent
        
        // Сохраняем в историю
        if (component.name === 'navbar') {
            mockupStore.saveNavbarChange()
        } else {
            let screenKey = 'mainScreen'
            const screens = mockupStore.screens
            for (const key in screens) {
                const screen = screens[key]
                if (screen?.content && Array.isArray(screen.content)) {
                    const found = screen.content.find(item => item.name === component.name)
                    if (found) {
                        screenKey = key
                        break
                    }
                }
            }
            mockupStore.saveComponentChange(screenKey)
        }
        
        mockupStore.editedComponent.variant.content[index] = updatedElement
    }
}

const onElementDelete = (index) => {
    if (mockupStore.editedComponent?.variant?.content) {
        const component = mockupStore.editedComponent
        
        // Сохраняем в историю
        if (component.name === 'navbar') {
            mockupStore.saveNavbarChange()
        } else {
            let screenKey = 'mainScreen'
            const screens = mockupStore.screens
            for (const key in screens) {
                const screen = screens[key]
                if (screen?.content && Array.isArray(screen.content)) {
                    const found = screen.content.find(item => item.name === component.name)
                    if (found) {
                        screenKey = key
                        break
                    }
                }
            }
            mockupStore.saveComponentChange(screenKey)
        }
        
        mockupStore.editedComponent.variant.content.splice(index, 1)
    }
}

const addContentItem = () => {
    if (!mockupStore.editedComponent?.variant) {
        return
    }
    
    if (!mockupStore.editedComponent.variant.content) {
        mockupStore.editedComponent.variant.content = []
    }
    
    // Добавляем новый элемент с пустыми значениями
    const newItem = {
        label: '',
        icon: ''
    }
    
    mockupStore.editedComponent.variant.content.push(newItem)
}

defineExpose({
    addContentItem
})

</script>

<style scoped>
@reference "tailwindcss";
@layer app {
    .contentbar__content {
        @apply w-full min-h-0 grid grid-cols-1 grid-rows-[repeat(auto-fit,minmax(0,auto))]
        gap-y-[1rem] items-start p-[1rem]
    }

    .menu__items {
        @apply grid grid-cols-1 grid-rows-[repeat(auto-fit,minmax(0,auto))] gap-y-[1rem]
    }
}
</style>