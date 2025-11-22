<template>
<div 
    class="component"
    :style="$setStyles(props.elementData.variant.styles, 'base', 'all')"
>
    <div class="component__container">
        <div 
            v-if="elementData.variant?.header?.show"
            class="component__header"
        >
            <div 
                class="component__title"
            >
                {{ props.elementData.variant?.header?.title }}
            </div>
            <div 
                class="component__link"
            >все</div>
        </div>
        <BurgerButton
            v-if="elementData.name === 'burgerButton'"
        />
        <Balance 
            v-if="elementData.name === 'balance'"
            :data="elementData"
        />
        <SliderComponetnt
            v-if="elementData.name === 'promotions'"
            :data="elementData"        
        />
        <MainScreenCatalog
            v-if="elementData.name === 'catalog'"
            :data="elementData" 
        />        
    </div>
    <Transition>
        <SelectionFrame 
            v-if="mockupStore.getEditedComponent?.name === elementData.name"
        />
    </Transition>    
</div>
</template>

<script setup>
import BurgerButton from '@c/mockupComponents/contentBlocks/BurgerButton.vue'
import { useMockupStore } from '@s/mockupStore'

const mockupStore = useMockupStore()

const props = defineProps({
    elementData: {
        type: Object,
        required: true
    }
})
</script>

<style scoped>
@reference "tailwindcss";
@layer app {
    .component {
        @apply relative grid place-items-start w-full
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