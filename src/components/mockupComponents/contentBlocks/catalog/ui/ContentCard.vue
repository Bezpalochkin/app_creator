<template>
<div 
    v-if="props.cardType === 'text'"
    class="text__card"
    :style="$setStyles(styles, 'content', ['height'])"
>
    <div 
        class="image__container"
        :style="$setStyles(styles, 'content', ['background', 'rounded'])"
    >
        <img 
            v-if="props.data.img"
            src=""
        />
    </div>
    <div class="text__content">
        {{ props.cardType }}
    </div>
</div>
<div 
    v-else
    class="image__card"
    :style="$setStyles(styles, 'content', 'all')"
>
    <img src=""/>
</div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
    data: {
        type: Object,
        required: true        
    },
    cardType: {
        type: String
    },
    cardStyles: {
        type: Array,
        default: () => []
    }
})

const styles = computed(() => {
    return props.cardStyles.filter(s => s.category === 'content')
})
</script>

<style scoped>
@reference "tailwindcss";
@layer app {
    .text__card {
        @apply grid grid-cols-1 grid-rows-[auto_1.5rem] items-start gap-y-[.25rem]
    }

    .image__container {
        @apply grid grid-cols-1 grid-rows-1 w-full h-auto aspect-square 
        place-items-center object-contain overflow-clip
    }

    .image__container img {
        @apply w-full h-full
    }

    .text__content {
        @apply w-full h-[1.5rem] text-center
    }

    .image__card {
        @apply relative grid place-items-center object-contain
        bg-[#ffffff] overflow-clip
    }

    .image__card img {
        @apply w-full h-full
    }
}
</style>