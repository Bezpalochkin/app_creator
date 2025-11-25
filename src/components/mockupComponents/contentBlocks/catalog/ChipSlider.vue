<template>
<div 
    class="variant__content"
>
    <!-- :style="$setStyles(props.elementData.styles, 'layout', ['gap', 'color'])" -->
    <div class="chip__slider">
        <Chip 
            v-for="(slide, index) in categoruiesNames"
            :label="slide"
        />
    </div>
</div>
</template>

<script setup>
import { ref, computed } from 'vue'

const categoruiesNames = ref(['Пицца', 'Римская пицца', 'Закуски', 'Напитки'])

</script>

<style scoped>
@reference "tailwindcss";
@layer app {
    .variant__content {
        @apply w-full
    }

    .chip__slider {
        scrollbar-width: none;
        -ms-overflow-style: none;
        @apply flex flex-row justify-start items-center w-full gap-x-[.5rem]
        overflow-x-scroll
    }

    ::v-deep(.p-chip) {
        @apply w-fit whitespace-nowrap
    }
}
</style>