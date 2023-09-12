export * from "./core";
export * from "./content";
export * from "./networking";
export * from "./UI";
export * from "./tracker";
export * from "./directory";
export * from "./page";

export type Only<T, U> = {
  [P in keyof T]: T[P];
} & {
  [P in keyof U]?: never;
};

export type Either<T, U> = Only<T, U> | Only<U, T>;

export const Generate = <T>(v: T) => v;
