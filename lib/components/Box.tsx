import React from "react";
import Painting from "../helpers/Painting.js";
import LayoutPlatform, { LayoutPlatforms } from "../helpers/LayoutPlatform.js";

export const Box = (p: BoxProps) => {
  if (LayoutPlatform.OS === LayoutPlatforms.WEB) {
    return BoxWeb(p);
  }

  if (LayoutPlatform.OS === LayoutPlatforms.NATIVE) {
    return BoxNative(p);
  }

  return null;
};

export const BoxNative = (p: BoxProps) => {
  const { TouchableOpacity, View } = require("react-native");

  const style = Painting.style({
    ...p,
    pure: true,
    parse:
      p.parse && p.css
        ? `${p.parse} ${p.css}`
        : p.parse
        ? p.parse
        : p.css || undefined,
  });
  const extras: {
    [key: string]: unknown;
  } = {
    ref: p.reference,
  };

  if (p.press) {
    return (
      <TouchableOpacity
        id={p.id}
        onPress={p.press}
        style={style}
        {...extras}
        {...p.native}
      >
        {p.children}
      </TouchableOpacity>
    );
  }

  return (
    <View id={p.id} style={style} {...extras} {...p.native}>
      {p.children}
    </View>
  );
};

export const BoxWeb = (p: BoxProps) => {
  const style = Painting.style(p);
  const css = Painting.css(p);
  const extras: {
    [key: string]: unknown;
  } = {
    ref: p.reference,
  };

  const Element = `${p.element || "div"}` as keyof JSX.IntrinsicElements;

  return (
    <Element
      id={p.id}
      onClick={p.press}
      style={style}
      className={css}
      {...extras}
      {...p.native}
    >
      {p.children}
    </Element>
  );
};

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
