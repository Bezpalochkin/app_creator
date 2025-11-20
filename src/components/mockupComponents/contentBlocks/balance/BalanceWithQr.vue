<template>
<div 
    class="balance__content"
    :style="$setStyles(props.elementData.styles, 'content', ['gap', 'color'])"
>
    <div 
        v-for="col in balanceCols"
        class="balance__col grow"
        :style="$setStyles(props.elementData.styles, 'content', ['background', 'height', 'padding', 'rounded'])"
    >
        <div class="col__lable">
            {{ col.label }}
        </div>
        <div class="col__data">
            {{ col.value }}
        </div>
    </div>
    <div
        class="balance__col"
        :style="$setStyles(props.elementData.styles, 'content', ['background', 'height', 'padding', 'rounded'])"
    >
        <i class="app-icon-qr_2"></i>
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

</script>

<style scoped>
@reference "tailwindcss";
@layer app {
    .balance__content {
        @apply grid grid-cols-[repeat(auto-fit,minmax(0,1fr))] min-h-0 w-full 
    }

    .balance__col {
        @apply grid items-center text-left gap-y-[.125rem]
    }

    .balance__col:last-child {
        @apply w-auto aspect-square col-[-1] place-items-center
    }

    .balance__col > i {
        @apply text-[1.5rem] leading-1
    }

    .balance__col > i::before {
        @apply !m-0
    }

    .col__lable {
        @apply font-normal text-[.75rem] leading-[.75rem]
    }
    .col__data {
        @apply font-medium text-[.875rem] leading-[.875rem]
    }    
}
</style>