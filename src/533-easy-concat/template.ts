// 合并，使用...展开符
// unknown 未知类型

type Concat<T extends unknown[], U extends unknown[]> = [...T, ...U];
