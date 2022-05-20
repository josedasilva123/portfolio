import { breakpoints } from "../globals";
export type tSizeList = {
    us?: string | number;
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
    const backupBreakpoint = breakpoints.find((breakpoint) => prop?.[breakpoint.name]);
    if(prop?.xl){
        return prop.xl;
    } else if(backupBreakpoint){
        return prop?.[backupBreakpoint.name];
    } else if (prop?.default){
        return prop.default;
    }
}

export const SmallerDefault: tSizeFunction = (prop) => {
    //Lista reversa
    const reversedBreakpoints = [...breakpoints].reverse();
    const backupBreakpoint = reversedBreakpoints.find((breakpoint) => prop?.[breakpoint.name]);

    if(backupBreakpoint){
        return prop?.[backupBreakpoint.name];
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