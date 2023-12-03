export type ElementType<T> = T extends readonly (infer E)[] ? E : never;
export type FunctionParamsType<T> = T extends (...args: infer P) => unknown
  ? P
  : never;
