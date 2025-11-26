<template>
<MainLoader
    v-if="appStore.isLoading"
/>
<RouterView 
    v-else
    v-slot="{ Component }"
>
    <template v-if="Component">
        <component :is="Component" :key="route.name"/>
    </template>
</RouterView>
</template>

<script setup>
import { onMounted, onBeforeUnmount } from 'vue'
import { useAppStore } from '@s/appStore'
import { useMockupStore } from '@s/mockupStore'
import MainLoader from '@c/appComponents/ui/MainLoader.vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const appStore = useAppStore()
const mockupStore = useMockupStore()

// Обработчик для проверки несохраненных изменений при закрытии страницы
const handleBeforeUnload = (e) => {
    if (mockupStore.hasUnsavedChanges) {
        // Стандартное сообщение для браузера
        e.preventDefault()
        e.returnValue = 'У вас есть несохраненные изменения. Вы уверены, что хотите покинуть страницу?'
        return e.returnValue
    }
}

onMounted(async () => {
    // Ждем следующего тика, чтобы все store успели инициализироваться
    await nextTick()
    
    // Инициализируем сохраненное состояние при монтировании
    mockupStore.initSavedState()
    
    // Добавляем обработчик beforeunload
    window.addEventListener('beforeunload', handleBeforeUnload)
})

onBeforeUnmount(() => {
    // Удаляем обработчик beforeunload
    window.removeEventListener('beforeunload', handleBeforeUnload)
})
</script>

<style scoped>

</style>