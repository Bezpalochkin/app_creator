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
    { variant: 'Нет', value: 0 },
    { variant: '8px', value: 8 },
    { variant: '16px', value: 16 },
    { variant: '24px', value: 24 }
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
        @apply flex flex-row w-full items-center gap-x-[.5rem]
    }

    .expand__content {
        @apply flex flex-row flex-wrap w-full gap-[.5rem]
    }

    .expand__input {
        @apply w-[calc((100%-.5rem)/2)]
    }

    ::v-deep(.p-inputgroupaddon) {
        @apply p-[.25rem]
    }
}
</style>