import { TextProps } from "../Text.js";
import Painting from "../../helpers/painting/TextPainting.js";
import React from "react";

export const TextNative = (p: TextProps) => {
  const { Text, Linking } = require("react-native");
  
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

  return (
    <Text
      id={p.id}
      onPress={() => {
        p?.press?.();

        if (p.to && p.target === "_blank") {
          Linking.openURL(p.to);
        }
      }}
      style={style}
      {...extras}
      {...p.native}
    >
      {p.children}
    </Text>
  );
};

export default TextNative;
