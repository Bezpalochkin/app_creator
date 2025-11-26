import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { useAppStore } from '@s/appStore'
import useAxios from '@@/useAxios'

export const useMockupStore = defineStore('mockupStore', () => {
    const { post, data } = useAxios()
    const editedComponent = ref(null)

    // История для каждого экрана и navbar отдельно
    // Структура: { screenName: { history: [], currentIndex: -1 }, navbar: { history: [], currentIndex: -1 } }
    const historyStore = ref({})
    const maxHistoryLength = 10
    const isUndoRedoInProgress = ref(false) // Флаг для предотвращения сохранения истории при undo/redo

    const hasUnsavedChanges = ref(false)
    const savedState = ref(null) // Сохраненное состояние для сравнения
    
    const screens = ref({
        baseSettingsScreen: {},
        splashScreen: {},
        mainScreen: {
          settings: {
            showNavbar: true,
            showLeftMenu: false
          },
          content: [
            {
              name: "balance",
              show: true,
              variant: {
                name: "splitBalanceCard",
                content: [
                  {
                    show: true,
                    label: "Статус",
                    value: "Базовй"
                  },
                  {
                    show: true,
                    label: "Бонусы",
                    value: "2 500"
                  },
                  {
                    show: true,
                    label: "Имя",
                    value: "Александр"
                  }
                ],
                styles: [
                  {
                    name: "Фон блока",
                    type: "background",
                    value: "409123",
                    category: "base"
                  },
                  {
                    name: "Внутренний отступ",
                    type: "padding",
                    value: {
                      x: 16,
                      y: 16
                    },
                    category: "base"
                  },
                  {
                    name: "Скругление углов",
                    type: "rounded",
                    value: {
                      variant: "Нет",
                      value: 0
                    },
                    category: "base"
                  },
                  {
                    name: "Тень блока",
                    type: "shadow",
                    value: {
                      variant: "Нет",
                      value: "none"
                    },
                    category: "base"
                  },
                  {
                    name: "Фон карточки",
                    type: "background",
                    value: "F2F2F2",
                    category: "layout"
                  },
                  {
                    name: "Внутренний отступ",
                    type: "padding",
                    value: {
                      x: 16,
                      y: 16
                    },
                    category: "layout"
                  },
                  {
                    name: "Скругление углов",
                    type: "rounded",
                    value: {
                      variant: "16px",
                      value: 16
                    },
                    category: "layout"
                  },
                  {
                    name: "Тень карточки",
                    type: "shadow",
                    value: {
                      variant: "Нет",
                      value: "none"
                    },
                    category: "layout"
                  },
                  {
                    name: "Обводка",
                    type: "border",
                    value: {
                      color: "",
                      width: {
                        variant: "Нет",
                        value: 0
                      }
                    },
                    category: "content"
                  },
                  {
                    name: "Цвет текста",
                    type: "color",
                    value: "000000",
                    category: "content"
                  }
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
                  title: "Акции",
                  link: {
                    show: true,
                    label: 'все'
                  },
                  styles: [
                    {
                        name: "Цвет текста",
                        type: "color",
                        value: "000000",
                        category: "content"
                      },
                    ]
                },
                content: [
                  {
                    show: true,
                    label: "Статус",
                    value: "Базовй"
                  },
                  {
                    show: true,
                    label: "Бонусы",
                    value: "2 500"
                  },
                  {
                    show: true,
                    label: "Имя",
                    value: "Александр"
                  }
                ],
                styles: [
                  {
                    name: "Фон блока",
                    type: "background",
                    value: "de3576",
                    category: "base"
                  },
                  {
                    name: "Внутренний отступ",
                    type: "padding",
                    value: {
                      x: 16,
                      y: 16
                    },
                    category: "base"
                  },
                  {
                    name: "Скругление углов",
                    type: "rounded",
                    value: {
                      variant: "Нет",
                      value: 0
                    },
                    category: "base"
                  },
                  {
                    name: "Высота слайда",
                    type: "height",
                    value: 120,
                    category: "layout"
                  },
                  {
                    name: "Тень блока",
                    type: "shadow",
                    value: {
                      variant: "Нет",
                      value: "none"
                    },
                    category: "base"
                  },
                  {
                    name: "Фон карточки",
                    type: "background",
                    value: "F2F2F2",
                    category: "layout"
                  },
                  {
                    name: "Количество слвйдов на экране",
                    type: "colsInRow",
                    value: 2,
                    category: "layout"
                  },
                  {
                    name: "Внутренний отступ",
                    type: "padding",
                    value: {
                      x: 16,
                      y: 16
                    },
                    category: "layout"
                  },
                  {
                    name: "Растояние между слайдами",
                    type: "gap",
                    value: {
                      x: 8,
                      y: 8
                    },
                    category: "layout"
                  },
                  {
                    name: "Скругление углов",
                    type: "rounded",
                    value: {
                      variant: "16px",
                      value: 16
                    },
                    category: "layout"
                  },
                  {
                    name: "Тень карточки",
                    type: "shadow",
                    value: {
                      variant: "Нет",
                      value: "none"
                    },
                    category: "layout"
                  },
                  {
                    name: "Цвет текста",
                    type: "color",
                    value: "000000",
                    category: "content"
                  },
                  {
                    name: "Обводка",
                    type: "border",
                    value: {
                      color: "",
                      width: {
                        variant: "Нет",
                        value: 0
                      }
                    },
                    category: "content"
                  },
                  {
                    name: "Тень блока",
                    type: "shadow",
                    value: {
                      variant: "Нет",
                      value: "none"
                    },
                    category: "base"
                  }
                ]
              }
            },
            {
              name: "catalog",
              show: false,
              variant: {
                name: "combinationСards",
                header: {
                    show: true,
                    title: "Акции",
                    link: {
                      show: true,
                      label: 'все'
                    },
                    styles: [
                      {
                          name: "Цвет текста",
                          type: "color",
                          value: "000000",
                          category: "content"
                        },
                      ]
                },                
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
                    value: "2 500"
                  }
                ],
                styles: [
                  {
                    name: "Фон блока",
                    type: "background",
                    value: "630bcf",
                    category: "base"
                  },
                  {
                    name: "Внутренний отступ",
                    type: "padding",
                    value: {
                      x: 16,
                      y: 16
                    },
                    category: "base"
                  },
                  {
                    name: "Скругление углов",
                    type: "rounded",
                    value: {
                      variant: "Нет",
                      value: 0
                    },
                    category: "base"
                  },
                  {
                    name: "Тень блока",
                    type: "shadow",
                    value: {
                      variant: "Нет",
                      value: "none"
                    },
                    category: "base"
                  },
                  {
                    name: "Отступ между карточками",
                    type: "gap",
                    value: {
                      x: 16,
                      y: 16
                    },
                    category: "layout"
                  },
                  {
                    name: "Фон карточки",
                    type: "background",
                    value: "f2f2f2",
                    category: "content"
                  },
                  {
                    name: "Высота большой карточки",
                    type: "height",
                    value: 220,
                    category: "content"
                  },
                  {
                    name: "Скругление углов",
                    type: "rounded",
                    value: {
                      variant: "16px",
                      value: 16
                    },
                    category: "content"
                  },
                  {
                    name: "Обводка",
                    type: "border",
                    value: {
                      color: "",
                      width: {
                        variant: "Нет",
                        value: 0
                      }
                    },
                    category: "content"
                  },
                  {
                    name: "Тень блока",
                    type: "shadow",
                    value: {
                      variant: "Нет",
                      value: "none"
                    },
                    category: "content"
                  }
                ],
                settings: {
                  cardType: "image"
                }
              }
            },
            {
              name: "points",
              show: true,
              variant: {
                name: "slider",
                header: {
                    show: true,
                    title: "Акции",
                    link: {
                      show: true,
                      label: 'все'
                    },
                    styles: [
                      {
                          name: "Цвет текста",
                          type: "color",
                          value: "000000",
                          category: "content"
                        },
                      ]
                },
                content: [
                  {
                    show: true,
                    label: "Статус",
                    value: "Базовй"
                  },
                  {
                    show: true,
                    label: "Бонусы",
                    value: "2 500"
                  },
                  {
                    show: true,
                    label: "Имя",
                    value: "Александр"
                  }
                ],
                styles: [
                  {
                    name: "Фон блока",
                    type: "background",
                    value: "cc5869",
                    category: "base"
                  },
                  {
                    name: "Внутренний отступ",
                    type: "padding",
                    value: {
                      x: 16,
                      y: 16
                    },
                    category: "base"
                  },
                  {
                    name: "Скругление углов",
                    type: "rounded",
                    value: {
                      variant: "Нет",
                      value: 0
                    },
                    category: "base"
                  },
                  {
                    name: "Высота слайда",
                    type: "height",
                    value: 120,
                    category: "layout"
                  },
                  {
                    name: "Тень блока",
                    type: "shadow",
                    value: {
                      variant: "Нет",
                      value: "none"
                    },
                    category: "base"
                  },
                  {
                    name: "Фон карточки",
                    type: "background",
                    value: "F2F2F2",
                    category: "layout"
                  },
                  {
                    name: "Количество слвйдов на экране",
                    type: "colsInRow",
                    value: 3,
                    category: "layout"
                  },
                  {
                    name: "Внутренний отступ",
                    type: "padding",
                    value: {
                      x: 16,
                      y: 16
                    },
                    category: "layout"
                  },
                  {
                    name: "Растояние между слайдами",
                    type: "gap",
                    value: {
                      x: 8,
                      y: 8
                    },
                    category: "layout"
                  },
                  {
                    name: "Скругление углов",
                    type: "rounded",
                    value: {
                      variant: "16px",
                      value: 16
                    },
                    category: "layout"
                  },
                  {
                    name: "Тень карточки",
                    type: "shadow",
                    value: {
                      variant: "Нет",
                      value: "none"
                    },
                    category: "layout"
                  },
                  {
                    name: "Цвет текста",
                    type: "color",
                    value: "000000",
                    category: "content"
                  },
                  {
                    name: "Обводка",
                    type: "border",
                    value: {
                      color: "",
                      width: {
                        variant: "Нет",
                        value: 0
                      }
                    },
                    category: "content"
                  },
                  {
                    name: "Тень блока",
                    type: "shadow",
                    value: {
                      variant: "Нет",
                      value: "none"
                    },
                    category: "base"
                  }
                ]
              }
            }
          ]
        },
        leftMenuScreen: {
          name: "sidebar",
          settings: {
            showNavbar: true,
            showLeftMenu: true
          },
          variant: {
            name: "leftSidebar",
            logo: "",
            content: [
              {
                label: "Профиль",
                icon: "app-icon-user"
              },
              {
                label: "История покупок",
                icon: "app-icon-bag"
              },
              {
                label: "Акции",
                icon: "app-icon-action_3"
              },
              {
                label: "Программа лояльности",
                icon: "app-icon-coins"
              },
              {
                label: "Точки продаж",
                icon: "app-icon-location"
              },
              {
                label: "Оставить отзыв",
                icon: "app-icon-commets_2"
              }
            ],
            styles: [
              {
                name: "Фон блока",
                type: "background",
                value: "",
                category: "base"
              },
              {
                name: "Цвет иконки",
                type: "color",
                value: "000000",
                category: "content"
              },
              {
                name: "Цвет текста",
                type: "color",
                value: "000000",
                category: "content"
              }
            ]
          }
        },
        catalogScreen: {
          settings: {
            showNavbar: true,
            showLeftMenu: false
          },
          content: [
            {
              name: "catalogCategories",
              show: true,
              variant: {
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
              }
            },
            {
              name: "goodsCard"
            }
          ]
        }
      })

    const navbar = ref(
        {
            navbar: {
              name: "navbar",
              variant: {
                name: "floatNavbar",
                content: [
                  {
                    label: "Главная",
                    icon: "app-icon-home_new"
                  },
                  {
                    label: "Акции",
                    icon: "app-icon-promo"
                  },
                  {
                    label: "Карта",
                    icon: "app-icon-qr_2"
                  },
                  {
                    label: "Адреса",
                    icon: "app-icon-location"
                  },
                  {
                    label: "Профиль",
                    icon: "app-icon-user"
                  }
                ],
                styles: [
                  {
                    name: "Отсуп от края",
                    type: "bottom",
                    value: 32,
                    category: "base"
                  },
                  {
                    name: "Фон блока",
                    type: "background",
                    value: "ffffff",
                    category: "layout"
                  },
                  {
                    name: "Высота",
                    type: "height",
                    value: 60,
                    category: "layout"
                  },
                  {
                    name: "Внутренний отступ",
                    type: "padding",
                    value: {
                      y: 8,
                      x: 8
                    },
                    category: "layout"
                  },
                  {
                    name: "Скругление углов",
                    type: "rounded",
                    value: {
                      variant: "16px",
                      value: 16
                    },
                    category: "layout"
                  },
                  {
                    name: "Меню",
                    type: "shadow",
                    value: {
                      variant: "M",
                      value: "0 4px 12px 0 rgba(0, 0, 0, 0.15)"
                    },
                    category: "layout"
                  },
                  {
                    name: "Цвет иконки",
                    type: "color",
                    value: "2F80ED",
                    category: "content"
                  },
                  {
                    name: "Цвет текста",
                    type: "color",
                    value: "000000",
                    category: "content"
                  }
                ]
              }
            }
    })

    // Глубокое копирование объекта
    const deepClone = (obj) => {
        return JSON.parse(JSON.stringify(obj))
    }

    // Получить текущий экран из route или параметра
    const getCurrentScreen = (screen) => {
        return screen || 'mainScreen' // По умолчанию mainScreen
    }

    // Инициализация истории для экрана или navbar
    const initHistory = (key) => {
        if (!historyStore.value[key]) {
            historyStore.value[key] = {
                history: [],
                currentIndex: -1
            }
        }
    }

    // Сохранение снимка состояния в историю
    const saveToHistory = (screenKey, skipHistoryCheck = false) => {
        // Пропускаем сохранение истории при undo/redo
        if (isUndoRedoInProgress.value && !skipHistoryCheck) {
            return
        }

        initHistory(screenKey)
        const history = historyStore.value[screenKey]

        // Получаем снимок состояния
        let snapshot
        if (screenKey === 'navbar') {
            snapshot = deepClone(navbar.value)
        } else {
            // Сохраняем только данные конкретного экрана
            snapshot = deepClone(screens.value[screenKey] || {})
        }

        // Удаляем все записи после текущего индекса (если делаем новое изменение после undo)
        if (history.currentIndex < history.history.length - 1) {
            history.history = history.history.slice(0, history.currentIndex + 1)
        }

        // Добавляем новый снимок
        history.history.push(snapshot)

        // Ограничиваем глубину истории
        if (history.history.length > maxHistoryLength) {
            history.history.shift()
        } else {
            history.currentIndex = history.history.length - 1
        }

        // Обновляем флаг несохраненных изменений
        updateUnsavedChanges()
    }

    // Undo для конкретного экрана или navbar
    const undo = (screenKey) => {
        initHistory(screenKey)
        const history = historyStore.value[screenKey]

        if (history.currentIndex > 0) {
            isUndoRedoInProgress.value = true
            history.currentIndex--
            const snapshot = deepClone(history.history[history.currentIndex])
            
            if (screenKey === 'navbar') {
                navbar.value = snapshot
            } else {
                screens.value[screenKey] = snapshot
            }
            
            isUndoRedoInProgress.value = false
            updateUnsavedChanges()
            return true
        }
        return false
    }

    // Redo для конкретного экрана или navbar
    const redo = (screenKey) => {
        initHistory(screenKey)
        const history = historyStore.value[screenKey]

        if (history.currentIndex < history.history.length - 1) {
            isUndoRedoInProgress.value = true
            history.currentIndex++
            const snapshot = deepClone(history.history[history.currentIndex])
            
            if (screenKey === 'navbar') {
                navbar.value = snapshot
            } else {
                screens.value[screenKey] = snapshot
            }
            
            isUndoRedoInProgress.value = false
            updateUnsavedChanges()
            return true
        }
        return false
    }

    // Проверка возможности undo
    const canUndo = (screenKey) => {
        initHistory(screenKey)
        const history = historyStore.value[screenKey]
        return history.currentIndex > 0
    }

    // Проверка возможности redo
    const canRedo = (screenKey) => {
        initHistory(screenKey)
        const history = historyStore.value[screenKey]
        return history.currentIndex < history.history.length - 1
    }

    // Обновление флага несохраненных изменений
    const updateUnsavedChanges = () => {
        const currentState = {
            screens: deepClone(screens.value),
            navbar: deepClone(navbar.value)
        }

        if (!savedState.value) {
            hasUnsavedChanges.value = false
            return
        }

        const currentStateStr = JSON.stringify(currentState)
        const savedStateStr = JSON.stringify(savedState.value)
        hasUnsavedChanges.value = currentStateStr !== savedStateStr
    }

    // Сохранение текущего состояния как "сохраненного"
    const markAsSaved = () => {
        savedState.value = {
            screens: deepClone(screens.value),
            navbar: deepClone(navbar.value)
        }
        hasUnsavedChanges.value = false
    }

    // Инициализация сохраненного состояния
    const initSavedState = () => {
        if (!savedState.value) {
            savedState.value = {
                screens: deepClone(screens.value),
                navbar: deepClone(navbar.value)
            }
            hasUnsavedChanges.value = false
        }
    }

    const setMockupData = (data) => {
        screens.value = data.screens
        navbar.value = data.navbar
        
        // Инициализируем историю для всех экранов и navbar
        Object.keys(screens.value).forEach(screenKey => {
            initHistory(screenKey)
            saveToHistory(screenKey, true) // Сохраняем начальное состояние
        })
        initHistory('navbar')
        saveToHistory('navbar', true) // Сохраняем начальное состояние navbar
        
        // Инициализируем сохраненное состояние
        markAsSaved()
    }

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
            const navbarObj = navbar.value?.navbar || navbar.value
            return navbarObj?.variant?.name === variantName
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
        // Для navbar возвращаем объект из navbar.value
        if (componentName === 'navbar') {
            const navbarObj = navbar.value?.navbar || navbar.value
            return navbarObj || null
        }

        // Для остальных компонентов ищем в screens
        const screenContent = screens?.value[screen]?.content

        if (!screenContent) {
            return null
        }

        return screenContent.find(el => el.name === componentName) || null
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

    const updateNavbarVariant = (variantData) => {
        // Сохраняем в историю перед изменением
        saveToHistory('navbar')
        
        // Обновляем variant в структуре navbar
        if (navbar.value?.navbar) {
            navbar.value.navbar.variant = variantData
        } else if (navbar.value) {
            // Если структуры navbar.navbar нет, создаем её
            if (!navbar.value.navbar) {
                navbar.value.navbar = { name: 'navbar' }
            }
            navbar.value.navbar.variant = variantData
        } else {
            // Если структуры нет вообще, создаем её
            navbar.value = { navbar: { name: 'navbar', variant: variantData } }
        }
        
        updateUnsavedChanges()
    }

    const toggleComponent = (componentType, screen, componentsStore) => {
        const screenKey = getCurrentScreen(screen)
        
        // Для navbar
        if (componentType === 'navbar') {
            // Получаем объект navbar (может быть вложен в navbar.value.navbar или быть напрямую navbar.value)
            const navbarObj = navbar.value?.navbar || navbar.value
            if (navbarObj?.variant) {
                // Отключаем компонент (updateNavbarVariant уже сохраняет историю)
                updateNavbarVariant(null)
                // Если компонент редактируется, сбрасываем editedComponent
                if (editedComponent.value?.name === 'navbar') {
                    editedComponent.value = null
                }
            } else {
                // Включаем компонент - устанавливаем первый вариант (updateNavbarVariant уже сохраняет историю)
                const template = componentsStore.getTemplates[screen]?.[componentType]
                if (template?.variants?.length > 0) {
                    const firstVariant = JSON.parse(JSON.stringify(template.variants[0]))
                    updateNavbarVariant(firstVariant)
                }
            }
            return
        }

        // Сохраняем в историю перед изменением
        saveToHistory(screenKey)

        // Для компонентов в screens
        const screenData = screens.value[screenKey]
        if (!screenData?.content) {
            return
        }

        const component = screenData.content.find((item) => item.name === componentType)
        if (!component) {
            return
        }

        if (component.variant) {
            // Отключаем компонент
            component.variant = null
            // Если компонент редактируется, сбрасываем editedComponent
            if (editedComponent.value?.name === componentType) {
                editedComponent.value = null
            }
        } else {
            // Включаем компонент - устанавливаем первый вариант
            const template = componentsStore.getTemplates[screen]?.[componentType]
            if (template?.variants?.length > 0) {
                const firstVariant = JSON.parse(JSON.stringify(template.variants[0]))
                component.variant = firstVariant
            }
        }
        
        updateUnsavedChanges()
    }

    const saveData = async (publish = false) => {
        const appStore = useAppStore()
        
        const mockupData = {
            organizationid: appStore.getOrganizationId,
            screens: screens.value,
            navbar: navbar.value,
            publish: publish
        }

        console.log('saveData', mockupData)

        try {
            await post(`/app-creator`, mockupData)
            // После успешного сохранения обновляем сохраненное состояние
            markAsSaved()
        } catch(error) {
            error.value = err
            console.error('Ошибка при загрузке', err)
            throw err
        }
    }

    // Метод для сохранения истории при изменении компонента через v-model
    // Вызывается из компонентов, которые напрямую изменяют editedComponent
    const saveComponentChange = (screen) => {
        const screenKey = getCurrentScreen(screen)
        saveToHistory(screenKey)
        updateUnsavedChanges()
    }

    // Метод для сохранения истории при изменении navbar
    const saveNavbarChange = () => {
        saveToHistory('navbar')
        updateUnsavedChanges()
    }

    return {
        navbar,
        getNavbar: computed(() => navbar.value?.navbar || navbar.value),
        screens,
        getScreens: computed(() => screens.value),
        setMockupData,
        editedComponent,
        getEditedComponent: computed(() => editedComponent.value),
        editedComponentToggle,
        isElementUsed,
        getComponentFromMockup,
        hasUnsavedChanges: computed(() => hasUnsavedChanges.value),
        deleteComponentFromMockup,
        addComponentToMockup,
        toggleComponent,
        updateNavbarVariant,
        saveData,
        // История
        undo,
        redo,
        canUndo,
        canRedo,
        saveComponentChange,
        saveNavbarChange,
        initSavedState,
        markAsSaved,
        getCurrentScreen
    }
})