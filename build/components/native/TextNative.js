import Painting from "../../helpers/painting/TextPainting.js";
import React from "react";
const TextNative = (p) => {
  const { Text, Linking } = require("react-native");
  const style = Painting.style({
    ...p,
    pure: true,
    parse: p.parse && p.css ? `${p.parse} ${p.css}` : p.parse ? p.parse : p.css || void 0
  });
  const extras = {
    ref: p.reference
  };
  return /* @__PURE__ */ React.createElement(
    Text,
    {
      id: p.id,
      onPress: () => {
        p?.press?.();
        if (p.to && p.target === "_blank") {
          Linking.openURL(p.to);
        }
      },
      style,
      ...extras,
      ...p.native
    },
    p.children
  );
};
var TextNative_default = TextNative;
export {
  TextNative,
  TextNative_default as default
};
//# sourceMappingURL=TextNative.js.map
