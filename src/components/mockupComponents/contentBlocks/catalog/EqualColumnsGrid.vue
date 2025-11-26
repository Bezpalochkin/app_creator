<template>
<div 
    class="variant__content"
    :style="$setStyles(props.elementData.styles, 'layout', ['gap', 'color'])"
>
    <ContentCard
        v-for="column in elementData.content"
        :style="`
            width: ${elementWidth};
        `"
        :data="column"
        :cardType="props.elementData.settings.cardType"
        :cardStyles="props.elementData.styles"
    />
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

const elementWidth = computed(() => {
    const gap = props.elementData.styles.find(el => el.category === 'layout' && el.type === 'gap').value.x
    const cols = props.elementData.styles.find(el => el.category === 'layout' && el.type === 'colsInRow').value

    return `calc((100% - (${gap}px * ${cols - 1})) / ${cols})`
})
</script>

<style scoped>
@reference "tailwindcss";
@layer app {
    .variant__content {
        @apply w-full h-auto flex flex-row flex-wrap
    }   
}
</style>