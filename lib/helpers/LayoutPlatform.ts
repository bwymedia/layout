export enum LayoutPlatforms {
  NODE = "node",
  NATIVE = "native",
  WEB = "web",
  UNKNOWN = "unknown",
}

const LayoutPlatform = {
  OS: (() => {
    try {
      /* @ts-ignore */
      if (typeof document !== "undefined") {
        return LayoutPlatforms.WEB;
      } else if (
        /* @ts-ignore */
        typeof navigator !== "undefined" &&
        /* @ts-ignore */
        navigator?.product === "ReactNative"
      ) {
        return LayoutPlatforms.NATIVE;
      } else {
        return LayoutPlatforms.NODE;
      }
    } catch (error) {
      console.error(error);
      return LayoutPlatforms.UNKNOWN;
    }
  })(),
};

export default LayoutPlatform;
