export const isOverlap = (s1: number, e1: number, s2: number, e2: number) =>
  s1 <= e2 && e1 >= s2;
