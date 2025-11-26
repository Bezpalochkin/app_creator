<template>
<aside>
  <div class="bar__header">
    <span>{{ getLabel(props.type) }}</span>
    <Button
      v-if="props.type === 'content'"
      variant="text"
      severity="contrast"
      icon="pi pi-plus"
      size="small"
      rounded
      @click="onAddContent"
    />
  </div>
  <ComponentVariants
    v-if="props.type === 'components'"
  />
  <ComponentSettings
    v-if="props.type === 'settings'"
  />
  <ContentSettings
    v-if="props.type === 'content'"
  />
</aside>
</template>

<script setup>
import ComponentVariants from '@c/appComponents/componentsBar/ComponentVariants.vue'
import ComponentSettings from '@c/appComponents/componentsBar/ComponentSettings.vue'
import ContentSettings from '@c/appComponents/componentsBar/ContentSettings.vue'

const props = defineProps({
    type: {
        type: String,
        required: true
    }
})

const emit = defineEmits(['add-content'])

const getLabel = (type) => {
    const labels = {
        components: 'Компоненты',
        settings: 'Настройки',
        content: 'Контент'
    }
    return labels[type] || type
}

const onAddContent = () => {
    emit('add-content')
}
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
    @apply sticky top-0 w-full grid grid-rows-1 grid-cols-[1fr_2rem]
    items-center p-[1rem] font-medium bg-(--pb-surface-color) z-10
  }
}
</style>