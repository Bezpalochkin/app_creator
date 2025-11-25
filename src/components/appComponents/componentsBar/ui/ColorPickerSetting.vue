<template>
<div class="setting__container">
    <div 
        v-if="label"
        class="label">{{ label }}
    </div>
    <div class="input__group">
        <InputGroup>
            <InputGroupAddon>
                <ColorPicker 
                    v-model="internalColorValue"
                    :inline="false"
                    defaultColor="#ffffff"
                    :disabled="appStore.getForbiddenEdit"
                    class="color__picker"
                />            
            </InputGroupAddon>
            <InputText 
                v-model="displayColorValue"
                type="text"
                :disabled="appStore.getForbiddenEdit"
                size="small"
                @blur="onInputBlur"
                @keydown.enter="onInputBlur"
            />
            <InputGroupAddon>
                <i class="pi pi-hashtag"></i>
            </InputGroupAddon>
        </InputGroup>
        <Button 
            icon="pi pi-ban" 
            severity="secondary" 
            size="small" 
            variant="text"
            @click="setTransparent"
            :disabled="appStore.getForbiddenEdit"
        />        
    </div>
</div>
</template>
    
<script setup>
import { computed, ref, watch } from 'vue'
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

const emit = defineEmits(['update:modelValue'])

// Внутреннее значение для ColorPicker
const internalColorValue = computed({
    get: () => props.modelValue === 'transparent' ? null : props.modelValue,
    set: (value) => emit('update:modelValue', value)
})

// Отображаемое значение для InputText
const displayColorValue = computed({
    get: () => props.modelValue === 'transparent' ? '' : props.modelValue,
    set: (value) => {
        if (value === '') {
            emit('update:modelValue', 'transparent')
        } else {
            emit('update:modelValue', value)
        }
    }
})

// Обработчик потери фокуса или нажатия Enter
const onInputBlur = (event) => {
    const value = event.target.value.trim()
    if (value === '') {
        emit('update:modelValue', 'transparent')
    }
}

// Метод для установки прозрачного цвета
const setTransparent = () => {
    emit('update:modelValue', 'transparent')
}

// Следим за изменениями modelValue извне
watch(() => props.modelValue, (newValue) => {
    if (newValue === 'transparent') {
        // Принудительно обновляем отображаемое значение
        displayColorValue.value = ''
    }
})
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

    .color__picker {
        @apply flex w-[1.25rem] h-[1.25rem]
    }

    ::v-deep(.p-colorpicker-preview) {
        @apply w-[1.25rem] h-[1.25rem]
    }

    ::v-deep(.p-inputgroupaddon) {
        @apply p-[.25rem]
    }

    ::v-deep(.p-inputnumber-input) {
        @apply text-center
    }
}
</style>