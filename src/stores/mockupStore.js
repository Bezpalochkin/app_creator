import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useMockupStore = defineStore('mockupStore', () => {
    const editedComponent = ref(null)

    const history = ref([])
    const currentHistoryIndex = ref(-1)
    const maxHistoryLength = 50

    const hasUnsavedChanges = ref(false)
    
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
                {
                    name: 'balance',
                    show: true,
                    variant: {
                        name: "splitBalanceCard",                      
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
                    show: true,
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
                                value: 120,
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
                                type: 'colsInRow',
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
                                name: 'Растояние между слайдами',
                                type: 'gap',
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
                            },
                            {
                                name: 'Тень блока',
                                type: 'shadow',
                                value: {
                                    variant: 'Нет',
                                    value: 'none'
                                },
                                category: 'base'
                            }
                        ]
                    }
                },
                {
                    name: "catalog",
                    show: false,                    
                    variant: {
                        name: 'combinationСards',
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
                                label: '1',
                            },
                            {
                                show: true,
                                label: '2',
                            },
                            {
                                show: true,
                                label: '3',
                            },
                            {
                                show: true,
                                label: '4',
                            },
                            {
                                show: true,
                                label: '5',
                            },
                            {
                                show: true,
                                label: '6',
                                value: '2 500'
                            }
                        ],   
                        styles: [
                            {
                                name: 'Фон блока',
                                type: 'background',
                                value: 'transparent',
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
                                name: 'Отступ между карточками',
                                type: 'gap',
                                value: { x: 16, y: 16 },
                                category: 'layout'
                            },
                            {
                                name: 'Фон карточки',
                                type: 'background',
                                value: 'f2f2f2',
                                category: 'content'
                            },
                            {
                                name: 'Высота большой карточки',
                                type: 'height',
                                value: 220,
                                category: 'content'
                            },
                            {
                                name: 'Скругление углов',
                                type: 'rounded',
                                value: {
                                    variant: '16px',
                                    value: 16
                                },
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
                            },
                            {
                                name: 'Тень блока',
                                type: 'shadow',
                                value: {
                                    variant: 'Нет',
                                    value: 'none'
                                },
                                category: 'content'
                            },                        
                        ]
                    },
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
    }

    const isElementUsed = (componentType, variantName) => {
        // Для navbar проверяем variant.name
        if (componentType === 'navbar') {
            return navbar.value?.variant?.name === variantName
        }
        
        // Для screens проверяем наличие элемента в content массиве
        for (const screenKey in screens.value) {
            const screen = screens.value[screenKey]
            if (screen?.content && Array.isArray(screen.content)) {
                const found = screen.content.find(item => item.variant?.name === variantName)
                if (found) {
                    return true
                }
            }
        }
        
        return false
    }

    const getComponentFromMockup = (screen, componentName) => {
        const screenContent = screens?.value[screen]?.content

        if (!screenContent) {
            return null
        }

        return screenContent.find(el => el.name === componentName) 

        // if (componentName === 'navbar' && navbar.value?.name === componentName) {
        //     return navbar.value
        // }
        
        // const screenContent = screens?.value[screen]?.content
    
        // if (!screenContent) {
        //     return
        // }
    
        // return screenContent.find(el => el.name === componentType)
    }

    const deleteComponentFromMockup = (screen, component) => {
        // console.log('Deleting component:', component.name)
        
        // // Если удаляемый компонент сейчас редактируется - сбрасываем editedComponent
        // if (editedComponent.value?.name === component.name) {
        //     editedComponent.value = null
        // }
        
        // // Выполняем удаление
        // if(component.name === 'navbar') {
        //     navbar.value.variant = null
        // } else {
        //     const currentComponent = findComponent(component.name, screen)
        //     if (currentComponent) {
        //         currentComponent.variant = null
        //     }
        // }
    }

    const addComponentToMockup = (component, screen) => {
        const componentIsAdded = findComponent(component.name, screen)

        // console.log('addComponentToMockup', componentIsAdded)
        console.log('addComponentToMockup', component)
        console.log('componentIsAdded', componentIsAdded)
    }

    return {
        navbar,
        getNavbar: computed(() => navbar.value),
        screens,
        getScreens: computed(() => screens.value),
        editedComponent,
        getEditedComponent: computed(() => editedComponent.value),
        editedComponentToggle,
        isElementUsed,
        getComponentFromMockup,
        hasUnsavedChanges: computed(() => hasUnsavedChanges.value),
        deleteComponentFromMockup,
        addComponentToMockup
    }
})