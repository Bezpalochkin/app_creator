import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

import fixedNavBarImg from '@a/variants/navbar/fixed_navbar.webp'
import floatNavBarImg from '@a/variants/navbar/float_navbar.webp'
import equalCardsImg from '@a/variants/catalog/equal_cards.webp'
import combinationCardImg from '@a/variants/catalog/combination_card.webp'
import rowCardImg from '@a/variants/catalog/row_cards.webp'
import splitBalanceCardImg from '@a/variants/balance/splitbalancecard.webp'
import balanceWwithQrImg from '@a/variants/balance/balancewithqr.webp'
import balanceWithLogoImg from '@a/variants/balance/balancewithlogo.webp'
import splitBalanceWithLogoImg from '@a/variants/balance/splitbalancewithlogo.webp'
import pointsSlider from '@a/variants/points/points_slider.webp'

export const useComponentsStore = defineStore('componentsStore', () => {
    const templates = ref({
        mainScreen: {
            balance: {
                variants: [
                    {
                        name: "splitBalanceCard",
                        image: splitBalanceCardImg,
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
                                category: 'base',
                                showInSettings: true
                            },
                            {
                                name: 'Внутренний отступ',
                                type: 'padding',
                                value: { x: 16, y: 16 },
                                category: 'base',
                                showInSettings: true
                            },     
                            {
                                name: 'Скругление углов',
                                type: 'rounded',
                                value: {
                                    variant: 'Нет',
                                    value: 0
                                },
                                category: 'base',
                                showInSettings: true
                            },                                                     
                            {
                                name: 'Тень блока',
                                type: 'shadow',
                                value: {
                                    variant: 'Нет',
                                    value: 'none'
                                },
                                category: 'base',
                                showInSettings: true
                            },                       
                            {
                                name: 'Фон карточки',
                                type: 'background',
                                value: 'F2F2F2',
                                category: 'layout',
                                showInSettings: true
                            },
                            {
                                name: 'Внутренний отступ',
                                type: 'padding',
                                value: { x: 16, y: 16 },
                                category: 'layout',
                                showInSettings: true
                            },
                            {
                                name: 'Скругление углов',
                                type: 'rounded',
                                value: {
                                    variant: '16px',
                                    value: 16
                                },
                                category: 'layout',
                                showInSettings: true
                            },                            
                            {
                                name: 'Тень карточки',
                                type: 'shadow',
                                value: {
                                    variant: 'Нет',
                                    value: 'none'
                                },
                                category: 'layout',
                                showInSettings: true
                            },
                            {
                                name: 'Цвет текста',
                                type: 'color',
                                value: '000000',
                                category: 'content',
                                showInSettings: true
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
                                category: 'content',
                                showInSettings: true
                            }
                        ]
                    },
                    {
                        name: "balanceWithQr",   
                        image: balanceWwithQrImg,
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
                            }
                        ],
                        styles: [
                            {
                                name: 'Фон блока',
                                type: 'background',
                                value: '',
                                category: 'base',
                                showInSettings: true
                            },
                            {
                                name: 'Внутренний отступ',
                                type: 'padding',
                                value: { x: 16, y: 16 },
                                category: 'base',
                                showInSettings: true
                            },     
                            {
                                name: 'Скругление углов',
                                type: 'rounded',
                                value: {
                                    variant: 'Нет',
                                    value: 0
                                },
                                category: 'base',
                                showInSettings: true
                            },                                                     
                            {
                                name: 'Тень блока',
                                type: 'shadow',
                                value: {
                                    variant: 'Нет',
                                    value: 'none'
                                },
                                category: 'base',
                                showInSettings: true
                            },                       
                            {
                                name: 'Фон карточки',
                                type: 'background',
                                value: 'F2F2F2',
                                category: 'layout',
                                showInSettings: true
                            },
                            {
                                name: 'Внутренний отступ',
                                type: 'padding',
                                value: { x: 16, y: 16 },
                                category: 'layout',
                                showInSettings: true
                            },
                            {
                                name: 'Скругление углов',
                                type: 'rounded',
                                value: {
                                    variant: '16px',
                                    value: 16
                                },
                                category: 'layout',
                                showInSettings: true
                            },                            
                            {
                                name: 'Тень карточки',
                                type: 'shadow',
                                value: {
                                    variant: 'Нет',
                                    value: 'none'
                                },
                                category: 'layout',
                                showInSettings: true
                            },
                            {
                                name: 'Фон карточки',
                                type: 'background',
                                value: 'ffffff',
                                category: 'content',
                                showInSettings: true
                            },
                            {
                                name: 'Высота карточки',
                                type: 'height',
                                value: 50,
                                category: 'content',
                                showInSettings: true
                            },
                            {
                                name: 'Внутренний отступ',
                                type: 'padding',
                                value: { x: 12, y: 12 },
                                category: 'content',
                                showInSettings: true
                            },
                            {
                                name: 'Отступ между карточками',
                                type: 'gap',
                                value: { x: 12, y: 12 },
                                category: 'content',
                                showInSettings: true
                            },                          
                            {
                                name: 'Скругление углов',
                                type: 'rounded',
                                value: {
                                    variant: '8px',
                                    value: 8
                                },
                                category: 'content',
                                showInSettings: true
                            },
                            {
                                name: 'Цвет текста',
                                type: 'color',
                                value: '000000',
                                category: 'content',
                                showInSettings: true                            
                            },                         
                        ]  
                    },
                    {
                        name: "balanceWithLogo",   
                        image: balanceWithLogoImg,
                        content: [
                            {
                                show: true,
                                items: [
                                    {
                                        label: 'Бонусы',
                                        value: '2 500'
                                    },
                                    {
                                        label: 'Статус',
                                        value: 'Базовй'
                                    },
                                ]
                            },
                            {
                                show: true,
                                items: [
                                    { img: 'https://i.1.creatium.io/disk2/5a/22/43/354a72280d17be6cca5ef20661ad8d964e/1761x475/logo10.svg' }
                                ]
                            }
                        ],
                        styles: [
                            {
                                name: 'Фон блока',
                                type: 'background',
                                value: '',
                                category: 'base',
                                showInSettings: true
                            },
                            {
                                name: 'Внутренний отступ',
                                type: 'padding',
                                value: { x: 16, y: 16 },
                                category: 'base',
                                showInSettings: true
                            },
                            {
                                name: 'Скругление углов',
                                type: 'rounded',
                                value: {
                                    variant: 'Нет',
                                    value: 0
                                },
                                category: 'base',
                                showInSettings: true
                            },
                            {
                                name: 'Тень блока',
                                type: 'shadow',
                                value: {
                                    variant: 'Нет',
                                    value: 'none'
                                },
                                category: 'base',
                                showInSettings: true
                            },
                            {
                                name: 'Скругление углов',
                                type: 'rounded',
                                value: {
                                    variant: '16px',
                                    value: 16
                                },
                                category: 'layout',
                                showInSettings: true
                            },
                            {
                                name: 'Тень карточки',
                                type: 'shadow',
                                value: {
                                    variant: 'Нет',
                                    value: 'none'
                                },
                                category: 'layout',
                                showInSettings: true
                            },
                            {
                                name: 'Фон карточки',
                                type: 'background',
                                value: 'f2f2f2',
                                category: 'content',
                                showInSettings: true
                            },
                            {
                                name: 'Высота карточки',
                                type: 'height',
                                value: 80,
                                category: 'content',
                                showInSettings: true
                            },
                            {
                                name: 'Внутренний отступ',
                                type: 'padding',
                                value: { x: 16, y: 16 },
                                category: 'content',
                                showInSettings: true
                            },
                            {
                                name: 'Отступ между карточками',
                                type: 'gap',
                                value: { x: 12, y: 12 },
                                category: 'content',
                                showInSettings: true
                            },
                            {
                                name: 'Скругление углов',
                                type: 'rounded',
                                value: {
                                    variant: '8px',
                                    value: 8
                                },
                                category: 'content',
                                showInSettings: true
                            },
                            {
                                name: 'Цвет текста',
                                type: 'color',
                                value: '000000',
                                category: 'content',
                                showInSettings: true
                            },
                        ]  
                    },
                    {
                        name: "splitBalanceWithLogo",
                        image: splitBalanceWithLogoImg,                       
                        content: [
                            {
                                show: true,
                                label: 'Статус',
                                value: 'Базовй'
                            },
                            {
                                show: true,
                                img: 'https://i.1.creatium.io/disk2/5a/22/43/354a72280d17be6cca5ef20661ad8d964e/1761x475/logo10.svg',
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
                                name: 'Отступ между блоками',
                                type: 'gap',
                                value: { x: 8, y: 8 },
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
                                name: 'Фон карточки с логотипом',
                                type: 'background',
                                value: 'ffffff',
                                category: 'content'
                            },
                            {
                                name: 'Внутренний отступ карточки',
                                type: 'padding',
                                value: { x: 8, y: 16 },
                                category: 'content'
                            },                        
                            {
                                name: 'Скругление углов карточки',
                                type: 'rounded',
                                value: {
                                    variant: '16px',
                                    value: 16
                                },
                                category: 'content'
                            },

                        ]
                    },                
                ]
            },
            promotions: {
                variants: [
                    {
                        name: "slider",
                        image: '',
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
                                category: 'base',
                                showInSettings: true
                            },
                            {
                                name: 'Внутренний отступ',
                                type: 'padding',
                                value: { x: 16, y: 16 },
                                category: 'base',
                                showInSettings: true
                            },     
                            {
                                name: 'Скругление углов',
                                type: 'rounded',
                                value: {
                                    variant: 'Нет',
                                    value: 0
                                },
                                category: 'base',
                                showInSettings: true
                            },                                                     
                            {
                                name: 'Тень блока',
                                type: 'shadow',
                                value: {
                                    variant: 'Нет',
                                    value: 'none'
                                },
                                category: 'base',
                                showInSettings: true
                            },                       
                            {
                                name: 'Фон карточки',
                                type: 'background',
                                value: 'F2F2F2',
                                category: 'layout',
                                showInSettings: true
                            },
                            {
                                name: 'Количество слвйдов на экране',
                                type: 'colsInRow',
                                value: 1,
                                category: 'layout',
                                showInSettings: true
                            },
                            {
                                name: 'Внутренний отступ',
                                type: 'padding',
                                value: { x: 16, y: 16 },
                                category: 'layout',
                                showInSettings: true
                            },
                            {
                                name: 'Скругление углов',
                                type: 'rounded',
                                value: {
                                    variant: '16px',
                                    value: 16
                                },
                                category: 'layout',
                                showInSettings: true
                            },                            
                            {
                                name: 'Высота слайда',
                                type: 'height',
                                value: 120,
                                category: 'layout',
                                showInSettings: true
                            },                            
                            {
                                name: 'Тень карточки',
                                type: 'shadow',
                                value: {
                                    variant: 'Нет',
                                    value: 'none'
                                },
                                category: 'layout',
                                showInSettings: true
                            },
                            {
                                name: 'Цвет текста',
                                type: 'color',
                                value: '000000',
                                category: 'content',
                                showInSettings: true
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
                                category: 'content',
                                showInSettings: true
                            }
                        ]
                    },                
                ]
            },
            catalog: {
                variants: [
                    {
                        name: 'equalColumnsGrid',
                        image: equalCardsImg,
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
                                label: 'Статус',
                                value: 'Базовй'
                            },
                            {
                                show: true,
                                label: 'Бонусы',
                                value: '2 500'
                            }
                        ],   
                        styles: [
                            {
                                name: 'Фон блока',
                                type: 'background',
                                value: 'transparent',
                                category: 'base',
                                showInSettings: true
                            },
                            {
                                name: 'Внутренний отступ',
                                type: 'padding',
                                value: { x: 16, y: 16 },
                                category: 'base',
                                showInSettings: true
                            },     
                            {
                                name: 'Скругление углов',
                                type: 'rounded',
                                value: {
                                    variant: 'Нет',
                                    value: 0
                                },
                                category: 'base',
                                showInSettings: true
                            },
                            {
                                name: 'Тень блока',
                                type: 'shadow',
                                value: {
                                    variant: 'Нет',
                                    value: 'none'
                                },
                                category: 'base',
                                showInSettings: true
                            },
                            {
                                name: 'Количество карточек в ряду',
                                type: 'colsInRow',
                                value: 2,
                                category: 'layout',
                                showInSettings: true
                            }, 
                            {
                                name: 'Отступ между карточками',
                                type: 'gap',
                                value: { x: 8, y: 8 },
                                category: 'layout',
                                showInSettings: true
                            },
                            {
                                name: 'Фон карточки',
                                type: 'background',
                                value: 'f2f2f2',
                                category: 'content',
                                showInSettings: true
                            },
                            {
                                name: 'Высота карточки',
                                type: 'height',
                                value: 175,
                                category: 'content',
                                showInSettings: true
                            },
                            {
                                name: 'Скругление углов',
                                type: 'rounded',
                                value: {
                                    variant: '16px',
                                    value: 16
                                },
                                category: 'content',
                                showInSettings: true
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
                                category: 'content',
                                showInSettings: true
                            },
                            {
                                name: 'Тень блока',
                                type: 'shadow',
                                value: {
                                    variant: 'Нет',
                                    value: 'none'
                                },
                                category: 'content',
                                showInSettings: true
                            },                        
                        ],
                        settings: {
                            cardType: 'image'
                        }
                    },                
                    {
                        name: 'rowCard',
                        image: rowCardImg,
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
                                label: 'Статус',
                                value: 'Базовй'
                            }
                        ],   
                        styles: [
                            {
                                name: 'Фон блока',
                                type: 'background',
                                value: 'transparent',
                                category: 'base',
                                showInSettings: true
                            },
                            {
                                name: 'Внутренний отступ',
                                type: 'padding',
                                value: { x: 16, y: 16 },
                                category: 'base',
                                showInSettings: true
                            },     
                            {
                                name: 'Скругление углов',
                                type: 'rounded',
                                value: {
                                    variant: 'Нет',
                                    value: 0
                                },
                                category: 'base',
                                showInSettings: true
                            },
                            {
                                name: 'Тень блока',
                                type: 'shadow',
                                value: {
                                    variant: 'Нет',
                                    value: 'none'
                                },
                                category: 'base',
                                showInSettings: true
                            },
                            {
                                name: 'Количество карточек в ряду',
                                type: 'colsInRow',
                                value: 1,
                                category: 'layout',
                                showInSettings: false
                            }, 
                            {
                                name: 'Отступ между карточками',
                                type: 'gap',
                                value: { x: 8, y: 8 },
                                category: 'layout',
                                showInSettings: true
                            },
                            {
                                name: 'Фон карточки',
                                type: 'background',
                                value: 'f2f2f2',
                                category: 'content',
                                showInSettings: true
                            },
                            {
                                name: 'Высота карточки',
                                type: 'height',
                                value: 80,
                                category: 'content',
                                showInSettings: true
                            },
                            {
                                name: 'Скругление углов',
                                type: 'rounded',
                                value: {
                                    variant: '16px',
                                    value: 16
                                },
                                category: 'content',
                                showInSettings: true
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
                                category: 'content',
                                showInSettings: true
                            },
                            {
                                name: 'Тень блока',
                                type: 'shadow',
                                value: {
                                    variant: 'Нет',
                                    value: 'none'
                                },
                                category: 'content',
                                showInSettings: true
                            },                        
                        ],
                        settings: {
                            cardType: 'image'
                        }
                    },                
                    {
                        name: 'checkerboardGrid',
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
                                value: 100,
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
                        ],
                        settings: {
                            cardType: 'image'
                        }
                    },
                    {
                        name: 'combinationСards',
                        image: combinationCardImg,
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
                        ],
                        settings: {
                            cardType: 'image'
                        }
                    },
                ]
            },
            points: {
                variants: [
                    {
                        name: "slider",
                        image: pointsSlider,
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
                                category: 'base',
                                showInSettings: true
                            },
                            {
                                name: 'Внутренний отступ',
                                type: 'padding',
                                value: { x: 16, y: 16 },
                                category: 'base',
                                showInSettings: true
                            },     
                            {
                                name: 'Скругление углов',
                                type: 'rounded',
                                value: {
                                    variant: 'Нет',
                                    value: 0
                                },
                                category: 'base',
                                showInSettings: true
                            },                                                     
                            {
                                name: 'Тень блока',
                                type: 'shadow',
                                value: {
                                    variant: 'Нет',
                                    value: 'none'
                                },
                                category: 'base',
                                showInSettings: true
                            },                       
                            {
                                name: 'Фон карточки',
                                type: 'background',
                                value: 'F2F2F2',
                                category: 'layout',
                                showInSettings: true
                            },
                            {
                                name: 'Количество слвйдов на экране',
                                type: 'colsInRow',
                                value: 1,
                                category: 'layout',
                                showInSettings: true
                            },
                            {
                                name: 'Внутренний отступ',
                                type: 'padding',
                                value: { x: 16, y: 16 },
                                category: 'layout',
                                showInSettings: true
                            },
                            {
                                name: 'Скругление углов',
                                type: 'rounded',
                                value: {
                                    variant: '16px',
                                    value: 16
                                },
                                category: 'layout',
                                showInSettings: true
                            },                            
                            {
                                name: 'Высота слайда',
                                type: 'height',
                                value: 120,
                                category: 'layout',
                                showInSettings: true
                            },                            
                            {
                                name: 'Тень карточки',
                                type: 'shadow',
                                value: {
                                    variant: 'Нет',
                                    value: 'none'
                                },
                                category: 'layout',
                                showInSettings: true
                            },
                            {
                                name: 'Цвет текста',
                                type: 'color',
                                value: '000000',
                                category: 'content',
                                showInSettings: true
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
                                category: 'content',
                                showInSettings: true
                            }
                        ]
                    },                
                ]
            },                
            navbar: {
                variants: [
                    {
                        name: 'fixedNavbar',
                        image: fixedNavBarImg,
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
                                name: 'Фон блока',
                                type: 'background',
                                value: 'ffffff',
                                category: 'layout',
                                showInSettings: true
                            },
                            {
                                name: 'Высота',
                                type: 'height',
                                value: 80,
                                category: 'layout',
                                showInSettings: true
                            },
                            {
                                name: 'Внутренний отступ',
                                type: 'padding',
                                value: { y: 8, x: 8 },
                                category: 'layout',
                                showInSettings: true
                            },
                            {
                                name: 'Скругление углов',
                                type: 'rounded',
                                value: {
                                    variant: 'Нет', 
                                    value: 0
                                },
                                category: 'layout',
                                showInSettings: true
                            },
                            {
                                name: 'Меню',
                                type: 'shadow',
                                value: {
                                    variant: 'M', 
                                    value: '0 4px 12px 0 rgba(0, 0, 0, 0.15)' 
                                },
                                category: 'layout',
                                showInSettings: true
                            },
                            {
                                name: 'Цвет иконки',
                                type: 'color',
                                value: '2F80ED',
                                category: 'content',
                                showInSettings: true
                            },                        
                            {
                                name: 'Цвет текста',
                                type: 'color',
                                value: '000000',
                                category: 'content',
                                showInSettings: true
                            },                           
                        ]
                    },
                    {
                        name: 'floatNavbar',
                        image: floatNavBarImg,
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
                                icon: 'app-icon-qr'
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
                                category: 'base',
                                showInSettings: true
                            },                        
                            {
                                name: 'Фон блока',
                                type: 'background',
                                value: 'ffffff',
                                category: 'layout',
                                showInSettings: true
                            },
                            {
                                name: 'Высота',
                                type: 'height',
                                value: 60,
                                category: 'layout',
                                showInSettings: true
                            },
                            {
                                name: 'Внутренний отступ',
                                type: 'padding',
                                value: { y: 8, x: 8 },
                                category: 'layout',
                                showInSettings: true
                            },
                            {
                                name: 'Скругление углов',
                                type: 'rounded',
                                value: {
                                    variant: '16px', 
                                    value: 16
                                },
                                category: 'layout',
                                showInSettings: true
                            },
                            {
                                name: 'Меню',
                                type: 'shadow',
                                value: {
                                    variant: 'M', 
                                    value: '0 4px 12px 0 rgba(0, 0, 0, 0.15)' 
                                },
                                category: 'layout',
                                showInSettings: true
                            },
                            {
                                name: 'Цвет иконки',
                                type: 'color',
                                value: '2F80ED',
                                category: 'content',
                                showInSettings: true
                            },                        
                            {
                                name: 'Цвет текста',
                                type: 'color',
                                value: '000000',
                                category: 'content',
                                showInSettings: true
                            },                        
                        ]
                    }
                ]
            },
        },
        catalogScreen: {
            catalogCategories: {
                variants: [
                    {
                        name: 'chipSlider',                      
                        content: [],
                        styles: [
                            {
                                name: 'Внутренний отступ',
                                type: 'padding',
                                value: { x: 16, y: 16 },
                                category: 'base'
                            },                            
                        ]
                    },
                    {
                        name: "equalCards",
                        content: [
                          {
                            show: true,
                            label: "1"
                          },
                          {
                            show: true,
                            label: "2"
                          },
                          {
                            show: true,
                            label: "3"
                          },
                          {
                            show: true,
                            label: "4"
                          },
                          {
                            show: true,
                            label: "5"
                          },
                          {
                            show: true,
                            label: "6",
                          }
                        ],
                        styles: [
                          {
                            name: "Внутренний отступ",
                            type: "padding",
                            value: {
                              x: 16,
                              y: 16
                            },
                            category: "base",
                            showInSettings: false
                          },
                          {
                            name: "Фон карточки",
                            type: "background",
                            value: "00ff00",
                            category: "content",
                            showInSettings: true
                          },
                          {
                            name: "Количество карточек в ряду",
                            type: "colsInRow",
                            value: 2,
                            category: "layout",
                            showInSettings: false
                          },
                          {
                            name: "Отступ между карточками",
                            type: "gap",
                            value: {
                              x: 8,
                              y: 8
                            },
                            category: "layout",
                            showInSettings: false
                          },
                          {
                            name: "Высота карточки",
                            type: "height",
                            value: 203,
                            category: "content",
                            showInSettings: false
                          },
                          {
                            name: "Скругление углов",
                            type: "rounded",
                            value: {
                              variant: "16px",
                              value: 16
                            },
                            category: "content",
                            showInSettings: true
                          }
                        ],
                        settings: {
                          cardType: "text"
                        }
                      },
                    {
                        name: 'listOfCards',
                        content: [
                            {
                                show: true,
                                label: 'Пицца',
                            },
                            {
                                show: true,
                                label: 'Римская пицца',
                            },
                            {
                                show: true,
                                label: 'Салаты',
                            },
                            {
                                show: true,
                                label: 'Закуски',
                            },
                            {
                                show: true,
                                label: 'Напитки',
                            },
                            {
                                show: true,
                                label: 'Десерты',
                            }
                        ],
                        styles: [
                            {
                                name: 'Внутренний отступ',
                                type: 'padding',
                                value: { x: 16, y: 16 },
                                category: 'base',
                                showInSettings: false
                            },  
                            {
                                name: 'Фон карточки ',
                                type: 'background',
                                value: '00ff00',
                                category: 'content',
                                showInSettings: false
                            },
                            {
                                name: 'Количество карточек в ряду',
                                type: 'colsInRow',
                                value: 2,
                                category: 'layout',
                                showInSettings: false
                            },
                            {
                                name: 'Отступ между карточками',
                                type: 'gap',
                                value: { x: 8, y: 8 },
                                category: 'layout',
                                showInSettings: false
                            },
                            {
                                name: 'Высота карточки',
                                type: 'height',
                                value: 175,
                                category: 'content',
                                showInSettings: false
                            },
                            {
                                name: 'Скругление углов',
                                type: 'rounded',
                                value: {
                                    variant: '16px',
                                    value: 16
                                },
                                category: 'content',
                                showInSettings: false
                            },                                                        
                        ]
                    },
                ]
            }
        }
    })

    return {
        templates,
        getTemplates: computed(() => templates.value)
    }
})