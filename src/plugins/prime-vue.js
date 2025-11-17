import PrimeVue from 'primevue/config'
import DialogService from 'primevue/dialogservice'
import theme from '@/theme'
import ToastService from 'primevue/toastservice'
import Tooltip from 'primevue/tooltip'

const ru = {
    firstDayOfWeek: 1,
    dayNames: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
    dayNamesShort: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
    dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
    monthNames: [
        'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
        'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
    ],
    monthNamesShort: [
        'Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн',
        'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'
    ],
    today: 'Сегодня',
    clear: 'Очистить',
    weekHeader: 'Нед',
    emptyMessage: 'Ничего не найдено',
}

export default {
    install(app) {
        app.use(PrimeVue, {
            locale: ru,
            ptOptions: {
                mergeSections: true,
                mergeProps: true
            },
            pt: theme.pt,
            theme: {
                preset: theme,
                dark: false,
                options: {
                    cssLayer: {
                        name: 'primevue',
                        order: 'base, theme, properties, components, primevue, utilities, app'
                    },                    
                    darkModeSelector: false || 'none',
                }
            },
            ripple: false,
        }),
        app.use(DialogService),
        app.use(ToastService),
        app.directive('tooltip', Tooltip);
    }
};