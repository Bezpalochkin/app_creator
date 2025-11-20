<template>
<div 
    class="balance__content"
    :style="$setStyles(props.elementData.styles, 'content', ['gap', 'color'])"
>
    <div 
        v-for="col in balanceCols"
        class="balance__col"
        :style="$setStyles(props.elementData.styles, 'content', ['background', 'height', 'padding', 'rounded'])"
    >
        <div 
            v-for="row in col.items"
            class="row__data"
        >
            <div 
                v-if="row.label"
                class="row__lable"
            >
                {{ row.label }}
            </div>
            <div 
                v-if="row.value"
                class="row__value"
            >
                {{ row.value }}
            </div>
            <div
                v-if="row.img"
                class="row__img__container"
            >
                <img :src="row.img" alt="">
            </div>
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
    console.log('balanceCols', props.elementData.content.filter(el => el.show))
    return props.elementData.content.filter(el => el.show)
})
</script>

<style scoped>
@reference "tailwindcss";
@layer app {
    .balance__content {
        @apply grid grid-cols-[1fr_7.5rem] grid-rows-1 min-h-0 w-full 
    }

    .balance__col {
        @apply grid items-center text-left gap-y-[.125rem]
    }

    .balance__col > i {
        @apply text-[1.5rem] leading-1
    }

    .balance__col > i::before {
        @apply !m-0
    }

    .row__data {
        @apply grid grid-cols-[repeat(auto-fit,minmax(0,1fr))] w-full h-full items-center
    }

    .row__lable {
        @apply font-normal text-[.75rem] leading-[.75rem]
    }

    .row__value {
        @apply font-medium text-[.875rem] leading-[.875rem]
    }

    .row__img__container {
        @apply grid place-items-center w-full h-full object-contain
    }

    .row__img__container img {
        @apply w-full
    }
}
</style>