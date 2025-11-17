<template>
<aside>
    <nav>
        <RouterLink 
            v-for="link in appStore.getNavigation"
            class="sidebar__nav__item"
            active-class="nav__item__active"
            :to="{ name: link.routeName }"
        >
            <SidebarNavItem
                :data="link"
            />
        </RouterLink>
    </nav>
</aside>
</template>

<script setup>
import { useAppStore } from '@s/appStore'
import SidebarNavItem from '@c/appComponents/navigationSidebar/ui/SidebarNavItem.vue'

const appStore = useAppStore()
</script>

<style scoped>
@reference "tailwindcss";
@layer app {
    aside {
        @apply grid grid-cols-1 grid-rows-1 p-[.75rem] bg-(--pb-surfave-dim-color) rounded-[.75rem]
    }

    nav {
        @apply grid grid-cols-1 grid-rows-[repeat(auto-fit,minmax(0,2.5rem))] gap-y-[1rem] items-start
    }

    .sidebar__nav__item {
        @apply w-full h-auto grid place-items-center aspect-square rounded-[1rem]
    }     
}
</style>