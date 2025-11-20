<template>
<div class="setting__container">
    <div class="label">{{ label }}</div>
    <div class="input__group">
        <SelectButton 
            :model-value="currentWidthVariant"
            :options="variants"
            optionLabel="variant"
            size="small"
            @update:model-value="updateWidthValue"
            fluid
            :disabled="appStore.getForbiddenEdit"
        />
    </div>
    <div 
        v-if="currentWidthVariant.variant !== 'Нет'"
        class="input__group"
    >
        <InputGroup>
            <InputGroupAddon>
                <ColorPicker 
                    :model-value="modelValue.color" 
                    @update:model-value="updateColorValue"
                    class="color__picker"
                    :inline="false"
                    :disabled="appStore.getForbiddenEdit"
                />            
            </InputGroupAddon>
            <InputText 
                type="text" 
                :model-value="modelValue.color"
                @update:model-value="updateColorValue"
                size="small"
                :disabled="appStore.getForbiddenEdit"
            />
            <InputGroupAddon>
                <i class="pi pi-hashtag"></i>
            </InputGroupAddon>
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
        type: Object,
        default: () => ({ 
            width: { variant: 'Нет', value: 0 }, 
            color: '' 
        })
    },
    label: {
        type: String,
        default: 'Граница'
    }
})

console.log('border modelValue', props.modelValue)

const variants = ref([
    { variant: 'Нет', value: 0 },
    { variant: '1px', value: 1 },
    { variant: '2px', value: 2 },
    { variant: '3px', value: 3 }
])

// Вычисляемое свойство для текущего варианта ширины
const currentWidthVariant = computed(() => {
    if (props.modelValue.width && typeof props.modelValue.width === 'object') {
        return variants.value.find(v => v.value === props.modelValue.width.value) || variants.value[0]
    } else {
        // Если width не объект, а просто число (для обратной совместимости)
        return variants.value.find(v => v.value === props.modelValue.width) || variants.value[0]
    }
})

const emit = defineEmits(['update:modelValue'])

// Обновление ширины - сохраняем структуру {variant: '2px', value: 2}
const updateWidthValue = (newWidth) => {
    // newWidth - это выбранный объект из variants, например {variant: '2px', value: 2}
    const widthObject = {
        variant: newWidth.variant,
        value: newWidth.value
    }
    
    const updatedValue = {
        ...props.modelValue,
        width: widthObject
    }
    emit('update:modelValue', updatedValue)
}

// Обновление цвета
const updateColorValue = (newColor) => {
    const updatedValue = {
        ...props.modelValue,
        color: newColor
    }
    emit('update:modelValue', updatedValue)
}

// Инициализация значений по умолчанию, если их нет
if (!props.modelValue.width || (typeof props.modelValue.width === 'object' && !props.modelValue.width.variant)) {
    updateWidthValue(variants.value[0])
}
if (!props.modelValue.color) {
    updateColorValue('')
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

    ::v-deep(.p-inputgroupaddon) {
        @apply p-[.25rem]
    }
}
</style>