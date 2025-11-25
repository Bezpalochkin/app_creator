<template>
<div class="mockup">
    <div class="phone">
        <PhoneLeftMenu 
            v-if="props.data.settings.showLeftMenu"
            :elementData="props.data"
        />
        <StatusBar/>
        <BurgerButton/>
        <div class="screen">
            <Draggable
                class="phone__content"
                v-model="screenContent"
                ghost-class="dragged__placeholder"
                item-key="name"
                :handle="'.drag__handle'"
            >              
                <template #item="{element, index}">
                    <ContentBlock
                        v-if="element.variant"
                        :elementData="element"
                        :index="index"
                        @click="mockupStore.editedComponentToggle(element)"
                    />
                </template>
            </Draggable>
        </div>
        <PhoneNavbar
            v-if="mockupStore.getNavbar.variant"
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
import PhoneLeftMenu from '@c/mockupComponents/contentBlocks/PhoneLeftMenu.vue'

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

console.log('props.data', props.data)

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
        @apply relative grid place-items-center p-[.375rem] rounded-[3rem]
        z-20 scale-68 origin-center border-[2px] border-[#CBD5E1] bg-(--pb-surface-color)
        overflow-clip
    }

    .phone {
        scrollbar-width: none;
        -ms-overflow-style: none;
        @apply relative flex flex-col w-[390px] h-[844px] items-start rounded-[2.5rem] 
        border-[6px] border-[#CBD5E1] overflow-clip box-content
    }

    .screen {
        @apply relative w-full h-fit grid overflow-y-auto pb-[6rem]
    }

    .screen::-webkit-scrollbar {
        display: none;
    }    

    .phone__content {
        @apply flex flex-col items-start justify-start w-full
    }
}
</style>