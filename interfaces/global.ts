export interface iTech{
    name: string;
    proficiency: number;
    category: string;
}

export interface iProject{
    name: string,
    areas: string[],
    link: string,
}

export interface iPadding{
    all?: string;
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
}
