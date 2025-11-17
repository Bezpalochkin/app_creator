const normalizeValue = (value) => {
    const num = Number(value);
    return !isNaN(num) ? `${num}px` : '0px';
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
    background: (value) => value ? `background: #${value};` : '',
    padding: (value) => value ? `padding: ${concatParams(value)};` : '',
    gap: (value) => value ? `gap: ${concatParams(value)};` : '',
    rounded: (value) => value?.value ? `border-radius: ${normalizeValue(value.value)};` : '',
    shadow: (value) => value?.value ? `box-shadow: ${value.value};` : '',
    height: (value) => value ? `height: ${normalizeValue(value)};` : '',
    border: (value) => {
        if (!value?.width?.value || !value?.color) return '';
        return `border: solid ${normalizeValue(value.width.value)} #${value.color};`;
    }
};

export const setStyles = (settings = {}, params = 'all') => {
    if (!settings || typeof settings !== 'object') {
        return '';
    }

    const paramsToProcess = params === 'all' 
        ? Object.keys(settings)
        : Array.isArray(params) ? params : [params];

    return paramsToProcess
        .map(param => {
            const styleFunction = styleMap[param];
            const value = settings[param];
            return styleFunction?.(value) || '';
        })
        .filter(Boolean)
        .join(' ')
        .trim();
};