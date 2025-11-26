const normalizeValue = (value) => {
    if (typeof value === 'number') {
        return `${value}px`;
    }
    if (typeof value === 'string') {
        const num = Number(value);
        return !isNaN(num) ? `${num}px` : value;
    }
    return '0px';
};

const normalizeColor = (value) => {
    if (!value) return '';
    
    if (typeof value === 'string') {
        // Если значение уже содержит # или это CSS-ключевое слово
        if (value.startsWith('#') || 
            ['transparent', 'inherit', 'initial', 'unset'].includes(value) ||
            value.startsWith('rgb(') || value.startsWith('rgba(') ||
            value.startsWith('hsl(') || value.startsWith('hsla(') ||
            value.includes('var(') || value.includes('linear-gradient')) {
            return value;
        }
        // Иначе добавляем #
        return `#${value}`;
    }
    
    return `#${value}`;
};

const concatParams = (params) => {
    if (!params || typeof params !== 'object') {
        return '0px';
    }
    
    return Object.values(params)
        .map(normalizeValue)
        .join(' ');
};

const styleMap = {
    background: (value) => value ? `background: ${normalizeColor(value)};` : '',
    color: (value) => value ? `color: ${normalizeColor(value)};` : '',
    padding: (value) => value ? `padding: ${concatParams(value)};` : '',
    gap: (value) => value ? `gap: ${concatParams(value)};` : '',
    rounded: (value) => value?.value ? `border-radius: ${normalizeValue(value.value)};` : '',
    shadow: (value) => value?.value ? `box-shadow: ${value.value};` : '',
    height: (value) => value ? `height: ${normalizeValue(value)};` : '',
    border: (value) => {
        if (!value?.width?.value || !value?.color) return '';
        return `border: solid ${normalizeValue(value.width.value)} #${value.color};`;
    },
    bottom: (value) => value ? `bottom: ${normalizeValue(value)};` : '',
};

// Единый порядок для всех стилей - ВСЕГДА такой порядок!
const styleOrder = [
    'background',
    'color',
    'height',
    'padding',
    'rounded',
    'gap',
    'border',
    'bottom',
    'shadow',
];

export const setStyles = (stylesArray = [], category = null, params = 'all', options = {}) => {
    if (!Array.isArray(stylesArray)) {
        return '';
    }

    // 1. Фильтруем стили по категории если указана
    let filteredStyles = stylesArray;
    if (category) {
        filteredStyles = stylesArray.filter(style => style.category === category);
    }

    // 2. Фильтруем по имени если указано
    if (options.byName) {
        const nameList = Array.isArray(options.byName) ? options.byName : [options.byName];
        filteredStyles = filteredStyles.filter(style => 
            style.name && nameList.includes(style.name)
        );
    }

    // 3. Создаем объект с значениями стилей
    const styleValues = {};
    filteredStyles.forEach(style => {
        if (style.type && style.value !== undefined) {
            styleValues[style.type] = style.value;
        }
    });

    // 4. Определяем какие стили обрабатывать
    let requestedStyles = [];
    
    if (params === 'all') {
        // Берем ВСЕ стили из отфильтрованных
        requestedStyles = [...new Set(filteredStyles.map(style => style.type).filter(Boolean))];
    } else {
        // Берем только указанные стили
        requestedStyles = Array.isArray(params) ? params : [params];
    }

    // 5. СОРТИРУЕМ запрошенные стили по нашему порядку
    const stylesToProcess = styleOrder.filter(styleType => 
        requestedStyles.includes(styleType)
    );

    // 6. Генерируем CSS строку ВСЕГДА в правильном порядке
    const result = stylesToProcess
        .map(styleType => {
            const styleFunction = styleMap[styleType];
            const value = styleValues[styleType];
            
            if (!styleFunction) {
                return '';
            }
            
            return styleFunction(value) || '';
        })
        .filter(Boolean)
        .join(' ')
        .trim();

    return result;
};