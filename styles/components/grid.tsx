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
  height?: string;
  rowTag?: "ul" | "ol";
  rowPadding?: tSizeList;
}

interface iCol {
  className?: string;
  children: React.ReactNode;
  size?: tSizeList;
}

interface iSection {
  className?: string;
  children: React.ReactNode;
  alternativeTag?: "div";
  sectionId?: string;
  sectionOverlay?: boolean;
  sectionOverlayColor?: string;
  sectionBackgroundImage?: string;
  sectionBackgroundColor?: "primary" | "secondary" | "white" | "black" | string;
  sectionPadding?: tSizeList;
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

//Componente base do ThemeSection
export const BaseSection: React.FC<iSection> = ({
  children,
  className,
  sectionId,
  sectionOverlay,
  alternativeTag,
}) => {
  return (
    <>
      {alternativeTag ? (
        <>
          {sectionOverlay ? (
            <div id={sectionId} className={className}>
              <div className="overlay">{children}</div>
            </div>
          ) : (
            <div id={sectionId} className={className}>
              {children}
            </div>
          )}
        </>
      ) : (
        <>
          {sectionOverlay ? (
            <section id={sectionId} className={className}>
              <div className="overlay">{children}</div>
            </section>
          ) : (
            <section id={sectionId} className={className}>
              {children}
            </section>
          )}
        </>
      )}
    </>
  );
};
