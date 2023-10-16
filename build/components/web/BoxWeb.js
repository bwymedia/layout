import React from "react";
import Painting from "../../helpers/painting/BoxPainting.js";
const BoxWeb = (p) => {
  const style = Painting.style(p);
  const css = Painting.css(p);
  const extras = {
    ref: p.reference
  };
  const Element = `${p.element || "div"}`;
  return /* @__PURE__ */ React.createElement(
    Element,
    {
      id: p.id,
      onClick: p.press,
      style,
      className: css,
      ...extras,
      ...p.native
    },
    p.children
  );
};
var BoxWeb_default = BoxWeb;
export {
  BoxWeb,
  BoxWeb_default as default
};
//# sourceMappingURL=BoxWeb.js.map
