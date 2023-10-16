import Painting from "../../helpers/painting/TextPainting.js";
const TextWeb = (p) => {
  const style = Painting.style(p);
  const css = Painting.css(p);
  const extras = {
    ref: p.reference
  };
  const Element = `${p.element || p.to ? "a" : "span"}`;
  return /* @__PURE__ */ React.createElement(
    Element,
    {
      id: p.id,
      onClick: p.press,
      style,
      className: css,
      target: p.target,
      href: p.to,
      ...extras,
      ...p.native
    },
    p.children
  );
};
var TextWeb_default = TextWeb;
export {
  TextWeb,
  TextWeb_default as default
};
//# sourceMappingURL=TextWeb.js.map
