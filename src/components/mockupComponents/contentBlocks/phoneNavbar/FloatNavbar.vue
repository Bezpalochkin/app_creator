<template>
<div 
    id="fixed__navbar"
    class="navbar__container"
    :style="$setStyles(props.data.styles, 'layout', 'all')"
>
    <PhoneNavbarItem
        v-for="item in props.data.content"
        :itemData="item"
        :itemStyles="props.data.styles"
    />  
</div>
</template>

<script setup>
import PhoneNavbarItem from '@c/mockupComponents/contentBlocks/phoneNavbar/ui/PhoneNavbarItem.vue'
import { useMockupStore } from '@s/mockupStore'

const mockupStore = useMockupStore()

const props = defineProps({
    data: {
        type: Object,
        required: true,
        default: {}
    }
})
</script>


<style scoped>
@reference "tailwindcss";
@layer app {
    .navbar__container {
        @apply grid grid-rows-1 grid-cols-[repeat(auto-fit,minmax(0,auto))]
        w-[calc(100%-2rem)]
    }
}
</style>