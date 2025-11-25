<template>
<div class="sidebar__container">
    <aside
        :style="$setStyles(props.elementData.variant.styles, 'base', 'all')"
    >
        <div class="logo__container">
            <img src="" alt="">
        </div>
        <Draggable
            class="phone__content"
            v-model="props.elementData.variant.content"
            ghost-class="dragged__placeholder"
            item-key="name"
        >              
            <template #item="{element, index}">
                <div 
                    class="nav__item">
                    <i 
                        :class="element.icon"
                        :style="$setStyles(props.elementData.variant.styles, 'content', 'color', { byName: 'Цвет иконки' })"
                    ></i>
                    <span
                        :style="$setStyles(props.elementData.variant.styles, 'content', 'color', { byName: 'Цвет текста' })"
                    >{{ element.label }}</span>
                </div>
            </template>
        </Draggable>
    </aside>
</div>
</template>

<script setup>
import { onBeforeMount } from 'vue'
import { useMockupStore } from '@s/mockupStore'
import Draggable from 'vuedraggable'

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
    .sidebar__container {
        @apply absolute grid grid-cols-1 grid-rows-1 w-full h-full left-0 top-0 bg-[#000000]/60 z-[9999]
    }

    aside {
        @apply w-[calc(100%-100px)] h-full bg-white grid grid-cols-1
    }

    .nav__item {
        @apply grid grid-cols-[1.5rem_1fr] items-center gap-x-[.75rem] w-full p-[1rem_2rem]
    }

    .nav__item i {
        @apply text-[1.5rem]
    }

    .nav__item span {
        @apply text-[1rem]
    }
}
</style>