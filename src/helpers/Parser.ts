import Properties from "./Properties.js";

export class Parser {
  static parse(parse: string = "", pure?: boolean) {
    const groups = parse.split(" ");
    const css: string[] = [];
    const style: {
      [key: string]: unknown;
    } = {};

    groups.forEach((group) => {
      const values = group.split(":");

      if (values.length !== 2) {
        return;
      }

      const key = values[0] as string;
      const value = values[1] as string;

      if (
        Properties?.[key] &&
        (Properties?.[key]?.shorthand?.[value] ||
          Properties?.[key]?.options?.includes(value))
      ) {
        if (pure) {
          style[Properties?.[key]?.jsx as string] = this.numeric(value)
            ? Number(value)
            : value;
        } else {
          css.push(group);
        }
      } else if (Properties?.[key]) {
        style[Properties?.[key]?.jsx as string] = this.numeric(value)
          ? Number(value)
          : value;
      } else {
        style[key] = this.numeric(value) ? Number(value) : value;
      }
    });

    return {
      style,
      css: css?.length ? css?.join(" ") : undefined,
    };
  }

  static numeric = (value: string): boolean => {
    return !isNaN(Number(value));
  };
}

export default Parser;
