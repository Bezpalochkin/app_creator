<template>
<div class="navbar__item">
    <div 
        class="item__container"
    >
        <div 
            class="item__icon"
            :class="itemData.icon"
            :style="$setStyles(props.itemStyles, 'content', 'color', { byName: 'Цвет иконки' })"
        ></div>
        <div 
            class="item__text"
            :style="$setStyles(props.itemStyles, 'content', 'color', { byName: 'Цвет текста' })"
        >{{ itemData.label }}</div>        
    </div>
</div>
</template>

<script setup>
const props = defineProps({
    itemData: {
        type: Object,
        required: true
    },
    itemStyles: {
        type: Object
    }
})
</script>

<style scoped>
@reference "tailwindcss";
@layer app {
    .navbar__item {
        @apply grow shrink-0 h-[3rem] flex flex-col justify-start items-center
    }

    .item__container {
        @apply flex flex-col items-center justify-center 
        gap-y-[.25rem] h-full text-center
    }
    
    .item__icon {
        @apply !text-[1.15rem]
    }

    .item__text {
        @apply text-[.625rem] font-normal
    }

    .item__container.special__button {
        @apply aspect-square rounded-full bg-[#2F80ED] grid grid-cols-1 place-items-center
    }

    .item__container.special__button .item__icon {
        @apply !text-[#ffffff] !text-[1.15rem]
    }
}
</style>