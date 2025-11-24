<template>
<div class="contentbar__content">

</div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useMockupStore } from '@s/mockupStore'

const mockupStore = useMockupStore()


</script>

<style scoped>
@reference "tailwindcss";
@layer app {
    .sidebar__content {
        @apply w-full min-h-0 grid grid-cols-1 grid-rows-[repeat(auto-fit,minmax(0,auto))]
        gap-y-[1rem] items-start p-[1rem]
    }
}
</style>