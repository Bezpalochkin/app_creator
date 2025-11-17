<template>
<main>
    <ComponentsBar
        class="left-0"
    />
    <RouterView />
    <SettingsBar
        class="right-0"
    />    
</main>
</template>

<script setup>
import ComponentsBar from '@c/appComponents/components-bar/ComponentsBar.vue'
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