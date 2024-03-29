export interface Val<T, A extends any[] = []> {
  valueOf(...params: A): T;
  onChange?(value: T): void;
}
