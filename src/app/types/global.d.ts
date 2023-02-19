declare module '*.scss' {
    type IClassNames = Record<string, string>
    const classNames: IClassNames
    export = classNames
}

declare module '*.svg';
declare module '*.jpg';
declare module '*.jpeg';

declare const __IS_DEV__: boolean

declare module 'react-dom/client';
