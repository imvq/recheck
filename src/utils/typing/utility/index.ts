export type Nullable<T> = T | null;

export type Optional<T> = T | undefined;

export type Maybe<T> = Nullable<T> | Optional<T>;

export interface Setter<TValue> {
  (newValue: TValue): void;
}
