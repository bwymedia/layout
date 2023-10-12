import { TextProps } from "../../index.js";
import Parser from "../Parser.js";
import Styles from "../styles/TextStyles.js";

export class TextPainting {
  static style(props: TextProps) {
    const styles = Styles.parse(props);

    if (!props.style && !props.parse) {
      return styles.style;
    }

    if (!props.parse) {
      return {
        ...styles.style,
        ...props.style,
      };
    }

    const parsed = Parser.parse(props.parse, props.pure);

    const calculated = {
      ...styles.style,
      ...parsed.style,
      ...props.style,
    };

    if (!Object.keys(calculated)?.length) {
      return undefined;
    }

    return calculated;
  }

  static css(props: TextProps) {
    if (!props.parse && props.css) {
      return props.css;
    }

    const parsed = Parser.parse(props.parse, props.pure);

    if (!parsed.css && !props.css) {
      return undefined;
    }

    return `${parsed.css ? `${parsed.css} ` : ""}${props.css}`.trim();
  }
}

export default TextPainting;
