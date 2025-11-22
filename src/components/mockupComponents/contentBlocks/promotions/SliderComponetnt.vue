<template>
<div class="slider">
    <swiper
        :slides-per-view="slidePerView"
        :space-between="slidesGap"
        :pagination="true"
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
import { computed } from 'vue'
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

const slidePerView = computed(() => {
    return props.data.variant.styles.find(el => el.type === 'colsInRow').value
})

const slidesGap = computed(() => {
    return props.data.variant.styles.find(el => el.type === 'gap' && el.category === 'layout').value.x
})
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