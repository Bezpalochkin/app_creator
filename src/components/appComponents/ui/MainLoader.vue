<template>
    <div class="w-full h-screen grid place-items-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="74" viewBox="0 0 64 74" fill="none">
            <g clip-path="url(#clip0_2466_9365)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M63.2707 18.9115L32.0054 0.839966L0.73999 18.9115V55.0829L32.0054 73.1545L63.2707 55.0829V18.9115Z" fill="black"/>
                <path class="white-element-2" fill-rule="evenodd" clip-rule="evenodd" d="M28.4403 43.1898C28.4119 42.8625 28.3693 42.5496 28.3124 42.2223C28.2982 42.1084 28.284 41.9945 28.2556 41.8807C28.0992 41.0127 27.8861 40.1447 27.616 39.3052C27.6019 39.2483 27.5734 39.1914 27.5592 39.1344C27.4313 38.7502 27.2892 38.366 27.1329 37.9818C27.1187 37.9391 27.1044 37.8965 27.076 37.8538C26.5502 36.5589 25.8965 35.3493 25.1433 34.2963C24.1058 32.8308 22.9121 31.6496 21.6188 30.9524L0.727783 18.8857V25.3175L16.1047 34.2252L20.0555 36.5163C22.0452 37.6545 23.6653 40.5716 23.6653 42.8626C23.6653 44.9686 22.301 45.9078 20.5245 45.1536L0.741995 33.6988V40.2443L21.633 52.311C22.102 52.5671 22.571 52.7521 23.0257 52.8517C23.6937 53.0082 24.3332 53.0082 24.9301 52.8517C27.076 52.297 28.5398 48.6398 28.5398 44.7978C28.5398 44.3709 28.4971 43.9868 28.4687 43.5599L28.4403 43.1898Z"/>
                <path class="white-element-1" fill-rule="evenodd" clip-rule="evenodd" d="M31.9932 43.4318L56.3518 29.2733C56.508 29.1879 56.6645 29.1311 56.8208 29.0599C58.5832 28.3201 59.9614 29.245 59.9614 31.3508C59.9614 33.6418 58.3414 36.5589 56.3518 37.6972L31.9932 51.7134V58.3445L56.3518 44.1859C56.508 44.1007 56.6645 44.0436 56.8208 43.9725C58.5832 43.2184 59.9614 44.1575 59.9614 46.2635C59.9614 48.5545 58.3414 51.4712 56.3518 52.6096L31.9932 66.6259V73.1006L63.2588 55.0289V18.8857L31.9932 36.9716V43.4318Z"/>
            </g>
            <defs>
                <clipPath id="clip0_2466_9365">
                    <rect width="64" height="74" fill="white"/>
                </clipPath>
            </defs>
        </svg>      
    </div>
</template>

<script setup>

</script>

<style>
.white-element-1, .white-element-2 {
    fill: transparent;
    stroke: white;
    stroke-width: 1;
    stroke-dasharray: 1000;
    stroke-dashoffset: 1000;
    animation: drawAndFill 2s ease-in-out infinite;
}

.white-element-1 {
    animation-delay: 1s; /* Первый элемент с задержкой */
}

.white-element-2 {
    animation-delay: 0s; /* Второй элемент без задержки */
}

@keyframes drawAndFill {
    0% {
    stroke-dashoffset: 1000;
    fill: transparent;
    }
    70% {
    stroke-dashoffset: 0;
    fill: white;
    }
    100% {
    stroke-dashoffset: 0;
    fill: white;
    }
}
</style>