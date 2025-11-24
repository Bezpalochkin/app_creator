<template>
<div class="sidebar__content">
    <div
        v-if="mockupStore.getEditedComponent && styles"
        class="content__items"
    >
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
import { ref, computed } from 'vue'
import { useMockupStore } from '@s/mockupStore'

import SettingComponent from '@c/appComponents/componentsBar/SettingComponent.vue'

const mockupStore = useMockupStore()

const styles = computed(() => {
    return mockupStore.getEditedComponent?.variant?.styles || []
})


const filteredStyles = (categoryType) => {
    return styles.value.filter(el => el.category === categoryType)
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