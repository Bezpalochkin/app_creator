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
            :disabled="appStore.getForbiddenEdit || mockupStore.isLoading"
            :loading="mockupStore.isLoading"
            @click="showPublishConfirmation = true"
        />
        <Button
            label="Сохранить"
            severity="info"
            size="small"
            :disabled="disableSaveBtn || mockupStore.isLoading"
            :loading="mockupStore.isLoading"
            @click="handleSave(false)"
        />
    </div>
</header>

<!-- Диалог подтверждения публикации -->
<Dialog 
    v-model:visible="showPublishConfirmation" 
    modal 
    header="Подтверждение публикации"
    :style="{ width: '500px' }"
>
    <div class="confirmation-content">
        <p>После публикации редактирование приложения будет недоступно.</p>
        <p class="warning-text">Вы уверены, что хотите продолжить?</p>
    </div>
    <template #footer>
        <Button 
            label="Отменить" 
            severity="secondary" 
            @click="showPublishConfirmation = false" 
        />
        <Button 
            label="Продолжить" 
            severity="primary" 
            @click="handlePublish" 
            :loading="mockupStore.isLoading"
        />
    </template>
</Dialog>

<Toast />
</template>

<script setup>
import { computed, ref } from 'vue'
import { useToast } from 'primevue/usetoast'
import Dialog from 'primevue/dialog'
import logo from '@a/pb_logo_symbol_dark.svg'
import { useAppStore } from '@s/appStore'
import { useMockupStore } from '@s/mockupStore'

const appStore = useAppStore()
const mockupStore = useMockupStore()
const toast = useToast()

const showPublishConfirmation = ref(false)

const disableSaveBtn = computed(() => {
    return appStore.getForbiddenEdit || !mockupStore.hasUnsavedChanges
})

const handleSave = async (publish = false) => {
    try {
        await mockupStore.saveData(publish)
        
        // Показываем успешное уведомление
        toast.add({
            severity: 'success',
            summary: publish ? 'Дизайн утвержден' : 'Сохранено',
            detail: publish 
                ? 'Дизайн успешно утвержден и опубликован' 
                : 'Изменения успешно сохранены',
            life: 3000
        })
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

const handlePublish = async () => {
    showPublishConfirmation.value = false
    
    try {
        await mockupStore.saveData(true)
        
        // Показываем успешное уведомление
        toast.add({
            severity: 'success',
            summary: 'Дизайн утвержден',
            detail: 'Дизайн успешно утвержден и опубликован',
            life: 3000
        })
    } catch (error) {
        // Показываем ошибку
        toast.add({
            severity: 'error',
            summary: 'Ошибка публикации',
            detail: 'Не удалось опубликовать дизайн. Попробуйте еще раз.',
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

.confirmation-content {
    line-height: 1.5;
}

.warning-text {
    font-weight: 600;
    color: var(--p-danger-600);
    margin-top: 10px;
}
</style>