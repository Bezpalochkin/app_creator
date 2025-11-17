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
import { useAppStore } from '@s/appStore'
import MainLoader from '@c/appComponents/ui/MainLoader.vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const appStore = useAppStore()
</script>

<style scoped>

</style>