<template>
<div 
    class="variant"
    @click="handleClick"
>
    <img 
        :src="props.data.image" alt=""
    >
    <Tag 
        v-if="isUsed"
        severity="success" 
        icon="pi pi-check" 
        rounded
    />
</div>
</template>

<script setup>
import { computed } from 'vue'
import { useMockupStore } from '@s/mockupStore'

const props = defineProps({
    data: {
        type: Object,
        required: true
    },
    componentType: {
        type: String,
        required: true
    }
})

const mockupStore = useMockupStore()
const emit = defineEmits(['click'])

const isUsed = computed(() => {
    return mockupStore.isElementUsed(props.componentType, props.data.name)
})

const handleClick = () => {
    emit('click', props.data)
}
</script>

<style scoped>
@reference "tailwindcss";
@layer app {
    .variant {
        @apply relative grid place-items-center w-full h-[5rem] overflow-visible
        border-2 border-(--pb-surfave-variant-color) rounded-[1rem] cursor-pointer
    }

    .variant img {
        @apply w-[90%]
    }

    ::v-deep(.p-tag) {
        @apply absolute top-[2px] left-[2px] text-[.875rem] font-medium p-[.375rem]
    }
}
</style>