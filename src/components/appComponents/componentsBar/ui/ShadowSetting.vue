<template>
<div class="setting__container">
    <div class="label">{{ label }}</div>
    <div class="input__group">
        <SelectButton 
            :model-value="modelValue"
            :options="variants"
            optionLabel="variant"
            size="small"
            class="shadow__select"
            @update:model-value="updateValue"
            fluid
            :disabled="appStore.getForbiddenEdit"
        />
    </div>
</div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useAppStore } from '@s/appStore'

const appStore = useAppStore()

const props = defineProps({
    modelValue: {
        type: [String, Object],
        default: ''
    },
    label: {
        type: String,
        default: 'Цвет'
    }
})

const variants = ref([
    { variant: 'Нет', value: 'none' },
    { variant: 'S', value: '0 2px 6px 0 rgba(0, 0, 0, 0.15)' },
    { variant: 'M', value: '0 4px 12px 0 rgba(0, 0, 0, 0.15)' },
    { variant: 'L', value: '0 6px 10px 0 rgba(0, 0, 0, 0.25)' }
])

const emit = defineEmits(['update:modelValue'])

const updateValue = (newValue) => {
    emit('update:modelValue', newValue)
}

</script>

<style scoped>
@reference "tailwindcss";
@layer app {
    .setting__container {
        @apply flex flex-col gap-y-[.5rem] w-full 
    }

    .label {
        @apply text-[.875rem] font-medium
    }

    .input__group {
        @apply flex flex-row w-full flex-wrap items-center gap-[.5rem]
    }

    .shadow__select {
        @apply w-full
    }
}
</style>