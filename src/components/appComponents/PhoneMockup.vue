<template>
<div class="mockup">
    <div class="phone__container">
        <StatusBar/>
        <Draggable
            class="phone__content"
            v-model="screenContent"
            ghost-class="dragged__placeholder"
            :move="checkMove"
            item-key="name"
            :handle="'.drag__handle'"
        >
            <template #item="{element}">
                <ContentBlock
                    :elementData="element"
                    @click="mockupStore.editedComponentToggle(element)"
                />            
            </template>
        </Draggable>
        <PhoneNavbar
            :elementData="mockupStore.getNavbar"
            @click="mockupStore.editedComponentToggle(mockupStore.getNavbar)"
        />
    </div>
</div>
</template>

<script setup>
import { computed } from 'vue'
import Draggable from 'vuedraggable'
import StatusBar from '@c/mockupComponents/StatusBar.vue'
import PhoneNavbar from '@c/mockupComponents/contentBlocks/phoneNavbar/PhoneNavbar.vue'
import ContentBlock from '@c/mockupComponents/contentBlocks/ContentBlock.vue'

import { useMockupStore } from '@s/mockupStore'

const mockupStore = useMockupStore()

const props = defineProps({
    data: {
        type: Object,
        required: true
    }
})

const screenContent = computed({
    get: () => props.data.content,
    set: (value) => {
        // Находим текущий экран в хранилище и обновляем его контент
        const screenKey = Object.keys(mockupStore.screens).find(
            key => mockupStore.screens[key] === props.data
        )
        if (screenKey) {
            mockupStore.screens[screenKey].content = value
        }
    }
})

const checkMove = (evt) => {
    // console.log('checkMove', {
    //     dragged: evt.draggedContext.element.settings.draggable,
    //     related: evt.relatedContext.element?.settings?.draggable
    // })
    
    // Запрещаем перетаскивание, если сам элемент нельзя перемещать
    if (!evt.draggedContext.element.settings.draggable) {
        return false
    }
    
    // Запрещаем перетаскивание на место элемента, который нельзя перемещать
    if (evt.relatedContext.element && !evt.relatedContext.element.settings.draggable) {
        return false
    }
    
    return true
}
</script>

<style scoped>
@reference "tailwindcss";
@layer app {
    .mockup {
        @apply grid place-items-center w-[402px] h-[856px] p-[.375rem] rounded-[3rem]
        z-20 scale-68 origin-center border-[2px] border-[#CBD5E1] bg-(--pb-surface-color)
    }

    .phone__container {
        scrollbar-width: none;
        -ms-overflow-style: none;
        @apply relative flex flex-col w-full h-full items-start rounded-[2.5rem] 
        border-[6px] border-[#CBD5E1] overflow-x-clip overflow-y-auto
    }

    .phone__container::-webkit-scrollbar {
        display: none;
    }

    .phone__content {
        @apply flex flex-col items-start justify-start w-full
    }
}
</style>