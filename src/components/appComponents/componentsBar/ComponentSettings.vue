<template>
<div class="sidebar__content">
    <div
        v-if="mockupStore.getEditedComponent && styles"
        class="content__items"
    >
        <Panel
            v-if="header"
            header="Заголовок блока"
            class="header__settings"
            toggleable
        >
            <ShortTextComponent
                v-if="header.show"
                v-model="header.title"
                :label="'Текст заголовка'"
            />
            <ShortTextComponent
                v-if="header.show && header.link.show"
                v-model="header.link.label"
                :label="'Текст ссылки'"
            />             
            <SettingComponent 
                v-for="setting in header.styles"
                :key="setting.name"
                v-model="setting.value"
                :setting="setting"
            />
        </Panel>
        <Panel
            v-for="(category, categoryType) in categoriesWithContent"
            :key="categoryType"
            :header="category"
            toggleable
            class="settings__group"
        >
            <SettingComponent 
                v-for="setting in filteredStyles(categoryType)"
                :key="setting.name"
                v-model="setting.value"
                :setting="setting"
            />
        </Panel>
    </div>
</div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { useMockupStore } from '@s/mockupStore'
import { useRoute } from 'vue-router'

import SettingComponent from '@c/appComponents/componentsBar/SettingComponent.vue'

const route = useRoute()
const mockupStore = useMockupStore()

const styles = computed(() => {
    return mockupStore.getEditedComponent?.variant?.styles || []
})

const header = computed(() => {
    return mockupStore.getEditedComponent?.variant?.header || null
})

// Отслеживание изменений для сохранения истории
let isInitialLoad = true
let lastSavedState = null

// Функция для сохранения истории при изменении
const saveHistoryIfNeeded = () => {
    if (isInitialLoad) {
        isInitialLoad = false
        lastSavedState = JSON.stringify({
            styles: mockupStore.getEditedComponent?.variant?.styles,
            header: mockupStore.getEditedComponent?.variant?.header
        })
        return
    }

    const currentState = JSON.stringify({
        styles: mockupStore.getEditedComponent?.variant?.styles,
        header: mockupStore.getEditedComponent?.variant?.header
    })

    if (currentState !== lastSavedState) {
        const component = mockupStore.getEditedComponent
        if (component) {
            if (component.name === 'navbar') {
                mockupStore.saveNavbarChange()
            } else {
                const screenKey = route.meta.screen || 'mainScreen'
                mockupStore.saveComponentChange(screenKey)
            }
            lastSavedState = currentState
        }
    }
}

// Отслеживаем изменения стилей и заголовка
watch(
    () => mockupStore.getEditedComponent?.variant?.styles,
    () => {
        saveHistoryIfNeeded()
    },
    { deep: true }
)

watch(
    () => mockupStore.getEditedComponent?.variant?.header,
    () => {
        saveHistoryIfNeeded()
    },
    { deep: true }
)

// Сбрасываем при смене компонента
watch(
    () => mockupStore.getEditedComponent?.name,
    () => {
        isInitialLoad = true
        lastSavedState = null
    }
)

const filteredStyles = (categoryType) => {
    const order = [
        'background',
        'color', 
        'height',
        'padding',
        'rounded',
        'gap',
        'border',
        'bottom',
        'shadow'
    ]
    
    return styles.value
        .filter(el => el.category === categoryType && el.showInSettings !== false)
        .sort((a, b) => {
            const indexA = order.indexOf(a.name)
            const indexB = order.indexOf(b.name)
            
            // Если оба названия есть в порядке сортировки
            if (indexA !== -1 && indexB !== -1) {
                return indexA - indexB
            }
            // Если только A есть в порядке сортировки
            if (indexA !== -1) {
                return -1
            }
            // Если только B есть в порядке сортировки
            if (indexB !== -1) {
                return 1
            }
            // Если оба отсутствуют в порядке сортировки, сохраняем исходный порядок
            return 0
        })
}

// Вычисляемое свойство для категорий, в которых есть стили
const categoriesWithContent = computed(() => {
    const labels = {
        base: 'Основные настройки',
        layout: 'Внешний вид',
        content: 'Контент'
    }
    
    // Фильтруем категории, оставляя только те, где есть хотя бы один стиль
    return Object.fromEntries(
        Object.entries(labels).filter(([categoryType]) => 
            filteredStyles(categoryType).length > 0
        )
    )
})

</script>

<style scoped>
@reference "tailwindcss";
@layer app {
    .sidebar__content {
        @apply w-full min-h-0 grid grid-cols-1 grid-rows-[repeat(auto-fit,minmax(0,auto))]
        gap-y-[1rem] items-start p-[1rem]
    }

    .content__items {
        @apply grid gap-y-[1rem]
    }

    ::v-deep(.p-panel-content) {
        @apply min-h-0 grid grid-cols-1 grid-rows-[repeat(auto-fit,minmax(0,auto))]
        gap-y-[1rem] p-[0_1rem_1rem]
    }
}
</style>