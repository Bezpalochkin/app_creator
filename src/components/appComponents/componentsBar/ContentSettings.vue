<template>
<div class="contentbar__content">
    <Draggable
        class="menu__items"
        v-model="contentItems"
        ghost-class="dragged__placeholder"
        item-key="label"
    >              
        <template #item="{element, index}">
            <SelectContentVariant
                :element="element"
                :index="index"
                @update:element="onElementUpdate(index, $event)"
                @delete="onElementDelete"
            />
        </template>
    </Draggable>
</div>
</template>

<script setup>
import { computed } from 'vue'
import { useMockupStore } from '@s/mockupStore'
import Draggable from 'vuedraggable'

const mockupStore = useMockupStore()

const contentItems = computed({
    get: () => {
        return mockupStore.editedComponent?.variant?.content || []
    },
    set: (value) => {
        if (mockupStore.editedComponent?.variant) {
            mockupStore.editedComponent.variant.content = value
        }
    }
})

const onElementUpdate = (index, updatedElement) => {
    if (mockupStore.editedComponent?.variant?.content) {
        mockupStore.editedComponent.variant.content[index] = updatedElement
    }
}

const onElementDelete = (index) => {
    if (mockupStore.editedComponent?.variant?.content) {
        mockupStore.editedComponent.variant.content.splice(index, 1)
    }
}

</script>

<style scoped>
@reference "tailwindcss";
@layer app {
    .contentbar__content {
        @apply w-full min-h-0 grid grid-cols-1 grid-rows-[repeat(auto-fit,minmax(0,auto))]
        gap-y-[1rem] items-start p-[1rem]
    }

    .menu__items {
        @apply grid grid-cols-1 grid-rows-[repeat(auto-fit,minmax(0,auto))] gap-y-[1rem]
    }
}
</style>