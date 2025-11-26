<template>
<div class="setting__container">
    <div class="label">{{ label }}</div>
    <div class="input__group">
        <InputNumber 
            mode="decimal"
            showButtons
            buttonLayout="horizontal"
            :min="1"
            :max="4"
            :step="1"
            :model-value="modelValue"
            @update:model-value="updateValue"
            size="small"
            :disabled="appStore.getForbiddenEdit"
        >
            <template #incrementbuttonicon>
                <span class="pi pi-plus" />
            </template>
            <template #decrementbuttonicon>
                <span class="pi pi-minus" />
            </template>
        </InputNumber>      
    </div>
</div>
</template>

<script setup>
import { useAppStore } from '@s/appStore'

const appStore = useAppStore()

const props = defineProps({
    modelValue: {
        type: [Number],
        default: ''
    },
    label: {
        type: String,
        default: 'Цвет'
    }
})

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
        @apply grid w-full items-center gap-x-[.5rem]
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