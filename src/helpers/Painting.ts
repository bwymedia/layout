import { BoxProps } from "../index.js";
import Parser from "./Parser.js";
import Styles from "./Styles.js";

export class Painting {
  static style(props: BoxProps) {
    const styles = Styles.parse(props);
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
    const parsed = Parser.parse(props.parse, props.pure);

    if (!parsed.css && !props.css) {
      return undefined;
    }

    return `${parsed.css} ${props.css}`.trim();
  }
}

export default Painting;
