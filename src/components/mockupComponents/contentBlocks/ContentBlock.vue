<template>
<div 
    class="component"
    :style="$setStyles(props.elementData.variant?.styles, 'base', 'all')"
>
    <div class="component__container">
        <div 
            v-if="elementData.variant?.header?.show"
            class="component__header"
            :style="$setStyles(props.elementData.variant.header.styles, 'content', 'all')"
        >
            <div 
                class="component__title"
            >
                {{ props.elementData.variant?.header?.title }}
            </div>
            <div 
                v-if="elementData.variant?.header?.link?.show"
                class="component__link"
            >{{ props.elementData.variant?.header?.link?.label }}</div>
        </div>
        <BurgerButton
            v-if="elementData.name === 'burgerButton'"
        />
        <Balance 
            v-if="elementData.name === 'balance'"
            :data="elementData"
        />
        <SliderComponetnt
            v-if="isSlider"
            :data="elementData"        
        />
        <MainScreenCatalog
            v-if="elementData.name === 'catalog'"
            :data="elementData" 
        />
        <CatalogCategories
            v-if="elementData.name === 'catalogCategories'"
            :data="elementData" 
        />
    </div>
    <Transition>
        <SelectionFrame 
            v-if="mockupStore.getEditedComponent?.name === elementData.name"
            :style="$setStyles(props.elementData.variant?.styles, 'base', ['rounded'])"
            :index="index"
        />
    </Transition>    
</div>
</template>

<script setup>
import { computed } from 'vue'
import BurgerButton from '@c/mockupComponents/contentBlocks/BurgerButton.vue'
import Balance from '@c/mockupComponents/contentBlocks/balance/Balance.vue'
import SliderComponetnt from '@c/mockupComponents/contentBlocks/promotions/SliderComponetnt.vue'
import MainScreenCatalog from '@c/mockupComponents/contentBlocks/catalog/MainScreenCatalog.vue'
import CatalogCategories from '@c/mockupComponents/contentBlocks/catalog/CatalogCategories.vue'
import { useMockupStore } from '@s/mockupStore'

const mockupStore = useMockupStore()

const props = defineProps({
    elementData: {
        type: Object,
        required: true
    },
    index: {
        type: Number
    }
})

const isSlider = computed(() => props.elementData.name === 'promotions' || props.elementData.name === 'points')
</script>

<style scoped>
@reference "tailwindcss";
@layer app {
    .component {
        @apply relative grid grid-cols-1 place-items-start w-full
    }

    .component__container {
        @apply relative w-full flex flex-col gap-y-[.5rem]
    }

    .component__header {
        @apply flex flex-row items-end justify-between
        w-full
    }

    .component__title {
        @apply text-[1rem] font-semibold
    }

    .component__link {
        @apply text-[1rem] cursor-pointer
    }    
}
</style>