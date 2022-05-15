export type tSizeList = {
    xs?: string | number;
    sm?: string | number;
    md?: string | number;
    lg?: string | number;
    xl?: string | number;
    default?: string | number;
}

type tSizeFunction = (
   prop: tSizeList | undefined,
) => string | number | undefined;

export const LargerDefault: tSizeFunction = (prop) => {
    if(prop?.xl){
        return prop.xl;
    } else if(prop?.lg){
        return prop.lg;
    } else if(prop?.md) {
        return prop.md;
    } else if (prop?.sm) {
        return prop.sm;
    } else if (prop?.xs) {
        return prop.xs
    } else if (prop?.default){
        return prop.default;
    }
}

export const SmallerDefault: tSizeFunction = (prop) => {
    if(prop?.xs){
        return prop.xs;
    } else if(prop?.sm){
        return prop.sm;
    } else if(prop?.md) {
        return prop?.md;
    } else if (prop?.lg) {
        return prop?.lg;
    } else if (prop?.xl) {
        return prop?.xl
    } else if (prop?.default) {
        return prop.default;
    }
}

//Função para retornar o valor equivante a respectivo tamanho
type tGetSizeValue = (
    prop: tSizeList | undefined,
    size: string | number | undefined,
    sizeFunction: tSizeFunction,
) => string | number | undefined 

export const getSizeValue: tGetSizeValue = (prop, size, sizeFunction) => {
    if(size){
        return size;
    } else {
        const backupSize = sizeFunction(prop);
        return backupSize;
    }
}