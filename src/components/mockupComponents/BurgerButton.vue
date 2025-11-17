<template>
<div
    class="burger__container"
>
    <Button
        variant="text"
        severity="contrast"
        icon="pi pi-bars"
        size="small"
    />
</div>
</template>

<script setup>
import { Button } from 'primevue';


</script>

<style scoped>
@reference "tailwindcss";
@layer app {
    .burger__container {
        @apply w-full h-[1.5rem] px-[1rem] flex flex-row justify-start
    }    
}
</style>