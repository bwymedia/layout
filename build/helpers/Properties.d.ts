export interface LayoutProperties {
    [key: string]: {
        jsx: string;
        css: string;
        options?: string[];
        shorthand?: {
            [key: string]: string;
        };
        suffix?: string;
    };
}
export declare const Properties: LayoutProperties;
export default Properties;
