import React from "react";
export declare const Box: (p: BoxProps) => React.JSX.Element | null;
export default Box;
export type BoxGenericProps = {
    children?: JSX.Element | JSX.Element[];
    native?: {
        [key: string]: unknown;
    };
    element?: string;
    id?: string;
};
export type BoxStyleProps = {
    top?: number | string;
    left?: number | string;
    bottom?: number | string;
    right?: number | string;
    flex?: number | string;
    align?: "flex-start" | "flex-end" | "center" | "baseline" | "stretch" | "unset" | "initial" | "inherit" | "none" | "auto";
    justify?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "unset" | "initial" | "inherit" | "none" | "auto";
    direction?: "row" | "column" | "row-reverse" | "column-reverse" | "unset" | "initial" | "inherit" | "none" | "auto";
    wrap?: "nowrap" | "wrap" | "wrap-reverse" | "unset" | "initial" | "inherit" | "none" | "auto";
    color?: string;
    radius?: number;
    shadow?: string;
    height?: number | string;
    width?: number | string;
    opacity?: number;
    padding?: number | string;
    margin?: number | string;
    position?: "absolute" | "relative" | "fixed" | "sticky" | "unset" | "initial" | "inherit" | "none" | "auto";
    overflow?: "visible" | "hidden" | "scroll" | "unset" | "initial" | "inherit" | "none" | "auto";
    display?: "inline" | "block" | "inline-block" | "flex" | "unset" | "initial" | "inherit" | "none" | "auto";
    border?: string;
    layer?: number;
    image?: string;
    mode?: "margin" | "padding" | "position";
    style?: {
        [key: string]: unknown;
    };
};
export type BoxProps = {
    parse?: string;
    css?: string;
    reference?: React.Ref<HTMLDivElement>;
    press?: () => unknown;
    pure?: boolean;
} & BoxGenericProps & BoxStyleProps;
