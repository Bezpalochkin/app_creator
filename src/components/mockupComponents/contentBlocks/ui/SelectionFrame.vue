<template>
<div class="selection__frame">
    <div 
        class="selection__badge"
        :class="index < 1 ? 'first__component' : ''"
    >
        <i class="pi pi-arrows-alt drag__handle"></i>
        <span class="badge__text">{{ getLabel(component.name) }}</span>
        <i 
            class="pi pi-power-off delete__button"
            @click="mockupStore.deleteComponentFromMockup(component, route.meta.screen)"
        ></i>
    </div>
</div>
</template>

<script setup>
import { useMockupStore } from '@s/mockupStore'
import { useRoute } from 'vue-router'

const props = defineProps({
    index: {
        type: Number
    }
})

const mockupStore = useMockupStore()
const route = useRoute()

const component = mockupStore.getEditedComponent

const getLabel = (name) => {
    const labels = {
        balance: 'Баланс',
        navbar: 'Нижнее меню',
        promotions: 'Акции',
        catalog: 'Каталог/меню',
        point: 'Точки продаж',
        news: 'Новости'
    }
    return labels[name] || name
}

</script>

<style scoped>
@reference "tailwindcss";
@layer app {
    .selection__frame {
        @apply absolute top-0 left-0 w-full h-full border-4 border-(--pb-primary-color)
        text-(--pb-on-primary-color)
    }

    .selection__badge {
        @apply absolute left-[50%] -translate-x-[50%] -top-[2rem] grid grid-rows-1
        grid-cols-[1rem_auto_1rem] gap-x-[1rem] w-fit leading-[1rem]
        h-[2rem] bg-(--pb-primary-color) p-[.5rem_1rem] rounded-t-[1rem] z-1000
    }

    .selection__badge.first__component {
        @apply top-0 rounded-b-[1rem] rounded-t-none
    }

    .delete__button {
        @apply cursor-pointer
    }

    .drag__handle:hover {
        @apply cursor-grab
    }

    .drag__handle:active {
        @apply cursor-grabbing
    }     
}
</style>