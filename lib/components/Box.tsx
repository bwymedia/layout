import React from "react";
import LayoutPlatform, { LayoutPlatforms } from "../helpers/LayoutPlatform.js";
import BoxWeb from "./web/BoxWeb.js";
import BoxNative from "./native/BoxNative.js";

export const Box = (p: BoxProps) => {
  if (LayoutPlatform.OS === LayoutPlatforms.WEB) {
    return BoxWeb(p);
  }

  if (LayoutPlatform.OS === LayoutPlatforms.NATIVE) {
    return BoxNative(p);
  }

  console.warn("Box component is not supported for this platform.");
  return null;
};

export default Box;

export type BoxGenericProps = {
  children?: React.ReactNode;
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
  align?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "baseline"
    | "stretch"
    | "unset"
    | "initial"
    | "inherit"
    | "none"
    | "auto";
  justify?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "unset"
    | "initial"
    | "inherit"
    | "none"
    | "auto";
  direction?:
    | "row"
    | "column"
    | "row-reverse"
    | "column-reverse"
    | "unset"
    | "initial"
    | "inherit"
    | "none"
    | "auto";
  wrap?:
    | "nowrap"
    | "wrap"
    | "wrap-reverse"
    | "unset"
    | "initial"
    | "inherit"
    | "none"
    | "auto";
  color?: string;
  radius?: number;
  shadow?: string;
  height?: number | string;
  width?: number | string;
  opacity?: number;
  padding?: number | string;
  margin?: number | string;
  position?:
    | "absolute"
    | "relative"
    | "fixed"
    | "sticky"
    | "unset"
    | "initial"
    | "inherit"
    | "none"
    | "auto";
  overflow?:
    | "visible"
    | "hidden"
    | "scroll"
    | "unset"
    | "initial"
    | "inherit"
    | "none"
    | "auto";
  display?:
    | "inline"
    | "block"
    | "inline-block"
    | "flex"
    | "unset"
    | "initial"
    | "inherit"
    | "none"
    | "auto";
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
} & BoxGenericProps &
  BoxStyleProps;
