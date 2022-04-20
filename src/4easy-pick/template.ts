// extends 是否存在在某个类型中
// keyof  类型映射为所有成员的联合类型
// in 枚举类型

type MyPick<T, K extends keyof T> = {
  [P in K]: T[P];
};
