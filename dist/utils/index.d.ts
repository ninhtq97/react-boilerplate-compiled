export { default as api } from './api';
export * from './array';
export * from './date';
export * from './error';
export * from './storage';
export * from './string';
export declare const delay: (ms: number) => Promise<unknown>;
export declare const excludeEmptyValue: <T extends {}>(obj: T) => T;
export declare const recursiveRoutes: (routes: Record<string, any>, parentPath?: string) => Record<string, any>;
