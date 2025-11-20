<template>
<div class="selection__frame">

</div>
</template>

<script setup>

</script>

<style scoped>
@reference "tailwindcss";
@layer app {
    .selection__frame {
        @apply absolute top-0 left-0 w-full h-full border-4 border-(--pb-primary-color)
    }
}
</style>