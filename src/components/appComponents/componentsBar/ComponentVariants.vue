<template>
<div class="sidebar__content">
    <Panel
        v-for="(componentData, componentType) in componentsStore.getTemplates"
        :key="componentType"
        toggleable
        v-model:collapsed="collapsedComponents[componentType]"
        :class="{ 'active-panel': isPanelActive(componentType) }"
    >
        <!-- :class="{ 'active-panel': isPanelActive(componentType) }" -->
        <template #header>
            <div class="header__container">
                <Button
                    variant="text"
                    severity="success"
                    icon="pi pi-power-off"
                    rounded
                    size="small"
                />
                <span>{{ getLabel(componentData, componentType) }}</span>
            </div>
        </template>
        <template #togglebutton>
            <Button
                variant="text"
                rounded
                severity="contrast"
                class="panel__expand_btn"
                size="small"
                :icon="getToggleIcon(componentType)"
                @click="togglePanel(componentType)"
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
import { ref, computed, onBeforeMount, watch } from 'vue'
import { useComponentsStore } from '@s/componentsStore.js'
import { useMockupStore } from '@s/mockupStore'
import { useRoute } from 'vue-router'

const route = useRoute()
const componentsStore = useComponentsStore()
const mockupStore = useMockupStore()

const collapsedComponents = ref({})

const initializePanels = () => {
    const initialState = Object.keys(componentsStore.getTemplates).reduce((acc, key) => {
        acc[key] = true
        return acc
    }, {})
    
    collapsedComponents.value = initialState
    
    if (mockupStore.editedComponent?.name) {
        expandPanel(mockupStore.editedComponent.name)
    }
}

const isPanelActive = (componentType) => {
    return !collapsedComponents.value[componentType]
}

const togglePanel = (componentType) => {
    if (componentType in collapsedComponents.value) {
        const willExpand = collapsedComponents.value[componentType]
        const component = mockupStore.getComponentFromMockup(route.meta.screen, componentType)

        if (willExpand) {
            Object.keys(collapsedComponents.value).forEach(key => {
                collapsedComponents.value[key] = true
            })
            collapsedComponents.value[componentType] = false
            
            if (component && component.variant) {
                mockupStore.editedComponentToggle(component)
            }
        } else {
            collapsedComponents.value[componentType] = true
            mockupStore.editedComponentToggle(component)
        }
    }
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

const expandPanel = (componentType) => {
    if (componentType in collapsedComponents.value) {
        Object.keys(collapsedComponents.value).forEach(key => {
            collapsedComponents.value[key] = true
        })

        collapsedComponents.value[componentType] = false
    }
}

const getToggleIcon = (componentType) => {
    return collapsedComponents.value[componentType] ? 'pi pi-angle-down' : 'pi pi-angle-up'
}

watch(
    () => mockupStore.editedComponent,
    (newEditedComponent, oldEditedComponent) => {
        if (oldEditedComponent?.name && oldEditedComponent.name in collapsedComponents.value) {
            collapsedComponents.value[oldEditedComponent.name] = true
        }
        
        if (newEditedComponent?.name && newEditedComponent.name in collapsedComponents.value) {
            expandPanel(newEditedComponent.name)
        }
    },
    { deep: true }
)

onBeforeMount(() => {
    initializePanels()
})
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

    ::v-deep(.p-panel-toggleable .p-panel-header) {
        @apply p-[0.375rem_.5rem]
    }

    ::v-deep(.p-panel-content) {
        @apply p-[0_1rem_1rem]
    }

    ::v-deep(.p-panel.active-panel) {
        @apply border-2 border-(--pb-primary-color) shadow-lg
    }

    .header__container {
        @apply grid grid-rows-1 grid-cols-[2rem_1fr] gap-x-[.5rem] items-center
    }

    .header__container span {
        @apply font-medium text-[1rem]
    }
}
</style>