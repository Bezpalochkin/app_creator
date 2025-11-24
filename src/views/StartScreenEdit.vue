<template>
<div class="screen__content">
    <PhoneMockup
        :data="mockupStore.getScreens.mainScreen"
        :showSidebar="false"
    />
</div>
</template>

<script setup>
import PhoneMockup from '@c/appComponents/PhoneMockup.vue'
import { useMockupStore } from '@s/mockupStore'

const mockupStore = useMockupStore()
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