// in 枚举数组
// as const 将数据定义为 readonly 类型

type TupleToObject<T extends readonly (string | number | symbol)[]> = {
  [P in T[number]]: P;
};

const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const;

type result = TupleToObject<typeof tuple>;
