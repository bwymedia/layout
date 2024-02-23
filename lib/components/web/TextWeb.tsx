import { TextProps } from "../Text.js";
import Painting from "../../helpers/painting/TextPainting.js";

export const TextWeb = (p: TextProps) => {
  const style = Painting.style(p);
  const css = Painting.css(p);
  const extras: {
    [key: string]: unknown;
  } = {
    ref: p.reference,
  };

  const Element = `${
    p.element ? p.element : p.to ? "a" : "span"
  }` as keyof JSX.IntrinsicElements;

  return (
    <Element
      id={p.id}
      onClick={p.press}
      style={style}
      className={css}
      target={p.target}
      href={p.to}
      {...extras}
      {...p.native}
    >
      {p.children}
    </Element>
  );
};

export default TextWeb;
