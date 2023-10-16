import React from "react";
export declare const Text: (p: TextProps) => React.JSX.Element | null;
export default Text;
export type TextGenericProps = {
    children?: JSX.Element | JSX.Element[];
    native?: {
        [key: string]: unknown;
    };
    element?: string;
    id?: string;
    target?: string;
    to?: string;
};
export type TextStyleProps = {
    top?: number | string;
    left?: number | string;
    bottom?: number | string;
    right?: number | string;
    flex?: number | string;
    align?: "flex-start" | "flex-end" | "center" | "baseline" | "stretch" | "unset" | "initial" | "inherit" | "none" | "auto";
    justify?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "unset" | "initial" | "inherit" | "none" | "auto";
    direction?: "row" | "column" | "row-reverse" | "column-reverse" | "unset" | "initial" | "inherit" | "none" | "auto";
    space?: "normal" | "nowrap" | "pre" | "pre-line" | "pre-wrap";
    family?: string;
    color?: string;
    height?: number | string;
    width?: number | string;
    opacity?: number;
    padding?: number | string;
    margin?: number | string;
    position?: "absolute" | "relative" | "fixed" | "sticky" | "unset" | "initial" | "inherit" | "none" | "auto";
    overflow?: "visible" | "hidden" | "scroll" | "unset" | "initial" | "inherit" | "none" | "auto";
    display?: "inline" | "block" | "inline-block" | "flex" | "unset" | "initial" | "inherit" | "none" | "auto";
    layer?: number;
    mode?: "margin" | "padding" | "position";
    style?: {
        [key: string]: unknown;
    };
};
export type TextProps = {
    parse?: string;
    css?: string;
    reference?: React.Ref<HTMLSpanElement>;
    press?: () => unknown;
    pure?: boolean;
} & TextGenericProps & TextStyleProps;
