import { BoxProps } from "../../index.js";
export declare class BoxStyles {
    static apply: (styles: {
        [key: string]: unknown;
    }, rule: string, value: unknown, defaults?: unknown) => {
        [key: string]: unknown;
    };
    static parse(props: BoxProps): {
        style: {
            [key: string]: unknown;
        };
    };
}
export default BoxStyles;
