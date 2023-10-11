import React from "react";
import Painting from "../../helpers/Painting.js";
import { BoxProps } from "../Box.js";

export const BoxWeb = (p: BoxProps) => {
  const style = Painting.style(p);
  const css = Painting.css(p);
  const extras: {
    [key: string]: unknown;
  } = {
    ref: p.reference,
  };

  const Element = `${p.element || "div"}` as keyof JSX.IntrinsicElements;

  return (
    <Element
      id={p.id}
      onClick={p.press}
      style={style}
      className={css}
      {...extras}
      {...p.native}
    >
      {p.children}
    </Element>
  );
};

export default BoxWeb;