<template>
<div class="sidebar__content">
    <Panel
        v-for="(componentData, componentType) in componentsStore.getTemplates"
        :key="componentType"
        :header="getLabel(componentData, componentType)"
        toggleable
        :class="{ 'active-panel': isPanelActive(componentType) }"
        v-model:collapsed="collapsedComponents[componentType]"
    >
        <template #togglebutton>
            <Button
                variant="text"
                rounded
                severity="contrast"
                :icon="isPanelActive(componentType) ? 'pi pi-minus' : 'pi pi-plus'"
                class="panel__expand_btn"
                @click="expandComponent(componentType)"
            />
        </template>
        <div 
            :class="isRowsContainer(componentType)  ? 'rows__container' : 'cols__container'"
        >
            <Variant
                v-for="variant in componentData.variants"
                :key="variant.name"
                :data="variant"
                :component-type="componentType"
                @click="handleVariantClick(componentType, variant.name)"
                :class="isRowsContainer(componentType) ? 'h-[5rem]' : 'h-[10rem]'"
            />
        </div>
    </Panel>
</div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useComponentsStore } from '@s/componentsStore.js'
import { useMockupStore } from '@s/mockupStore'

const collapsedComponents = computed(() => {
    const allCollapsed = Object.keys(componentsStore.getTemplates).reduce((acc, key) => {
        acc[key] = true
        return acc
    }, {})
    
    if (currentEditedComponentType.value) {
        allCollapsed[currentEditedComponentType.value] = false
    }
    
    return allCollapsed
})

const componentsStore = useComponentsStore()
const mockupStore = useMockupStore()

const currentEditedComponentType = computed(() => {
    return mockupStore.editedComponent?.name || null
})

const isPanelActive = (componentType) => {
    return currentEditedComponentType.value === componentType
}

const expandComponent = (componentType) => {
    let component = null
    
    if (componentType === 'navbar') {
        component = mockupStore.navbar
    } else {
        component = mockupStore.findComponent('mainScreen', componentType)
    }
    
    if (!component) return
    mockupStore.editedComponentToggle(component)
}

const cloneVariant = (variant) => JSON.parse(JSON.stringify(variant))

const updateVariantInScreens = (componentType, variantData) => {
    const screens = mockupStore.screens
    for (const screenKey in screens) {
        const screen = screens[screenKey]
        if (!screen?.content || !Array.isArray(screen.content)) {
            continue
        }

        const component = screen.content.find((item) => item.name === componentType)
        if (component) {
            component.variant = variantData
            return true
        }
    }

    return false
}

const handleVariantClick = (componentType, variantName) => {
    const template = componentsStore.getTemplates[componentType]
    if (!template?.variants?.length) {
        console.warn(`[ComponentVariants] Не найден шаблон для компонента "${componentType}"`)
        return
    }

    const selectedVariant = template.variants.find((item) => item.name === variantName)
    if (!selectedVariant) {
        console.warn(`[ComponentVariants] Не найден вариант "${variantName}" для компонента "${componentType}"`)
        return
    }

    const variantCopy = cloneVariant(selectedVariant)

    if (mockupStore.navbar?.name === componentType) {
        mockupStore.navbar.variant = variantCopy
        return
    }

    const isUpdated = updateVariantInScreens(componentType, variantCopy)
    if (!isUpdated) {
        console.warn(`[ComponentVariants] Не удалось найти компонент "${componentType}" в mockupStore`)
    }
}

const getLabel = (componentData, type) => {
    const labels = {
        balance: 'Баланс',
        navbar: 'Нижнее меню',
        promotions: 'Акции',
        catalog: 'Каталог/меню',
        point: 'Точки продаж',
        news: 'Новости'
    }
    return labels[type] || type
}

const isRowsContainer = (componentType) => {
    const rowsTypes = ['balance', 'navbar', 'promotions']
    
    return rowsTypes.includes(componentType) ? true : false
}
</script>

<style scoped>
@reference "tailwindcss";
@layer app {
    .sidebar__content {
        @apply w-full min-h-0 grid grid-cols-1 grid-rows-[repeat(auto-fit,minmax(0,auto))]
        gap-y-[1rem] items-start p-[1rem]
    }

    .variants__container {
        @apply grid grid-rows-[repeat(auto-fit,minmax(0,auto))] gap-y-[1rem] overflow-visible
    }

    .rows__container {
        @apply grid grid-rows-[repeat(auto-fit,minmax(0,auto))] gap-y-[1rem] overflow-visible
    }

    .cols__container {
        @apply grid grid-cols-[1fr_1fr] gap-[1rem] overflow-visible
    }

    ::v-deep(.p-panel) {
        @apply rounded-[1rem]
    }

    ::v-deep(.p-panel-content) {
        @apply p-[0_1rem_1rem]
    }

    ::v-deep(.p-panel.active-panel) {
        @apply border-2 border-(--pb-primary-color) shadow-lg
    }    
}
</style>