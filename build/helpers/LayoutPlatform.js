var LayoutPlatforms = /* @__PURE__ */ ((LayoutPlatforms2) => {
  LayoutPlatforms2["NODE"] = "node";
  LayoutPlatforms2["NATIVE"] = "native";
  LayoutPlatforms2["WEB"] = "web";
  LayoutPlatforms2["UNKOWN"] = "unkown";
  return LayoutPlatforms2;
})(LayoutPlatforms || {});
const LayoutPlatform = {
  OS: (() => {
    try {
      if (typeof document !== "undefined") {
        return "web" /* WEB */;
      } else if (
        /* @ts-ignore */
        typeof navigator !== "undefined" && /* @ts-ignore */
        navigator?.product === "ReactNative"
      ) {
        return "native" /* NATIVE */;
      } else {
        return "node" /* NODE */;
      }
    } catch (error) {
      console.error(error);
      return "unkown" /* UNKOWN */;
    }
  })()
};
var LayoutPlatform_default = LayoutPlatform;
export {
  LayoutPlatforms,
  LayoutPlatform_default as default
};
//# sourceMappingURL=LayoutPlatform.js.map
