import LayoutPlatform, { LayoutPlatforms } from "../helpers/LayoutPlatform.js";
import BoxWeb from "./web/BoxWeb.js";
import BoxNative from "./native/BoxNative.js";
const Box = (p) => {
  if (LayoutPlatform.OS === LayoutPlatforms.WEB) {
    return BoxWeb(p);
  }
  if (LayoutPlatform.OS === LayoutPlatforms.NATIVE) {
    return BoxNative(p);
  }
  console.warn("Box component is not supported for this platform.");
  return null;
};
var Box_default = Box;
export {
  Box,
  Box_default as default
};
//# sourceMappingURL=Box.js.map
