<template>
<div class="mockup">
    <div class="phone__container">
        <StatusBar/>
        <div class="phone__content">
        
            <BurgerButton/>
        </div>
    </div>
</div>
</template>

<script setup>
import StatusBar from '@c/mockupComponents/StatusBar.vue'
import BurgerButton from '@c/mockupComponents/BurgerButton.vue'
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
        @apply flex flex-col w-full h-full items-start rounded-[2.5rem] border-[6px] border-[#CBD5E1]
    }

    .phone__container::-webkit-scrollbar {
        display: none;
    }
}
</style>