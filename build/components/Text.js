import LayoutPlatform, { LayoutPlatforms } from "../helpers/LayoutPlatform.js";
import TextWeb from "./web/TextWeb.js";
import TextNative from "./native/TextNative.js";
const Text = (p) => {
  if (LayoutPlatform.OS === LayoutPlatforms.WEB) {
    return TextWeb(p);
  }
  if (LayoutPlatform.OS === LayoutPlatforms.NATIVE) {
    return TextNative(p);
  }
  console.warn("Text component is not supported for this platform.");
  return null;
};
var Text_default = Text;
export {
  Text,
  Text_default as default
};
//# sourceMappingURL=Text.js.map
