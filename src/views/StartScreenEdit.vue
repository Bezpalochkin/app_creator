<template>
<div class="screen__content">
    <PhoneMockup/>
</div>
</template>

<script setup>
import PhoneMockup from '@c/appComponents/PhoneMockup.vue'

</script>

<style scoped>
@reference "tailwindcss";
@layer app {
    .screen__content {
        @apply flex flex-row items-center justify-center
        w-[40rem] h-full overflow-clip
    }
}
</style>