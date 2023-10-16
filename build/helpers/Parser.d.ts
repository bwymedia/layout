export declare class Parser {
    static parse(parse?: string, pure?: boolean): {
        style: {
            [key: string]: unknown;
        };
        css: string | undefined;
    };
    static numeric: (value: string) => boolean;
}
export default Parser;
