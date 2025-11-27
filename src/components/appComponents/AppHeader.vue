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
            :loading="mockupStore.isLoading"
            @click="handleSave(true)"
        />
        <Button
            label="Сохранить"
            severity="info"
            size="small"
            :disabled="disableSaveBtn"
            :loading="mockupStore.isLoading"
            @click="handleSave(false)"
        />
    </div>
</header>
</template>

<script setup>
import { computed } from 'vue'
import logo from '@a/pb_logo_symbol_dark.svg'
import { useAppStore } from '@s/appStore'
import { useMockupStore } from '@s/mockupStore'
import { useToast } from 'primevue/usetoast'

const appStore = useAppStore()
const mockupStore = useMockupStore()
const toast = useToast()

const disableSaveBtn = computed(() => {
    return appStore.getForbiddenEdit || !mockupStore.hasUnsavedChanges
})

const handleSave = async (publish = false) => {
    try {
        const result = await mockupStore.saveData(publish)
        
        if (result && result.success) {
            // Показываем успешное уведомление
            toast.add({
                severity: 'success',
                summary: publish ? 'Дизайн утвержден' : 'Сохранено',
                detail: publish 
                    ? 'Дизайн успешно утвержден и опубликован' 
                    : 'Изменения успешно сохранены',
                life: 3000
            })
        }
    } catch (error) {
        // Показываем ошибку
        toast.add({
            severity: 'error',
            summary: 'Ошибка сохранения',
            detail: 'Не удалось сохранить изменения. Попробуйте еще раз.',
            life: 5000
        })
    }
}
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