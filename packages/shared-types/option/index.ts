// Option Type
export type Some<T> = {
  tag: "Some";
  value: T;
};

export type None = {
  tag: "None";
};

export const HasSome = <T>(value: T): Option<T> => {
  return { tag: "Some", value: value };
};

export const HasNone = (): None => {
  return { tag: "None" };
};
export type Option<T> = Some<T> | None;
