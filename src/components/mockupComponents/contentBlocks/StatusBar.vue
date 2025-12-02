<template>
    <div class="bar__container">
        <div
            class="status__bar"
        >
            <img :src="statusBar">
        </div>
        <div 
            class="bar__contents"
        >
            <div class="title__and__controls">
                <div class="leading">
                    <i :class="`pi ${setLeadingIcon}`" style="font-size: 1rem"></i>
                </div>
                <span 
                    v-if="route.meta.screen !== 'mainScreen'"
                    class="title"
                >
                    Каталог
                </span>
                <div 
                    v-if="route.meta.screen !== 'mainScreen'"
                    class="trailing"
                >
                    <i class="app-icon-send_mail" style="font-size: 1rem"></i>
                </div>
            </div>
            <div 
                v-if="route.meta.screen === 'catalogScreen'"
                class="prompt"
            >
                <i class="app-icon-delivery-truck" style="font-size: .875rem"></i>
                <div class="prompt__container">
                    Доставка, в ближайшее время, Ленинский просп., д. 6
                </div>
                <i class="pi pi-angle-right" style="font-size: .875rem"></i>
            </div>
            <div 
                v-if="route.meta.screen === 'catalogScreen'"
                class="search"
            >
                <img :src="search">
            </div>
        </div>
</div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import statusBar from '@a/status-bar.svg'
import search from '@a/search_statusbar.svg'
import { computed } from 'vue'

const route = useRoute()

const setLeadingIcon = computed(() => {
    return route.meta.screen === 'mainScreen' ? 'pi-bars' : 'pi-chevron-left'
})

</script>

<style scoped>
@reference "tailwindcss";
@layer app {
    .bar__container {
        @apply sticky top-0 left-0 w-full grid grid-cols-1 grid-rows-[repeat(auto-fit,minmax(0,auto))]
        place-items-center z-100
    }
    
    .status__bar {
        @apply grid place-items-center object-contain w-full h-[54px]
    }

    .bar__contents {
        @apply grid grid-cols-1 grid-rows-[repeat(auto-fit,minmax(0,auto))] w-full px-[1rem]
    }

    .title__and__controls {
        @apply grid grid-cols-[4.5rem_1fr_4.5rem] items-center w-full h-[2.5rem]
    }

    .title {
        @apply grid place-items-center text-center text-[.875rem]
    }

    .trailing {
        @apply flex flex-row-reverse
    }

    .prompt {
        @apply grid grid-cols-[1rem_1fr_1rem] w-full h-[1rem] gap-x-[.5rem]
    }

    .prompt i {
        @apply grid w-[1rem] place-items-center
    }

    .prompt__container {
        @apply grid min-w-0 overflow-clip text-ellipsis whitespace-nowrap text-[.75rem] 
    }

    [class^="app-icon-"]:before {
        @apply !w-auto !m-0
    }

    .search {
        @apply grid place-items-center w-full py-[.75rem]
    }
}
</style>