type MyExclude<T, U> = T extends U ? never : T;

type t = 'a' | 'c' | 'd';
type k = 'a';
type sss = MyExclude<t, k>;
