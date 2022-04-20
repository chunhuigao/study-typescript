// keyof  类型映射为所有成员的联合类型
// in 枚举类型

type MyReadonly<T> = {
  readonly [P in keyof T]: T[P];
};

// 示例
interface Todo {
  title: string;
  description: string;
}

const todo: MyReadonly<Todo> = {
  title: 'Hey',
  description: 'foobar',
};
