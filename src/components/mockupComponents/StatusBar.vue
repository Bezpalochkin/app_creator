<template>
<div
    class="status__bar"
>
    <img :src="statusBar">    
</div>
</template>

<script setup>
import statusBar from '@a/status-bar.svg'

</script>

<style scoped>
@reference "tailwindcss";
@layer app {
    .status__bar {
        @apply sticky top-0 left-0 w-full h-[50px] grid place-items-center z-100
    }    
}
</style>