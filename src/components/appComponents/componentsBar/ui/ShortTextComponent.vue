<template>
<div class="setting__container">
    <div class="label">{{ label }}</div>
    <div class="input__group">
        <InputGroup>
            <InputGroupAddon>
                <i class="pi pi-th-large"></i>
            </InputGroupAddon>
                <InputText 
                    type="text" 
                    :model-value="modelValue"
                    @update:model-value="updateValue"
                    size="small"
                    :disabled="appStore.getForbiddenEdit"
                />
        </InputGroup>
    </div>
</div>
</template>

<script setup>
import { useAppStore } from '@s/appStore'

const appStore = useAppStore()

const props = defineProps({
    modelValue: {
        type: [String, Object],
        default: ''
    },
    label: {
        type: String,
        default: 'Текст'
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
        @apply flex flex-row w-full flex-wrap items-center gap-[.5rem]
    }
}
</style>