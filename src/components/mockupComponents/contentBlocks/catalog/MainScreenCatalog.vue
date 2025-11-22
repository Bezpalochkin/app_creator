<template>
<div 
    class="catalog"
    :style="$setStyles(props.data.variant.styles, 'layout', 'all')"
>
    <EqualColumnsGrid
        v-if="data.variant.name === 'equalColumnsGrid'"
        :elementData="props.data.variant"
    />
    <CheckerboardGrid
        v-if="data.variant.name === 'checkerboardGrid'"
        :elementData="props.data.variant"
    />
    <CombinationСards
        v-if="data.variant.name === 'combinationСards'"
        :elementData="props.data.variant"
    />
</div>
</template>

<script setup>
import CombinationСards from '@c/mockupComponents/contentBlocks/catalog/CombinationСards.vue'
import CheckerboardGrid from '@c/mockupComponents/contentBlocks/catalog/CheckerboardGrid.vue'
import EqualColumnsGrid from '@c/mockupComponents/contentBlocks/catalog/EqualColumnsGrid.vue'

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
}
</style>