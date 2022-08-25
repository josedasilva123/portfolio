//Configure os breakpoints
export type tSizeList = {
    us?: string | number;
    xss?: string | number;
    xs?: string | number;
    sm?: string | number;
    md?: string | number;
    lg?: string | number;
    xl?: string | number;
    default?: string | number;
}

interface iBreakpoint {
  name: "xl" | "lg" | "md" | "sm" | "xs" | "xss" | "us";
  break: number;
  reverse: boolean;
}

export const breakpoints: iBreakpoint[] = [
  {
    name: "lg",
    break: 1368,
    reverse: false,
  },
  {
    name: "md",
    break: 1024,
    reverse: false,
  },
  {
    name: "sm",
    break: 768,
    reverse: true,
  },
  {
    name: "xs",
    break: 600,
    reverse: true
  },
  {
    name: "us",
    break: 350,
    reverse: true,
  },
];

