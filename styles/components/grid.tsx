import React from "react";
import { tSizeList } from "../config/breakpoints";
import { iMargin } from "./general";

interface iContainer {
  className?: string;
  children: React.ReactNode;
  containerPadding?: "sm" | "md" | "lg";
  paddingTop?: tSizeList;
  paddingBottom?: tSizeList;
  containerSize?: "sm" | "md" | "lg";
}

interface iFlexRow {
  className?: string;
  children: React.ReactNode;
  gap?: tSizeList;
  alignItems?: tSizeList;
  rowMargin?: iMargin;
  justifyContent?: tSizeList;
  flexDirection?: tSizeList;
  flexWrap?: tSizeList;
  rowTag?: "ul" | "ol";
}

interface iCol {
  className?: string;
  children: React.ReactNode;
  size?: tSizeList;
}

//Componente base do Container
export const BaseContainer: React.FC<iContainer> = ({
  children,
  className,
}) => {
  return <div className={className}>{children}</div>;
};

//Componente base do FlexRow
export const BaseFlexRow: React.FC<iFlexRow> = ({
  children,
  className,
  rowTag,
}) => {
  return (
    <>
      {rowTag === "ul" && <ul className={className}>{children}</ul>}
      {rowTag === "ol" && <ol className={className}>{children}</ol>}
      {!rowTag && <div className={className}>{children}</div>}
    </>
  );
};

//Componente base do Col
export const BaseCol: React.FC<iCol> = ({ children, className }) => {
  return <div className={className}>{children}</div>;
};
