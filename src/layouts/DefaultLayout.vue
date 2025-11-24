<template>
  <div class="main-container">
      <AppHeader/>
      <div class="content">
        <NavigationSidebar/>
        <RouterView />
      </div>
  </div>
</template>
  
<script setup>
import { watch, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useAppStore } from '@s/appStore'

import NavigationSidebar from '@c/appComponents/navigationSidebar/NavigationSidebar.vue'
import AppHeader from '@c/appComponents/AppHeader.vue'

const route = useRoute()
const appStore = useAppStore()

// Функция инициализации
const initializeApp = async () => {
    // Пробуем получить organizationId из params или query
    const organizationId = route.params.organizationId || route.query.organizationId
    
    if (!organizationId) {
        return
    }
    console.log('initializeApp if start')
    // Инициализируем только если organizationId изменился
    if (appStore.organizationId !== organizationId) {
        console.log('initializeApp appStore.initialize')
        await appStore.initialize(organizationId)
    }
}

// Инициализация при монтировании (await делает компонент асинхронным для Suspense)
onMounted(() => initializeApp())

// Следим за изменением organizationId в маршруте
watch(
    () => route.params.organizationId || route.query.organizationId,
    async (newId) => {
        if (newId && appStore.organizationId !== newId) {
            await appStore.initialize(newId)
        }
    }
)
</script>

<style scoped>
@reference "tailwindcss";
@layer app {
  .main-container {
    @apply grid grid-cols-1 grid-rows-[4rem_1fr] w-full h-full gap-y-[.5rem];
  }

  .content {
    @apply grid grid-rows-1 grid-cols-[4rem_1fr] min-h-0 h-full gap-x-[.5rem]
  }
}
</style>