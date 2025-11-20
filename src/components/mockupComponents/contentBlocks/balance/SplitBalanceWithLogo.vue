<template>
<div 
    class="balance__content"
    :style="$setStyles(props.elementData.styles, 'layout', 'gap')"
>
    <div 
        class="balance__col"
        :style="$setStyles(props.elementData.styles, 'content', 'gap')"
    >
        <div class="col__lable">
            {{ balanceCols[0].label }}
        </div>
        <div class="col__data">
            {{ balanceCols[0].value }}
        </div>
    </div>
    <div 
        class="balance__col"
        :style="$setStyles(props.elementData.styles, 'content', ['background', 'rounded', 'padding'])"
    >
        <div class="col__img">
            <img :src="balanceCols[1].img" alt="">
        </div>
    </div>    
    <div 
        class="balance__col"
        :style="$setStyles(props.elementData.styles, 'content', 'color')"
    >
        <div class="col__lable">
            {{ balanceCols[2].label }}
        </div>
        <div class="col__data">
            {{ balanceCols[2].value }}
        </div>
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

const balanceCols = computed(() => {
    return props.elementData.content.filter(el => el.show)
})

console.log('balanceCols[0]', balanceCols.value[0])
</script>

<style scoped>
@reference "tailwindcss";
@layer app {
    .balance__content {
        @apply grid grid-cols-[5rem_1fr_5rem] min-h-0 w-full 
    }

    .balance__col {
        @apply grid  gap-y-[.5rem]
    }

    .balance__col:first-child {
        @apply text-left
    }

    .balance__col:nth-child(2) {
        @apply grid place-items-center object-contain
    }

    .balance__col:nth-child(2) img {
        @apply w-full h-auto
    }

    .balance__col:last-child {
        @apply text-right
    }

    .col__lable {
        @apply font-normal text-[.75rem] leading-[.75rem]
    }
    .col__data {
        @apply font-medium text-[.875rem] leading-[.875rem]
    }
}
</style>