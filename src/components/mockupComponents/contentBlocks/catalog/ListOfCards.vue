<template>
<div 
    class="variant__content"
    :style="$setStyles(props.elementData.styles, 'layout', ['gap', 'color'])"
>
    <div
        class="list__item"
        v-for="(item, index) in props.elementData.content"
    >
       <span>{{item.label}}</span>
       <i class="pi pi-angle-right"></i>
    </div>
</div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
    elementData: {
        type: Object,
        required: true
    }
})

console.log('props elementData list', props.elementData)
</script>

<style scoped>
@reference "tailwindcss";
@layer app {
    .variant__content {
        @apply w-full h-auto grid grid-cols-1 grid-rows-[repeat(auto-fit,minmax(0,3rem))]
    }

    .list__item {
        @apply flex flex-row items-center justify-between w-full h-[3rem] border-b-1
    }
}
</style>