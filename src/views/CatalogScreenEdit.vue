<template>
<div class="screen__content">
    <PhoneMockup
        :data="screenData"
        class="bg-[#f2f2f2]"
    />
</div>
</template>

<script setup>
import { computed, onBeforeMount } from 'vue'
import PhoneMockup from '@c/appComponents/PhoneMockup.vue'
import { useMockupStore } from '@s/mockupStore'

const mockupStore = useMockupStore()

const screenData = computed(() => {
    return mockupStore.getScreens.catalogScreen
})

mockupStore.editedComponentToggle(null)
</script>

<style scoped>
@reference "tailwindcss";
@layer app {
    .screen__content {
        @apply flex flex-row items-center justify-center
        w-[40rem] h-full overflow-clip
    }
}
</style>