import { BoxProps } from "../index.js";

export class Styles {
  static apply = (
    styles: {
      [key: string]: unknown;
    },
    rule: string,
    value: unknown,
    defaults: unknown = null,
  ) => {
    if (value) {
      styles[rule] = value;
    } else {
      if (defaults) {
        styles[rule] = defaults;
      }
    }
    return styles;
  };

  static parse(props: BoxProps) {
    let _: {
      [key: string]: unknown;
    } = {};

    _ = this.apply(_, "height", props.height);
    _ = this.apply(_, "width", props.width);
    _ = this.apply(_, "opacity", props.opacity);
    _ = this.apply(_, "over", props.overflow);
    _ = this.apply(_, "display", props.display);
    _ = this.apply(_, "border", props.border);
    _ = this.apply(_, "position", props.position);
    _ = this.apply(_, "cursor", props.press ? "pointer" : undefined);
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
      props.padding || props.mode === "padding" ? props.top : undefined,
    );
    _ = this.apply(
      _,
      "paddingLeft",
      props.padding || props.mode === "padding" ? props.left : undefined,
    );
    _ = this.apply(
      _,
      "paddingBottom",
      props.padding || props.mode === "padding" ? props.bottom : undefined,
    );
    _ = this.apply(
      _,
      "paddingRight",
      props.padding || props.mode === "padding" ? props.right : undefined,
    );
    _ = this.apply(
      _,
      "marginTop",
      props.margin || props.mode === "margin" ? props.top : undefined,
    );
    _ = this.apply(
      _,
      "marginLeft",
      props.margin || props.mode === "margin" ? props.left : undefined,
    );
    _ = this.apply(
      _,
      "marginBottom",
      props.margin || props.mode === "margin" ? props.bottom : undefined,
    );
    _ = this.apply(
      _,
      "marginRight",
      props.margin || props.mode === "margin" ? props.right : undefined,
    );
    _ = this.apply(_, "top", props.mode === "position" ? props.top : undefined);
    _ = this.apply(
      _,
      "left",
      props.mode === "position" ? props.left : undefined,
    );
    _ = this.apply(
      _,
      "bottom",
      props.mode === "position" ? props.bottom : undefined,
    );
    _ = this.apply(
      _,
      "right",
      props.mode === "position" ? props.right : undefined,
    );
    _ = this.apply(_, "boxShadow", props.shadow);
    _ = this.apply(
      _,
      "boxSizing",
      props.top || props.left || props.right || props.bottom
        ? "border-box"
        : undefined,
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

export default Styles;
