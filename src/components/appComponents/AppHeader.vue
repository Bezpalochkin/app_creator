<template>
<header>
    <div class="logo__container">
        <img :src="logo" alt="">
    </div>
    <div class="content__container"></div>
    <div 
        class="buttons__container"
    >
        <Button
            label="Утвердить дизайн"
            severity="secondary"
            size="small"
            :disabled="appStore.getForbiddenEdit"
            @click="mockupStore.saveData(true)"
        />
        <Button
            label="Сохранить"
            severity="info"
            size="small"
            :disabled="disableSaveBtn"
            @click="mockupStore.saveData()"
        />
    </div>
</header>
</template>

<script setup>
import { computed } from 'vue'
import logo from '@a/pb_logo_symbol_dark.svg'
import { useAppStore } from '@s/appStore'
import { useMockupStore } from '@s/mockupStore'

const appStore = useAppStore()
const mockupStore = useMockupStore()

const disableSaveBtn = computed(() => {
    return appStore.getForbiddenEdit
})
</script>

<style scoped>
@reference "tailwindcss";
@layer app {
    header {
        @apply grid grid-rows-1 grid-cols-[4rem_1fr_auto] w-full h-[4rem]
        rounded-[1rem] bg-(--pb-surface-color) shadow-(--aside-shadow)
    }

    .logo__container {
        @apply grid place-items-center object-contain p-[.5rem]
    }

    .buttons__container {
        @apply flex flex-row items-center justify-end gap-x-[1rem] w-fit pr-[1rem]
    }    
}
</style>