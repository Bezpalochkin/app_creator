<template>
<div 
    class="balance"
    :style="$setStyles(props.data.variant.styles, 'layout', 'all')"
>
    <SplitBalanceCard 
        v-if="data.variant.name === 'splitBalanceCard'"
        :elementData="props.data.variant"
    />
    <BalanceWithQr
        v-if="data.variant.name === 'balanceWithQr'"
        :elementData="props.data.variant"
    />
    <BalanceWithLogo
        v-if="data.variant.name === 'balanceWithLogo'"
        :elementData="props.data.variant"    
    />
    <SplitBalanceWithLogo
        v-if="data.variant.name === 'splitBalanceWithLogo'"
        :elementData="props.data.variant"    
    />
</div>
</template>

<script setup>
import SplitBalanceCard from '@c/mockupComponents/contentBlocks/balance/SplitBalanceCard.vue'
import BalanceWithQr from '@c/mockupComponents/contentBlocks/balance/BalanceWithQr.vue'
import BalanceWithLogo from '@c/mockupComponents/contentBlocks/balance/BalanceWithLogo.vue'
import SplitBalanceWithLogo from '@c/mockupComponents/contentBlocks/balance/SplitBalanceWithLogo.vue'

const props = defineProps({
    data: {
        type: Object,
        required: true
    }
})
</script>

<style scoped>
@reference "tailwindcss";
@layer app {
}
</style>