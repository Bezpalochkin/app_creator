import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useMockupStore = defineStore('mockupStore', () => {
    const screens = ref({
        mainScreen: {
            settings: {

            },
            content: [
                {
                    name: 'balance'
                },
            ]
        }
    })

    return {
        screens,
        getScreens: computed(() => screens.value)
    }
})