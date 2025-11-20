<template>
<div class="slider">
    <swiper
        :slides-per-view="2"
        :space-between="24"
    >
        <swiper-slide
            v-for="(slide, index) in data.variant.content"
            class="component__slide"
        >
            <div 
                class="slide__content"
                :style="$setStyles(props.data.variant.styles, 'layout', ['height', 'background', 'rounded', 'shadow'])"
            ></div>
        </swiper-slide>
    </swiper>
</div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const props = defineProps({
    data: {
        type: Object,
        required: true
    }
})

console.log('Slider data:', props.data)
console.log('Slider variant:', props.data.variant)
console.log('Slider styles:', props.data.variant.styles)

const modules = [Pagination]
</script>

<style scoped>
@reference "tailwindcss";
@layer app {
    .slider {
        @apply grid grid-cols-1 grid-rows-1 w-full min-h-0 
    }

    .swiper {
        @apply w-full
    }
}
</style>