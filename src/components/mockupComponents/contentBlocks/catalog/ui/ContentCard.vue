<template>
<div class="card">
    <img src=""/>
    <div class="card__text">
    </div>
</div>
</template>

<script setup>
// const props = defineProps({
//     data: {
//         type: Object,
//         required: true        
//     }
// })
</script>

<style scoped>
@reference "tailwindcss";
@layer app {
    .card {
        @apply relative grid place-items-center object-contain
        bg-[#ffffff] overflow-clip
    }

    .card img {
        @apply w-full h-full
    }

    .card__text {
        @apply absolute top-[50%] left-[50%] -translate-[50%]
    }
}
</style>