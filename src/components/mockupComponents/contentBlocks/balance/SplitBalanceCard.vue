<template>
<div 
    class="balance__content"
    :style="$setStyles(props.elementData.styles, 'content', 'all')"
>
    <div 
        v-for="col in balanceCols"
        class="balance__col"
        :style="$setStyles(props.elementData.styles, 'content', 'all')"
    >
        <div class="col__lable">
            {{ col.label }}
        </div>
        <div class="col__data">
            {{ col.value }}
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

</script>

<style scoped>
@reference "tailwindcss";
@layer app {
    .balance__content {
        @apply grid grid-cols-[repeat(auto-fit,minmax(0,1fr))] min-h-0 w-full 
    }

    .balance__col {
        @apply grid  gap-y-[.5rem] text-center
    }

    .balance__col:not(:last-child) {
        @apply border-r-1 border-[#E0E0E0]
    }

    .col__lable {
        @apply font-normal text-[.75rem] leading-[.75rem]
    }
    .col__data {
        @apply font-medium text-[.875rem] leading-[.875rem]
    }
}
</style>