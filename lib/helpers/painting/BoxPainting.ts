import { BoxProps } from "../../index.js";
import Parser from "../Parser.js";
import Styles from "../styles/BoxStyles.js";

export class BoxPainting {
  static style(props: BoxProps) {
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

  static css(props: BoxProps) {
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

export default BoxPainting;
