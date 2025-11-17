<template>
<Button
    class="nav__link__button"
    size="large"
    :icon="`pi ${data.icon}`"
    v-tooltip="{
        value: `${data.label}`,
        class: 'nav__item__tooltip'
    }"
/>
</template>

<script setup>
const props = defineProps({
    data: {
        type: Object,
        required: true
    }
})
</script>

<style scoped>
@reference "tailwindcss";
@layer app {
    .nav__link__button {
        @apply w-full h-auto aspect-square border-none
    }

    .nav__link__button {
        @apply bg-(--pb-surface-color)/10 border-none
    }

    .nav__item__active .nav__link__button {
        @apply bg-(--pb-surface-color) border-none text-(--pb-primary-color)
    }

    .nav__item__tooltip {
        --tooltip-offset: 100px;
        @apply bg-(--pb-surfave-dim-color)
    }

    ::v-deep(.p-tooltip-right) {
        @apply !left-[5rem] !ml-[5rem]
    }
}
</style>