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
            <div 
                class="grid__col"
                :class="getColClass(rowIndex, 0)"
                :style="$setStyles(props.elementData.styles, 'content', ['height', 'gap'])"
            >
                <ContentCard
                    v-for="(card, cardIndex) in getCardsForCol(row, rowIndex, 0)"
                    :key="cardIndex"
                    :card-data="card"
                    :style="`
                        ${$setStyles(props.elementData.styles, 'content', ['background', 'rounded', 'border', 'shadow'])};
                        height: 100%;
                    `"
                />
            </div>
            <div 
                class="grid__col"
                :class="getColClass(rowIndex, 1)"
                :style="`
                    ${$setStyles(props.elementData.styles, 'content', ['height'])};
                    ${$setStyles(props.elementData.styles, 'layout', ['gap'])};
                `"
            >
                <ContentCard
                    v-for="(card, cardIndex) in getCardsForCol(row, rowIndex, 1)"
                    :key="cardIndex"
                    :card-data="card"
                    :style="`
                        ${$setStyles(props.elementData.styles, 'content', ['background', 'rounded', 'border', 'shadow'])};
                        height: 100%;
                    `"
                />
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
    
    const rowData = computed(() => {
        const cols = props.elementData.content || []
        const rows = []
        
        for (let i = 0; i < cols.length; i += 3) {
            rows.push(cols.slice(i, i + 3))
        }
        
        return rows
    })
    
const getColClass = (rowIndex, colIndex) => {
    const isEvenRow = (rowIndex + 1) % 2 === 0
        const isOddCol = colIndex === 0
        
        if (isEvenRow) {
            return isOddCol ? 'double-cards' : 'single-card'
        } else {
            return isOddCol ? 'single-card' : 'double-cards'
        }
    }
    
const getCardsForCol = (row, rowIndex, colIndex) => {
    const isEvenRow = (rowIndex + 1) % 2 === 0
        const isOddCol = colIndex === 0
        
        if (isEvenRow) {
            if (isOddCol) {
                return row.slice(0, 2)
            } else {
                return row.length > 2 ? [row[2]] : []
            }
        } else {
            if (isOddCol) {
                return row.length > 0 ? [row[0]] : []
            } else {
                return row.slice(1, 3)
            }
        }
    }
    </script>
    
    <style scoped>
    @reference "tailwindcss";
    @layer app {
        .variant__content {
            @apply w-full h-auto flex flex-col;
        }
    
        .grid__row {
            @apply w-full grid grid-cols-2 gap-4;
        }
    
        .grid__col {
            @apply flex flex-col gap-4;
        }
    
        .grid__col.single-card {
            @apply grid-rows-1
        }

        .grid__col.double-cards {
            @apply grid-rows-2
        }
    }
    </style>