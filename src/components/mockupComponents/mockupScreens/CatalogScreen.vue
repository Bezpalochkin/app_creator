<template>
<div class="screen__container">
    <Draggable
        class="phone__content"
        v-model="screenContent"
        ghost-class="dragged__placeholder"
        item-key="name"
        draggable="false"
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
</template>

<script setup>
import { computed } from 'vue'
import Draggable from 'vuedraggable'
import ContentBlock from '@c/mockupComponents/contentBlocks/ContentBlock.vue'
import { useMockupStore } from '@s/mockupStore'

const mockupStore = useMockupStore()

const props = defineProps({
    screenData: {
        type: [String, Object],
        default: ''
    }
})

const screenContent = computed({
    get: () => props.screenData?.content || [],
    set: (value) => {
        // Находим текущий экран в хранилище и обновляем его контент
        const screenKey = Object.keys(mockupStore.screens).find(
            key => mockupStore.screens[key] === props.screenData
        )
        if (screenKey) {
            mockupStore.screens[screenKey].content = value
        }
    }
})
</script>

<style scoped>
@reference "tailwindcss";
@layer app {
    .screen__container {
        @apply grid w-full min-h-0
    }

    .phone__content {
        @apply grid grid-cols-1 grid-rows-[repeat(auto-fit,minmax(0,auto))]
    }
}
</style>