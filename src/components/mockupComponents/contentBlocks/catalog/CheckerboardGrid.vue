<template>
<div 
    class="variant__content"
    :style="$setStyles(props.elementData.styles, 'layout', ['gap', 'color'])"
>
    <div 
        v-for="(row, rowIndex) in rowData"
        :key="rowIndex"
        class="grid__row"
        :style="$setStyles(props.elementData.styles, 'layout', ['gap'])"
    >
        <ContentCard
            v-for="(col, colIndex) in row"
            :key="colIndex"
            :data="col"
            :cardType="props.elementData.settings.cardType"
            :cardStyles="props.elementData.styles"            
            :style="`
                ${getColumnWidth(rowIndex, colIndex)};
            `"
        />
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

const rowData = computed(() => {
    const cols = props.elementData.content || []
    const rows = []
    
    for (let i = 0; i < cols.length; i += 2) {
        rows.push(cols.slice(i, i + 2))
    }
    
    return rows
})

const getColumnWidth = (rowIndex, colIndex) => {
  const contentStyle = props.elementData.styles?.find(el => 
    el.category === 'content' && el.type === 'height'
  )
  
  if (!contentStyle?.value) return ''
  
  const isSmallColumn = (rowIndex % 2 === 0) 
    ? (colIndex % 2 === 1)
    : (colIndex % 2 === 0)
  
  return isSmallColumn ? `width: ${contentStyle.value}px` : ''
}
</script>

<style scoped>
@reference "tailwindcss";
@layer app {
    .variant__content {
        @apply w-full h-auto grid grid-cols-1 grid-rows-[repeat(auto-fit,minmax(0,1fr))]
    }

    .grid__row {
        @apply w-full grid min-h-0 h-auto
    }

    .grid__row:nth-child(odd) {
        @apply grid-rows-1 grid-cols-[1fr_auto]
    }

    .grid__row:nth-child(even) {
        @apply grid-rows-1 grid-cols-[auto_1fr]
    }
}
</style>