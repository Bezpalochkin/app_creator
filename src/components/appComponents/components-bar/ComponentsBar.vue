<template>
<aside>
  <div class="bar__header">Компоненты</div>
  <div class="sidebr__content">
  </div>
</aside>
</template>

<script setup>

</script>

<style scoped>
@reference "tailwindcss";
@layer app {
  aside {
    scrollbar-width: none;
    -ms-overflow-style: none;
    @apply absolute top-0 w-[22rem] h-full rounded-[1rem]
    bg-(--pb-surface-color) shadow-(--aside-shadow) pb-[1rem]
    overflow-x-clip overflow-y-auto
  }

  .bar__header {
    @apply sticky top-0 w-full p-[1rem] font-medium bg-(--pb-surface-color)
    z-10
  }

  .sidebr__content {
    @apply w-full grid grid-cols-1 grid-rows-[repeat(auto-fit,minmax(0,2.5rem))]
    gap-y-[1rem] items-start p-[1rem]
  }
}
</style>