// extends 是否存在某个类型
// never 类型
// T[0] 获取类型

type First<T extends any[]> = T extends [] ? never : T[0];
