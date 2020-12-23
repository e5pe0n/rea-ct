type Value<T> = T[keyof T]
type Partial<T> = { [K in keyof T]?: T[K] };
type Required<T> = { [K in keyof T]: T[K] };
type Readonly<T> = { readonly [K in keyof T]: T[K] };