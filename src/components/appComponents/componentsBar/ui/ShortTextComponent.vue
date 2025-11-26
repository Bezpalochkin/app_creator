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
        <Button 
            icon="pi pi-power-off" 
            :severity="buttonSeverity" 
            size="small" 
            variant="text"
            @click="toggleValue"
            :disabled="appStore.getForbiddenEdit"
        /> 
    </div>
</div>
</template>

<script setup>
import { computed } from 'vue'
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

const isActive = computed(() => {
    return props.modelValue && props.modelValue !== ''
})

const buttonSeverity = computed(() => {
    return isActive.value ? 'success' : 'contrast'
})

const toggleValue = () => {
    if (isActive.value) {
        emit('update:modelValue', '')
    } else {
        emit('update:modelValue', props.modelValue || 'Ваш текст')
    }
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

    ::v-deep(.p-inputgroupaddon) {
        @apply p-[.25rem]
    }

    .input__group {
        @apply flex flex-row w-full flex-nowrap items-center gap-[.5rem]
    }
}
</style>