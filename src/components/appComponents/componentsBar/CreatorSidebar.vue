<template>
<aside>
  <div class="bar__header">{{ props.type === 'components' ? 'Компоненты' : 'Настройки' }}</div>
  <ComponentVariants
    v-if="props.type === 'components'"
  />
  <ComponentSettings
    v-if="props.type === 'settings'"
  />
</aside>
</template>

<script setup>
import ComponentVariants from '@c/appComponents/componentsBar/ComponentVariants.vue'
import ComponentSettings from '@c/appComponents/componentsBar/ComponentSettings.vue'

const props = defineProps({
    type: {
        type: String,
        required: true
    }
})
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
}
</style>