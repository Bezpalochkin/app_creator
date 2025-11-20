<template>
<div class="navbar">
    <Transition>
        <SelectionFrame 
            v-if="mockupStore.getEditedComponent?.name === 'navBar'"
        />
    </Transition>
</div>
</template>

<script setup>
import SelectionFrame from '@c/mockupComponents/contentBlocks/ui/SelectionFrame.vue'

import { useMockupStore } from '@s/mockupStore'

const mockupStore = useMockupStore()
</script>

<style scoped>
@reference "tailwindcss";
@layer app {
    .navbar {
        @apply absolute bottom-0 w-full h-[4rem] bg-(--pb-surfave-dim-color)
        rounded-b-[2.25rem]
    }
}
</style>