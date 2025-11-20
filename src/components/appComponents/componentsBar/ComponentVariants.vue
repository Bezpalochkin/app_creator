<template>
<div class="sidebar__content">
    <Panel
        v-for="(componentData, componentType) in componentsStore.getTemplates"
        :key="componentType"
        :header="getLabel(componentData, componentType)"
        toggleable
    >
        <div class="variants__container">
            <Variant
                v-for="variant in componentData.variants"
                :key="variant.name"
                :data="variant"
                :component-type="componentType"
                @click="handleVariantClick(componentType, variant.name)"
            />
        </div>
    </Panel>
</div>
</template>

<script setup>
import { useComponentsStore } from '@s/componentsStore.js'
import { useMockupStore } from '@s/mockupStore'

const componentsStore = useComponentsStore()
const mockupStore = useMockupStore()

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
        promotions: 'Акции'
    }
    return labels[type] || type
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

    ::v-deep(.p-panel) {
        @apply rounded-[1rem]
    }

    ::v-deep(.p-panel-content) {
        @apply p-[0_1rem_1rem]
    }
}
</style>