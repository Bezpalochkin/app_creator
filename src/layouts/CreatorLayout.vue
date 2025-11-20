<template>
<main>
    <CreatorSidebar
        v-if="'leftSidebar' in route.meta"
        :type="route.meta.leftSidebar"
        class="left-0"
    />
    <RouterView />
    <CreatorSidebar
        v-if="'rightSidebar' in route.meta"
        :type="route.meta.rightSidebar"
        class="right-0"
    />    
</main>
</template>

<script setup>
import { useRoute } from 'vue-router'
import CreatorSidebar from '@c/appComponents/componentsBar/CreatorSidebar.vue'

const route = useRoute()
</script>

<style scoped>
@reference "tailwindcss";
@layer app {
    main {
    @apply relative grid grid-rows-1 grid-cols-1 place-items-center w-full h-full
    bg-(--pb-surfave-variant-color) bg-[url('@a/workarea_pattern.svg')] rounded-[1rem]
  }
}
</style>