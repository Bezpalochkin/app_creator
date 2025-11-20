<template>
<div 
    class="navbar"
    :style="$setStyles(props.elementData.variant.styles, 'base', 'all')"
>
    <FixedNavbar
        v-if="elementData.variant.name === 'fixedNavbar'"
        :data="elementData.variant"
    />
    <FloatNavbar
        v-if="elementData.variant.name === 'floatNavbar'"
        :data="elementData.variant"
    />
</div>
</template>

<script setup>
import FixedNavbar from '@c/mockupComponents/contentBlocks/phoneNavbar/FixedNavbar.vue'
import FloatNavbar from '@c/mockupComponents/contentBlocks/phoneNavbar/FloatNavbar.vue'

const props = defineProps({
    elementData: {
        type: Object,
        required: true
    }
})
</script>

<style scoped>
@reference "tailwindcss";
@layer app {
    .navbar {
        @apply absolute bottom-0 left-[50%] -translate-x-[50%] 
        grid grid-cols-1 grid-rows-1 items-start justify-items-center w-full z-40
    }      
}
</style>