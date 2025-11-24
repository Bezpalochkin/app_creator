<template>
<div 
    class="navbar"
    :style="$setStyles(props.elementData.variant.styles, 'base', 'all')"
>
    <FixedNavbar
        v-if="elementData.variant.name === 'fixedNavbar'"
        :data="elementData.variant"
    />
    <FloatNavbar
        v-if="elementData.variant.name === 'floatNavbar'"
        :data="elementData.variant"
    />
    <Transition>
        <SelectionFrame 
            v-if="mockupStore.getEditedComponent?.name === elementData.name"
            :class="elementData.variant.name === 'fixedNavbar' ? 'rounded-b-[2.15rem]' : ''"
            :style="$setStyles(props.elementData.variant.styles, 'layout', ['rounded'])"
        />
    </Transition>      
</div>
</template>

<script setup>
import FixedNavbar from '@c/mockupComponents/contentBlocks/phoneNavbar/FixedNavbar.vue'
import FloatNavbar from '@c/mockupComponents/contentBlocks/phoneNavbar/FloatNavbar.vue'

import { useMockupStore } from '@s/mockupStore'

const mockupStore = useMockupStore()

const props = defineProps({
    elementData: {
        type: Object,
        required: true
    }
})
</script>

<style scoped>
@reference "tailwindcss";
@layer app {
    .navbar {
        @apply absolute bottom-0 left-0 
        grid grid-cols-1 grid-rows-1 items-start justify-items-center w-full z-40
    }      
}
</style>