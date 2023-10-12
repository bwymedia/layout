import React from "react";
import Painting from "../../helpers/painting/BoxPainting.js";
import { BoxProps } from "../Box.js";

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

export default BoxNative;
