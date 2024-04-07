declare module "*.svg" {
    const content: any;
    export default content;
}

declare module "*.ttf" {
    const content: any;
    export default content;
}

declare module "*.css" {
    const content: [string, string][];
    export default content;
}

declare module "*.html" {
    const content: any;
    export default content;
}