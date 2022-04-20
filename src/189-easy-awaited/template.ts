// unknown 不确定一个类型是什么类型
//

type MyAwaited<T extends Promise<unknown>> = T extends Promise<infer X>
  ? X extends Promise<unknown>
    ? MyAwaited<X>
    : X
  : never;

// type MyAwaited<T extends Promise<unknown>> = T extends Promise<infer X> ? (X extends Promise<unknown> ? MyAwaited<X> : X) : never
