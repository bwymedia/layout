import Properties from "./Properties.js";
class Parser {
  static parse(parse = "", pure) {
    const groups = parse.split(" ");
    const css = [];
    const style = {};
    groups.forEach((group) => {
      const values = group.split(":");
      if (values.length !== 2) {
        return;
      }
      const key = values[0];
      const value = values[1];
      if (Properties?.[key] && (Properties?.[key]?.shorthand?.[value] || Properties?.[key]?.options?.includes(value))) {
        if (pure) {
          style[Properties?.[key]?.jsx] = this.numeric(value) ? Number(value) : value;
        } else {
          css.push(group);
        }
      } else if (Properties?.[key]) {
        style[Properties?.[key]?.jsx] = this.numeric(value) ? Number(value) : value;
      } else {
        style[key] = this.numeric(value) ? Number(value) : value;
      }
    });
    return {
      style,
      css: css?.length ? css?.join(" ") : void 0
    };
  }
  static numeric = (value) => {
    return !isNaN(Number(value));
  };
}
var Parser_default = Parser;
export {
  Parser,
  Parser_default as default
};
//# sourceMappingURL=Parser.js.map
