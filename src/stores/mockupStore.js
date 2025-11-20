import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useMockupStore = defineStore('mockupStore', () => {
    const editedComponent = ref(null)
    
    const screens = ref({
        baseSettingsScreen: {

        },
        splashScreen: {

        },
        mainScreen: {
            settings: {
                showNavbar: true,
            },
            content: [
                // {
                //     name: 'burgerButton',
                //     settings: {
                //         draggable: false
                //     },
                //     variant: {
                //         name: "splitBalanceCard",
                //         styles: {
                //             card: {
                //                 background: '',
                //                 shadow: { 
                //                     variant: 'Нет', 
                //                     value: 'none' 
                //                 },
                //                 padding: {
                //                     y: 16,
                //                     x: 16,
                //                 },                
                //                 rounded: { 
                //                     variant: 'Нет', 
                //                     value: 0
                //                 }
                //             },
                //             content: {
                //                 background: 'c7c7c7',
                //                 height: 64,
                //                 padding: {
                //                     y: 16,
                //                     x: 16,
                //                 },                
                //                 rounded: { 
                //                     variant: '16px', 
                //                     value: 16
                //                 },
                //                 shadow: { 
                //                     variant: 'Нет', 
                //                     value: 'none' 
                //                 },
                //             }
                //         },
                //     }
                // },
                {
                    name: 'balance',
                    variant: {
                        name: "splitBalanceCard",
                        // header: {
                        //     show: true,
                        //     title: '',
                        //     link: true,
                        //     styles: {
                        //         color: '000000'
                        //     },
                        // },                        
                        content: [
                            {
                                show: true,
                                label: 'Статус',
                                value: 'Базовй'
                            },
                            {
                                show: true,
                                label: 'Бонусы',
                                value: '2 500'
                            },
                            {
                                show: true,
                                label: 'Имя',
                                value: 'Александр'
                            }
                        ],
                        styles: [
                            {
                                name: 'Фон блока',
                                type: 'background',
                                value: '',
                                category: 'base'
                            },
                            {
                                name: 'Внутренний отступ',
                                type: 'padding',
                                value: { x: 16, y: 16 },
                                category: 'base'
                            },     
                            {
                                name: 'Скругление углов',
                                type: 'rounded',
                                value: {
                                    variant: 'Нет',
                                    value: 0
                                },
                                category: 'base'
                            },                                                     
                            {
                                name: 'Тень блока',
                                type: 'shadow',
                                value: {
                                    variant: 'Нет',
                                    value: 'none'
                                },
                                category: 'base'
                            },                       
                            {
                                name: 'Фон карточки',
                                type: 'background',
                                value: 'F2F2F2',
                                category: 'layout'
                            },
                            {
                                name: 'Внутренний отступ',
                                type: 'padding',
                                value: { x: 16, y: 16 },
                                category: 'layout'
                            },
                            {
                                name: 'Скругление углов',
                                type: 'rounded',
                                value: {
                                    variant: '16px',
                                    value: 16
                                },
                                category: 'layout'
                            },                            
                            {
                                name: 'Тень карточки',
                                type: 'shadow',
                                value: {
                                    variant: 'Нет',
                                    value: 'none'
                                },
                                category: 'layout'
                            },
                            {
                                name: 'Обводка',
                                type: 'border',
                                value: {
                                    color: '',
                                    width: {
                                        variant: 'Нет',
                                        value: 0,
                                    }
                                },
                                category: 'content'
                            },
                            {
                                name: 'Цвет текста',
                                type: 'color',
                                value: '000000',
                                category: 'content'                            
                            },                             
                        ]
                    }    
                },
                {
                    name: "promotions",
                    variant: {
                        name: "slider",
                        header: {
                            show: true,
                            title: '',
                            link: true,
                            styles: {
                                color: '000000'
                            },
                        },                        
                        content: [
                            {
                                show: true,
                                label: 'Статус',
                                value: 'Базовй'
                            },
                            {
                                show: true,
                                label: 'Бонусы',
                                value: '2 500'
                            },
                            {
                                show: true,
                                label: 'Имя',
                                value: 'Александр'
                            }
                        ],  
                        styles: [
                            {
                                name: 'Фон блока',
                                type: 'background',
                                value: '',
                                category: 'base'
                            },
                            {
                                name: 'Внутренний отступ',
                                type: 'padding',
                                value: { x: 16, y: 16 },
                                category: 'base'
                            },     
                            {
                                name: 'Скругление углов',
                                type: 'rounded',
                                value: {
                                    variant: 'Нет',
                                    value: 0
                                },
                                category: 'base'
                            },    
                            {
                                name: 'Высота слайда',
                                type: 'height',
                                value: 80,
                                category: 'layout'
                            },                                                                              
                            {
                                name: 'Тень блока',
                                type: 'shadow',
                                value: {
                                    variant: 'Нет',
                                    value: 'none'
                                },
                                category: 'base'
                            },                       
                            {
                                name: 'Фон карточки',
                                type: 'background',
                                value: 'F2F2F2',
                                category: 'layout'
                            },
                            {
                                name: 'Количество слвйдов на экране',
                                type: 'slidesPerView',
                                value: 1,
                                category: 'layout'
                            },                            
                            {
                                name: 'Внутренний отступ',
                                type: 'padding',
                                value: { x: 16, y: 16 },
                                category: 'layout'
                            },
                            {
                                name: 'Скругление углов',
                                type: 'rounded',
                                value: {
                                    variant: '16px',
                                    value: 16
                                },
                                category: 'layout'
                            },                            
                            {
                                name: 'Тень карточки',
                                type: 'shadow',
                                value: {
                                    variant: 'Нет',
                                    value: 'none'
                                },
                                category: 'layout'
                            },
                            {
                                name: 'Цвет текста',
                                type: 'color',
                                value: '000000',
                                category: 'content'                            
                            },                         
                            {
                                name: 'Обводка',
                                type: 'border',
                                value: {
                                    color: '',
                                    width: {
                                        variant: 'Нет',
                                        value: 0,
                                    }
                                },
                                category: 'content'
                            }
                        ]
                    }
                }                
            ]
        },
        leftMenuScreen: {

        },
        catalogScreen: {

        },        
    })

    const navbar = ref({
        name: 'navbar',
        variant: {
            name: "floatNavbar",
            content: [
                {
                    label: 'Главная',
                    icon: 'app-icon-home_new'
                },
                {
                    label: 'Акции',
                    icon: 'app-icon-promo'
                },
                {
                    label: 'Карта',
                    icon: 'app-icon-qr_2'
                },
                {
                    label: 'Адреса',
                    icon: 'app-icon-location'
                },
                {
                    label: 'Профиль',
                    icon: 'app-icon-user'
                }
            ],
            styles: [
                {
                    name: 'Отсуп от края',
                    type: 'bottom',
                    value: 32,
                    category: 'base'                            
                },                        
                {
                    name: 'Фон блока',
                    type: 'background',
                    value: 'ffffff',
                    category: 'layout'                            
                },
                {
                    name: 'Высота',
                    type: 'height',
                    value: 60,
                    category: 'layout'                            
                },
                {
                    name: 'Внутренний отступ',
                    type: 'padding',
                    value: { y: 8, x: 8 },
                    category: 'layout'
                },
                {
                    name: 'Скругление углов',
                    type: 'rounded',
                    value: {
                        variant: '16px', 
                        value: 16
                    },
                    category: 'layout'
                },
                {
                    name: 'Меню',
                    type: 'shadow',
                    value: {
                        variant: 'M', 
                        value: '0 4px 12px 0 rgba(0, 0, 0, 0.15)' 
                    },
                    category: 'layout'
                },
                {
                    name: 'Цвет иконки',
                    type: 'color',
                    value: '2F80ED',
                    category: 'content'                            
                },                        
                {
                    name: 'Цвет текста',
                    type: 'color',
                    value: '000000',
                    category: 'content'                            
                },                        
            ]
        }
    })

    const editedComponentToggle = (component) => {
        if (editedComponent.value?.name === component?.name) {
            editedComponent.value = null
        } else {
            editedComponent.value = component
        }
        
        console.log('edited', editedComponent.value)        
    }

    // Общая функция для проверки использования элемента в mockupStore
    const isElementUsed = (componentType, variantName) => {
        // Для navbar проверяем variant.name
        if (componentType === 'navBar') {
            return navbar.value?.variant?.name === variantName
        }
        
        // Для screens проверяем наличие элемента в content массиве
        for (const screenKey in screens.value) {
            const screen = screens.value[screenKey]
            if (screen?.content && Array.isArray(screen.content)) {
                const found = screen.content.find(item => item.name === variantName)
                if (found) {
                    return true
                }
            }
        }
        
        return false
    }    

    return {
        navbar,
        getNavbar: computed(() => navbar.value),
        screens,
        getScreens: computed(() => screens.value),
        editedComponent,
        getEditedComponent: computed(() => editedComponent.value),
        editedComponentToggle,
        isElementUsed
    }
})