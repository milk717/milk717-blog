export type ElementType<T> = T extends readonly (infer E)[] ? E : never;
