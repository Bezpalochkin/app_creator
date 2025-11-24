<template>
<div class="sidebar__container">
    <aside>
        <div class="logo__container">
            <img src="" alt="">
        </div>
        <Draggable
            class="phone__content"
            v-model="props.elementData"
            ghost-class="dragged__placeholder"
            item-key="name"
        >              
            <template #item="{element, index}">
                <div class="nav__item">
                    <i 
                        :class="element.icon"
                    ></i>
                    <span>{{ element.label }}</span>
                </div>
            </template>
        </Draggable>
    </aside>
</div>
</template>

<script setup>
import Draggable from 'vuedraggable'

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
        @apply flex flex-row items-center justify-start gap-x-[.75rem] w-full p-[1rem_2rem]
    }
}
</style>