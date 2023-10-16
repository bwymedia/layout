import React from "react";
import Painting from "../../helpers/painting/BoxPainting.js";
const BoxNative = (p) => {
  const { TouchableOpacity, View } = require("react-native");
  const style = Painting.style({
    ...p,
    pure: true,
    parse: p.parse && p.css ? `${p.parse} ${p.css}` : p.parse ? p.parse : p.css || void 0
  });
  const extras = {
    ref: p.reference
  };
  if (p.press) {
    return /* @__PURE__ */ React.createElement(
      TouchableOpacity,
      {
        id: p.id,
        onPress: p.press,
        style,
        ...extras,
        ...p.native
      },
      p.children
    );
  }
  return /* @__PURE__ */ React.createElement(View, { id: p.id, style, ...extras, ...p.native }, p.children);
};
var BoxNative_default = BoxNative;
export {
  BoxNative,
  BoxNative_default as default
};
//# sourceMappingURL=BoxNative.js.map
