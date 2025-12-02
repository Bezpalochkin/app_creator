<template>
<div class="sidebar__content">
    <div
        v-if="activeStyles.length > 0"
        class="content__items"
    >
        <!-- Настройки экрана (когда нет выбранного компонента) -->
        <Panel
            v-if="!mockupStore.getEditedComponent && screenStyles.length > 0"
            header="Настройки экрана"
            class="screen__settings"
            toggleable
        >
            <SettingComponent 
                v-for="setting in screenStyles"
                :key="setting.name"
                v-model="setting.value"
                :setting="setting"
            />
        </Panel>

        <!-- Настройки компонента с категориями (когда есть выбранный компонент) -->
        <template v-if="mockupStore.getEditedComponent">
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
        </template>
    </div>

    <!-- Сообщение когда нет настроек -->
    <div 
        v-else
        class="empty-state"
    >
        <p>Нет доступных настроек</p>
        <small>Выберите компонент для редактирования его настроек</small>
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

// Стили активного экрана
const screenStyles = computed(() => {
    if (mockupStore.getEditedComponent) {
        return [] // Не показываем настройки экрана когда есть выбранный компонент
    }
    
    const screenKey = route.meta.screen || 'mainScreen'
    const screen = mockupStore.screens[screenKey]
    
    if (!screen?.styles) {
        return []
    }
    
    return Array.isArray(screen.styles) ? screen.styles : []
})

// Стили компонента (если есть выбранный компонент)
const componentStyles = computed(() => {
    return mockupStore.getEditedComponent?.variant?.styles || []
})

// Все активные стили (экран или компонент)
const activeStyles = computed(() => {
    return mockupStore.getEditedComponent ? componentStyles.value : screenStyles.value
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
        lastSavedState = JSON.stringify(getCurrentState())
        return
    }

    const currentState = JSON.stringify(getCurrentState())

    if (currentState !== lastSavedState) {
        const component = mockupStore.getEditedComponent
        if (component) {
            if (component.name === 'navbar') {
                mockupStore.saveNavbarChange()
            } else {
                const screenKey = route.meta.screen || 'mainScreen'
                mockupStore.saveComponentChange(screenKey)
            }
        } else {
            // Сохраняем историю для экрана при изменении настроек экрана
            const screenKey = route.meta.screen || 'mainScreen'
            mockupStore.saveComponentChange(screenKey)
        }
        lastSavedState = currentState
    }
}

// Получение текущего состояния (компонент или экран)
const getCurrentState = () => {
    if (mockupStore.getEditedComponent) {
        return {
            styles: mockupStore.getEditedComponent?.variant?.styles,
            header: mockupStore.getEditedComponent?.variant?.header
        }
    } else {
        const screenKey = route.meta.screen || 'mainScreen'
        const screen = mockupStore.screens[screenKey]
        return {
            styles: screen?.styles || []
        }
    }
}

// Отслеживаем изменения стилей компонента
watch(
    () => mockupStore.getEditedComponent?.variant?.styles,
    () => {
        if (mockupStore.getEditedComponent) {
            saveHistoryIfNeeded()
        }
    },
    { deep: true }
)

// Отслеживаем изменения заголовка компонента
watch(
    () => mockupStore.getEditedComponent?.variant?.header,
    () => {
        if (mockupStore.getEditedComponent) {
            saveHistoryIfNeeded()
        }
    },
    { deep: true }
)

// Отслеживаем изменения стилей экрана
watch(
    () => {
        const screenKey = route.meta.screen || 'mainScreen'
        const screen = mockupStore.screens[screenKey]
        return screen?.styles || []
    },
    () => {
        if (!mockupStore.getEditedComponent) {
            saveHistoryIfNeeded()
        }
    },
    { deep: true }
)

// Сбрасываем при смене компонента или экрана
watch(
    () => [mockupStore.getEditedComponent?.name, route.meta.screen],
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
    
    return componentStyles.value
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

// Вычисляемое свойство для категорий, в которых есть стили (только для компонентов)
const categoriesWithContent = computed(() => {
    if (!mockupStore.getEditedComponent) {
        return {} // Не показываем категории для настроек экрана
    }
    
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

    .empty-state {
        @apply text-center p-8 text-gray-500;
    }

    .empty-state p {
        @apply font-medium mb-2;
    }

    .empty-state small {
        @apply text-sm;
    }

    ::v-deep(.p-panel-content) {
        @apply min-h-0 grid grid-cols-1 grid-rows-[repeat(auto-fit,minmax(0,auto))]
        gap-y-[1rem] p-[0_1rem_1rem]
    }
/* 
    .screen__settings {
        @apply border-l-4 border-l-blue-500;
    } */
}
</style>