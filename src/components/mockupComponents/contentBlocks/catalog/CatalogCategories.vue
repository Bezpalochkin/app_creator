<template>
<div 
    class="categories"
>
    <!-- :style="$setStyles(props.data.variant.styles, 'layout', 'all')" -->
    <ChipSlider 
        v-if="data.variant.name === 'chipSlider'"
        :elementData="props.data.variant"        
    />
</div>
</template>

<script setup>
import ChipSlider from '@c/mockupComponents/contentBlocks/catalog/ChipSlider.vue'

const props = defineProps({
    data: {
        type: Object,
        required: true
    }
})
</script>

<style scoped>
@reference "tailwindcss";
@layer app {
    .categories {
        @apply w-full
    }
}
</style>