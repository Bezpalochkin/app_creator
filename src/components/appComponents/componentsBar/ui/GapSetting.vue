<template>
<div class="setting__container">
    <div class="label">{{ label }}</div>
    <div class="input__group">
        <InputGroup>
            <InputGroupAddon>
                <i class="pi pi-table"></i>
            </InputGroupAddon>
            <InputNumber 
                mode="decimal"
                showButtons
                :min="0"
                :max="100"
                :model-value="singleValue"
                @update:model-value="updateSingleValue"
                :placeholder="hasMixedValues ? 'Смешанные' : ''"
                size="small" 
                :disabled="appStore.getForbiddenEdit"
            />
            <InputGroupAddon>
                px
            </InputGroupAddon>
        </InputGroup>
        <Button 
            icon="pi pi-expand" 
            severity="secondary" 
            size="small" 
            variant="text"
            @click="singleToggle"
        />         
    </div>
    <div 
        v-if="!single"
        class="expand__content"
    >
        <InputGroup class="expand__input">
            <InputGroupAddon>
                <i class="pi pi-arrows-v"></i>
            </InputGroupAddon>
            <InputNumber 
                mode="decimal"
                showButtons
                :min="0"
                :max="100"
                :model-value="modelValue.x"
                @update:model-value="updateCorner('x', $event)"
                size="small" 
                :disabled="appStore.getForbiddenEdit"
            />
        </InputGroup>
        <InputGroup class="expand__input">
            <InputGroupAddon>
                <i class="pi pi-arrows-h"></i>
            </InputGroupAddon>
            <InputNumber 
                mode="decimal"
                showButtons
                :min="0"
                :max="100"
                :model-value="modelValue.y"
                @update:model-value="updateCorner('y', $event)"
                size="small" 
                :disabled="appStore.getForbiddenEdit"
            />
        </InputGroup>
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

const single = ref(true)

const singleToggle = () => {
    single.value = !single.value
}

const hasMixedValues = computed(() => {
    const values = Object.values(props.modelValue)
    return !values.every(val => val === values[0])
})

// Вычисляемое свойство для единого значения (когда все углы одинаковые)
const singleValue = computed({
    get: () => {
        const values = Object.values(props.modelValue)
        // Проверяем, все ли значения одинаковые
        const allEqual = values.every(val => val === values[0])
        return allEqual ? values[0] : ''
    },
    set: (newValue) => {
        // Устанавливаем одинаковое значение для всех углов
        const newObject = {
            x: newValue,
            y: newValue,
        }
        emit('update:modelValue', newObject)
    }
})

const emit = defineEmits(['update:modelValue'])

// Обновление отдельного угла
const updateCorner = (corner, value) => {
    const newValue = {
        ...props.modelValue,
        [corner]: value
    }
    emit('update:modelValue', newValue)
}

// Обновление единого значения
const updateSingleValue = (newValue) => {
    singleValue.value = newValue
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