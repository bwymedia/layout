import Parser from "../Parser.js";
import Styles from "../styles/BoxStyles.js";
class BoxPainting {
  static style(props) {
    const styles = Styles.parse(props);
    if (!props.style && !props.parse) {
      return styles.style;
    }
    if (!props.parse) {
      return {
        ...styles.style,
        ...props.style
      };
    }
    const parsed = Parser.parse(props.parse, props.pure);
    const calculated = {
      ...styles.style,
      ...parsed.style,
      ...props.style
    };
    if (!Object.keys(calculated)?.length) {
      return void 0;
    }
    return calculated;
  }
  static css(props) {
    if (!props.parse && props.css) {
      return props.css;
    }
    const parsed = Parser.parse(props.parse, props.pure);
    if (!parsed.css && !props.css) {
      return void 0;
    }
    return `${parsed.css ? `${parsed.css} ` : ""}${props.css}`.trim();
  }
}
var BoxPainting_default = BoxPainting;
export {
  BoxPainting,
  BoxPainting_default as default
};
//# sourceMappingURL=BoxPainting.js.map
