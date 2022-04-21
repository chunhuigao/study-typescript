type If<C extends boolean, T, F> = C extends true ? T : F;

type B = If<false, 'a', 'b'>;
