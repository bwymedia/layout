class BoxStyles {
  static apply = (styles, rule, value, defaults = null) => {
    if (value) {
      styles[rule] = value;
    } else {
      if (defaults) {
        styles[rule] = defaults;
      }
    }
    return styles;
  };
  static parse(props) {
    let _ = {};
    _ = this.apply(_, "height", props.height);
    _ = this.apply(_, "width", props.width);
    _ = this.apply(_, "opacity", props.opacity);
    _ = this.apply(_, "over", props.overflow);
    _ = this.apply(_, "display", props.display);
    _ = this.apply(_, "border", props.border);
    _ = this.apply(_, "position", props.position);
    _ = this.apply(_, "cursor", props.press ? "pointer" : void 0);
    _ = this.apply(_, "backgroundColor", props.color);
    _ = this.apply(_, "borderRadius", props.radius);
    _ = this.apply(_, "flex", props.flex);
    _ = this.apply(_, "flexDirection", props.direction);
    _ = this.apply(_, "flexWrap", props.wrap);
    _ = this.apply(_, "alignItems", props.align);
    _ = this.apply(_, "justifyContent", props.justify);
    _ = this.apply(
      _,
      "paddingTop",
      props.padding || props.mode === "padding" ? props.top : void 0
    );
    _ = this.apply(
      _,
      "paddingLeft",
      props.padding || props.mode === "padding" ? props.left : void 0
    );
    _ = this.apply(
      _,
      "paddingBottom",
      props.padding || props.mode === "padding" ? props.bottom : void 0
    );
    _ = this.apply(
      _,
      "paddingRight",
      props.padding || props.mode === "padding" ? props.right : void 0
    );
    _ = this.apply(
      _,
      "marginTop",
      props.margin || props.mode === "margin" ? props.top : void 0
    );
    _ = this.apply(
      _,
      "marginLeft",
      props.margin || props.mode === "margin" ? props.left : void 0
    );
    _ = this.apply(
      _,
      "marginBottom",
      props.margin || props.mode === "margin" ? props.bottom : void 0
    );
    _ = this.apply(
      _,
      "marginRight",
      props.margin || props.mode === "margin" ? props.right : void 0
    );
    _ = this.apply(_, "top", props.mode === "position" ? props.top : void 0);
    _ = this.apply(
      _,
      "left",
      props.mode === "position" ? props.left : void 0
    );
    _ = this.apply(
      _,
      "bottom",
      props.mode === "position" ? props.bottom : void 0
    );
    _ = this.apply(
      _,
      "right",
      props.mode === "position" ? props.right : void 0
    );
    _ = this.apply(_, "boxShadow", props.shadow);
    _ = this.apply(
      _,
      "boxSizing",
      props.top || props.left || props.right || props.bottom ? "border-box" : void 0
    );
    _ = this.apply(_, "zIndex", props.layer);
    if (props.image) {
      _ = this.apply(_, "backgroundImage", props.image);
      _ = this.apply(_, "backgroundRepeat", "no-repeat");
      _ = this.apply(_, "backgroundSize", "cover");
      _ = this.apply(_, "backgroundPosition", "center");
    }
    return { style: _ };
  }
}
var BoxStyles_default = BoxStyles;
export {
  BoxStyles,
  BoxStyles_default as default
};
//# sourceMappingURL=BoxStyles.js.map
