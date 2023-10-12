export interface LayoutProperties {
  [key: string]: {
    jsx: string;
    css: string;
    options?: string[];
    shorthand?: {
      [key: string]: string;
    };
    suffix?: string;
  };
}

const NumericalCommons = [
  "0",
  "50%",
  "100%",
  ...[...Array(25)].map((_, i) => String((i + 1) * 4)),
];

export const Properties: LayoutProperties = {
  a: {
    jsx: "alignItems",
    css: "align-items",
    options: ["flex-start", "flex-end", "center", "baseline", "stretch"],
    shorthand: {
      fs: "flex-start",
      fe: "flex-end",
      c: "center",
      b: "baseline",
      s: "stretch",
    },
  },
  b: {
    jsx: "bottom",
    css: "bottom",
    options: NumericalCommons,
    suffix: "px",
  },
  br: {
    jsx: "borderRadius",
    css: "border-radius",
    options: NumericalCommons,
    suffix: "px",
  },
  c: {
    jsx: "backgroundColor",
    css: "background-color",
  },
  tc: {
    jsx: "color",
    css: "color",
  },
  d: {
    jsx: "display",
    css: "display",
    options: ["flex", "block", "inline-block", "inline"],
    shorthand: {
      f: "flex",
      b: "block",
      ib: "inline-block",
      i: "inline",
    },
  },
  f: {
    jsx: "flex",
    css: "flex",
  },
  fd: {
    jsx: "flexDirection",
    css: "flex-direction",
    options: ["row", "row-reverse", "column", "column-reverse"],
    shorthand: {
      r: "row",
      rr: "row-reverse",
      c: "column",
      cr: "column-reverse",
    },
  },
  fs: {
    jsx: "fontSize",
    css: "font-size",
  },
  h: {
    jsx: "height",
    css: "height",
    options: NumericalCommons,
    suffix: "px",
  },
  i: {
    jsx: "zIndex",
    css: "z-index",
  },
  j: {
    jsx: "justifyContent",
    css: "justify-content",
    options: [
      "flex-start",
      "flex-end",
      "center",
      "space-between",
      "space-around",
    ],
    shorthand: {
      fs: "flex-start",
      fe: "flex-end",
      c: "center",
      sb: "space-between",
      sa: "space-around",
    },
  },
  l: {
    jsx: "left",
    css: "left",
    options: NumericalCommons,
    suffix: "px",
  },
  lh: {
    jsx: "lineHeight",
    css: "line-height",
  },
  ma: {
    jsx: "margin",
    css: "margin",
    options: NumericalCommons,
    suffix: "px",
  },
  mb: {
    jsx: "marginBottom",
    css: "margin-bottom",
    options: NumericalCommons,
    suffix: "px",
  },
  ml: {
    jsx: "marginLeft",
    css: "margin-left",
    options: NumericalCommons,
    suffix: "px",
  },
  mnh: {
    jsx: "minHeight",
    css: "min-height",
    options: NumericalCommons,
    suffix: "px",
  },
  mnw: {
    jsx: "minWidth",
    css: "min-width",
    options: NumericalCommons,
    suffix: "px",
  },
  mr: {
    jsx: "marginRight",
    css: "margin-right",
    options: NumericalCommons,
    suffix: "px",
  },
  mt: {
    jsx: "marginTop",
    css: "margin-top",
    options: NumericalCommons,
    suffix: "px",
  },
  mxh: {
    jsx: "maxHeight",
    css: "max-height",
    options: NumericalCommons,
    suffix: "px",
  },
  mxw: {
    jsx: "maxWidth",
    css: "max-width",
    options: NumericalCommons,
    suffix: "px",
  },
  o: {
    jsx: "opacity",
    css: "opacity",
    options: ["0", "1"],
  },
  oa: {
    jsx: "overflow",
    css: "overflow",
    options: ["visible", "hidden", "scroll", "auto"],
    shorthand: {
      v: "visible",
      h: "hidden",
      s: "scroll",
      a: "auto",
    },
  },
  ox: {
    jsx: "overflowX",
    css: "overflow-x",
    options: ["visible", "hidden", "scroll", "auto"],
    shorthand: {
      v: "visible",
      h: "hidden",
      s: "scroll",
      a: "auto",
    },
  },
  oy: {
    jsx: "overflowY",
    css: "overflow-y",
    options: ["visible", "hidden", "scroll", "auto"],
    shorthand: {
      v: "visible",
      h: "hidden",
      s: "scroll",
      a: "auto",
    },
  },
  p: {
    jsx: "position",
    css: "position",
    options: ["absolute", "relative", "fixed", "static"],
    shorthand: {
      a: "absolute",
      r: "relative",
      f: "fixed",
      s: "static",
    },
  },
  pa: {
    jsx: "padding",
    css: "padding",
    options: NumericalCommons,
    suffix: "px",
  },
  pb: {
    jsx: "paddingBottom",
    css: "padding-bottom",
    options: NumericalCommons,
    suffix: "px",
  },
  pl: {
    jsx: "paddingLeft",
    css: "padding-left",
    options: NumericalCommons,
    suffix: "px",
  },
  pr: {
    jsx: "paddingRight",
    css: "padding-right",
    options: NumericalCommons,
    suffix: "px",
  },
  pt: {
    jsx: "paddingTop",
    css: "padding-top",
    options: NumericalCommons,
    suffix: "px",
  },
  r: {
    jsx: "right",
    css: "right",
    options: NumericalCommons,
    suffix: "px",
  },
  t: {
    jsx: "top",
    css: "top",
    options: NumericalCommons,
    suffix: "px",
  },
  ta: {
    jsx: "textAlign",
    css: "text-align",
    options: ["left", "center", "right"],
    shorthand: {
      l: "left",
      c: "center",
      r: "right",
    },
  },
  w: {
    jsx: "width",
    css: "width",
    options: NumericalCommons,
    suffix: "px",
  },
  ws: {
    jsx: "whiteSpace",
    css: "white-space",
    options: ["normal", "nowrap", "pre", "pre-wrap", "pre-line"],
    shorthand: {
      n: "normal",
      nw: "nowrap",
      p: "pre",
      pw: "pre-wrap",
      pl: "pre-line",
    },
  },
  fw: {
    jsx: "flexWrap",
    css: "flex-wrap",
    options: ["nowrap", "wrap", "wrap-reverse"],
    shorthand: {
      n: "nowrap",
      w: "wrap",
      wr: "wrap-reverse",
    },
  },
  ff: {
    jsx: "fontFamily",
    css: "font-family",
  },
};

export default Properties;
