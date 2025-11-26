<template>
<div class="setting__container">
    <InputGroup>
        <InputGroupAddon>
            <i class="pi pi-arrows-alt"></i>
        </InputGroupAddon>
        <Select 
            v-model="selectedVariant"
            :options="contentItemsVariant"
            optionLabel="label"
        />
        <InputGroupAddon>
            <Button 
                variant="text"
                severity="danger"
                icon="pi pi-trash"
                @click="onDelete"
            />
        </InputGroupAddon>
    </InputGroup>
</div>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
    element: {
        type: Object,
        default: () => ({})
    },
    index: {
        type: Number,
        default: 0
    }
})

const emit = defineEmits(['update:element', 'delete'])

const contentItemsVariant = ref([
    {
        label: 'Профиль',
        icon: 'app-icon-user'
    },
    {
        label: 'История покупок',
        icon: 'app-icon-bag'
    },
    {
        label: 'Акции',
        icon: 'app-icon-promo'
    },
    {
        label: 'Программа лояльности',
        icon: 'app-icon-coins'
    },
    {
        label: 'Адреса',
        icon: 'app-icon-location'
    },
    {
        label: 'Каталог/меню',
        icon: 'app-icon-dinner'
    },
    {
        label: 'Контакты',
        icon: 'app-icon-contacts'
    },
        {
        label: 'Условия доставки',
        icon: 'app-icon-delivery-truck'
    },
        {
        label: 'Записаться',
        icon: 'app-icon-date'
    },
    {
        label: 'Оставить отзыв',
        icon: 'app-icon-commets_2'
    },
    {
        label: 'Промокод',
        icon: 'app-icon-promokod'
    },
    {
        label: 'Корзина',
        icon: 'app-icon-shop-cart'
    },
    {
        label: 'Код авторизации',
        icon: 'app-icon-qr_2'
    },
    {
        label: 'О компании',
        icon: 'app-icon-information'
    }
])

// Находим выбранный вариант на основе label из element
const selectedVariant = computed({
    get: () => {
        if (!props.element?.label) return null
        return contentItemsVariant.value.find(item => item.label === props.element.label) || null
    },
    set: (value) => {
        if (value) {
            emit('update:element', {
                ...props.element,
                label: value.label,
                icon: value.icon
            })
        }
    }
})

const onDelete = () => {
    emit('delete', props.index)
}
</script>

<style scoped>
@reference "tailwindcss";
@layer app {
    .setting__container {
        @apply w-full flex flex-row items-center
    }

    ::v-deep(.p-select-label) {
        @apply flex items-center
    }
}
</style>