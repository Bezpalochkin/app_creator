<template>
<main>
    <CreatorSidebar
        v-if="'leftSidebar' in route.meta"
        :type="route.meta.leftSidebar"
        class="left-0"
        @add-content="handleAddContent"
    />
    <RouterView />
    <CreatorSidebar
        v-if="'rightSidebar' in route.meta"
        :type="route.meta.rightSidebar"
        class="right-0"
        @add-content="handleAddContent"
    />    
</main>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { useMockupStore } from '@s/mockupStore'
import CreatorSidebar from '@c/appComponents/componentsBar/CreatorSidebar.vue' 

const route = useRoute()
const mockupStore = useMockupStore()

const handleAddContent = () => {
  // Добавляем новый элемент в контент
  if (mockupStore.editedComponent?.variant) {
    if (!mockupStore.editedComponent.variant.content) {
      mockupStore.editedComponent.variant.content = []
    }
    
    const newItem = {
      label: '',
      icon: ''
    }
    
    mockupStore.editedComponent.variant.content.push(newItem)
  }
}
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