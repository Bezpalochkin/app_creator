<template>
<div class="setting">
    <ColorPickerSetting
        v-if="isColorSetting"
        v-model="model"
        :label="props.setting.name"
    />
    <PaddingSetting
        v-if="props.setting.type === 'padding'"
        v-model="model"
        :label="props.setting.name"
    />
    <RoundedSetting
        v-if="props.setting.type === 'rounded'"
        v-model="model"
        :label="props.setting.name"
    />
    <ShadowSetting
        v-if="props.setting.type=== 'shadow'"
        v-model="model"
        :label="props.setting.name"
    />
    <ShortTextComponent
        v-if="props.setting.type=== 'text' || props.name === 'title'"
        v-model="model"
        :label="props.setting.name"
    />
    <GapSetting 
        v-if="props.setting.type=== 'gap'"
        v-model="model"
        :label="props.setting.name"
    />
    <ColsInRowSetting
        v-if="props.setting.type=== 'colsInRow'"
        v-model="model"
        :label="props.setting.name"
    />
    <HeightSetting
        v-if="isSizeSetting"
        v-model="model"
        :label="props.setting.name"
    />
    <BorderSetting
        v-if="props.setting.type=== 'border'"
        v-model="model"
        :label="props.setting.name"
    />
</div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
    setting: {
        type: [String, Object, Number],
    },
    modelValue: {
        type: [String, Object, Number],
        required: true
    }
})

console.log('setting', props.setting)


const emit = defineEmits(['update:modelValue'])

const model = computed({
    get: () => props.modelValue,
    set: (value) => emit('update:modelValue', value)
})

const isColorSetting = computed(() => props.setting.type === 'background' || props.setting.type === 'color')

const isSizeSetting = computed(() => props.setting.type === 'height' || props.setting.type === 'bottom')

const getLabel = (type) => {
    const labels = {
        background: 'Фон',
        color: 'Цвет',
        shadow: 'Тень',
        rounded: 'Скругление',
        padding: 'Внутренний отступ',
        title: 'Текст',
        gap: 'Расстояние между карточками',
        colsInRow: 'Количество карточек в ряду',
        height: 'Высота карточки',
        border: 'Обводка',
        bottom: 'Отступ снизу'
    }
    return labels[type] || type
}
</script>

<style scoped>
@reference "tailwindcss";
@layer app {
}
</style>