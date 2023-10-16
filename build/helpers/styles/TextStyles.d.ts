import { TextProps } from "../../index.js";
export declare class TextStyles {
    static apply: (styles: {
        [key: string]: unknown;
    }, rule: string, value: unknown, defaults?: unknown) => {
        [key: string]: unknown;
    };
    static parse(props: TextProps): {
        style: {
            [key: string]: unknown;
        };
    };
}
export default TextStyles;
